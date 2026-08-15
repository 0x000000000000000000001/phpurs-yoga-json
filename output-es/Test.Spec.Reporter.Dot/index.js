import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Data$dEuclideanRing from "../Data.EuclideanRing/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Test$dSpec$dReporter$dBase from "../Test.Spec.Reporter.Base/index.js";
import * as Test$dSpec$dStyle from "../Test.Spec.Style/index.js";
const monadWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity);
const bindStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.bindStateT(monadWriterT);
const monadStateStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(monadWriterT);
const applicativeStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.applicativeStateT(monadWriterT);
const monadWriterStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadWriterStateT(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity));
const monadTellStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadTellStateT(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadTellWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity));
const dotReporter = v => {
  const $0 = v.width;
  const wrap = action => bindStateT.bind(monadStateStateT.state(s => {
    const s$p = s + 1 | 0;
    return Data$dTuple.$Tuple(s$p, s$p);
  }))(n => bindStateT.bind((() => {
    const $1 = monadWriterStateT.MonadTell1().tell("\n");
    if (Data$dEuclideanRing.intMod(n)($0) === 0) { return $1; }
    return applicativeStateT.pure();
  })())(() => monadTellStateT.tell(action)));
  return Test$dSpec$dReporter$dBase.defaultReporter(-1)(v1 => {
    if (v1.tag === "TestEnd") {
      if (v1._2.tag === "Success") {
        return wrap(Test$dSpec$dStyle.styled((() => {
          if (v1._2._1 === "Fast") { return Test$dSpec$dStyle.dim; }
          if (v1._2._1 === "Medium") { return Test$dSpec$dStyle.yellow; }
          if (v1._2._1 === "Slow") { return Test$dSpec$dStyle.red; }
          $runtime.fail();
        })())("."));
      }
      if (v1._2.tag === "Failure") { return wrap(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.red)("!")); }
      return applicativeStateT.pure();
    }
    if (v1.tag === "Pending") { return wrap(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.dim)(",")); }
    if (v1.tag === "End") { return monadWriterStateT.MonadTell1().tell("\n"); }
    return applicativeStateT.pure();
  });
};
export {applicativeStateT, bindStateT, dotReporter, monadStateStateT, monadTellStateT, monadWriterStateT, monadWriterT};
