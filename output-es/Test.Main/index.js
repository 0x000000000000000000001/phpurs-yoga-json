import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Test$dBasicsSpec from "../Test.BasicsSpec/index.js";
import * as Test$dErrorsSpec from "../Test.ErrorsSpec/index.js";
import * as Test$dGenericsSpec from "../Test.GenericsSpec/index.js";
import * as Test$dSpec$dConfig from "../Test.Spec.Config/index.js";
import * as Test$dSpec$dReporter$dConsole from "../Test.Spec.Reporter.Console/index.js";
import * as Test$dSpec$dRunner from "../Test.Spec.Runner/index.js";
import * as Test$dSpec$dSummary from "../Test.Spec.Summary/index.js";
import * as Test$dWriteViaSpec from "../Test.WriteViaSpec/index.js";
const bindSpecT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupArray)(Data$dIdentity.bindIdentity);
const main = /* #__PURE__ */ (() => Effect$dAff.launchAff_(Effect$dAff._bind(Test$dSpec$dRunner.evalSpecT(Data$dIdentity.functorIdentity)({
  ...Test$dSpec$dConfig.defaultConfig,
  exit: false
})([Test$dSpec$dReporter$dConsole.consoleReporter])(bindSpecT.bind(Test$dBasicsSpec.spec)(() => bindSpecT.bind(Test$dErrorsSpec.spec)(() => bindSpecT.bind(Test$dGenericsSpec.spec)(() => Test$dWriteViaSpec.spec)))))(results => {
  if (Test$dSpec$dSummary.summarize(results).failed === 0) { return Effect$dAff._pure(); }
  return Effect$dAff._throwError(Effect$dException.error("Tests failed"));
})))();
export {bindSpecT, main};
