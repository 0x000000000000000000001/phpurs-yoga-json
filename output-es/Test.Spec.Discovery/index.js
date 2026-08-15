import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dClass from "../Effect.Aff.Class/index.js";
import * as Effect$dAff$dCompat from "../Effect.Aff.Compat/index.js";
import * as Test$dSpec from "../Test.Spec/index.js";
import * as Test$dSpec$dRunner$dNode from "../Test.Spec.Runner.Node/index.js";
import * as Test$dSpec$dRunner$dNode$dConfig from "../Test.Spec.Runner.Node.Config/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import {getSpecs} from "./foreign.js";
const sequence_ = /* #__PURE__ */ Data$dFoldable.traverse_(/* #__PURE__ */ Test$dSpec.applicativeWriterT(Data$dIdentity.applicativeIdentity))(Data$dFoldable.foldableArray)(Data$dFoldable.identity);
const discover = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const Bind1 = Monad0.Bind1();
  return pattern => Bind1.bind(MonadEffect0.liftEffect(() => getSpecs(pattern)))(runDiscover => Bind1.bind(dictMonadAff.liftAff(Effect$dAff$dCompat.fromEffectFnAff(runDiscover)))(specs => Monad0.Applicative0().pure(sequence_(Data$dFunctor.arrayMap(v => Data$dTuple.$Tuple(
    v.spec._1,
    [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", v.name), v.spec._2)]
  ))(specs)))));
};
const discoverAndRunSpecs = reporters => pattern => Effect$dAff.launchAff_(Effect$dAff._bind(discover(Effect$dAff$dClass.monadAffAff)(pattern))(specs => Effect$dAff._liftEffect(Test$dSpec$dRunner$dNode.runSpecAndExitProcess$p(Test$dSpec$dRunner$dNode.testTreeGeneratorIdentity)({
  defaultConfig: Test$dSpec$dRunner$dNode$dConfig.defaultConfig,
  parseCLIOptions: true
})(reporters)(specs))));
export {discover, discoverAndRunSpecs, sequence_};
export * from "./foreign.js";
