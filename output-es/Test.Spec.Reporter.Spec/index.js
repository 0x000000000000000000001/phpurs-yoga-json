import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Test$dSpec$dReporter$dBase from "../Test.Spec.Reporter.Base/index.js";
import * as Test$dSpec$dStyle from "../Test.Spec.Style/index.js";
const $PrintAction = (tag, _1, _2) => ({tag, _1, _2});
const monadWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity);
const monadStateStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(monadWriterT);
const monadWriterStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadWriterStateT(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity));
const applicativeStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.applicativeStateT(monadWriterT);
const bindStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.bindStateT(monadWriterT);
const $$get = /* #__PURE__ */ (() => Control$dMonad$dState$dTrans.monadStateStateT(monadWriterT).state(s => Data$dTuple.$Tuple(s, s)))();
const PrintSuite = value0 => $PrintAction("PrintSuite", value0);
const PrintTest = value0 => value1 => $PrintAction("PrintTest", value0, value1);
const PrintPending = value0 => $PrintAction("PrintPending", value0);
const print = dictMonadState => {
  const Bind1 = dictMonadState.Monad0().Bind1();
  return dictMonadWriter => path => {
    const indent = Control$dSemigroupoid.composeImpl(Test$dSpec$dStyle.indent)(Data$dArray.length);
    return v => {
      if (v.tag === "PrintSuite") { return dictMonadWriter.MonadTell1().tell(indent(path) + v._1 + "\n"); }
      if (v.tag === "PrintTest") {
        if (v._2.tag === "Success") {
          return dictMonadWriter.MonadTell1().tell(indent(path) + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.green)("✓︎ ") + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.dim)(v._1) + (v._2._1 === "Fast"
            ? ""
            : Test$dSpec$dStyle.styled((() => {
                if (v._2._1 === "Fast") { return Test$dSpec$dStyle.dim; }
                if (v._2._1 === "Medium") { return Test$dSpec$dStyle.yellow; }
                if (v._2._1 === "Slow") { return Test$dSpec$dStyle.red; }
                $runtime.fail();
              })())(" (" + Data$dShow.showIntImpl(Data$dInt.round(v._2._2)) + "ms)")) + "\n");
        }
        if (v._2.tag === "Failure") {
          const $0 = v._1;
          return Bind1.bind(dictMonadState.state(s => {
            const s$p = {...s, numFailures: s.numFailures + 1 | 0};
            return Data$dTuple.$Tuple(s$p, s$p);
          }))(v1 => dictMonadWriter.MonadTell1().tell(indent(path) + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.red)(Data$dShow.showIntImpl(v1.numFailures) + ") " + $0) + "\n"));
        }
        $runtime.fail();
      }
      if (v.tag === "PrintPending") { return dictMonadWriter.MonadTell1().tell(indent(path) + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.cyan)("- " + v._1) + "\n"); }
      $runtime.fail();
    };
  };
};
const initialState = {runningItems: Data$dMap$dInternal.Leaf, numFailures: 0};
const specReporter = /* #__PURE__ */ Test$dSpec$dReporter$dBase.defaultReporter(initialState)(/* #__PURE__ */ Test$dSpec$dReporter$dBase.defaultUpdate({
  getRunningItems: v => v.runningItems,
  putRunningItems: b => a => ({...a, runningItems: b}),
  printFinishedItem: v => {
    const $0 = v._2;
    const $1 = v._1;
    return v1 => {
      if (v1.tag === "RunningTest") {
        if (v1._1.tag === "Just") { return print(monadStateStateT)(monadWriterStateT)($1)($PrintAction("PrintTest", $0, v1._1._1)); }
        return applicativeStateT.pure();
      }
      if (v1.tag === "RunningPending") { return print(monadStateStateT)(monadWriterStateT)($1)($PrintAction("PrintPending", $0)); }
      if (v1.tag === "RunningSuite" && v1._1) { return print(monadStateStateT)(monadWriterStateT)($1)($PrintAction("PrintSuite", $0)); }
      return applicativeStateT.pure();
    };
  },
  update: v => {
    if (v.tag === "Suite") {
      if (v._1 === "Sequential") { return print(monadStateStateT)(monadWriterStateT)(v._2._1)($PrintAction("PrintSuite", v._2._2)); }
      return applicativeStateT.pure();
    }
    if (v.tag === "Pending") {
      const $0 = v._1._2;
      const $1 = v._1._1;
      return bindStateT.bind($$get)(v1 => {
        const $2 = print(monadStateStateT)(monadWriterStateT)($1)($PrintAction("PrintPending", $0));
        if (v1.runningItems.tag === "Leaf") { return $2; }
        return applicativeStateT.pure();
      });
    }
    if (v.tag === "End") { return Test$dSpec$dReporter$dBase.defaultSummary(monadWriterStateT)(v._1); }
    return applicativeStateT.pure();
  }
}));
export {
  $PrintAction,
  PrintPending,
  PrintSuite,
  PrintTest,
  applicativeStateT,
  bindStateT,
  $$get as get,
  initialState,
  monadStateStateT,
  monadWriterStateT,
  monadWriterT,
  print,
  specReporter
};
