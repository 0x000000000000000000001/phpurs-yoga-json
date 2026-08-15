// | This module defines the `Reader` monad.
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const withReader = Control$dMonad$dReader$dTrans.withReaderT;
const runReader = v => Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(v);
const mapReader = f => Control$dMonad$dReader$dTrans.mapReaderT(Control$dSemigroupoid.composeImpl(Data$dIdentity.Identity)(Control$dSemigroupoid.composeImpl(f)(Unsafe$dCoerce.unsafeCoerce)));
export {mapReader, runReader, withReader};
