import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const withExcept = f => v => {
  if (v.tag === "Right") { return Data$dEither.$Either("Right", v._1); }
  if (v.tag === "Left") { return Data$dEither.$Either("Left", f(v._1)); }
  $runtime.fail();
};
const runExcept = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Control$dMonad$dExcept$dTrans.runExceptT);
const mapExcept = f => Control$dSemigroupoid.composeImpl(Data$dIdentity.Identity)(Control$dSemigroupoid.composeImpl(f)(Unsafe$dCoerce.unsafeCoerce));
export {mapExcept, runExcept, withExcept};
