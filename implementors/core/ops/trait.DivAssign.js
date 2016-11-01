(function() {var implementors = {};
implementors["either"] = [];implementors["void"] = [];implementors["libc"] = [];implementors["ndarray"] = ["impl&lt;'a,&nbsp;A,&nbsp;S,&nbsp;S2,&nbsp;D,&nbsp;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;&amp;'a <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S2,&nbsp;E&gt;&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;A&gt;, S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=A&gt;, S2: <a class='trait' href='ndarray/trait.Data.html' title='ndarray::Data'>Data</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a>, E: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>","impl&lt;A,&nbsp;S,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;A&gt; for <a class='struct' href='ndarray/struct.ArrayBase.html' title='ndarray::ArrayBase'>ArrayBase</a>&lt;S,&nbsp;D&gt; <span class='where'>where A: <a class='trait' href='ndarray/trait.ScalarOperand.html' title='ndarray::ScalarOperand'>ScalarOperand</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;A&gt;, S: <a class='trait' href='ndarray/trait.DataMut.html' title='ndarray::DataMut'>DataMut</a>&lt;Elem=A&gt;, D: <a class='trait' href='ndarray/trait.Dimension.html' title='ndarray::Dimension'>Dimension</a></span>",];implementors["ordered_float"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a> for <a class='struct' href='ordered_float/struct.NotNaN.html' title='ordered_float::NotNaN'>NotNaN</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a> for <a class='struct' href='ordered_float/struct.NotNaN.html' title='ordered_float::NotNaN'>NotNaN</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt; for <a class='struct' href='ordered_float/struct.NotNaN.html' title='ordered_float::NotNaN'>NotNaN</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt; for <a class='struct' href='ordered_float/struct.NotNaN.html' title='ordered_float::NotNaN'>NotNaN</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f32.html'>f32</a>&gt;",];implementors["rulinalg"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;T&gt; for <a class='struct' href='rulinalg/matrix/struct.Matrix.html' title='rulinalg::matrix::Matrix'>Matrix</a>&lt;T&gt;","impl&lt;'a,&nbsp;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;&amp;'a T&gt; for <a class='struct' href='rulinalg/matrix/struct.Matrix.html' title='rulinalg::matrix::Matrix'>Matrix</a>&lt;T&gt;","impl&lt;'a,&nbsp;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;T&gt; for <a class='struct' href='rulinalg/matrix/struct.MatrixSliceMut.html' title='rulinalg::matrix::MatrixSliceMut'>MatrixSliceMut</a>&lt;'a,&nbsp;T&gt;","impl&lt;'a,&nbsp;'b,&nbsp;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;&amp;'b T&gt; for <a class='struct' href='rulinalg/matrix/struct.MatrixSliceMut.html' title='rulinalg::matrix::MatrixSliceMut'>MatrixSliceMut</a>&lt;'a,&nbsp;T&gt;","impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;T&gt; for <a class='struct' href='rulinalg/vector/struct.Vector.html' title='rulinalg::vector::Vector'>Vector</a>&lt;T&gt;","impl&lt;'a,&nbsp;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;&amp;'a T&gt; for <a class='struct' href='rulinalg/vector/struct.Vector.html' title='rulinalg::vector::Vector'>Vector</a>&lt;T&gt;",];implementors["rusty_machine"] = ["impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;T&gt; for <a class='struct' href='rusty_machine/linalg/struct.Matrix.html' title='rusty_machine::linalg::Matrix'>Matrix</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;</span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;&amp;'a T&gt; for <a class='struct' href='rusty_machine/linalg/struct.Matrix.html' title='rusty_machine::linalg::Matrix'>Matrix</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;</span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;T&gt; for <a class='struct' href='rusty_machine/linalg/struct.MatrixSliceMut.html' title='rusty_machine::linalg::MatrixSliceMut'>MatrixSliceMut</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;</span>","impl&lt;'a,&nbsp;'b,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;&amp;'b T&gt; for <a class='struct' href='rusty_machine/linalg/struct.MatrixSliceMut.html' title='rusty_machine::linalg::MatrixSliceMut'>MatrixSliceMut</a>&lt;'a,&nbsp;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;T&gt; for <a class='struct' href='rusty_machine/linalg/struct.Vector.html' title='rusty_machine::linalg::Vector'>Vector</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;</span>","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.DivAssign.html' title='core::ops::DivAssign'>DivAssign</a>&lt;&amp;'a T&gt; for <a class='struct' href='rusty_machine/linalg/struct.Vector.html' title='rusty_machine::linalg::Vector'>Vector</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Div.html' title='core::ops::Div'>Div</a>&lt;T,&nbsp;Output=T&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
