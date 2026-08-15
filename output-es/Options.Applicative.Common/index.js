import * as $runtime from "../runtime.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Options$dApplicative$dInternal from "../Options.Applicative.Internal/index.js";
import * as Options$dApplicative$dInternal$dUtils from "../Options.Applicative.Internal.Utils/index.js";
import * as Options$dApplicative$dTypes from "../Options.Applicative.Types/index.js";
const $OptWord = (_1, _2) => ({tag: "OptWord", _1, _2});
const fromFoldable = $0 => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr, $0);
const OptWord = value0 => value1 => $OptWord(value0, value1);
const simplify = v => {
  if (v.tag === "Leaf") { return Options$dApplicative$dTypes.$OptTree("Leaf", v._1); }
  if (v.tag === "MultNode") {
    const v1 = Control$dBind.arrayBind(v._1)(Control$dSemigroupoid.composeImpl(v1 => {
      if (v1.tag === "MultNode") { return v1._1; }
      return [v1];
    })(simplify));
    if (v1.length === 1) { return v1[0]; }
    return Options$dApplicative$dTypes.$OptTree("MultNode", v1);
  }
  if (v.tag === "AltNode") {
    const v1 = Control$dBind.arrayBind(v._1)(Control$dSemigroupoid.composeImpl(v1 => {
      if (v1.tag === "AltNode") { return v1._1; }
      if (v1.tag === "MultNode" && v1._1.length === 0) { return []; }
      return [v1];
    })(simplify));
    if (v1.length === 0) { return Options$dApplicative$dTypes.$OptTree("MultNode", []); }
    if (v1.length === 1) { return v1[0]; }
    return Options$dApplicative$dTypes.$OptTree("AltNode", v1);
  }
  $runtime.fail();
};
const showOption = v => {
  if (v.tag === "OptLong") { return "--" + v._1; }
  if (v.tag === "OptShort") { return Data$dString$dCodeUnits.fromCharArray(["-", v._1]); }
  $runtime.fail();
};
const parseWord = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => {
  if (v.tag === "Cons" && v._1 === "-") {
    if (v._2.tag === "Cons" && v._2._1 === "-") {
      return Data$dMaybe.$Maybe(
        "Just",
        (() => {
          const v2 = Data$dList.span(v3 => v3 !== "=")(v._2._2);
          if (v2.rest.tag === "Nil") {
            return $OptWord(
              Options$dApplicative$dTypes.$OptName("OptLong", Data$dString$dCodeUnits.fromCharArray(Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr, v._2._2))),
              Data$dMaybe.Nothing
            );
          }
          if (v2.rest.tag === "Cons") {
            return $OptWord(
              Options$dApplicative$dTypes.$OptName("OptLong", Data$dString$dCodeUnits.fromCharArray(Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableList.foldr, v2.init))),
              Data$dMaybe.$Maybe("Just", Control$dSemigroupoid.composeImpl(Data$dString$dCodeUnits.fromCharArray)(fromFoldable)(v2.rest._2))
            );
          }
          $runtime.fail();
        })()
      );
    }
    if (v._2.tag === "Nil") { return Data$dMaybe.Nothing; }
    if (v._2.tag === "Cons") {
      return Data$dMaybe.$Maybe(
        "Just",
        $OptWord(
          Options$dApplicative$dTypes.$OptName("OptShort", v._2._1),
          (() => {
            const $0 = Control$dSemigroupoid.composeImpl(Data$dString$dCodeUnits.fromCharArray)(fromFoldable);
            if (v._2._2.tag !== "Nil") { return Data$dMaybe.$Maybe("Just", $0(v._2._2)); }
            return Data$dMaybe.Nothing;
          })()
        )
      );
    }
    $runtime.fail();
  }
  return Data$dMaybe.Nothing;
})(/* #__PURE__ */ Data$dFoldable.foldrArray(Data$dList$dTypes.Cons)(Data$dList$dTypes.Nil)))(Data$dString$dCodeUnits.toCharArray);
const optionNames = v => {
  if (v.tag === "OptReader") { return v._1; }
  if (v.tag === "FlagReader") { return v._1; }
  return [];
};
const liftOpt = Options$dApplicative$dTypes.OptP;
const isOptionPrefix = v => v1 => {
  if (v.tag === "OptShort") { return v1.tag === "OptShort" && v._1 === v1._1; }
  return v.tag === "OptLong" && v1.tag === "OptLong" && Options$dApplicative$dInternal$dUtils.startsWith(v._1)(v1._1);
};
const optMatches = dictMonadP => {
  const Monad0 = dictMonadP.Monad0();
  const bindStateT = Control$dMonad$dState$dTrans.bindStateT(Monad0);
  const monadStateStateT = Control$dMonad$dState$dTrans.monadStateStateT(Monad0);
  const $$get = monadStateStateT.state(s => Data$dTuple.$Tuple(s, s));
  const Monad01 = dictMonadP.Monad0();
  const monadStateStateT1 = Control$dMonad$dState$dTrans.monadStateStateT(Monad0);
  const Bind1 = Monad0.Bind1();
  const applicativeStateT = Control$dMonad$dState$dTrans.applicativeStateT(Monad0);
  return disambiguate => opt => v => {
    const has_name = a => {
      if (disambiguate) {
        return Data$dFoldable.foldableArray.foldMap((() => {
          const semigroupDisj1 = {append: v$1 => v1 => v$1 || v1};
          return {mempty: false, Semigroup0: () => semigroupDisj1};
        })())(isOptionPrefix(a));
      }
      return Data$dFoldable.elem(Data$dFoldable.foldableArray)(Options$dApplicative$dTypes.optNameEq)(a);
    };
    if (opt.tag === "OptReader") {
      const $0 = has_name(v._1)(opt._1) ? Data$dMaybe.$Maybe("Just", undefined) : Data$dMaybe.Nothing;
      if ($0.tag === "Just") {
        return Data$dMaybe.$Maybe(
          "Just",
          bindStateT.bind($$get)(args => {
            const missing_arg = dictMonadP.missingArgP(opt._3(showOption(v._1)))(opt._2.crCompleter);
            return bindStateT.bind((() => {
              if (v._2.tag === "Nothing") {
                if (args.tag === "Nil") {
                  const Bind1$1 = Monad01.Bind1();
                  return s => Bind1$1.bind(missing_arg)(x => Monad01.Applicative0().pure(Data$dTuple.$Tuple(x, s)));
                }
                if (args.tag === "Cons") { return Control$dMonad$dState$dTrans.applicativeStateT(Monad0).pure(Data$dTuple.$Tuple(args._1, args._2)); }
                $runtime.fail();
              }
              if (v._2.tag === "Just") { return Control$dMonad$dState$dTrans.applicativeStateT(Monad0).pure(Data$dTuple.$Tuple(v._2._1, args)); }
              $runtime.fail();
            })())(v1 => {
              const $1 = v1._1;
              const $2 = v1._2;
              return bindStateT.bind(monadStateStateT1.state(v$1 => Data$dTuple.$Tuple(undefined, $2)))(() => {
                const $3 = Options$dApplicative$dInternal.runReadM(dictMonadP)(Options$dApplicative$dInternal.withReadM(msg => "option " + showOption(v._1) + ": " + msg)(opt._2.crReader))($1);
                return s => Bind1.bind($3)(x => Monad0.Applicative0().pure(Data$dTuple.$Tuple(x, s)));
              });
            });
          })
        );
      }
      if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    }
    if (
      opt.tag === "FlagReader" && has_name(v._1)(opt._1) && (
        (() => {
          if (v._1.tag === "OptShort") { return true; }
          if (v._1.tag === "OptLong") { return false; }
          $runtime.fail();
        })() || (() => {
          if (v._2.tag === "Nothing") { return true; }
          if (v._2.tag === "Just") { return false; }
          $runtime.fail();
        })()
      )
    ) {
      return Data$dMaybe.$Maybe(
        "Just",
        bindStateT.bind($$get)(args => bindStateT.bind((() => {
          const $0 = Control$dSemigroupoid.composeImpl(a => Data$dList$dTypes.$List("Cons", a, args))(Data$dString$dCodeUnits.fromCharArray);
          const $1 = Control$dSemigroupoid.composeImpl(s => ["-", ...s])(Data$dString$dCodeUnits.toCharArray);
          const $2 = v._2.tag === "Just" ? $0($1(v._2._1)) : args;
          return monadStateStateT.state(v$1 => Data$dTuple.$Tuple(undefined, $2));
        })())(() => applicativeStateT.pure(opt._2)))
      );
    }
    return Data$dMaybe.Nothing;
  };
};
const evalParser = v => {
  if (v.tag === "NilP") { return Data$dMaybe.$Maybe("Just", v._1); }
  if (v.tag === "OptP") { return Data$dMaybe.Nothing; }
  if (v.tag === "MultP") {
    const $0 = evalParser(v._1._1);
    const $1 = evalParser(v._1._2);
    if ($0.tag === "Just") {
      if ($1.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1($1._1)); }
      return Data$dMaybe.Nothing;
    }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  }
  if (v.tag === "AltP") {
    const $0 = evalParser(v._1);
    const $1 = evalParser(v._2);
    if ($0.tag === "Nothing") { return $1; }
    return $0;
  }
  if (v.tag === "BindP") {
    return Control$dMonad$dFree.resumePrime(p => k => {
      const $0 = evalParser(p);
      const $1 = Control$dSemigroupoid.composeImpl(evalParser)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dTypes.BindP)(k));
      if ($0.tag === "Just") { return $1($0._1); }
      if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })(Data$dMaybe.Just)(v._1);
  }
  $runtime.fail();
};
const searchParser = dictMonad => {
  const empty = Options$dApplicative$dInternal.nondetTPlus(dictMonad).empty;
  const nondetTFunctor = Options$dApplicative$dInternal.nondetTFunctor(dictMonad);
  const nondetTPlus = Options$dApplicative$dInternal.nondetTPlus(dictMonad);
  return v => v1 => {
    if (v1.tag === "NilP") { return empty; }
    if (v1.tag === "OptP") { return v(v1._1); }
    if (v1.tag === "MultP") {
      const $0 = v1._1._1;
      const $1 = v1._1._2;
      return Options$dApplicative$dInternal.nondetTAltOp(dictMonad)(nondetTFunctor.map(p1$p => Options$dApplicative$dTypes.$Parser(
        "MultP",
        Options$dApplicative$dTypes.$MultPE(p1$p, $1)
      ))(searchParser(dictMonad)(v)($0)))(nondetTFunctor.map(p2$p => Options$dApplicative$dTypes.$Parser("MultP", Options$dApplicative$dTypes.$MultPE($0, p2$p)))(searchParser(dictMonad)(v)($1)));
    }
    if (v1.tag === "AltP") { return Data$dFoldable.foldrArray(nondetTPlus.Alt0().alt)(nondetTPlus.empty)([searchParser(dictMonad)(v)(v1._1), searchParser(dictMonad)(v)(v1._2)]); }
    if (v1.tag === "BindP") {
      return Control$dMonad$dFree.resumePrime(p => k => Data$dFoldable.foldrArray(nondetTPlus.Alt0().alt)(nondetTPlus.empty)([
        nondetTFunctor.map(p$p => Options$dApplicative$dTypes.$Parser("BindP", Control$dMonad$dFree.bindImpl(Control$dMonad$dFree.liftF(p$p))(k)))(searchParser(dictMonad)(v)(p)),
        (() => {
          const v2 = evalParser(p);
          if (v2.tag === "Nothing") { return empty; }
          if (v2.tag === "Just") { return searchParser(dictMonad)(v)(Options$dApplicative$dTypes.$Parser("BindP", k(v2._1))); }
          $runtime.fail();
        })()
      ]))((() => {
        const $0 = nondetTPlus.empty;
        return v$1 => $0;
      })())(v1._1);
    }
    $runtime.fail();
  };
};
const searchOpt = dictMonadP => {
  const Monad0 = dictMonadP.Monad0();
  const monadStateT = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(Monad0), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(Monad0)};
  const monadStateT1 = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(Monad0), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(Monad0)};
  const lift2 = Options$dApplicative$dInternal.nondetTMonadTrans.lift(monadStateT1);
  const $0 = dictMonadP.Alt1().Functor0();
  const empty = Options$dApplicative$dInternal.nondetTPlus(monadStateT1).empty;
  return pprefs => w => searchParser(monadStateT)(opt => {
    const v = optMatches(dictMonadP)(pprefs.prefDisambiguate && Options$dApplicative$dTypes.optVisibility(opt) !== "Internal")(opt.optMain)(w);
    if (v.tag === "Just") { return lift2(s => $0.map(v1 => Data$dTuple.$Tuple(Options$dApplicative$dTypes.$Parser("NilP", v1._1), v1._2))(v._1(s))); }
    if (v.tag === "Nothing") { return empty; }
    $runtime.fail();
  });
};
const stepParser = dictMonadP => {
  const nondetTAlt = Options$dApplicative$dInternal.nondetTAlt((() => {
    const $0 = dictMonadP.Monad0();
    return {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT($0), Bind1: () => Control$dMonad$dState$dTrans.bindStateT($0)};
  })());
  return v => v1 => v2 => v3 => {
    if (v1 === "AllPositionals") { return searchArg(dictMonadP)(v)(v2)(v3); }
    if (v1 === "ForwardOptions") {
      const v4 = parseWord(v2);
      if (v4.tag === "Just") { return nondetTAlt.alt(searchOpt(dictMonadP)(v)(v4._1)(v3))(searchArg(dictMonadP)(v)(v2)(v3)); }
      if (v4.tag === "Nothing") { return searchArg(dictMonadP)(v)(v2)(v3); }
      $runtime.fail();
    }
    const v4 = parseWord(v2);
    if (v4.tag === "Just") { return searchOpt(dictMonadP)(v)(v4._1)(v3); }
    if (v4.tag === "Nothing") { return searchArg(dictMonadP)(v)(v2)(v3); }
    $runtime.fail();
  };
};
const searchArg = dictMonadP => {
  const Monad0 = dictMonadP.Monad0();
  const monadStateT = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(Monad0), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(Monad0)};
  const monadStateT1 = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(Monad0), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(Monad0)};
  const nondetTBind = Options$dApplicative$dInternal.nondetTBind(monadStateT1);
  const nondetTApplicative = Options$dApplicative$dInternal.nondetTApplicative(monadStateT1);
  const cut = Options$dApplicative$dInternal.cut(monadStateT1);
  const lift2 = Options$dApplicative$dInternal.nondetTMonadTrans.lift(monadStateT1);
  const bindStateT = Control$dMonad$dState$dTrans.bindStateT(Monad0);
  const applyStateT = Control$dMonad$dState$dTrans.applyStateT(Monad0);
  const $$get = Control$dMonad$dState$dTrans.monadStateStateT(Monad0).state(s => Data$dTuple.$Tuple(s, s));
  const monadStateStateT = Control$dMonad$dState$dTrans.monadStateStateT(Monad0);
  const $0 = dictMonadP.Alt1().Functor0();
  const Bind1 = Monad0.Bind1();
  const lift3 = m => s => Bind1.bind(m)(x => Monad0.Applicative0().pure(Data$dTuple.$Tuple(x, s)));
  const Apply0 = Monad0.Bind1().Apply0();
  const exitContext = dictMonadP.exitContext;
  const nondetTFunctor = Options$dApplicative$dInternal.nondetTFunctor(monadStateT1);
  const lift4 = Options$dApplicative$dInternal.nondetTMonadTrans.lift(monadStateT1);
  const Bind1$1 = Monad0.Bind1();
  const empty = Options$dApplicative$dInternal.nondetTPlus(monadStateT1).empty;
  return prefs => arg => searchParser(monadStateT)(opt => nondetTBind.bind(opt.optMain.tag === "ArgReader" ? cut : nondetTApplicative.pure())(() => {
    if (opt.optMain.tag === "CmdReader") {
      const $1 = opt.optMain._3(arg);
      if ($1.tag === "Just") {
        if (prefs.prefBacktrack === "NoBacktrack") {
          const $2 = $1._1;
          return lift2(bindStateT.bind(applyStateT.apply(applyStateT.Functor0().map(Data$dFunction.const)($$get))(monadStateStateT.state(v => Data$dTuple.$Tuple(
            undefined,
            Data$dList$dTypes.Nil
          ))))(args => Control$dSemigroupoid.composeImpl(v => s => $0.map(v1 => Data$dTuple.$Tuple(Options$dApplicative$dTypes.$Parser("NilP", v1._1), v1._2))(v(s)))(lift3)(Apply0.apply(Apply0.Functor0().map(Data$dFunction.const)(Apply0.apply(Apply0.Functor0().map(v => x => x)(dictMonadP.enterContext(arg)($2)))(runParserInfo(dictMonadP)($2)(args))))(exitContext))));
        }
        if (prefs.prefBacktrack === "Backtrack") {
          const $2 = $1._1;
          return Control$dSemigroupoid.composeImpl(nondetTFunctor.map(Options$dApplicative$dTypes.NilP))(Control$dSemigroupoid.composeImpl(lift4)(Control$dMonad$dState$dTrans.StateT))(args => Apply0.apply(Apply0.Functor0().map(Data$dFunction.const)(Apply0.apply(Apply0.Functor0().map(v => x => x)(dictMonadP.enterContext(arg)($2)))(runParser(dictMonadP)($2.infoPolicy)(Options$dApplicative$dTypes.CmdStart)($2.infoParser)(args))))(exitContext));
        }
        if (prefs.prefBacktrack === "SubparserInline") {
          const $2 = $1._1;
          return lift2(bindStateT.bind((() => {
            const $3 = dictMonadP.enterContext(arg)($2);
            return s => Bind1$1.bind($3)(x => Monad0.Applicative0().pure(Data$dTuple.$Tuple(x, s)));
          })())(() => Control$dMonad$dState$dTrans.applicativeStateT(Monad0).pure($2.infoParser)));
        }
        $runtime.fail();
      }
      if ($1.tag === "Nothing") { return empty; }
      $runtime.fail();
    }
    if (opt.optMain.tag === "ArgReader") {
      return Control$dSemigroupoid.composeImpl(nondetTFunctor.map(Options$dApplicative$dTypes.NilP))(Control$dSemigroupoid.composeImpl(lift4)(lift3))(Options$dApplicative$dInternal.runReadM(dictMonadP)(opt.optMain._1.crReader)(arg));
    }
    return empty;
  }));
};
const runParserInfo = dictMonadP => i => runParserFully(dictMonadP)(i.infoPolicy)(i.infoParser);
const runParserFully = dictMonadP => {
  const Monad0 = dictMonadP.Monad0();
  const Bind1 = Monad0.Bind1();
  const Applicative0 = Monad0.Applicative0();
  return policy => p => args => Bind1.bind(runParser(dictMonadP)(policy)(Options$dApplicative$dTypes.CmdStart)(p)(args))(v => {
    if (v._2.tag === "Nil") { return Applicative0.pure(v._1); }
    if (v._2.tag === "Cons") {
      return dictMonadP.errorP(Options$dApplicative$dTypes.$ParseError(
        "UnexpectedError",
        v._2._1,
        Options$dApplicative$dTypes.$SomeParser(Options$dApplicative$dTypes.$Parser("NilP", undefined))
      ));
    }
    $runtime.fail();
  });
};
const runParser = dictMonadP => {
  const Monad0 = dictMonadP.Monad0();
  const monadStateT = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(Monad0), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(Monad0)};
  const Bind1 = Monad0.Bind1();
  const getPrefs = dictMonadP.getPrefs;
  return policy => isCmdStart => p => args => {
    const $0 = evalParser(p);
    const result = $0.tag === "Just" ? Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple($0._1, args)) : Data$dMaybe.Nothing;
    if (args.tag === "Nil") { return dictMonadP.exitP(isCmdStart)(policy)(p)(result); }
    if (args.tag === "Cons") {
      if (args._1 === "--" && policy !== "AllPositionals") {
        return runParser(dictMonadP)(Options$dApplicative$dTypes.AllPositionals)(Options$dApplicative$dTypes.CmdCont)(p)(args._2);
      }
      const $1 = args._1;
      const $2 = args._2;
      return Bind1.bind(getPrefs)(prefs => Bind1.bind(Control$dSemigroupoid.composeImpl(v => v($2))(Options$dApplicative$dInternal.disamb(monadStateT)(!prefs.prefDisambiguate))(stepParser(dictMonadP)(prefs)(policy)($1)(p)))(v => {
        if (v._1.tag === "Nothing") {
          const pure2 = dictMonadP.Monad0().Applicative0().pure;
          const $3 = dictMonadP.errorP(Options$dApplicative$dTypes.$ParseError("UnexpectedError", $1, Options$dApplicative$dTypes.$SomeParser(p)));
          if (result.tag === "Nothing") { return $3; }
          if (result.tag === "Just") { return pure2(result._1); }
          $runtime.fail();
        }
        if (v._1.tag === "Just") {
          return runParser(dictMonadP)((() => {
            if (policy === "NoIntersperse") {
              if (
                (() => {
                  const $3 = parseWord($1);
                  if ($3.tag === "Nothing") { return false; }
                  if ($3.tag === "Just") { return true; }
                  $runtime.fail();
                })()
              ) {
                return Options$dApplicative$dTypes.NoIntersperse;
              }
              return Options$dApplicative$dTypes.AllPositionals;
            }
            return policy;
          })())(Options$dApplicative$dTypes.CmdCont)(v._1._1)(v._2);
        }
        $runtime.fail();
      }));
    }
    $runtime.fail();
  };
};
const treeMapParser = g => {
  const hasArg = v => {
    if (v.tag === "NilP") { return false; }
    if (v.tag === "OptP") { return v._1.optMain.tag === "ArgReader"; }
    if (v.tag === "MultP") { return hasArg(v._1._1) || hasArg(v._1._2); }
    if (v.tag === "AltP") { return hasArg(v._1) || hasArg(v._2); }
    if (v.tag === "BindP") { return Control$dMonad$dFree.resumePrime(p => v1 => hasArg(p))(v$1 => false)(v._1); }
    $runtime.fail();
  };
  const go = v => v1 => v2 => v3 => v4 => {
    if (v4.tag === "NilP") { return Options$dApplicative$dTypes.$OptTree("MultNode", []); }
    if (v4.tag === "OptP") {
      if (Options$dApplicative$dTypes.optVisibility(v4._1) !== "Internal") {
        return Options$dApplicative$dTypes.$OptTree("Leaf", v3({hinfoMulti: v, hinfoDefault: v1, hinfoUnreachableArgs: v2})(v4._1));
      }
      return Options$dApplicative$dTypes.$OptTree("MultNode", []);
    }
    if (v4.tag === "MultP") { return Options$dApplicative$dTypes.$OptTree("MultNode", [go(v)(v1)(v2)(v3)(v4._1._1), go(v)(v1)(v2 || hasArg(v4._1._1))(v3)(v4._1._2)]); }
    if (v4.tag === "AltP") {
      const $0 = evalParser(v4._1);
      const d$p = v1 || (() => {
        const $1 = evalParser(v4._2);
        return (() => {
          if ($0.tag === "Nothing") { return false; }
          if ($0.tag === "Just") { return true; }
          $runtime.fail();
        })() || (() => {
          if ($1.tag === "Nothing") { return false; }
          if ($1.tag === "Just") { return true; }
          $runtime.fail();
        })();
      })();
      return Options$dApplicative$dTypes.$OptTree("AltNode", [go(v)(d$p)(v2)(v3)(v4._1), go(v)(d$p)(v2)(v3)(v4._2)]);
    }
    if (v4.tag === "BindP") {
      return Control$dMonad$dFree.resumePrime(p => k => {
        const go$p = go(true)(v1)(v2)(v3)(p);
        const v5 = evalParser(p);
        if (v5.tag === "Nothing") { return go$p; }
        if (v5.tag === "Just") { return Options$dApplicative$dTypes.$OptTree("MultNode", [go$p, go(true)(v1)(v2)(v3)(Options$dApplicative$dTypes.$Parser("BindP", k(v5._1)))]); }
        $runtime.fail();
      })(v$1 => Options$dApplicative$dTypes.$OptTree("MultNode", []))(v4._1);
    }
    $runtime.fail();
  };
  return Control$dSemigroupoid.composeImpl(simplify)(go(false)(false)(false)(g));
};
const mapParser = f => {
  const flatten = v => {
    if (v.tag === "Leaf") { return [v._1]; }
    if (v.tag === "MultNode") { return Control$dBind.arrayBind(v._1)(flatten); }
    if (v.tag === "AltNode") { return Control$dBind.arrayBind(v._1)(flatten); }
    $runtime.fail();
  };
  return Control$dSemigroupoid.composeImpl(flatten)(treeMapParser(f));
};
export {
  $OptWord,
  OptWord,
  evalParser,
  fromFoldable,
  isOptionPrefix,
  liftOpt,
  mapParser,
  optMatches,
  optionNames,
  parseWord,
  runParser,
  runParserFully,
  runParserInfo,
  searchArg,
  searchOpt,
  searchParser,
  showOption,
  simplify,
  stepParser,
  treeMapParser
};
