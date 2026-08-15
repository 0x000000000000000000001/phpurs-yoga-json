import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMap from "../Data.Map/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dFlags from "../Data.String.Regex.Flags/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as ExitCodes from "../ExitCodes/index.js";
import * as Options$dApplicative$dBuilder from "../Options.Applicative.Builder/index.js";
import * as Options$dApplicative$dBuilder$dInternal from "../Options.Applicative.Builder.Internal/index.js";
import * as Options$dApplicative$dExtra from "../Options.Applicative.Extra/index.js";
import * as Options$dApplicative$dHelp$dChunk from "../Options.Applicative.Help.Chunk/index.js";
import * as Options$dApplicative$dTypes from "../Options.Applicative.Types/index.js";
import * as Partial from "../Partial/index.js";
import * as Test$dSpec$dConfig from "../Test.Spec.Config/index.js";
import * as Test$dSpec$dRunner$dNode$dPersist from "../Test.Spec.Runner.Node.Persist/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const optional = /* #__PURE__ */ Data$dMaybe.optional(Options$dApplicative$dTypes.parserAlt);
const optional1 = /* #__PURE__ */ optional(Options$dApplicative$dTypes.parserApplicative);
const toSpecConfig = dictMonadAff => {
  const Monad0 = dictMonadAff.MonadEffect0().Monad0();
  const Applicative0 = Monad0.Applicative0();
  const Functor0 = Monad0.Bind1().Apply0().Functor0();
  const Applicative01 = Monad0.Applicative0();
  const Bind1 = Monad0.Bind1();
  return cfg => Bind1.bind(Functor0.map(Data$dArray.catMaybes)(Data$dTraversable.traversableArray.traverse(Applicative01)(Data$dTraversable.identity)([
    cfg.onlyFailures
      ? Functor0.map(names => {
          if (names.tag !== "Leaf") {
            return Data$dMaybe.$Maybe(
              "Just",
              tests => Data$dFunctor.arrayMap(Test$dSpec$dTree.mapTreeAnnotations(Data$dTuple.fst))(Data$dArray.mapMaybe(Test$dSpec$dTree.filterTree(v => {
                const $0 = v._1;
                const $1 = v._2;
                return v1 => {
                  const $2 = Data$dString$dCommon.joinWith(" ")([...Data$dArray.mapMaybe(Control$dSemigroupoid.composeImpl(v$1 => v$1.name)(Unsafe$dCoerce.unsafeCoerce))($1), $0]);
                  const go = go$a0$copy => {
                    let go$a0 = go$a0$copy, go$c = true, go$r;
                    while (go$c) {
                      const v$1 = go$a0;
                      if (v$1.tag === "Leaf") {
                        go$c = false;
                        go$r = false;
                        continue;
                      }
                      if (v$1.tag === "Node") {
                        const v1$1 = Data$dOrd.ordString.compare($2)(v$1._3);
                        if (v1$1 === "LT") {
                          go$a0 = v$1._5;
                          continue;
                        }
                        if (v1$1 === "GT") {
                          go$a0 = v$1._6;
                          continue;
                        }
                        if (v1$1 === "EQ") {
                          go$c = false;
                          go$r = true;
                          continue;
                        }
                      }
                      $runtime.fail();
                    }
                    return go$r;
                  };
                  return go(names);
                };
              }))(Test$dSpec$dTree.annotateWithPaths(tests)))
            );
          }
          return Data$dMaybe.Nothing;
        })(Functor0.map(Data$dMap.keys)(Functor0.map(Control$dSemigroupoid.composeImpl(Data$dMap$dInternal.filterWithKey(Data$dOrd.ordString))(Data$dFunction.const)(a => !a.success))(dictMonadAff.liftAff(Test$dSpec$dRunner$dNode$dPersist.lastPersistedResults))))
      : Applicative01.pure(Data$dMaybe.Nothing),
    Applicative0.pure(cfg.filter.tag === "Just"
      ? Data$dMaybe.$Maybe(
          "Just",
          tests => Data$dFunctor.arrayMap(Test$dSpec$dTree.mapTreeAnnotations(Data$dTuple.fst))(Data$dArray.mapMaybe(Test$dSpec$dTree.filterTree(v => {
            const $0 = v._1;
            const $1 = v._2;
            return v1 => cfg.filter._1(Data$dString$dCommon.joinWith(" ")([
              ...Data$dArray.mapMaybe(Control$dSemigroupoid.composeImpl(v$1 => v$1.name)(Unsafe$dCoerce.unsafeCoerce))($1),
              $0
            ]));
          }))(Test$dSpec$dTree.annotateWithPaths(tests)))
        )
      : Data$dMaybe.Nothing)
  ])))(filters => Applicative0.pure({
    ...Test$dSpec$dConfig.defaultConfig,
    exit: false,
    failFast: cfg.failFast,
    filterTree: Data$dFoldable.foldlArray(v => v1 => tree => v(v1(tree)))(Test$dSpec$dConfig.defaultConfig.filterTree)(filters),
    timeout: cfg.timeout
  }));
};
const timeout = /* #__PURE__ */ (() => Options$dApplicative$dTypes.parserFunctor.map(v => {
  const t = v.tag === "Just" ? Data$dMaybe.$Maybe("Just", Data$dInt.toNumber(v._1) * 1000.0) : Data$dMaybe.Nothing;
  return r => ({...r, timeout: t.tag === "Nothing" ? r.timeout : t});
})(optional(Options$dApplicative$dTypes.parserApplicative)(Options$dApplicative$dBuilder.option(Options$dApplicative$dBuilder.int)(Data$dFoldable.foldableArray.foldMap(Options$dApplicative$dBuilder$dInternal.modMonoid)(Data$dFoldable.identity1)([
  Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.optionFieldsHasName.name)(Options$dApplicative$dTypes.OptLong))("timeout"),
  Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "SECONDS"})),
  Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("timeout for each individual test case, in seconds.")}))
])))))();
const onlyFailures = /* #__PURE__ */ (() => Options$dApplicative$dTypes.parserFunctor.map(v => r => ({...r, onlyFailures: r.onlyFailures || v}))(Options$dApplicative$dTypes.$Parser(
  "AltP",
  Options$dApplicative$dBuilder.flag$p(true)(Data$dFoldable.foldableArray.foldMap(Options$dApplicative$dBuilder$dInternal.modMonoid)(Data$dFoldable.identity1)([
    Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.flagFieldsHasName.name)(Options$dApplicative$dTypes.OptLong))("only-failures"),
    Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("run only tests that failed on previous run.")}))
  ])),
  Options$dApplicative$dTypes.$Parser("NilP", false)
)))();
const noTimeout = /* #__PURE__ */ (() => Options$dApplicative$dTypes.parserFunctor.map(v => {
  if (v) { return v1 => ({...v1, timeout: Data$dMaybe.Nothing}); }
  return x => x;
})(Options$dApplicative$dTypes.$Parser(
  "AltP",
  Options$dApplicative$dBuilder.flag$p(true)(Data$dFoldable.foldableArray.foldMap(Options$dApplicative$dBuilder$dInternal.modMonoid)(Data$dFoldable.identity1)([
    Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.flagFieldsHasName.name)(Options$dApplicative$dTypes.OptLong))("no-timeout"),
    Options$dApplicative$dBuilder$dInternal.optionMod(p => (
      {...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("each individual test case is allowed to run for as long as it wants.")}
    ))
  ])),
  Options$dApplicative$dTypes.$Parser("NilP", false)
)))();
const filterByRegex = /* #__PURE__ */ (() => Options$dApplicative$dTypes.parserFunctor.map(v => {
  const f = v.tag === "Just"
    ? Data$dMaybe.$Maybe(
        "Just",
        (() => {
          const v1 = Data$dString$dRegex.regex(v._1)(Data$dString$dRegex$dFlags.ignoreCase);
          if (v1.tag === "Left") { return Partial._crashWith("Invalid regex: " + v1._1); }
          if (v1.tag === "Right") { return Data$dString$dRegex.test(v1._1); }
          $runtime.fail();
        })()
      )
    : Data$dMaybe.Nothing;
  return r => ({...r, filter: f.tag === "Nothing" ? r.filter : f});
})(optional1(Options$dApplicative$dBuilder.option(Options$dApplicative$dTypes.readerAsk)(Data$dFoldable.foldableArray.foldMap(Options$dApplicative$dBuilder$dInternal.modMonoid)(Data$dFoldable.identity1)([
  Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.optionFieldsHasName.name)(Options$dApplicative$dTypes.OptLong))("example-matches"),
  Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.optionFieldsHasName.name)(Options$dApplicative$dTypes.OptShort))("E"),
  Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "REGEX"})),
  Options$dApplicative$dBuilder$dInternal.optionMod(p => (
    {
      ...p,
      propHelp: Options$dApplicative$dHelp$dChunk.paragraph("\n        run only tests whose full names match the given regex.\n        This will unapologetically crash if the provided regex doesn't compile.\n        The regex is case-insensitive.\n      ")
    }
  ))
])))))();
const filterByName = /* #__PURE__ */ (() => Options$dApplicative$dTypes.parserFunctor.map(v => {
  const f = v.tag === "Just"
    ? Data$dMaybe.$Maybe(
        "Just",
        Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Data$dMaybe.isJust)(Data$dString$dCodeUnits.indexOf(Data$dString$dCommon.toLower(v._1))))(Data$dString$dCommon.toLower)
      )
    : Data$dMaybe.Nothing;
  return r => ({...r, filter: f.tag === "Nothing" ? r.filter : f});
})(optional1(Options$dApplicative$dBuilder.option(Options$dApplicative$dTypes.readerAsk)(Data$dFoldable.foldableArray.foldMap(Options$dApplicative$dBuilder$dInternal.modMonoid)(Data$dFoldable.identity1)([
  Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.optionFieldsHasName.name)(Options$dApplicative$dTypes.OptLong))("example"),
  Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.optionFieldsHasName.name)(Options$dApplicative$dTypes.OptShort))("e"),
  Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "TEXT"})),
  Options$dApplicative$dBuilder$dInternal.optionMod(p => (
    {...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("run only tests whose full names contain the given text. Matching is case-sensitive.")}
  ))
])))))();
const nextFailure = /* #__PURE__ */ (() => Options$dApplicative$dTypes.parserFunctor.map(v => r => ({...r, failFast: r.failFast || v, onlyFailures: r.onlyFailures || v}))(Options$dApplicative$dTypes.$Parser(
  "AltP",
  Options$dApplicative$dBuilder.flag$p(true)(Data$dFoldable.foldableArray.foldMap(Options$dApplicative$dBuilder$dInternal.modMonoid)(Data$dFoldable.identity1)([
    Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.flagFieldsHasName.name)(Options$dApplicative$dTypes.OptShort))("n"),
    Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.flagFieldsHasName.name)(Options$dApplicative$dTypes.OptLong))("next-failure"),
    Options$dApplicative$dBuilder$dInternal.optionMod(p => (
      {...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("\n        run only failed tests and stop on first failure.\n        Equivalent to --fail-fast --only-failures")}
    ))
  ])),
  Options$dApplicative$dTypes.$Parser("NilP", false)
)))();
const failFast = /* #__PURE__ */ (() => Options$dApplicative$dTypes.parserFunctor.map(v => r => ({...r, failFast: r.failFast || v}))(Options$dApplicative$dTypes.$Parser(
  "AltP",
  Options$dApplicative$dBuilder.flag$p(true)(Data$dFoldable.foldableArray.foldMap(Options$dApplicative$dBuilder$dInternal.modMonoid)(Data$dFoldable.identity1)([
    Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.flagFieldsHasName.name)(Options$dApplicative$dTypes.OptLong))("fail-fast"),
    Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph("stop the run after first failure")}))
  ])),
  Options$dApplicative$dTypes.$Parser("NilP", false)
)))();
const emptyOptionParser = /* #__PURE__ */ Options$dApplicative$dTypes.$Parser("NilP", x => x);
const defaultConfig = {failFast: false, onlyFailures: false, filter: Data$dMaybe.Nothing, timeout: /* #__PURE__ */ Data$dMaybe.$Maybe("Just", 10000.0)};
const commandLineOptionParsers = [failFast, onlyFailures, nextFailure, filterByName, filterByRegex, timeout, noTimeout];
const combineOptionParsers = a => b => Options$dApplicative$dTypes.$Parser(
  "MultP",
  Options$dApplicative$dTypes.$MultPE(Options$dApplicative$dTypes.parserFunctor.map(Control$dSemigroupoid.semigroupoidFn.compose)(a), b)
);
const optionParser = options => Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder.header("PureScript Spec test runner for Node"))(Options$dApplicative$dBuilder.fullDesc)({
  infoParser: Options$dApplicative$dTypes.$Parser(
    "MultP",
    Options$dApplicative$dTypes.$MultPE(Options$dApplicative$dExtra.helper, Data$dFoldable.foldlArray(combineOptionParsers)(emptyOptionParser)(options))
  ),
  infoFullDesc: true,
  infoProgDesc: Data$dMaybe.Nothing,
  infoHeader: Data$dMaybe.Nothing,
  infoFooter: Data$dMaybe.Nothing,
  infoFailureCode: ExitCodes.Error,
  infoPolicy: Options$dApplicative$dTypes.Intersperse
});
const fromCommandLine$p = dictMonadEffect => {
  const Functor0 = dictMonadEffect.Monad0().Bind1().Apply0().Functor0();
  return defaultCfg => options => Functor0.map(f => f(defaultCfg))(dictMonadEffect.liftEffect((() => {
    const $0 = {...Options$dApplicative$dBuilder.defaultPrefs, prefShowHelpOnError: true};
    const $1 = optionParser(options);
    return () => {
      const a$p = Options$dApplicative$dExtra.getArgs();
      return Options$dApplicative$dExtra.handleParseResult(Options$dApplicative$dExtra.execParserPure($0)($1)(a$p))();
    };
  })()));
};
const fromCommandLine = dictMonadEffect => fromCommandLine$p(dictMonadEffect)(defaultConfig)(commandLineOptionParsers);
export {
  combineOptionParsers,
  commandLineOptionParsers,
  defaultConfig,
  emptyOptionParser,
  failFast,
  filterByName,
  filterByRegex,
  fromCommandLine,
  fromCommandLine$p,
  nextFailure,
  noTimeout,
  onlyFailures,
  optionParser,
  optional,
  optional1,
  timeout,
  toSpecConfig
};
