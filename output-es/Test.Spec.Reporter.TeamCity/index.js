// | Team City reporter, also the one used for intellij
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Data$dString$dRegex$dUnsafe from "../Data.String.Regex.Unsafe/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Test$dSpec$dReporter$dBase from "../Test.Spec.Reporter.Base/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const tellLn = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dState$dTrans.monadWriterStateT(Control$dMonad$dWriter$dTrans.monadWriterWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity));
  return l => $0.MonadTell1().tell(l + "\n");
})();
const monadWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity);
const bindStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.bindStateT(monadWriterT);
const applicativeStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.applicativeStateT(monadWriterT);
const idFromPath = path => Data$dArray.intercalate1(Data$dMonoid.monoidString)(",")(Data$dFunctor.arrayMap(v => Data$dShow.showIntImpl(v.index) + ":" + (() => {
  if (v.name.tag === "Nothing") { return ""; }
  if (v.name.tag === "Just") { return v.name._1; }
  $runtime.fail();
})())(Data$dFunctor.arrayMap(Unsafe$dCoerce.unsafeCoerce)(path)));
const serviceMessage = v => (
  {
    name: v._2,
    nodeId: idFromPath(v._1),
    parentNodeId: (() => {
      const $0 = Test$dSpec$dTree.parentSuite(v._1);
      if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", idFromPath($0._1._1)); }
      return Data$dMaybe.Nothing;
    })()
  }
);
const escape = /* #__PURE__ */ Data$dString$dRegex.replace$p(/* #__PURE__ */ Data$dString$dRegex$dUnsafe.unsafeRegex("(?:[|\n\r'\\[\\]])")(Data$dString$dRegex$dFlags.global))(match => v => {
  if (match === "|") { return "||"; }
  if (match === "\n") { return "|n"; }
  if (match === "\r") { return "|r"; }
  if (match === "[") { return "|["; }
  if (match === "]") { return "|]"; }
  if (match === "'") { return "|'"; }
  return "";
});
const teamcity$p = rest => event => v => "##teamcity[" + event + " name='" + escape(v.name) + "' nodeId='" + escape(v.nodeId) + "' parentNodeId='" + escape((() => {
  if (v.parentNodeId.tag === "Nothing") { return "0"; }
  if (v.parentNodeId.tag === "Just") { return v.parentNodeId._1; }
  $runtime.fail();
})()) + "'" + rest + "]";
const teamcity = /* #__PURE__ */ teamcity$p("");
const testFailed = d => e => {
  const message = Effect$dException.message(e);
  if (Control$dSemigroupoid.composeImpl(Data$dMaybe.isJust)(Data$dString$dCodeUnits.indexOf("≠"))(message)) {
    return teamcity$p((() => {
      const $0 = Data$dString$dCodeUnits.take(Data$dString$dCodeUnits.countPrefix(v => v !== "≠")(message))(message);
      return " type='" + escape("comparisonFailure") + "' details='" + escape((() => {
        const $1 = Effect$dException.stack(e);
        if ($1.tag === "Nothing") { return ""; }
        if ($1.tag === "Just") { return $1._1; }
        $runtime.fail();
      })()) + "' message='" + escape(message) + "' expected='" + escape((() => {
        const $1 = Data$dString$dCodeUnits.take(Data$dString$dCodeUnits.length($0) - 1 | 0)($0);
        if (Data$dString$dCodeUnits.take(1)($1) === "\"") {
          const $2 = Data$dString$dCodeUnits.drop(1)(Data$dString$dCommon.replaceAll("\\n")("\n")($1));
          return Data$dString$dCodeUnits.take(Data$dString$dCodeUnits.length($2) - 1 | 0)($2);
        }
        return $1;
      })()) + "' actual='" + escape((() => {
        const $1 = Data$dString$dCommon.replaceAll("\\n")("\n")(Data$dString$dCodeUnits.drop(2)(Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.countPrefix(v => v !== "≠")(message))(message)));
        if (Data$dString$dCodeUnits.take(1)($1) === "\"") {
          const $2 = Data$dString$dCodeUnits.drop(1)(Data$dString$dCommon.replaceAll("\\n")("\n")($1));
          return Data$dString$dCodeUnits.take(Data$dString$dCodeUnits.length($2) - 1 | 0)($2);
        }
        return $1;
      })()) + "'";
    })())("testFailed")(d);
  }
  return teamcity$p(" message='" + escape(d.message) + "'")("testFailed")(d);
};
const testFinishedIn = d => teamcity$p(" duration='" + escape(Data$dShow.showIntImpl(Data$dInt.trunc(d.duration))) + "'")("testFinished")(d);
const teamcityReporter = /* #__PURE__ */ Test$dSpec$dReporter$dBase.defaultReporter()(v => {
  if (v.tag === "Suite") { return tellLn(teamcity$p("")("testSuiteStarted")(serviceMessage(v._2))); }
  if (v.tag === "SuiteEnd") { return tellLn(teamcity$p("")("testSuiteFinished")(serviceMessage(v._1))); }
  if (v.tag === "Test") { return tellLn(teamcity$p("")("testStarted")(serviceMessage(v._2))); }
  if (v.tag === "Pending") {
    const attributes = serviceMessage(v._1);
    return bindStateT.bind(tellLn(teamcity$p("")("testStarted")(attributes)))(() => bindStateT.bind(tellLn(teamcity$p("")("testIgnored")(attributes)))(() => tellLn(teamcity$p("")("testFinished")(attributes))));
  }
  if (v.tag === "TestEnd") {
    if (v._2.tag === "Success") {
      return tellLn(testFinishedIn((() => {
        const $0 = serviceMessage(v._1);
        return {name: $0.name, nodeId: $0.nodeId, parentNodeId: $0.parentNodeId, duration: v._2._2};
      })()));
    }
    if (v._2.tag === "Failure") {
      const $0 = serviceMessage(v._1);
      const attributes = {name: $0.name, nodeId: $0.nodeId, parentNodeId: $0.parentNodeId, message: Effect$dException.showErrorImpl(v._2._1)};
      return bindStateT.bind(tellLn(testFailed(attributes)(v._2._1)))(() => tellLn(teamcity$p("")("testFinished")(attributes)));
    }
    $runtime.fail();
  }
  if (v.tag === "End") { return applicativeStateT.pure(); }
  if (v.tag === "Start") { return tellLn("##teamcity[testCount count='" + Data$dShow.showIntImpl(v._1) + "']"); }
  $runtime.fail();
});
export {applicativeStateT, bindStateT, escape, idFromPath, monadWriterT, serviceMessage, teamcity, teamcity$p, teamcityReporter, tellLn, testFailed, testFinishedIn};
