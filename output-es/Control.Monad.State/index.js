// | This module defines the `State` monad.
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const withState = Control$dMonad$dState$dTrans.withStateT;
const runState = v => Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(v);
const mapState = f => Control$dMonad$dState$dTrans.mapStateT(Control$dSemigroupoid.composeImpl(Data$dIdentity.Identity)(Control$dSemigroupoid.composeImpl(f)(Unsafe$dCoerce.unsafeCoerce)));
const execState = v => s => v(s)._2;
const evalState = v => s => v(s)._1;
export {evalState, execState, mapState, runState, withState};
