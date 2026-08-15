import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dFree from "../Control.Monad.Free/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Options$dApplicative$dHelp$dChunk from "../Options.Applicative.Help.Chunk/index.js";
import * as Text$dPrettyPrint$dLeijen from "../Text.PrettyPrint.Leijen/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $ArgPolicy = tag => tag;
const $Backtracking = tag => tag;
const $Context = (_1, _2) => ({tag: "Context", _1, _2});
const $IsCmdStart = tag => tag;
const $MultPE = (_1, _2) => ({tag: "MultPE", _1, _2});
const $OptName = (tag, _1) => ({tag, _1});
const $OptReader = (tag, _1, _2, _3) => ({tag, _1, _2, _3});
const $OptTree = (tag, _1) => ({tag, _1});
const $OptVisibility = tag => tag;
const $ParseError = (tag, _1, _2) => ({tag, _1, _2});
const $Parser = (tag, _1, _2) => ({tag, _1, _2});
const $ParserResult = (tag, _1) => ({tag, _1});
const $SomeParser = _1 => ({tag: "SomeParser", _1});
const functorReaderT = {
  map: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dReader$dTrans.mapReaderT)(f => m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
    $runtime.fail();
  })
};
const applyReaderT = /* #__PURE__ */ Control$dMonad$dReader$dTrans.applyReaderT(/* #__PURE__ */ Control$dMonad$dExcept$dTrans.applyExceptT(Data$dIdentity.monadIdentity));
const bindReaderT = /* #__PURE__ */ Control$dMonad$dReader$dTrans.bindReaderT(/* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity));
const LeafIsSymbol = {reflectSymbol: () => "Leaf"};
const MultNodeIsSymbol = {reflectSymbol: () => "MultNode"};
const AltNodeIsSymbol = {reflectSymbol: () => "AltNode"};
const showMaybe = {
  show: v => {
    if (v.tag === "Just") { return "(Just " + Data$dShow.showStringImpl(v._1) + ")"; }
    if (v.tag === "Nothing") { return "Nothing"; }
    $runtime.fail();
  }
};
const SuccessIsSymbol = {reflectSymbol: () => "Success"};
const ParserFailure = x => x;
const Internal = /* #__PURE__ */ $OptVisibility("Internal");
const Hidden = /* #__PURE__ */ $OptVisibility("Hidden");
const Visible = /* #__PURE__ */ $OptVisibility("Visible");
const Leaf = value0 => $OptTree("Leaf", value0);
const MultNode = value0 => $OptTree("MultNode", value0);
const AltNode = value0 => $OptTree("AltNode", value0);
const OptProperties = x => x;
const OptShort = value0 => $OptName("OptShort", value0);
const OptLong = value0 => $OptName("OptLong", value0);
const OptHelpInfo = x => x;
const CmdStart = /* #__PURE__ */ $IsCmdStart("CmdStart");
const CmdCont = /* #__PURE__ */ $IsCmdStart("CmdCont");
const CompletionResult = x => x;
const Success = value0 => $ParserResult("Success", value0);
const Failure = value0 => $ParserResult("Failure", value0);
const CompletionInvoked = value0 => $ParserResult("CompletionInvoked", value0);
const Completer = x => x;
const Backtrack = /* #__PURE__ */ $Backtracking("Backtrack");
const NoBacktrack = /* #__PURE__ */ $Backtracking("NoBacktrack");
const SubparserInline = /* #__PURE__ */ $Backtracking("SubparserInline");
const ParserPrefs = x => x;
const Intersperse = /* #__PURE__ */ $ArgPolicy("Intersperse");
const NoIntersperse = /* #__PURE__ */ $ArgPolicy("NoIntersperse");
const AllPositionals = /* #__PURE__ */ $ArgPolicy("AllPositionals");
const ForwardOptions = /* #__PURE__ */ $ArgPolicy("ForwardOptions");
const ParserInfo = x => x;
const NilP = value0 => $Parser("NilP", value0);
const OptP = value0 => $Parser("OptP", value0);
const MultP = value0 => $Parser("MultP", value0);
const AltP = value0 => value1 => $Parser("AltP", value0, value1);
const BindP = value0 => $Parser("BindP", value0);
const Option = x => x;
const OptReader = value0 => value1 => value2 => $OptReader("OptReader", value0, value1, value2);
const FlagReader = value0 => value1 => $OptReader("FlagReader", value0, value1);
const ArgReader = value0 => $OptReader("ArgReader", value0);
const CmdReader = value0 => value1 => value2 => $OptReader("CmdReader", value0, value1, value2);
const CReader = x => x;
const ReadM = x => x;
const ErrorMsg = value0 => $ParseError("ErrorMsg", value0);
const InfoMsg = value0 => $ParseError("InfoMsg", value0);
const ShowHelpText = /* #__PURE__ */ $ParseError("ShowHelpText");
const MissingError = value0 => value1 => $ParseError("MissingError", value0, value1);
const ExpectsArgError = value0 => $ParseError("ExpectsArgError", value0);
const UnexpectedError = value0 => value1 => $ParseError("UnexpectedError", value0, value1);
const SomeParser = value0 => $SomeParser(value0);
const MultPE = value0 => value1 => $MultPE(value0, value1);
const Context = value0 => value1 => $Context(value0, value1);
const ParserM = x => x;
const readerAsk = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity).pure)();
const readerAbort = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(ReadM)(Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Control$dMonad$dReader$dTrans.ReaderT)(Data$dFunction.const))(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)))();
const readerError = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(readerAbort)(ErrorMsg);
const readMNewtype = {Coercible0: () => {}};
const readMFunctor = {map: f => v => functorReaderT.map(f)(v)};
const readMApply = {apply: v => v1 => applyReaderT.apply(v)(v1), Functor0: () => readMFunctor};
const readMBind = {bind: v => f => bindReaderT.bind(v)(Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(f)), Apply0: () => readMApply};
const readMApplicative = /* #__PURE__ */ (() => (
  {
    pure: Control$dSemigroupoid.composeImpl(ReadM)(Control$dMonad$dReader$dTrans.applicativeReaderT(Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity)).pure),
    Apply0: () => readMApply
  }
))();
const readMMonad = {Applicative0: () => readMApplicative, Bind1: () => readMBind};
const readMMonadFail = {throwError: readerError, Monad0: () => readMMonad};
const parserResultGeneric = {
  to: x => {
    if (x.tag === "Inl") { return $ParserResult("Success", x._1); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $ParserResult("Failure", x._1._1); }
      if (x._1.tag === "Inr") { return $ParserResult("CompletionInvoked", x._1._1); }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Success") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "Failure") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "CompletionInvoked") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
    $runtime.fail();
  }
};
const parserResultFunctor = {
  map: v => v1 => {
    if (v1.tag === "Success") { return $ParserResult("Success", v(v1._1)); }
    if (v1.tag === "Failure") { return $ParserResult("Failure", v1._1); }
    if (v1.tag === "CompletionInvoked") { return $ParserResult("CompletionInvoked", v1._1); }
    $runtime.fail();
  }
};
const parserResultApply = {
  apply: v => v1 => {
    if (v.tag === "Success") {
      if (v1.tag === "Success") { return $ParserResult("Success", v._1(v1._1)); }
      if (v1.tag === "Failure") { return $ParserResult("Failure", v1._1); }
      if (v1.tag === "CompletionInvoked") { return $ParserResult("CompletionInvoked", v1._1); }
      $runtime.fail();
    }
    if (v.tag === "Failure") { return $ParserResult("Failure", v._1); }
    if (v.tag === "CompletionInvoked") { return $ParserResult("CompletionInvoked", v._1); }
    $runtime.fail();
  },
  Functor0: () => parserResultFunctor
};
const parserResultBind = {
  bind: v => v1 => {
    if (v.tag === "Success") { return v1(v._1); }
    if (v.tag === "Failure") { return $ParserResult("Failure", v._1); }
    if (v.tag === "CompletionInvoked") { return $ParserResult("CompletionInvoked", v._1); }
    $runtime.fail();
  },
  Apply0: () => parserResultApply
};
const parserResultApplicative = {pure: Success, Apply0: () => parserResultApply};
const parserResultMonad = {Applicative0: () => parserResultApplicative, Bind1: () => parserResultBind};
const parserPrefsNewtype = {Coercible0: () => {}};
const parserPrefsGeneric = {to: x => x, from: x => x};
const parserInfoNewtype = {Coercible0: () => {}};
const parserFailureShow = {show: v => "(ParserFailure <function>)"};
const parserFailureFunctor = {
  map: f => v => progn => {
    const v1 = v(progn);
    return Data$dTuple.$Tuple(f(v1._1), Data$dTuple.$Tuple(v1._2._1, Data$dTuple.$Tuple(v1._2._2._1, v1._2._2._2)));
  }
};
const parseErrorSemigroup = {append: v => m => m};
const altReaderT = /* #__PURE__ */ Control$dMonad$dReader$dTrans.altReaderT(/* #__PURE__ */ Control$dMonad$dExcept$dTrans.altExceptT(parseErrorSemigroup)(Data$dIdentity.monadIdentity));
const readMAlt = {alt: v => v1 => altReaderT.alt(v)(v1), Functor0: () => readMFunctor};
const overFailure = v => v1 => {
  if (v1.tag === "Failure") {
    return $ParserResult(
      "Failure",
      progn => {
        const v1$1 = v1._1(progn);
        return Data$dTuple.$Tuple(v(v1$1._1), Data$dTuple.$Tuple(v1$1._2._1, Data$dTuple.$Tuple(v1$1._2._2._1, v1$1._2._2._2)));
      }
    );
  }
  return v1;
};
const optional = dictAlt => {
  const Functor0 = dictAlt.Functor0();
  return dictApplicative => a => dictAlt.alt(Functor0.map(Data$dMaybe.Just)(a))(dictApplicative.pure(Data$dMaybe.Nothing));
};
const optionNewtype = {Coercible0: () => {}};
const optVisibilityGeneric = {
  to: x => {
    if (x.tag === "Inl") { return Internal; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return Hidden; }
      if (x._1.tag === "Inr") { return Visible; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "Internal") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "Hidden") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "Visible") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const optVisibilityShow = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Internal"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Hidden"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Visible"});
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"]((() => {
      if (x === "Internal") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
      if (x === "Hidden") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
      if (x === "Visible") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
      $runtime.fail();
    })());
  })()
};
const optVisibilityEq = {
  eq: x => y => {
    if (x === "Internal") { return y === "Internal"; }
    if (x === "Hidden") { return y === "Hidden"; }
    return x === "Visible" && y === "Visible";
  }
};
const optVisibilityOrd = {
  compare: x => y => {
    if (x === "Internal") {
      if (y === "Internal") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Internal") { return Data$dOrdering.GT; }
    if (x === "Hidden") {
      if (y === "Hidden") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Hidden") { return Data$dOrdering.GT; }
    if (x === "Visible" && y === "Visible") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => optVisibilityEq
};
const optTreeGeneric = {
  to: x => {
    if (x.tag === "Inl") { return $OptTree("Leaf", x._1); }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return $OptTree("MultNode", x._1._1); }
      if (x._1.tag === "Inr") { return $OptTree("AltNode", x._1._1); }
    }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "Leaf") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "MultNode") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
    if (x.tag === "AltNode") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
    $runtime.fail();
  }
};
const optTreeShow = dictShow => (
  {
    show: (() => {
      const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [dictShow.show(v)]})(LeafIsSymbol);
      const $1 = Data$dShow$dGeneric.genericShowConstructor((() => {
        const $1 = Data$dShow.showArrayImpl(optTreeShow(dictShow).show);
        return {genericShowArgs: v => [$1(v)]};
      })())(MultNodeIsSymbol);
      const $2 = (() => {
        const $2 = (() => {
          const $2 = Data$dShow$dGeneric.genericShowConstructor((() => {
            const $2 = Data$dShow.showArrayImpl(optTreeShow(dictShow).show);
            return {genericShowArgs: v => [$2(v)]};
          })())(AltNodeIsSymbol);
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return x => $2["genericShow'"]((() => {
        if (x.tag === "Leaf") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
        if (x.tag === "MultNode") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", x._1)); }
        if (x.tag === "AltNode") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", x._1)); }
        $runtime.fail();
      })());
    })()
  }
);
const optPropertiesShow = {
  show: v => "(OptProperties { propDescMod: " + showMaybe.show(v.propDescMod.tag === "Just" ? Data$dMaybe.$Maybe("Just", "<func>") : Data$dMaybe.Nothing) + ", propHelp: " + Options$dApplicative$dHelp$dChunk.chunkShow(Text$dPrettyPrint$dLeijen.docShow).show(v.propHelp) + ", propMetaVar: " + Data$dShow.showStringImpl(v.propMetaVar) + ", propShowDefault: " + showMaybe.show(v.propShowDefault) + ", propVisibility: " + optVisibilityShow.show(v.propVisibility) + " })"
};
const showRecord2 = {show: record => "{ optMain: " + Data$dShow.showStringImpl(record.optMain) + ", optProps: " + optPropertiesShow.show(record.optProps) + " }"};
const optionShow = {show: v => "(Option " + showRecord2.show({optProps: v.optProps, optMain: "<OptReader>"}) + ")"};
const optPropertiesNewtype = {Coercible0: () => {}};
const optShowDefault = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.propShowDefault)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.optProps)(Unsafe$dCoerce.unsafeCoerce)));
const optVisibility = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.propVisibility)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.optProps)(Unsafe$dCoerce.unsafeCoerce)));
const optNameGeneric = {
  to: x => {
    if (x.tag === "Inl") { return $OptName("OptShort", x._1); }
    if (x.tag === "Inr") { return $OptName("OptLong", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "OptShort") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "OptLong") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const optNameShow = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showCharImpl(v)]})({reflectSymbol: () => "OptShort"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [Data$dShow.showStringImpl(v)]})({reflectSymbol: () => "OptLong"});
    return x => {
      if (x.tag === "OptShort") { return $0["genericShow'"](x._1); }
      if (x.tag === "OptLong") { return $1["genericShow'"](x._1); }
      $runtime.fail();
    };
  })()
};
const optNameEq = {
  eq: x => y => {
    if (x.tag === "OptShort") { return y.tag === "OptShort" && x._1 === y._1; }
    return x.tag === "OptLong" && y.tag === "OptLong" && x._1 === y._1;
  }
};
const optNameOrd = {
  compare: x => y => {
    if (x.tag === "OptShort") {
      if (y.tag === "OptShort") { return Data$dOrd.ordChar.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "OptShort") { return Data$dOrdering.GT; }
    if (x.tag === "OptLong" && y.tag === "OptLong") { return Data$dOrd.ordString.compare(x._1)(y._1); }
    $runtime.fail();
  },
  Eq0: () => optNameEq
};
const optMetaVar = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.propMetaVar)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.optProps)(Unsafe$dCoerce.unsafeCoerce)));
const optHelpInfoGeneric = {to: x => x, from: x => x};
const optHelpInfoShow = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({
      genericShowArgs: v => [
        (v.hinfoDefault ? "{ hinfoDefault: true," : "{ hinfoDefault: false,") + (v.hinfoMulti ? " hinfoMulti: true" : " hinfoMulti: false") + ", hinfoUnreachableArgs: " + (v.hinfoUnreachableArgs
          ? "true"
          : "false") + " }"
      ]
    })({reflectSymbol: () => "OptHelpInfo"});
    return x => $0["genericShow'"](x);
  })()
};
const optHelpInfoEq = {eq: x => y => x.hinfoDefault === y.hinfoDefault && x.hinfoMulti === y.hinfoMulti && x.hinfoUnreachableArgs === y.hinfoUnreachableArgs};
const optHelp = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.propHelp)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.optProps)(Unsafe$dCoerce.unsafeCoerce)));
const optDescMod = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.propDescMod)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => v.optProps)(Unsafe$dCoerce.unsafeCoerce)));
const oneM = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(ParserM)(Control$dMonad$dFree.liftF);
const newtypeParserFailure = {Coercible0: () => {}};
const newtypeOptHelpInfo = {Coercible0: () => {}};
const newtypeCompletionResult = {Coercible0: () => {}};
const newtypeCompleter = {Coercible0: () => {}};
const newtypeCReader = {Coercible0: () => {}};
const mkCompleter = Completer;
const isCmdStartGeneric = {
  to: x => {
    if (x.tag === "Inl") { return CmdStart; }
    if (x.tag === "Inr") { return CmdCont; }
    $runtime.fail();
  },
  from: x => {
    if (x === "CmdStart") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "CmdCont") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments); }
    $runtime.fail();
  }
};
const isCmdStartShow = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "CmdStart"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "CmdCont"});
    return x => {
      if (x === "CmdStart") { return $0["genericShow'"](Data$dGeneric$dRep.NoArguments); }
      if (x === "CmdCont") { return $1["genericShow'"](Data$dGeneric$dRep.NoArguments); }
      $runtime.fail();
    };
  })()
};
const fromM = v => $Parser("BindP", v);
const completionResultShow = {show: v => "(CompletionResult <function>)"};
const genericShowSum = /* #__PURE__ */ (() => {
  const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => ["(ParserFailure <function>)"]})({reflectSymbol: () => "Failure"});
  const $1 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => ["(CompletionResult <function>)"]})({reflectSymbol: () => "CompletionInvoked"});
  return {
    "genericShow'": v => {
      if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
      if (v.tag === "Inr") { return $1["genericShow'"](v._1); }
      $runtime.fail();
    }
  };
})();
const parserResultShow = dictShow => (
  {
    show: (() => {
      const $0 = Data$dShow$dGeneric.genericShowConstructor({genericShowArgs: v => [dictShow.show(v)]})(SuccessIsSymbol);
      return x => {
        if (x.tag === "Success") { return $0["genericShow'"](x._1); }
        if (x.tag === "Failure") { return genericShowSum["genericShow'"](Data$dGeneric$dRep.$Sum("Inl", x._1)); }
        if (x.tag === "CompletionInvoked") { return genericShowSum["genericShow'"](Data$dGeneric$dRep.$Sum("Inr", x._1)); }
        $runtime.fail();
      };
    })()
  }
);
const completerSemigroup = {
  append: v => v1 => s => {
    const $0 = v(s);
    const $1 = v1(s);
    return () => {
      const a$p = $0();
      const a$p$1 = $1();
      return [...a$p, ...a$p$1];
    };
  }
};
const completerMonoid = {mempty: v => () => [], Semigroup0: () => completerSemigroup};
const cReaderFunctor = {map: f => r => ({...r, crReader: functorReaderT.map(f)(r.crReader)})};
const parserInfoFunctor = {map: f => i => ({...i, infoParser: parserFunctor.map(f)(i.infoParser)})};
const parserFunctor = {
  map: v => v1 => {
    if (v1.tag === "NilP") { return $Parser("NilP", v(v1._1)); }
    if (v1.tag === "OptP") { return $Parser("OptP", optionFunctor.map(v)(v1._1)); }
    if (v1.tag === "MultP") { return $Parser("MultP", $MultPE(parserFunctor.map(v3 => Control$dSemigroupoid.composeImpl(v)(v3))(v1._1._1), v1._1._2)); }
    if (v1.tag === "AltP") { return $Parser("AltP", parserFunctor.map(v)(v1._1), parserFunctor.map(v)(v1._2)); }
    if (v1.tag === "BindP") { return $Parser("BindP", Control$dMonad$dFree.bindImpl(v1._1)(Control$dSemigroupoid.composeImpl(Control$dMonad$dFree.pureImpl)(v))); }
    $runtime.fail();
  }
};
const optionFunctor = {map: f => o => ({...o, optMain: optReaderFunctor.map(f)(o.optMain)})};
const optReaderFunctor = {
  map: v => v1 => {
    if (v1.tag === "OptReader") { return $OptReader("OptReader", v1._1, {...v1._2, crReader: functorReaderT.map(v)(v1._2.crReader)}, v1._3); }
    if (v1.tag === "FlagReader") { return $OptReader("FlagReader", v1._1, v(v1._2)); }
    if (v1.tag === "ArgReader") { return $OptReader("ArgReader", {...v1._1, crReader: functorReaderT.map(v)(v1._1.crReader)}); }
    if (v1.tag === "CmdReader") {
      return $OptReader(
        "CmdReader",
        v1._1,
        v1._2,
        Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Data$dMaybe.functorMaybe.map)(parserInfoFunctor.map)(v))(v1._3)
      );
    }
    $runtime.fail();
  }
};
const parserAlt = {alt: AltP, Functor0: () => parserFunctor};
const parserApply = {apply: a => b => $Parser("MultP", $MultPE(a, b)), Functor0: () => parserFunctor};
const parserApplicative = {pure: NilP, Apply0: () => parserApply};
const manyM = p => Control$dMonad$dFree.monadRecFree.tailRecM(acc => Control$dMonad$dFree.bindImpl(oneM($Parser(
  "AltP",
  parserFunctor.map(Control$dMonad$dRec$dClass.Loop)(p),
  $Parser("NilP", Control$dMonad$dRec$dClass.$Step("Done", undefined))
)))(aa => Control$dMonad$dFree.pureImpl((() => {
  if (aa.tag === "Loop") { return Control$dMonad$dRec$dClass.$Step("Loop", Data$dList$dTypes.$List("Cons", aa._1, acc)); }
  if (aa.tag === "Done") {
    return Control$dMonad$dRec$dClass.$Step(
      "Done",
      (() => {
        const go = go$a0$copy => go$a1$copy => {
          let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
          while (go$c) {
            const v = go$a0, v1 = go$a1;
            if (v1.tag === "Nil") {
              go$c = false;
              go$r = v;
              continue;
            }
            if (v1.tag === "Cons") {
              go$a0 = Data$dList$dTypes.$List("Cons", v1._1, v);
              go$a1 = v1._2;
              continue;
            }
            $runtime.fail();
          }
          return go$r;
        };
        return go(Data$dList$dTypes.Nil)(acc);
      })()
    );
  }
  $runtime.fail();
})())))(Data$dList$dTypes.Nil);
const many = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(fromM)(manyM);
const someM = p => Control$dMonad$dFree.applyFree.apply(Control$dMonad$dFree.bindImpl(oneM(p))(Control$dSemigroupoid.composeImpl(Control$dMonad$dFree.pureImpl)(Data$dList$dNonEmpty.cons$p)))(manyM(p));
const some = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(fromM)(someM);
const backtrackingGeneric = {
  to: x => {
    if (x.tag === "Inl") { return Backtrack; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return NoBacktrack; }
      if (x._1.tag === "Inr") { return SubparserInline; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "Backtrack") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "NoBacktrack") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "SubparserInline") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const backtrackingShow = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Backtrack"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "NoBacktrack"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "SubparserInline"});
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"]((() => {
      if (x === "Backtrack") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
      if (x === "NoBacktrack") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
      if (x === "SubparserInline") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
      $runtime.fail();
    })());
  })()
};
const parserPrefsShow = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor({
      genericShowArgs: v => [
        "{ prefBacktrack: " + backtrackingShow.show(v.prefBacktrack) + ", prefColumns: " + Data$dShow.showIntImpl(v.prefColumns) + "," + (v.prefDisambiguate
          ? " prefDisambiguate: true"
          : " prefDisambiguate: false") + ", prefMultiSuffix: " + Data$dShow.showStringImpl(v.prefMultiSuffix) + "," + (v.prefShowHelpOnEmpty
          ? " prefShowHelpOnEmpty: true"
          : " prefShowHelpOnEmpty: false") + ", prefShowHelpOnError: " + (v.prefShowHelpOnError ? "true" : "false") + " }"
      ]
    })({reflectSymbol: () => "ParserPrefs"});
    return x => $0["genericShow'"](x);
  })()
};
const backtrackingEq = {
  eq: x => y => {
    if (x === "Backtrack") { return y === "Backtrack"; }
    if (x === "NoBacktrack") { return y === "NoBacktrack"; }
    return x === "SubparserInline" && y === "SubparserInline";
  }
};
const parserPrefsEq = {
  eq: x => y => (() => {
    if (x.prefBacktrack === "Backtrack") { return y.prefBacktrack === "Backtrack"; }
    if (x.prefBacktrack === "NoBacktrack") { return y.prefBacktrack === "NoBacktrack"; }
    return x.prefBacktrack === "SubparserInline" && y.prefBacktrack === "SubparserInline";
  })() && x.prefColumns === y.prefColumns && x.prefDisambiguate === y.prefDisambiguate && x.prefMultiSuffix === y.prefMultiSuffix && x.prefShowHelpOnEmpty === y.prefShowHelpOnEmpty && x.prefShowHelpOnError === y.prefShowHelpOnError
};
const argPolicyGeneric = {
  to: x => {
    if (x.tag === "Inl") { return Intersperse; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return NoIntersperse; }
      if (x._1.tag === "Inr") {
        if (x._1._1.tag === "Inl") { return AllPositionals; }
        if (x._1._1.tag === "Inr") { return ForwardOptions; }
      }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "Intersperse") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "NoIntersperse") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "AllPositionals") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
    if (x === "ForwardOptions") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))); }
    $runtime.fail();
  }
};
const argPolicyShow = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "Intersperse"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "NoIntersperse"});
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "AllPositionals"});
        const $3 = (() => {
          const $3 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)({reflectSymbol: () => "ForwardOptions"});
          return {
            "genericShow'": v => {
              if (v.tag === "Inl") { return $2["genericShow'"](v._1); }
              if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
              $runtime.fail();
            }
          };
        })();
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $3["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"]((() => {
      if (x === "Intersperse") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
      if (x === "NoIntersperse") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
      if (x === "AllPositionals") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments))); }
      if (x === "ForwardOptions") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments))); }
      $runtime.fail();
    })());
  })()
};
const argPolicyEq = {
  eq: x => y => {
    if (x === "Intersperse") { return y === "Intersperse"; }
    if (x === "NoIntersperse") { return y === "NoIntersperse"; }
    if (x === "AllPositionals") { return y === "AllPositionals"; }
    return x === "ForwardOptions" && y === "ForwardOptions";
  }
};
const argPolicyOrd = {
  compare: x => y => {
    if (x === "Intersperse") {
      if (y === "Intersperse") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Intersperse") { return Data$dOrdering.GT; }
    if (x === "NoIntersperse") {
      if (y === "NoIntersperse") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "NoIntersperse") { return Data$dOrdering.GT; }
    if (x === "AllPositionals") {
      if (y === "AllPositionals") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "AllPositionals") { return Data$dOrdering.GT; }
    if (x === "ForwardOptions" && y === "ForwardOptions") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => argPolicyEq
};
export {
  $ArgPolicy,
  $Backtracking,
  $Context,
  $IsCmdStart,
  $MultPE,
  $OptName,
  $OptReader,
  $OptTree,
  $OptVisibility,
  $ParseError,
  $Parser,
  $ParserResult,
  $SomeParser,
  AllPositionals,
  AltNode,
  AltNodeIsSymbol,
  AltP,
  ArgReader,
  Backtrack,
  BindP,
  CReader,
  CmdCont,
  CmdReader,
  CmdStart,
  Completer,
  CompletionInvoked,
  CompletionResult,
  Context,
  ErrorMsg,
  ExpectsArgError,
  Failure,
  FlagReader,
  ForwardOptions,
  Hidden,
  InfoMsg,
  Internal,
  Intersperse,
  Leaf,
  LeafIsSymbol,
  MissingError,
  MultNode,
  MultNodeIsSymbol,
  MultP,
  MultPE,
  NilP,
  NoBacktrack,
  NoIntersperse,
  OptHelpInfo,
  OptLong,
  OptP,
  OptProperties,
  OptReader,
  OptShort,
  Option,
  ParserFailure,
  ParserInfo,
  ParserM,
  ParserPrefs,
  ReadM,
  ShowHelpText,
  SomeParser,
  SubparserInline,
  Success,
  SuccessIsSymbol,
  UnexpectedError,
  Visible,
  altReaderT,
  applyReaderT,
  argPolicyEq,
  argPolicyGeneric,
  argPolicyOrd,
  argPolicyShow,
  backtrackingEq,
  backtrackingGeneric,
  backtrackingShow,
  bindReaderT,
  cReaderFunctor,
  completerMonoid,
  completerSemigroup,
  completionResultShow,
  fromM,
  functorReaderT,
  genericShowSum,
  isCmdStartGeneric,
  isCmdStartShow,
  many,
  manyM,
  mkCompleter,
  newtypeCReader,
  newtypeCompleter,
  newtypeCompletionResult,
  newtypeOptHelpInfo,
  newtypeParserFailure,
  oneM,
  optDescMod,
  optHelp,
  optHelpInfoEq,
  optHelpInfoGeneric,
  optHelpInfoShow,
  optMetaVar,
  optNameEq,
  optNameGeneric,
  optNameOrd,
  optNameShow,
  optPropertiesNewtype,
  optPropertiesShow,
  optReaderFunctor,
  optShowDefault,
  optTreeGeneric,
  optTreeShow,
  optVisibility,
  optVisibilityEq,
  optVisibilityGeneric,
  optVisibilityOrd,
  optVisibilityShow,
  optionFunctor,
  optionNewtype,
  optionShow,
  optional,
  overFailure,
  parseErrorSemigroup,
  parserAlt,
  parserApplicative,
  parserApply,
  parserFailureFunctor,
  parserFailureShow,
  parserFunctor,
  parserInfoFunctor,
  parserInfoNewtype,
  parserPrefsEq,
  parserPrefsGeneric,
  parserPrefsNewtype,
  parserPrefsShow,
  parserResultApplicative,
  parserResultApply,
  parserResultBind,
  parserResultFunctor,
  parserResultGeneric,
  parserResultMonad,
  parserResultShow,
  readMAlt,
  readMApplicative,
  readMApply,
  readMBind,
  readMFunctor,
  readMMonad,
  readMMonadFail,
  readMNewtype,
  readerAbort,
  readerAsk,
  readerError,
  showMaybe,
  showRecord2,
  some,
  someM
};
