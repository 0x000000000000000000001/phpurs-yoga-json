import * as $runtime from "../runtime.js";
import * as Control$dMonad$dError$dClass from "../Control.Monad.Error.Class/index.js";
import * as Control$dParallel from "../Control.Parallel/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dNonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTime$dDuration from "../Data.Time.Duration/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dAff$dAVar from "../Effect.Aff.AVar/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as Pipes from "../Pipes/index.js";
import * as Pipes$dCore from "../Pipes.Core/index.js";
import * as Pipes$dInternal from "../Pipes.Internal/index.js";
import * as Test$dSpec from "../Test.Spec/index.js";
import * as Test$dSpec$dConfig from "../Test.Spec.Config/index.js";
import * as Test$dSpec$dConsole from "../Test.Spec.Console/index.js";
import * as Test$dSpec$dResult from "../Test.Spec.Result/index.js";
import * as Test$dSpec$dRunner$dEvent from "../Test.Spec.Runner.Event/index.js";
import * as Test$dSpec$dSpeed from "../Test.Spec.Speed/index.js";
import * as Test$dSpec$dStyle from "../Test.Spec.Style/index.js";
import * as Test$dSpec$dSummary from "../Test.Spec.Summary/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import {exit} from "./foreign.js";
const bindProxy = /* #__PURE__ */ Pipes$dInternal.bindProxy(Effect$dAff.monadAff);
const lift1 = /* #__PURE__ */ (() => Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff))();
const applyProxy = /* #__PURE__ */ Pipes$dInternal.applyProxy(Effect$dAff.monadAff);
const applicativeProxy = /* #__PURE__ */ (() => {
  const applyProxy1$1 = Pipes$dInternal.applyProxy(Effect$dAff.monadAff);
  return {pure: Pipes$dInternal.Pure, Apply0: () => applyProxy1$1};
})();
const runEffectRec = /* #__PURE__ */ Pipes$dCore.runEffectRec(Effect$dAff.monadRecAff);
const lift2 = /* #__PURE__ */ (() => Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff))();
const bindProxy1 = /* #__PURE__ */ Pipes$dInternal.bindProxy(Effect$dAff.monadAff);
const proxyMonadEffect = /* #__PURE__ */ Pipes$dInternal.proxyMonadEffect(Effect$dAff.monadEffectAff);
const applicativeProxy1 = /* #__PURE__ */ (() => {
  const applyProxy1$1 = Pipes$dInternal.applyProxy(Effect$dAff.monadAff);
  return {pure: Pipes$dInternal.Pure, Apply0: () => applyProxy1$1};
})();
const applyProxy1 = /* #__PURE__ */ Pipes$dInternal.applyProxy(Effect$dAff.monadAff);
const functorProxy = /* #__PURE__ */ Pipes$dInternal.functorProxy(Effect$dAff.monadAff);
const runEffect = /* #__PURE__ */ Pipes$dCore.runEffect(Effect$dAff.monadAff);
const mergeProducers = dictTraversable => ps => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff$dAVar.empty))($$var => bindProxy.bind(lift1(Effect$dAff.forkAff(Effect$dAff._bind(Control$dParallel.parTraverse(Effect$dAff.parallelAff)(Effect$dAff.applicativeParAff)(dictTraversable)(p => runEffectRec(Pipes$dCore.composeResponse(Effect$dAff.monadAff)(p)(i => applyProxy.apply(applyProxy.Functor0().map(v => x => x)(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff$dAVar.put(Data$dEither.$Either(
  "Right",
  i
))($$var))))(applicativeProxy.pure()))))(ps))(x => Effect$dAff._bind(Effect$dAff$dAVar.put(Data$dEither.$Either("Left", undefined))($$var))(() => Effect$dAff._pure(x))))))(fib => {
  const loop$lazy = $runtime.binding(() => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff$dAVar.take($$var)))(res => {
    if (res.tag === "Left") { return lift2(Effect$dAff.joinFiber(fib)); }
    if (res.tag === "Right") { return bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", res._1, Pipes$dInternal.Pure))(() => loop$lazy()); }
    $runtime.fail();
  }));
  const loop = loop$lazy();
  return loop;
}));
const makeTimeout = v => Effect$dAff._bind(Effect$dAff._delay(Data$dEither.Right, v))(() => Effect$dAff._makeAff(
  Effect$dAff.isLeft,
  Effect$dAff.unsafeFromLeft,
  Effect$dAff.unsafeFromRight,
  Data$dEither.Left,
  Data$dEither.Right,
  cb => {
    const $0 = Control$dSemigroupoid.composeImpl(cb)(Data$dEither.Left)(Effect$dException.error("test timed out after " + Data$dShow.showIntImpl(Data$dInt.round(v)) + "ms"));
    return () => {
      $0();
      return Effect$dAff.nonCanceler;
    };
  }
));
const timeout = time => t => Effect$dAff._bind(Effect$dAff._sequential(Effect$dAff._parAffAlt(Control$dMonad$dError$dClass.try(Effect$dAff.monadErrorAff)(makeTimeout(time)))(Control$dMonad$dError$dClass.try(Effect$dAff.monadErrorAff)(t))))(v2 => {
  if (v2.tag === "Left") { return Effect$dAff._throwError(v2._1); }
  if (v2.tag === "Right") { return Effect$dAff._pure(v2._1); }
  $runtime.fail();
});
const _run = dictFunctor => {
  const collect = Test$dSpec.collect(dictFunctor);
  return config => {
    const runItem = keepRunningVar => v => {
      const $0 = v.isParallelizable;
      const $1 = v.test;
      return bindProxy1.bind(proxyMonadEffect.liftEffect(() => keepRunningVar.value))(keepRunning => {
        if ($1.tag === "Leaf") {
          if ($1._2.tag === "Just") {
            if (keepRunning) {
              return bindProxy1.bind(Pipes$dInternal.$$$Proxy(
                "Respond",
                Test$dSpec$dRunner$dEvent.$Event("Test", $0 ? Test$dSpec$dRunner$dEvent.Parallel : Test$dSpec$dRunner$dEvent.Sequential, Data$dTuple.$Tuple($1._1._1, $1._1._2)),
                Pipes$dInternal.Pure
              ))(() => bindProxy1.bind(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)(Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dNow.now))(start => Effect$dAff._bind(Effect$dAff.attempt((() => {
                if (config.timeout.tag === "Nothing") { return x => x; }
                if (config.timeout.tag === "Just") { return timeout(config.timeout._1); }
                $runtime.fail();
              })()($1._2._1.example(a => a()))))(e => Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dNow.now))(end => {
                const duration = Data$dDateTime$dInstant.diff(Data$dTime$dDuration.durationMilliseconds)(end)(start);
                return Effect$dAff._pure((() => {
                  const $2 = Test$dSpec$dResult.$Result(
                    "Success",
                    (() => {
                      if (duration > config.slow) { return Test$dSpec$dSpeed.Slow; }
                      if (duration > config.slow / 2.0) { return Test$dSpec$dSpeed.Medium; }
                      return Test$dSpec$dSpeed.Fast;
                    })(),
                    duration
                  );
                  if (e.tag === "Left") { return Test$dSpec$dResult.$Result("Failure", e._1); }
                  if (e.tag === "Right") { return $2; }
                  $runtime.fail();
                })());
              })))))(res => bindProxy1.bind(res.tag === "Failure" && config.failFast ? proxyMonadEffect.liftEffect(() => keepRunningVar.value = false) : applicativeProxy1.pure())(() => bindProxy1.bind(Pipes$dInternal.$$$Proxy(
                "Respond",
                Test$dSpec$dRunner$dEvent.$Event("TestEnd", Data$dTuple.$Tuple($1._1._1, $1._1._2), res),
                Pipes$dInternal.Pure
              ))(() => applicativeProxy1.pure([Test$dSpec$dTree.$Tree("Leaf", $1._1._2, Data$dMaybe.$Maybe("Just", res))])))));
            }
            return applicativeProxy1.pure([Test$dSpec$dTree.$Tree("Leaf", $1._1._2, Data$dMaybe.Nothing)]);
          }
          if ($1._2.tag === "Nothing") {
            const $2 = $1._1._2;
            return bindProxy1.bind(keepRunning
              ? Pipes$dInternal.$$$Proxy("Respond", Test$dSpec$dRunner$dEvent.$Event("Pending", Data$dTuple.$Tuple($1._1._1, $2)), Pipes$dInternal.Pure)
              : applicativeProxy1.pure())(() => applicativeProxy1.pure([Test$dSpec$dTree.$Tree("Leaf", $2, Data$dMaybe.Nothing)]));
          }
          $runtime.fail();
        }
        if ($1.tag === "Node") {
          if ($1._1.tag === "Right") {
            return applyProxy1.apply(applyProxy1.Functor0().map(Data$dFunction.const)(loop(keepRunningVar)($1._2)))(Pipes$dInternal.monadTransProxy.lift(Effect$dAff.monadAff)($1._1._1()));
          }
          if ($1._1.tag === "Left") {
            const $2 = $1._1._1._2;
            const $3 = $1._1._1._1;
            const $4 = $1._2;
            return bindProxy1.bind(keepRunning
              ? Pipes$dInternal.$$$Proxy(
                  "Respond",
                  Test$dSpec$dRunner$dEvent.$Event("Suite", $0 ? Test$dSpec$dRunner$dEvent.Parallel : Test$dSpec$dRunner$dEvent.Sequential, Data$dTuple.$Tuple($3, $2)),
                  Pipes$dInternal.Pure
                )
              : applicativeProxy1.pure())(() => bindProxy1.bind(loop(keepRunningVar)($4))(res => bindProxy1.bind(keepRunning
              ? Pipes$dInternal.$$$Proxy("Respond", Test$dSpec$dRunner$dEvent.$Event("SuiteEnd", Data$dTuple.$Tuple($3, $2)), Pipes$dInternal.Pure)
              : applicativeProxy1.pure())(() => applicativeProxy1.pure([Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", $2), res)]))));
          }
        }
        $runtime.fail();
      });
    };
    const loop = keepRunningVar => tests => functorProxy.map(Data$dArray.concat)(Data$dTraversable.traversableArray.traverse(applicativeProxy1)(g => {
      if (Data$dArray$dNonEmpty.head(g).isParallelizable) {
        return functorProxy.map(Data$dArray.concat)(mergeProducers(Data$dTraversable.traversableArray)(Data$dFunctor.arrayMap(runItem(keepRunningVar))(g)));
      }
      return functorProxy.map(Data$dArray.concat)(Data$dTraversable.traversableArray.traverse(applicativeProxy1)(runItem(keepRunningVar))(g));
    })(Data$dArray.groupBy(a => b => a.isParallelizable === b.isParallelizable)(Data$dFunctor.arrayMap(test => (
      {isParallelizable: Test$dSpec$dTree.isAllParallelizable(test), test}
    ))(tests))));
    return Control$dSemigroupoid.composeImpl(dictFunctor.map(tests => bindProxy1.bind(Pipes$dInternal.$$$Proxy(
      "Respond",
      Test$dSpec$dRunner$dEvent.$Event("Start", Test$dSpec$dTree.countTests(tests)),
      Pipes$dInternal.Pure
    ))(() => bindProxy1.bind(proxyMonadEffect.liftEffect(() => ({value: true})))(keepRunningVar => bindProxy1.bind(loop(keepRunningVar)(Test$dSpec$dTree.annotatedWithPaths(config.filterTree(tests))))(r => bindProxy1.bind(Pipes$dInternal.$$$Proxy(
      "Respond",
      Test$dSpec$dRunner$dEvent.$Event("End", r),
      Pipes$dInternal.Pure
    ))(() => applicativeProxy1.pure(r)))))))(collect);
  };
};
const evalSpecT = dictFunctor => config => reporters => spec => dictFunctor.map(runner => {
  const reportedEvents = runEffect(Pipes$dCore.composeResponse(Effect$dAff.monadAff)(Data$dFoldable.foldlArray(Pipes.composePipes(Effect$dAff.monadAff))(runner)(reporters))(v => applicativeProxy.pure()));
  if (config.exit) {
    return Effect$dAff._bind(Effect$dAff._liftEffect(Test$dSpec$dConsole.write(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.yellow)(Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidString)(Data$dFoldable.identity1)([
      "WARNING: The use of `runSpec` or `runSpecT` under NodeJS is deprecated ",
      "and will be removed in the next major release. ",
      "Please migrate to `runSpecAndExitProcess` from the 'spec-node' package."
    ])))))(() => Effect$dAff._bind(Control$dMonad$dError$dClass.try(Effect$dAff.monadErrorAff)(reportedEvents))(v => {
      if (v.tag === "Left") {
        const $0 = v._1;
        return Effect$dAff._bind(Effect$dAff._liftEffect(Test$dSpec$dConsole.write(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.red)(Effect$dException.showErrorImpl($0) + "\n"))))(() => Effect$dAff._bind(Effect$dAff._liftEffect(exit(1)))(() => Effect$dAff._throwError($0)));
      }
      if (v.tag === "Right") {
        const $0 = v._1;
        return Effect$dAff._liftEffect((() => {
          const $1 = exit(Test$dSpec$dSummary.summarize($0).failed === 0 ? 0 : 1);
          return () => {
            $1();
            return $0;
          };
        })());
      }
      $runtime.fail();
    }));
  }
  return reportedEvents;
})(_run(dictFunctor)(config)(spec));
const runSpecPure$p = config => reporters => spec => Effect$dAff._map(v => {})(evalSpecT(Data$dIdentity.functorIdentity)(config)(reporters)(spec));
const run = () => runSpecPure$p(Test$dSpec$dConfig.defaultConfig);
const runSpec$p = () => runSpecPure$p;
const runSpecPure = reporters => spec => Effect$dAff._map(v => {})(evalSpecT(Data$dIdentity.functorIdentity)(Test$dSpec$dConfig.defaultConfig)(reporters)(spec));
const runSpec = () => runSpecPure;
const runSpecT = dictFunctor => () => evalSpecT(dictFunctor);
export {
  _run,
  applicativeProxy,
  applicativeProxy1,
  applyProxy,
  applyProxy1,
  bindProxy,
  bindProxy1,
  evalSpecT,
  functorProxy,
  lift1,
  lift2,
  makeTimeout,
  mergeProducers,
  proxyMonadEffect,
  run,
  runEffect,
  runEffectRec,
  runSpec,
  runSpec$p,
  runSpecPure,
  runSpecPure$p,
  runSpecT,
  timeout
};
export * from "./foreign.js";
