// | This module defines the `Writer` monad.
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const writer = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dWriter$dTrans.WriterT)(Data$dIdentity.Identity);
const runWriter = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Control$dMonad$dWriter$dTrans.runWriterT);
const mapWriter = f => Control$dSemigroupoid.composeImpl(Data$dIdentity.Identity)(Control$dSemigroupoid.composeImpl(f)(Unsafe$dCoerce.unsafeCoerce));
const execWriter = m => runWriter(m)._2;
export {execWriter, mapWriter, runWriter, writer};
