import * as $runtime from "../runtime.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Test$dSpec$dResult from "../Test.Spec.Result/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
const $Event = (tag, _1, _2) => ({tag, _1, _2});
const $Execution = tag => tag;
const showArray = /* #__PURE__ */ (() => ({show: Data$dShow.showArrayImpl(Test$dSpec$dTree.showPathItem.show)}))();
const showArray1 = /* #__PURE__ */ (() => (
  {show: Data$dShow.showArrayImpl(Test$dSpec$dTree.showTree(Data$dShow.showVoid)(Test$dSpec$dResult.showResult)(Data$dShow.showString).show)}
))();
const Parallel = /* #__PURE__ */ $Execution("Parallel");
const Sequential = /* #__PURE__ */ $Execution("Sequential");
const Start = value0 => $Event("Start", value0);
const Suite = value0 => value1 => $Event("Suite", value0, value1);
const SuiteEnd = value0 => $Event("SuiteEnd", value0);
const Test = value0 => value1 => $Event("Test", value0, value1);
const TestEnd = value0 => value1 => $Event("TestEnd", value0, value1);
const Pending = value0 => $Event("Pending", value0);
const End = value0 => $Event("End", value0);
const showExecution = {
  show: v => {
    if (v === "Parallel") { return "Parallel"; }
    if (v === "Sequential") { return "Sequential"; }
    $runtime.fail();
  }
};
const showEvent = {
  show: v => {
    if (v.tag === "Start") { return "Start " + Data$dShow.showIntImpl(v._1); }
    if (v.tag === "Suite") {
      return (() => {
        if (v._1 === "Parallel") { return "Suite Parallel"; }
        if (v._1 === "Sequential") { return "Suite Sequential"; }
        $runtime.fail();
      })() + showArray.show(v._2._1) + ": " + v._2._2;
    }
    if (v.tag === "SuiteEnd") { return "SuiteEnd " + showArray.show(v._1._1) + ": " + v._1._2; }
    if (v.tag === "Test") {
      return (() => {
        if (v._1 === "Parallel") { return "Test Parallel"; }
        if (v._1 === "Sequential") { return "Test Sequential"; }
        $runtime.fail();
      })() + showArray.show(v._2._1) + " " + v._2._2;
    }
    if (v.tag === "TestEnd") { return "TestEnd " + showArray.show(v._1._1) + " " + v._1._2 + ": " + Test$dSpec$dResult.showResult.show(v._2); }
    if (v.tag === "Pending") { return "Pending " + showArray.show(v._1._1) + " " + v._1._2; }
    if (v.tag === "End") { return "End " + showArray1.show(v._1); }
    $runtime.fail();
  }
};
export {$Event, $Execution, End, Parallel, Pending, Sequential, Start, Suite, SuiteEnd, Test, TestEnd, showArray, showArray1, showEvent, showExecution};
