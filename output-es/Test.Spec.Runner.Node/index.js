import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
import * as Node$dProcess from "../Node.Process/index.js";
import * as Test$dSpec$dRunner from "../Test.Spec.Runner/index.js";
import * as Test$dSpec$dRunner$dNode$dConfig from "../Test.Spec.Runner.Node.Config/index.js";
import * as Test$dSpec$dRunner$dNode$dPersist from "../Test.Spec.Runner.Node.Persist/index.js";
import * as Test$dSpec$dSummary from "../Test.Spec.Summary/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const testTreeGeneratorIdentity = {generateTestTree: Unsafe$dCoerce.unsafeCoerce, Monad0: () => Data$dIdentity.monadIdentity};
const testTreeGeneratorEffect = {
  generateTestTree: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(m => Effect$dAff._bind(m)(Control$dBind.identity))(Effect$dAff._liftEffect),
  Monad0: () => Effect.monadEffect
};
const testTreeGeneratorAff = {generateTestTree: m => Effect$dAff._bind(m)(Control$dBind.identity), Monad0: () => Effect$dAff.monadAff};
const generateTestTree = dict => dict.generateTestTree;
const runSpecAndGetResults = dictTestTreeGenerator => {
  const Functor0 = dictTestTreeGenerator.Monad0().Bind1().Apply0().Functor0();
  return config => reporters => spec => Effect$dAff._bind(Effect$dAff._map(v => ({...v, exit: false}))(Test$dSpec$dRunner$dNode$dConfig.toSpecConfig(Effect$dAff$dClass.monadAffAff)(config)))(specCfg => Effect$dAff._bind(dictTestTreeGenerator.generateTestTree(Test$dSpec$dRunner.evalSpecT(Functor0)(specCfg)(reporters)(spec)))(results => Effect$dAff._bind(Test$dSpec$dRunner$dNode$dPersist.persistResults(results))(() => Effect$dAff._pure(results))));
};
const runSpecAndExitProcess$p = dictTestTreeGenerator => args => reporters => spec => Effect$dAff.launchAff_(Effect$dAff._bind(args.parseCLIOptions
  ? Test$dSpec$dRunner$dNode$dConfig.fromCommandLine$p(Effect$dAff.monadEffectAff)(args.defaultConfig)(Test$dSpec$dRunner$dNode$dConfig.commandLineOptionParsers)
  : Effect$dAff._pure(args.defaultConfig))(config => Effect$dAff._bind(runSpecAndGetResults(dictTestTreeGenerator)(config)(reporters)(spec))(res => Effect$dAff._liftEffect((() => {
  const $0 = Test$dSpec$dSummary.summarize(res).failed === 0 ? 0 : 1;
  return () => Node$dProcess.exitImpl($0);
})()))));
const runSpecAndExitProcess = /* #__PURE__ */ runSpecAndExitProcess$p(testTreeGeneratorIdentity)({
  defaultConfig: Test$dSpec$dRunner$dNode$dConfig.defaultConfig,
  parseCLIOptions: true
});
export {generateTestTree, runSpecAndExitProcess, runSpecAndExitProcess$p, runSpecAndGetResults, testTreeGeneratorAff, testTreeGeneratorEffect, testTreeGeneratorIdentity};
