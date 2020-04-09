use std::cmp;
use std::fmt::Debug;

use anyhow::Result;
use bio::stats::{LogProb, PHREDProb, Prob};
use bio_types::strand::Strand;
use rust_htslib::bam;
use rust_htslib::bam::record::CigarStringView;
use bio::pattern_matching::myers::Myers;
use bio::stats::pairhmm;

use crate::estimation::alignment_properties::AlignmentProperties;
use crate::model::Variant;
use crate::variants::realignable::edit_distance::EditDistanceHit;

/// Width of band around alignment with optimal edit distance.
pub const EDIT_BAND: usize = 2;

lazy_static! {
    static ref PROB_CONFUSION: LogProb = LogProb::from(Prob(0.3333));
}


/// Calculate probability of read_base given ref_base.
pub fn prob_read_base(read_base: u8, ref_base: u8, base_qual: u8) -> LogProb {
    let prob_miscall = prob_read_base_miscall(base_qual);

    if read_base.to_ascii_uppercase() == ref_base.to_ascii_uppercase() {
        prob_miscall.ln_one_minus_exp()
    } else {
        // TODO replace the second term with technology specific confusion matrix
        prob_miscall + *PROB_CONFUSION
    }
}

/// unpack miscall probability of read_base.
pub fn prob_read_base_miscall(base_qual: u8) -> LogProb {
    LogProb::from(PHREDProb::from((base_qual) as f64))
}

pub trait RefBaseEmission: Debug {
    fn ref_base(&self, i: usize) -> u8;

    fn ref_offset(&self) -> usize;

    fn ref_end(&self) -> usize;

    fn set_ref_offset(&mut self, value: usize);

    fn set_ref_end(&mut self, value: usize);

    fn read_emission(&self) -> &ReadEmission;

    fn shrink_to_hit(&mut self, hit: &EditDistanceHit) {
        self.set_ref_end(cmp::min(
            self.ref_offset() + hit.end() + EDIT_BAND,
            self.ref_end(),
        ));
        self.set_ref_offset(self.ref_offset() + hit.start().saturating_sub(EDIT_BAND));
    }
}

#[macro_export]
macro_rules! default_ref_base_emission {
    () => (
        fn ref_offset(&self) -> usize {
            self.ref_offset
        }

        fn ref_end(&self) -> usize {
            self.ref_end
        }

        fn set_ref_offset(&mut self, value: usize) {
            self.ref_offset = value;
        }

        fn set_ref_end(&mut self, value: usize) {
            self.ref_end = value;
        }

        fn read_emission(&self) -> &ReadEmission {
            self.read_emission
        }
    )
}

/// Gap parameters for PairHMM.
#[derive(Debug, Clone)]
pub struct IndelGapParams {
    pub prob_insertion_artifact: LogProb,
    pub prob_deletion_artifact: LogProb,
    pub prob_insertion_extend_artifact: LogProb,
    pub prob_deletion_extend_artifact: LogProb,
}

impl pairhmm::GapParameters for IndelGapParams {
    #[inline]
    fn prob_gap_x(&self) -> LogProb {
        self.prob_insertion_artifact
    }

    #[inline]
    fn prob_gap_y(&self) -> LogProb {
        self.prob_deletion_artifact
    }

    #[inline]
    fn prob_gap_x_extend(&self) -> LogProb {
        self.prob_insertion_extend_artifact
    }

    #[inline]
    fn prob_gap_y_extend(&self) -> LogProb {
        self.prob_deletion_extend_artifact
    }
}

impl pairhmm::StartEndGapParameters for IndelGapParams {
    /// Semiglobal alignment: return true.
    #[inline]
    fn free_start_gap_x(&self) -> bool {
        true
    }

    /// Semiglobal alignment: return true.
    #[inline]
    fn free_end_gap_x(&self) -> bool {
        true
    }

    /// Semiglobal alignment: return 1.0.
    #[inline]
    fn prob_start_gap_x(&self, _: usize) -> LogProb {
        LogProb::ln_one()
    }
}

#[macro_export]
macro_rules! default_emission {
    () => {
        #[inline]
        fn prob_emit_xy(&self, i: usize, j: usize) -> bio::stats::pairhmm::XYEmission {
            let r = self.ref_base(i);
            self.read_emission.prob_match_mismatch(j, r)
        }

        #[inline]
        fn prob_emit_x(&self, _: usize) -> LogProb {
            LogProb::ln_one()
        }

        #[inline]
        fn prob_emit_y(&self, j: usize) -> LogProb {
            self.read_emission.prob_insertion(j)
        }

        #[inline]
        fn len_y(&self) -> usize {
            self.read_emission.read_end() - self.read_emission.read_offset()
        }
    }
}

#[derive(Debug, Getters)]
#[getset(get = "pub")]
pub struct ReadEmission<'a> {
    read_seq: &'a bam::record::Seq<'a>,
    any_miscall: Vec<LogProb>,
    no_miscall: Vec<LogProb>,
    read_offset: usize,
    read_end: usize,
}

impl<'a> ReadEmission<'a> {
    pub fn new(
        read_seq: &'a bam::record::Seq<'a>,
        qual: &[u8],
        read_offset: usize,
        read_end: usize,
    ) -> Self {
        let mut any_miscall = vec![LogProb::ln_zero(); read_end - read_offset];
        let mut no_miscall = any_miscall.clone();
        for (j, j_) in (read_offset..read_end).enumerate() {
            let prob_miscall = prob_read_base_miscall(qual[j_]);
            any_miscall[j] = prob_miscall;
            no_miscall[j] = prob_miscall.ln_one_minus_exp();
        }
        ReadEmission {
            read_seq,
            any_miscall,
            no_miscall,
            read_offset,
            read_end,
        }
    }

    fn particular_miscall(&self, j: usize) -> LogProb {
        self.any_miscall[j] + *PROB_CONFUSION
    }

    /// Calculate probability of read_base given ref_base.
    pub fn prob_match_mismatch(&self, j: usize, ref_base: u8) -> pairhmm::XYEmission {
        let read_base = self.read_seq[self.project_j(j)];

        if read_base.to_ascii_uppercase() == ref_base.to_ascii_uppercase() {
            pairhmm::XYEmission::Match(self.no_miscall[j])
        } else {
            // TODO replace the second term with technology specific confusion matrix
            pairhmm::XYEmission::Mismatch(self.particular_miscall(j))
        }
    }

    pub fn prob_insertion(&self, j: usize) -> LogProb {
        self.any_miscall[j]
    }

    #[inline]
    fn project_j(&self, j: usize) -> usize {
        j + self.read_offset
    }

    /// Calculate probability that none of the bases is miscalled.
    pub fn certainty_est(&self) -> LogProb {
        self.no_miscall.iter().sum()
    }
}

/// Emission parameters for PairHMM over reference allele.
#[derive(Debug)]
pub struct ReferenceEmissionParams<'a> {
    ref_seq: &'a [u8],
    ref_offset: usize,
    ref_end: usize,
    read_emission: &'a ReadEmission<'a>,
}

impl<'a> RefBaseEmission for ReferenceEmissionParams<'a> {
    #[inline]
    fn ref_base(&self, i: usize) -> u8 {
        self.ref_seq[i + self.ref_offset]
    }

    default_ref_base_emission!();
}

impl<'a> pairhmm::EmissionParameters for ReferenceEmissionParams<'a> {
    default_emission!();

    #[inline]
    fn len_x(&self) -> usize {
        self.ref_end - self.ref_offset
    }
}