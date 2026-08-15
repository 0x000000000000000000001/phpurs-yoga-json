import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dSemigroup$dFoldable from "../Data.Semigroup.Foldable/index.js";
import * as Data$dShow from "../Data.Show/index.js";
const toJSONPath = fe => {
  const go = v => {
    if (v.tag === "ForeignError") { return ""; }
    if (v.tag === "TypeMismatch") { return ""; }
    if (v.tag === "ErrorAtIndex") { return "[" + Data$dShow.showIntImpl(v._1) + "]" + go(v._2); }
    if (v.tag === "ErrorAtProperty") {
      if (v._2.tag === "TypeMismatch" && v._2._2 === "undefined") { return ""; }
      return "." + v._1 + go(v._2);
    }
    $runtime.fail();
  };
  return "$" + go(fe);
};
const errorToJSON = err => {
  const path = toJSONPath(err);
  const go = go$a0$copy => {
    let go$a0 = go$a0$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0;
      if (v.tag === "ForeignError") {
        go$c = false;
        go$r = {path, message: v._1};
        continue;
      }
      if (v.tag === "TypeMismatch") {
        if (v._2 === "Undefined") {
          go$c = false;
          go$r = {path, message: "Must provide a value of type '" + v._1 + "'"};
          continue;
        }
        if (v._2 === "undefined") {
          go$c = false;
          go$r = {path, message: "Must provide a value of type '" + v._1 + "'"};
          continue;
        }
        go$c = false;
        go$r = {path, message: "Must provide a value of type '" + v._1 + "' instead of '" + v._2 + "'"};
        continue;
      }
      if (v.tag === "ErrorAtIndex") {
        go$a0 = v._2;
        continue;
      }
      if (v.tag === "ErrorAtProperty") {
        go$a0 = v._2;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go(err);
};
const renderHumanError = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.message + " at " + v.path)(errorToJSON);
const withStringErrors = /* #__PURE__ */ (() => {
  const $0 = Data$dSemigroup$dFoldable.intercalateMap(Data$dList$dTypes.foldable1NonEmptyList)(Data$dSemigroup.semigroupString)("\n")(renderHumanError);
  return v2 => {
    if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
    if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
    $runtime.fail();
  };
})();
export {errorToJSON, renderHumanError, toJSONPath, withStringErrors};
