import * as $runtime from "../runtime.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dMonad$dWriter from "../Control.Monad.Writer/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Pipes$dInternal from "../Pipes.Internal/index.js";
import * as Test$dSpec$dConsole from "../Test.Spec.Console/index.js";
import * as Test$dSpec$dResult from "../Test.Spec.Result/index.js";
import * as Test$dSpec$dStyle from "../Test.Spec.Style/index.js";
import * as Test$dSpec$dSummary from "../Test.Spec.Summary/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $RunningItem = (tag, _1) => ({tag, _1});
const monadWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(Data$dMonoid.monoidString)(Data$dIdentity.monadIdentity);
const bindStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.bindStateT(monadWriterT);
const monadStateStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(monadWriterT);
const $$get = /* #__PURE__ */ (() => monadStateStateT.state(s => Data$dTuple.$Tuple(s, s)))();
const applicativeStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.applicativeStateT(monadWriterT);
const ordTuple = /* #__PURE__ */ (() => {
  const $0 = Data$dOrd.ordArray(Test$dSpec$dTree.ordPathItem);
  const $1 = $0.Eq0();
  return dictOrd1 => {
    const $2 = dictOrd1.Eq0();
    const eqTuple2 = {eq: x => y => $1.eq(x._1)(y._1) && $2.eq(x._2)(y._2)};
    return {
      compare: x => y => {
        const v = $0.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return dictOrd1.compare(x._2)(y._2);
      },
      Eq0: () => eqTuple2
    };
  };
})();
const ordTuple1 = /* #__PURE__ */ ordTuple(Data$dOrd.ordString);
const monadStateStateT1 = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(monadWriterT);
const RunningTest = value0 => $RunningItem("RunningTest", value0);
const RunningPending = /* #__PURE__ */ $RunningItem("RunningPending");
const RunningSuite = value0 => $RunningItem("RunningSuite", value0);
const genericRunningItem_ = {
  to: x => {
    if (x.tag === "Inl") { return $RunningItem("RunningTest", x._1); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return RunningPending; }
      if (x._1.tag === "Inr") { return $RunningItem("RunningSuite", x._1._1); }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "RunningTest") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "RunningPending") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x.tag === "RunningSuite") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
    $runtime.fail();
  }
};
const showRunningItem = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({
      genericShowArgs: v => [
        (() => {
          if (v.tag === "Just") { return "(Just " + Test$dSpec$dResult.showResult.show(v._1) + ")"; }
          if (v.tag === "Nothing") { return "Nothing"; }
          $runtime.fail();
        })()
      ]
    })({reflectSymbol: () => "RunningTest"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "RunningPending"});
    const $2 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [v ? "true" : "false"]})({reflectSymbol: () => "RunningSuite"});
    return x => {
      if (x.tag === "RunningTest") { return $0["genericShow'"](x._1); }
      if (x.tag === "RunningPending") { return $1["genericShow'"](Data$dGeneric$dRep.NoArguments); }
      if (x.tag === "RunningSuite") { return $2["genericShow'"](x._1); }
      $runtime.fail();
    };
  })()
};
const scanWithStateM = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return step => begin => {
    const go = x => bindProxy.bind(Pipes$dInternal.$$$Proxy("Request", undefined, Pipes$dInternal.Pure))(a => bindProxy.bind(Pipes$dInternal.$$$Proxy(
      "Respond",
      a,
      Pipes$dInternal.Pure
    ))(() => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(dictMonad)(step(x)(a)))(x$p => go(x$p))));
    return bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(dictMonad)(begin))(x => go(x));
  };
};
const printFailures = dictMonadWriter => {
  const Monad1 = dictMonadWriter.MonadTell1().Monad1();
  const applicativeStateT1 = Control$dMonad$dState$dTrans.applicativeStateT(Monad1);
  const bindStateT1 = Control$dMonad$dState$dTrans.bindStateT(Monad1);
  const $0 = Control$dMonad$dState$dTrans.monadStateStateT(Monad1);
  const $1 = Control$dMonad$dState$dTrans.monadWriterStateT(dictMonadWriter);
  const Functor0 = Monad1.Bind1().Apply0().Functor0();
  return xs$p => {
    const go$lazy = $runtime.binding(() => Data$dFoldable.traverse_(applicativeStateT1)(Data$dFoldable.foldableArray)(v => {
      if (v.tag === "Node") {
        if (v._1.tag === "Left") { return go$lazy()(v._2); }
        if (v._1.tag === "Right") {
          const spin = spin$a0$copy => {
            let spin$a0 = spin$a0$copy, spin$c = true, spin$r;
            while (spin$c) {
              const v$1 = spin$a0;
              spin$a0 = v$1;
            }
            return spin$r;
          };
          return spin(v._1._1);
        }
        $runtime.fail();
      }
      if (v.tag === "Leaf") {
        if (v._2.tag === "Just" && v._2._1.tag === "Failure") {
          const $2 = v._2._1._1;
          const $3 = v._1._2;
          const $4 = v._1._1;
          return bindStateT1.bind($0.state(s => {
            const s$p = 1 + s | 0;
            return Data$dTuple.$Tuple(s$p, s$p);
          }))(i => bindStateT1.bind($1.MonadTell1().tell(Data$dShow.showIntImpl(i) + ") " + Data$dFoldable.foldlArray(v$1 => v1 => {
            if (v$1.init) { return {init: false, acc: v1}; }
            return {init: false, acc: v$1.acc + " " + v1};
          })({init: true, acc: ""})([...Data$dArray.mapMaybe(Control$dSemigroupoid.composeImpl(v$1 => v$1.name)(Unsafe$dCoerce.unsafeCoerce))($4), $3]).acc + "\n"))(() => $1.MonadTell1().tell(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.red)(Data$dString$dCodeUnits.fromCharArray(Data$dArray.replicateImpl(
            2,
            " "
          )) + Effect$dException.message($2)) + "\n")));
        }
        return applicativeStateT1.pure();
      }
      $runtime.fail();
    }));
    const go = go$lazy();
    return Functor0.map(Data$dTuple.fst)(go(Test$dSpec$dTree.annotatedWithPaths(xs$p))(0));
  };
};
const defaultUpdate = opts => e => {
  const modifyRunningItems = f => bindStateT.bind($$get)(s => {
    const nextRunningItems = f(opts.getRunningItems(s));
    const go = v => {
      if (v.tag === "Leaf") { return true; }
      if (v.tag === "Node") {
        return go(v._5) && (() => {
          if (v._4.tag === "RunningPending") { return true; }
          if (v._4.tag === "RunningTest") {
            if (v._4._1.tag === "Nothing") { return false; }
            if (v._4._1.tag === "Just") { return true; }
            $runtime.fail();
          }
          if (v._4.tag === "RunningSuite") { return v._4._1; }
          $runtime.fail();
        })() && go(v._6);
      }
      $runtime.fail();
    };
    const allFinished = go(nextRunningItems);
    return bindStateT.bind((() => {
      const $0 = opts.putRunningItems(allFinished ? Data$dMap$dInternal.Leaf : nextRunningItems)(s);
      return monadStateStateT.state(v => Data$dTuple.$Tuple(undefined, $0));
    })())(() => {
      const $0 = Data$dFoldable.for_(applicativeStateT)(Data$dFoldable.foldableArray)(Control$dSemigroupoid.composeImpl(Data$dUnfoldable.unfoldableArray.unfoldr(Data$dMap$dInternal.stepUnfoldr))(Data$dMap$dInternal.toMapIter)(nextRunningItems))(v => opts.printFinishedItem(v._1)(v._2));
      if (allFinished) { return $0; }
      return applicativeStateT.pure();
    });
  });
  return bindStateT.bind((() => {
    if (e.tag === "Suite") {
      if (e._1 === "Sequential") { return applicativeStateT.pure(); }
      if (e._1 === "Parallel") { return modifyRunningItems(Data$dMap$dInternal.insert(ordTuple1)(e._2)($RunningItem("RunningSuite", false))); }
      $runtime.fail();
    }
    if (e.tag === "SuiteEnd") {
      return modifyRunningItems(Data$dMap$dInternal.update(ordTuple(Data$dOrd.ordString))(v1 => {
        if (v1.tag === "RunningSuite") { return Data$dMaybe.$Maybe("Just", $RunningItem("RunningSuite", true)); }
        return Data$dMaybe.Nothing;
      })(e._1));
    }
    if (e.tag === "Test") {
      if (e._1 === "Sequential") { return applicativeStateT.pure(); }
      if (e._1 === "Parallel") { return modifyRunningItems(Data$dMap$dInternal.insert(ordTuple1)(e._2)($RunningItem("RunningTest", Data$dMaybe.Nothing))); }
      $runtime.fail();
    }
    if (e.tag === "TestEnd") {
      const $0 = e._1;
      const $1 = e._2;
      return bindStateT.bind(monadStateStateT1.state(s => Data$dTuple.$Tuple(opts.getRunningItems(s), s)))(runningItems => {
        const go = go$a0$copy => {
          let go$a0 = go$a0$copy, go$c = true, go$r;
          while (go$c) {
            const v = go$a0;
            if (v.tag === "Leaf") {
              go$c = false;
              go$r = Data$dMaybe.Nothing;
              continue;
            }
            if (v.tag === "Node") {
              const v1 = ordTuple1.compare($0)(v._3);
              if (v1 === "LT") {
                go$a0 = v._5;
                continue;
              }
              if (v1 === "GT") {
                go$a0 = v._6;
                continue;
              }
              if (v1 === "EQ") {
                go$c = false;
                go$r = Data$dMaybe.$Maybe("Just", v._4);
                continue;
              }
            }
            $runtime.fail();
          }
          return go$r;
        };
        const v1 = go(runningItems);
        if (v1.tag === "Just") {
          if (v1._1.tag === "RunningTest") { return modifyRunningItems(Data$dMap$dInternal.insert(ordTuple1)($0)($RunningItem("RunningTest", Data$dMaybe.$Maybe("Just", $1)))); }
          return applicativeStateT.pure();
        }
        if (v1.tag === "Nothing") { return opts.printFinishedItem($0)($RunningItem("RunningTest", Data$dMaybe.$Maybe("Just", $1))); }
        return applicativeStateT.pure();
      });
    }
    if (e.tag === "Pending") {
      const $0 = e._1;
      return bindStateT.bind(monadStateStateT1.state(s => Data$dTuple.$Tuple(opts.getRunningItems(s), s)))(runningItems => {
        const $1 = runningItems.tag === "Leaf";
        const $2 = modifyRunningItems(Data$dMap$dInternal.insert(ordTuple1)($0)(RunningPending));
        if (!$1) { return $2; }
        if ($1) { return applicativeStateT.pure(); }
        $runtime.fail();
      });
    }
    if (e.tag === "End") { return applicativeStateT.pure(); }
    if (e.tag === "Start") { return applicativeStateT.pure(); }
    $runtime.fail();
  })())(() => opts.update(e));
};
const defaultSummary = dictMonadWriter => {
  const Monad1 = dictMonadWriter.MonadTell1().Monad1();
  const Bind1 = Monad1.Bind1();
  const Applicative0 = Monad1.Applicative0();
  return xs => Bind1.bind((() => {
    const v = Test$dSpec$dSummary.summarize(xs);
    const $0 = v.failed;
    const $1 = v.pending;
    return Bind1.bind((() => {
      const $2 = dictMonadWriter.MonadTell1().tell(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.green)(Data$dShow.showIntImpl(v.passed) + " passing") + "\n");
      if (v.passed > 0) { return $2; }
      return Applicative0.pure();
    })())(() => Bind1.bind((() => {
      const $2 = dictMonadWriter.MonadTell1().tell(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.cyan)(Data$dShow.showIntImpl($1) + " pending") + "\n");
      if ($1 > 0) { return $2; }
      return Applicative0.pure();
    })())(() => {
      const $2 = dictMonadWriter.MonadTell1().tell(Test$dSpec$dStyle.styled(Test$dSpec$dStyle.red)(Data$dShow.showIntImpl($0) + " failed") + "\n");
      if ($0 > 0) { return $2; }
      return Applicative0.pure();
    }));
  })())(() => Bind1.bind(dictMonadWriter.MonadTell1().tell("\n"))(() => printFailures(dictMonadWriter)(xs)));
};
const defaultReporter = initialState => onEvent => scanWithStateM(Effect$dAff.monadAff)(s => e => {
  const v = Control$dMonad$dWriter.runWriter((() => {
    const $0 = onEvent(e)(s);
    return Data$dTuple.$Tuple($0._1._2, $0._2);
  })());
  const $0 = v._1;
  return Effect$dAff._liftEffect((() => {
    const $1 = Test$dSpec$dConsole.write(v._2);
    return () => {
      $1();
      return $0;
    };
  })());
})(Effect$dAff._pure(initialState));
export {
  $RunningItem,
  RunningPending,
  RunningSuite,
  RunningTest,
  applicativeStateT,
  bindStateT,
  defaultReporter,
  defaultSummary,
  defaultUpdate,
  genericRunningItem_,
  $$get as get,
  monadStateStateT,
  monadStateStateT1,
  monadWriterT,
  ordTuple,
  ordTuple1,
  printFailures,
  scanWithStateM,
  showRunningItem
};
