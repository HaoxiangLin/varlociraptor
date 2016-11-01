(function() {var implementors = {};
implementors["either"] = [];implementors["void"] = [];implementors["libc"] = [];implementors["rust_htslib"] = ["impl&lt;'a,&nbsp;'b,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'b <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;&gt; for &amp;'a <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>",];implementors["num_bigint"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a,&nbsp;'b&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'b <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>",];implementors["ndarray"] = ["impl&lt;A,&nbsp;S,&nbsp;S2,&nbsp;D,&nbsp;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2,&nbsp;E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;A,&nbsp;Output=A&gt;, S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=A&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;A,&nbsp;S,&nbsp;S2,&nbsp;D,&nbsp;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2,&nbsp;E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;A,&nbsp;Output=A&gt;, S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=A&gt;, S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;'b,&nbsp;A,&nbsp;S,&nbsp;S2,&nbsp;D,&nbsp;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2,&nbsp;E&gt;&gt; for &amp;'b <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;A,&nbsp;Output=A&gt;, S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;A,&nbsp;S,&nbsp;D,&nbsp;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;B&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;B,&nbsp;Output=A&gt;, S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=A&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, B: <a class='trait' href='ndarray/trait.ScalarOperand.html' title='ndarray::ScalarOperand'>ScalarOperand</a></span>","impl&lt;'a,&nbsp;A,&nbsp;S,&nbsp;D,&nbsp;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;B&gt; for &amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;B,&nbsp;Output=A&gt;, S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, B: <a class='trait' href='ndarray/trait.ScalarOperand.html' title='ndarray::ScalarOperand'>ScalarOperand</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i8.html'>i8</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i16.html'>i16</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i32.html'>i32</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u32.html'>u32</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.i64.html'>i64</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u64.html'>u64</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.DataOwned.html' title='ndarray::DataOwned'>DataOwned</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; + <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;'a,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt;&gt; for <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a> <span class='where'>where S: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>",];implementors["num"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>&gt; for <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>","impl&lt;'a,&nbsp;'b&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'b <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'a <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>&gt; for <a class='struct' href='num/struct.BigUint.html' title='num::BigUint'>BigUint</a>",];implementors["bio"] = ["impl&lt;'a,&nbsp;'b,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;&amp;'b <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;&gt; for &amp;'a <a class='struct' href='https://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.BitXor.html' title='core::ops::BitXor'>BitXor</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt;&gt; for <a class='struct' href='https://doc.rust-lang.org/nightly/collections/enum_set/struct.EnumSet.html' title='collections::enum_set::EnumSet'>EnumSet</a>&lt;E&gt; <span class='where'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/collections/enum_set/trait.CLike.html' title='collections::enum_set::CLike'>CLike</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
