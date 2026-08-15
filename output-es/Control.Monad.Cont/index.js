// | This module defines the `Cont`inuation monad.
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const withCont = f => {
  const $0 = Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.semigroupoidFn.compose(Data$dIdentity.Identity))(Control$dSemigroupoid.composeImpl(f)(Control$dSemigroupoid.semigroupoidFn.compose(Unsafe$dCoerce.unsafeCoerce)));
  return v => k => v($0(k));
};
const runCont = cc => k => cc(Control$dSemigroupoid.composeImpl(Data$dIdentity.Identity)(k));
const mapCont = f => {
  const $0 = Control$dSemigroupoid.composeImpl(Data$dIdentity.Identity)(Control$dSemigroupoid.composeImpl(f)(Unsafe$dCoerce.unsafeCoerce));
  return v => k => $0(v(k));
};
const cont = f => c => f(Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(c));
export {cont, mapCont, runCont, withCont};
