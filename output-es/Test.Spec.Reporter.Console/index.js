import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Test$dSpec$dReporter$dBase from "../Test.Spec.Reporter.Base/index.js";
import * as Test$dSpec$dStyle from "../Test.Spec.Style/index.js";
import * as Test$dSpec$dSummary from "../Test.Spec.Summary/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $PrintAction = (tag, _1, _2) => ({tag, _1, _2});
const eqArray = /* #__PURE__ */ (() => ({eq: Data$dEq.eqArrayImpl(Test$dSpec$dTree.eqPathItem.eq)}))();
const monadWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity);
const monadStateStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(monadWriterT);
const monadWriterStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadWriterStateT(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity));
const applicativeStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.applicativeStateT(monadWriterT);
const bindStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.bindStateT(monadWriterT);
const $$get = /* #__PURE__ */ (() => Control$dMonad$dState$dTrans.monadStateStateT(monadWriterT).state(s => Data$dTuple.$Tuple(s, s)))();
const PrintTest = value0 => value1 => $PrintAction("PrintTest", value0, value1);
const PrintPending = value0 => $PrintAction("PrintPending", value0);
const printSummary = dictMonadWriter => {
  const Monad1 = dictMonadWriter.MonadTell1().Monad1();
  const Applicative0 = Monad1.Applicative0();
  const Bind1 = Monad1.Bind1();
  return Control$dSemigroupoid.composeImpl(v => {
    const $0 = v.failed;
    const $1 = v.passed;
    const $2 = v.pending;
    return Bind1.bind(dictMonadWriter.MonadTell1().tell("\n"))(() => Bind1.bind(dictMonadWriter.MonadTell1().tell(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.bold)("Summary") + "\n"))(() => Bind1.bind((() => {
      const total = $1 + $0 | 0;
      return dictMonadWriter.MonadTell1().tell(Test$dSpec$dStyle.styled($0 > 0 ? Test$dSpec$dStyle.red : Test$dSpec$dStyle.dim)(Data$dShow.showIntImpl($1) + "/" + Data$dShow.showIntImpl(total) + " " + (total === 1
        ? "test"
        : "tests") + " passed") + "\n");
    })())(() => Bind1.bind($2 > 0
      ? dictMonadWriter.MonadTell1().tell(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.yellow)(Data$dShow.showIntImpl($2) + " " + ($2 === 1 ? "test" : "tests") + " pending") + "\n")
      : Applicative0.pure())(() => dictMonadWriter.MonadTell1().tell("\n")))));
  })(Test$dSpec$dSummary.summarize);
};
const print = dictMonadState => {
  const Monad0 = dictMonadState.Monad0();
  const Bind1 = Monad0.Bind1();
  const get1 = dictMonadState.state(s => Data$dTuple.$Tuple(s, s));
  const Applicative0 = Monad0.Applicative0();
  return dictMonadWriter => path => a => Bind1.bind(get1)(s => Bind1.bind(s.lastPrintedSuitePath.tag === "Just" && eqArray.eq(s.lastPrintedSuitePath._1)(path)
    ? Applicative0.pure()
    : Bind1.bind(dictMonadWriter.MonadTell1().tell(Test$dSpec$dStyle.styled([...Test$dSpec$dStyle.bold, ...Test$dSpec$dStyle.magenta])(Data$dFoldable.foldlArray(v => v1 => {
        if (v.init) { return {init: false, acc: v1}; }
        return {init: false, acc: v.acc + " » " + v1};
      })({init: true, acc: ""})(Data$dArray.mapMaybe(Control$dSemigroupoid.composeImpl(v => v.name)(Unsafe$dCoerce.unsafeCoerce))(path)).acc) + "\n"))(() => {
        const $0 = {...s, lastPrintedSuitePath: Data$dMaybe.$Maybe("Just", path)};
        return dictMonadState.state(v => Data$dTuple.$Tuple(undefined, $0));
      }))(() => {
    if (a.tag === "PrintTest") {
      if (a._2.tag === "Success") {
        return dictMonadWriter.MonadTell1().tell("  " + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.green)("✓︎ ") + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.dim)(a._1) + "\n");
      }
      if (a._2.tag === "Failure") {
        const $0 = a._2._1;
        return Bind1.bind(dictMonadWriter.MonadTell1().tell("  " + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.red)("✗ " + a._1 + ":") + "\n"))(() => Bind1.bind(dictMonadWriter.MonadTell1().tell("\n"))(() => dictMonadWriter.MonadTell1().tell("  " + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.red)(Effect$dException.message($0)) + "\n")));
      }
      $runtime.fail();
    }
    if (a.tag === "PrintPending") { return dictMonadWriter.MonadTell1().tell("  " + Test$dSpec$dStyle.styled(Test$dSpec$dStyle.cyan)("~ " + a._1) + "\n"); }
    $runtime.fail();
  }));
};
const initialState = {runningItems: Data$dMap$dInternal.Leaf, lastPrintedSuitePath: Data$dMaybe.Nothing};
const consoleReporter = /* #__PURE__ */ Test$dSpec$dReporter$dBase.defaultReporter(initialState)(/* #__PURE__ */ Test$dSpec$dReporter$dBase.defaultUpdate({
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
      return applicativeStateT.pure();
    };
  },
  update: v => {
    if (v.tag === "Pending") {
      const $0 = v._1._2;
      const $1 = v._1._1;
      return bindStateT.bind($$get)(v1 => {
        const $2 = print(monadStateStateT)(monadWriterStateT)($1)($PrintAction("PrintPending", $0));
        if (v1.runningItems.tag === "Leaf") { return $2; }
        return applicativeStateT.pure();
      });
    }
    if (v.tag === "End") { return printSummary(monadWriterStateT)(v._1); }
    return applicativeStateT.pure();
  }
}));
export {
  $PrintAction,
  PrintPending,
  PrintTest,
  applicativeStateT,
  bindStateT,
  consoleReporter,
  eqArray,
  $$get as get,
  initialState,
  monadStateStateT,
  monadWriterStateT,
  monadWriterT,
  print,
  printSummary
};
