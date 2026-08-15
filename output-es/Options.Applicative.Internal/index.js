import * as $runtime from "../runtime.js";
import * as Control$dApplicative from "../Control.Applicative/index.js";
import * as Control$dMonad$dExcept from "../Control.Monad.Except/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dReader from "../Control.Monad.Reader/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Options$dApplicative$dTypes from "../Options.Applicative.Types/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $ComplResult = (tag, _1, _2) => ({tag, _1, _2});
const $TStep = (tag, _1, _2) => ({tag, _1, _2});
const functorExceptT = /* #__PURE__ */ (() => {
  const $0 = Control$dSemigroupoid.composeImpl(Control$dMonad$dReader$dTrans.mapReaderT)(Data$dIdentity.functorIdentity.map);
  return {
    map: f => v => s => $0(v1 => Data$dTuple.$Tuple(
      (() => {
        if (v1._1.tag === "Left") { return Data$dEither.$Either("Left", v1._1._1); }
        if (v1._1.tag === "Right") { return Data$dEither.$Either("Right", f(v1._1._1)); }
        $runtime.fail();
      })(),
      v1._2
    ))(v(s))
  };
})();
const monadReaderT = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadReaderT(Data$dIdentity.monadIdentity);
const monadStateT = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(monadReaderT), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(monadReaderT)};
const applyExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applyExceptT(monadStateT);
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(monadStateT);
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(monadStateT);
const altExceptT1 = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.altExceptT(Options$dApplicative$dTypes.parseErrorSemigroup)(monadStateT);
const lift1 = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dState$dTrans.bindStateT(monadReaderT);
  return m => $0.bind(m)(a => Control$dMonad$dState$dTrans.applicativeStateT(monadReaderT).pure(Data$dEither.$Either("Right", a)));
})();
const monadStateStateT = /* #__PURE__ */ Control$dMonad$dState$dTrans.monadStateStateT(monadReaderT);
const throwError = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.monadThrowExceptT(monadStateT).throwError)();
const pure = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(monadStateT).pure)();
const TNil = /* #__PURE__ */ $TStep("TNil");
const TCons = value0 => value1 => $TStep("TCons", value0, value1);
const P = x => x;
const ListT = x => x;
const NondetT = x => x;
const ComplParser = value0 => value1 => $ComplResult("ComplParser", value0, value1);
const ComplOption = value0 => $ComplResult("ComplOption", value0);
const ComplResult = value0 => $ComplResult("ComplResult", value0);
const Completion = x => x;
const withReadM = f => Control$dSemigroupoid.composeImpl(Options$dApplicative$dTypes.ReadM)(Control$dSemigroupoid.composeImpl(Control$dMonad$dReader$dTrans.mapReaderT(v => {
  if (v.tag === "Right") { return Data$dEither.$Either("Right", v._1); }
  if (v.tag === "Left") { return Data$dEither.$Either("Left", v._1.tag === "ErrorMsg" ? Options$dApplicative$dTypes.$ParseError("ErrorMsg", f(v._1._1)) : v._1); }
  $runtime.fail();
}))(Unsafe$dCoerce.unsafeCoerce));
const stepListT = v => v;
const runP = v => Control$dSemigroupoid.composeImpl(Control$dMonad$dReader.runReader)(Control$dSemigroupoid.composeImpl(a => a([]))(Control$dMonad$dExcept$dTrans.runExceptT))(v);
const runNondetT = v => v;
const runListT = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  return xs => Bind1.bind(xs)(s => {
    if (s.tag === "TNil") { return Applicative0.pure(Data$dList$dTypes.Nil); }
    if (s.tag === "TCons") {
      const Applicative0$1 = dictMonad.Applicative0();
      const $0 = Data$dList$dTypes.Cons(s._1);
      return dictMonad.Bind1().bind(runListT(dictMonad)(s._2))(a$p => Applicative0$1.pure($0(a$p)));
    }
    $runtime.fail();
  });
};
const runCompletion = v => prefs => {
  const v1 = v(prefs);
  if (v1.tag === "ComplResult") { return Data$dMaybe.Nothing; }
  if (v1.tag === "ComplParser") { return Data$dMaybe.$Maybe("Just", Data$dEither.$Either("Left", Data$dTuple.$Tuple(v1._1, v1._2))); }
  if (v1.tag === "ComplOption") { return Data$dMaybe.$Maybe("Just", Data$dEither.$Either("Right", v1._1)); }
  $runtime.fail();
};
const pFunctor = {map: f => v => functorExceptT.map(f)(v)};
const pApply = {apply: v => v1 => applyExceptT.apply(v)(v1), Functor0: () => pFunctor};
const pBind = {bind: v => k => bindExceptT.bind(v)(a => k(a)), Apply0: () => pApply};
const pApplicative = {pure: a => applicativeExceptT.pure(a), Apply0: () => pApply};
const pMonad = {Applicative0: () => pApplicative, Bind1: () => pBind};
const pAlt = {alt: v => v1 => altExceptT1.alt(v)(v1), Functor0: () => pFunctor};
const missingArgP = dict => dict.missingArgP;
const getPrefs = dict => dict.getPrefs;
const exitP = dict => dict.exitP;
const exitContext = dict => dict.exitContext;
const errorP = dict => dict.errorP;
const hoistEither = dictMonadP => {
  const $0 = dictMonadP.Monad0().Applicative0().pure;
  return v2 => {
    if (v2.tag === "Left") { return dictMonadP.errorP(v2._1); }
    if (v2.tag === "Right") { return $0(v2._1); }
    $runtime.fail();
  };
};
const runReadM = dictMonadP => {
  const $0 = dictMonadP.Monad0().Applicative0().pure;
  return v => s => Control$dSemigroupoid.composeImpl(v2 => {
    if (v2.tag === "Left") { return dictMonadP.errorP(v2._1); }
    if (v2.tag === "Right") { return $0(v2._1); }
    $runtime.fail();
  })(Control$dMonad$dExcept.runExcept)(v(s));
};
const hoistMaybe = dictMonadP => {
  const pure2 = dictMonadP.Monad0().Applicative0().pure;
  return err => {
    const $0 = dictMonadP.errorP(err);
    return v2 => {
      if (v2.tag === "Nothing") { return $0; }
      if (v2.tag === "Just") { return pure2(v2._1); }
      $runtime.fail();
    };
  };
};
const pMonadP$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    enterContext: name => pinfo => lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(undefined, [Options$dApplicative$dTypes.$Context(name, pinfo), ...s]))),
    exitContext: lift1(monadStateStateT.state(s => Data$dTuple.$Tuple(undefined, Data$dArray.sliceImpl(1, s.length, s)))),
    getPrefs: Control$dSemigroupoid.composeImpl(P)(Control$dSemigroupoid.composeImpl((() => {
      const $0 = Control$dMonad$dState$dTrans.bindStateT(monadReaderT);
      return m => $0.bind(m)(a => Control$dMonad$dState$dTrans.applicativeStateT(monadReaderT).pure(Data$dEither.$Either("Right", a)));
    })())((() => {
      const Bind1 = monadReaderT.Bind1();
      return m => s => Bind1.bind(m)(x => monadReaderT.Applicative0().pure(Data$dTuple.$Tuple(x, s)));
    })()))(Data$dIdentity.Identity),
    missingArgP: e => v => pMonadP$lazy().errorP(e),
    exitP: i => v => p => Control$dSemigroupoid.composeImpl(P)((() => {
      const $0 = Control$dSemigroupoid.composeImpl(throwError)(Control$dSemigroupoid.composeImpl(Options$dApplicative$dTypes.MissingError(i))(Options$dApplicative$dTypes.SomeParser))(p);
      return v2 => {
        if (v2.tag === "Nothing") { return $0; }
        if (v2.tag === "Just") { return pure(v2._1); }
        $runtime.fail();
      };
    })()),
    errorP: Control$dSemigroupoid.composeImpl(P)(throwError),
    Monad0: () => pMonad,
    Alt1: () => pAlt
  }
));
const pMonadP = /* #__PURE__ */ pMonadP$lazy();
const enterContext = dict => dict.enterContext;
const contextNames = ns => Data$dArray.reverse(Data$dFunctor.arrayMap(v => v._1)(ns));
const complResultMonad = {Applicative0: () => complResultApplicative, Bind1: () => complResultBind};
const complResultFunctor = {map: f => a => complResultBind.bind(a)(a$p => complResultApplicative.pure(f(a$p)))};
const complResultBind = {
  bind: m => f => {
    if (m.tag === "ComplResult") { return f(m._1); }
    if (m.tag === "ComplParser") { return $ComplResult("ComplParser", m._1, m._2); }
    if (m.tag === "ComplOption") { return $ComplResult("ComplOption", m._1); }
    $runtime.fail();
  },
  Apply0: () => complResultApply
};
const complResultApply = {
  apply: f => a => {
    if (f.tag === "ComplResult") {
      if (a.tag === "ComplResult") { return complResultApplicative.pure(f._1(a._1)); }
      if (a.tag === "ComplParser") { return $ComplResult("ComplParser", a._1, a._2); }
      if (a.tag === "ComplOption") { return $ComplResult("ComplOption", a._1); }
      $runtime.fail();
    }
    if (f.tag === "ComplParser") { return $ComplResult("ComplParser", f._1, f._2); }
    if (f.tag === "ComplOption") { return $ComplResult("ComplOption", f._1); }
    $runtime.fail();
  },
  Functor0: () => complResultFunctor
};
const complResultApplicative = {pure: ComplResult, Apply0: () => complResultApply};
const functorExceptT1 = /* #__PURE__ */ (() => {
  const $0 = Control$dSemigroupoid.composeImpl(Control$dMonad$dReader$dTrans.mapReaderT)(complResultFunctor.map);
  return {
    map: f => $0(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })
  };
})();
const monadReaderT1 = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadReaderT(complResultMonad);
const altExceptT2 = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.altExceptT(Options$dApplicative$dTypes.parseErrorSemigroup)(monadReaderT1);
const applyExceptT1 = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applyExceptT(monadReaderT1);
const applicativeExceptT1 = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(monadReaderT1);
const bindExceptT1 = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(monadReaderT1);
const lift3 = /* #__PURE__ */ (() => {
  const Bind1 = monadReaderT1.Bind1();
  return m => Bind1.bind(m)(a => monadReaderT1.Applicative0().pure(Data$dEither.$Either("Right", a)));
})();
const lift4 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dReader$dTrans.ReaderT)(Data$dFunction.const);
const completionFunctor = {map: f => v => functorExceptT1.map(f)(v)};
const completionAlt = {alt: v => v1 => altExceptT2.alt(v)(v1), Functor0: () => completionFunctor};
const completionApply = {apply: v => v1 => applyExceptT1.apply(v)(v1), Functor0: () => completionFunctor};
const completionApplicative = {pure: a => applicativeExceptT1.pure(a), Apply0: () => completionApply};
const completionBind = {bind: v => k => bindExceptT1.bind(v)(a => k(a)), Apply0: () => completionApply};
const completionMonad = {Applicative0: () => completionApplicative, Bind1: () => completionBind};
const completionMonadP = /* #__PURE__ */ (() => (
  {
    enterContext: v => v1 => applicativeExceptT1.pure(),
    exitContext: applicativeExceptT1.pure(),
    getPrefs: (() => {
      const $0 = Control$dMonad$dReader$dTrans.monadReaderT(complResultMonad);
      return $0.Bind1().bind(ComplResult)(a => $0.Applicative0().pure(Data$dEither.$Either("Right", a)));
    })(),
    missingArgP: v => Control$dSemigroupoid.composeImpl(Completion)(Control$dSemigroupoid.composeImpl(lift3)(Control$dSemigroupoid.composeImpl(lift4)(ComplOption))),
    exitP: v => a => p => v1 => Control$dSemigroupoid.composeImpl(Completion)(Control$dSemigroupoid.composeImpl(lift3)(lift4))($ComplResult(
      "ComplParser",
      Options$dApplicative$dTypes.$SomeParser(p),
      a
    )),
    errorP: Control$dSemigroupoid.composeImpl(Completion)(Control$dMonad$dExcept$dTrans.monadThrowExceptT(monadReaderT1).throwError),
    Monad0: () => completionMonad,
    Alt1: () => completionAlt
  }
))();
const listTFunctor = dictMonad => (
  {
    map: f => v => {
      const Applicative0 = dictMonad.Applicative0();
      const $0 = listTFunctor(dictMonad).map(f);
      return dictMonad.Bind1().bind(v)(a$p => Applicative0.pure((() => {
        if (a$p.tag === "TNil") { return TNil; }
        if (a$p.tag === "TCons") { return $TStep("TCons", f(a$p._1), $0(a$p._2)); }
        $runtime.fail();
      })()));
    }
  }
);
const listTAlt = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const listTFunctor1 = listTFunctor(dictMonad);
  return {
    alt: xs => ys => Bind1.bind(xs)(s => {
      if (s.tag === "TNil") { return ys; }
      if (s.tag === "TCons") { return dictMonad.Applicative0().pure($TStep("TCons", s._1, listTAlt(dictMonad).alt(s._2)(ys))); }
      $runtime.fail();
    }),
    Functor0: () => listTFunctor1
  };
};
const listTPlus = dictMonad => {
  const listTAlt1 = listTAlt(dictMonad);
  return {empty: dictMonad.Applicative0().pure(TNil), Alt0: () => listTAlt1};
};
const hoistList = dictMonad => {
  const Applicative0 = dictMonad.Applicative0();
  return Data$dFoldable.foldrArray(x => xt => Applicative0.pure($TStep("TCons", x, xt)))(listTPlus(dictMonad).empty);
};
const listTMonadTrans = {
  lift: dictMonad => {
    const listTPlus1 = listTPlus(dictMonad);
    return Control$dSemigroupoid.composeImpl(ListT)((() => {
      const Bind1 = dictMonad.Bind1();
      const Applicative0 = dictMonad.Applicative0();
      return a => Bind1.bind(a)(a$p => Applicative0.pure($TStep("TCons", a$p, listTPlus1.empty)));
    })());
  }
};
const cut = dictMonad => listTMonadTrans.lift({
  Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad),
  Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)
})(Control$dMonad$dState$dTrans.monadStateStateT(dictMonad).state(v => Data$dTuple.$Tuple(undefined, true)));
const nondetTMonadTrans = {
  lift: dictMonad => Control$dSemigroupoid.composeImpl(NondetT)(Control$dSemigroupoid.composeImpl(listTMonadTrans.lift({
    Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad),
    Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)
  }))((() => {
    const Bind1 = dictMonad.Bind1();
    return m => s => Bind1.bind(m)(x => dictMonad.Applicative0().pure(Data$dTuple.$Tuple(x, s)));
  })()))
};
const listTMonad = dictMonad => ({Applicative0: () => listTApplicative(dictMonad), Bind1: () => listTBind(dictMonad)});
const listTBind = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  const listTAlt1 = listTAlt(dictMonad);
  return {
    bind: xs => f => Bind1.bind(xs)(s => {
      if (s.tag === "TNil") { return Applicative0.pure(TNil); }
      if (s.tag === "TCons") { return listTAlt1.alt(f(s._1))(listTBind(dictMonad).bind(s._2)(f)); }
      $runtime.fail();
    }),
    Apply0: () => listTApply(dictMonad)
  };
};
const listTApply = dictMonad => {
  const listTFunctor1 = listTFunctor(dictMonad);
  return {
    apply: (() => {
      const Bind1 = listTBind(dictMonad);
      const Applicative0 = listTApplicative(dictMonad);
      return f => a => Bind1.bind(f)(f$p => Bind1.bind(a)(a$p => Applicative0.pure(f$p(a$p))));
    })(),
    Functor0: () => listTFunctor1
  };
};
const listTApplicative = dictMonad => (
  {pure: Control$dSemigroupoid.composeImpl(hoistList(dictMonad))(Control$dApplicative.applicativeArray.pure), Apply0: () => listTApply(dictMonad)}
);
const listTAlternative = dictMonad => {
  const listTApplicative1 = listTApplicative(dictMonad);
  const listTPlus1 = listTPlus(dictMonad);
  return {Applicative0: () => listTApplicative1, Plus1: () => listTPlus1};
};
const listTMonadPlus = dictMonad => {
  const listTMonad1 = {Applicative0: () => listTApplicative(dictMonad), Bind1: () => listTBind(dictMonad)};
  const listTAlternative1 = listTAlternative(dictMonad);
  return {Monad0: () => listTMonad1, Alternative1: () => listTAlternative1};
};
const nondetTAltOp = dictMonad => {
  const monadStateT1 = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)};
  const listTAlt1 = listTAlt(monadStateT1);
  const listTBind1 = listTBind(monadStateT1);
  const monadStateT2 = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)};
  const $$get = Control$dMonad$dState$dTrans.monadStateStateT(dictMonad).state(s => Data$dTuple.$Tuple(s, s));
  const listTAlternative1 = listTAlternative(monadStateT1);
  return m1 => m2 => Control$dSemigroupoid.composeImpl(NondetT)(listTAlt1.alt(m1))(listTBind1.bind(listTMonadTrans.lift(monadStateT2)($$get))(s => listTBind1.bind((() => {
    const Applicative0 = listTAlternative1.Applicative0();
    const empty = listTAlternative1.Plus1().empty;
    if (!s) { return Applicative0.pure(); }
    return empty;
  })())(() => m2)));
};
const nondetTFunctor = dictMonad => {
  const listTFunctor1 = listTFunctor({
    Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad),
    Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)
  });
  return {map: f => Control$dSemigroupoid.composeImpl(NondetT)(Control$dSemigroupoid.composeImpl(listTFunctor1.map(f))(runNondetT))};
};
const nondetTAlt = dictMonad => {
  const listTAlt1 = listTAlt({Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)});
  const nondetTFunctor1 = nondetTFunctor(dictMonad);
  return {alt: v => v1 => listTAlt1.alt(v)(v1), Functor0: () => nondetTFunctor1};
};
const nondetTPlus = dictMonad => {
  const nondetTAlt1 = nondetTAlt(dictMonad);
  return {
    empty: listTPlus({Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)}).empty,
    Alt0: () => nondetTAlt1
  };
};
const nondetTApply = dictMonad => {
  const listTApply1 = listTApply({Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)});
  const nondetTFunctor1 = nondetTFunctor(dictMonad);
  return {apply: v => v1 => listTApply1.apply(v)(v1), Functor0: () => nondetTFunctor1};
};
const nondetTApplicative = dictMonad => {
  const nondetTApply1 = nondetTApply(dictMonad);
  return {
    pure: Control$dSemigroupoid.composeImpl(NondetT)(listTApplicative({
      Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad),
      Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)
    }).pure),
    Apply0: () => nondetTApply1
  };
};
const nondetTAlternative = dictMonad => {
  const nondetTApplicative1 = nondetTApplicative(dictMonad);
  const nondetTPlus1 = nondetTPlus(dictMonad);
  return {Applicative0: () => nondetTApplicative1, Plus1: () => nondetTPlus1};
};
const nondetTBind = dictMonad => {
  const listTBind1 = listTBind({Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)});
  const nondetTApply1 = nondetTApply(dictMonad);
  return {bind: v => f => listTBind1.bind(v)(Control$dSemigroupoid.composeImpl(runNondetT)(f)), Apply0: () => nondetTApply1};
};
const nondetTMonad = dictMonad => {
  const nondetTApplicative1 = nondetTApplicative(dictMonad);
  const nondetTBind1 = nondetTBind(dictMonad);
  return {Applicative0: () => nondetTApplicative1, Bind1: () => nondetTBind1};
};
const nondetTMonadPlus = dictMonad => {
  const nondetTMonad1 = nondetTMonad(dictMonad);
  const nondetTAlternative1 = nondetTAlternative(dictMonad);
  return {Monad0: () => nondetTMonad1, Alternative1: () => nondetTAlternative1};
};
const takeListT = dictMonad => {
  const listTPlus1 = listTPlus(dictMonad);
  return v => {
    if (v === 0) {
      const $0 = listTPlus1.empty;
      return v$1 => $0;
    }
    return Control$dSemigroupoid.composeImpl(ListT)(Control$dSemigroupoid.composeImpl((() => {
      const Bind1 = dictMonad.Bind1();
      const Applicative0 = dictMonad.Applicative0();
      const $0 = takeListT(dictMonad)(v - 1 | 0);
      return a => Bind1.bind(a)(a$p => Applicative0.pure((() => {
        if (a$p.tag === "TNil") { return TNil; }
        if (a$p.tag === "TCons") { return $TStep("TCons", a$p._1, $0(a$p._2)); }
        $runtime.fail();
      })()));
    })())(stepListT));
  };
};
const disamb = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Functor0 = dictMonad.Bind1().Apply0().Functor0();
  const runListT1 = runListT({Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)});
  const monadStateT1 = {Applicative0: () => Control$dMonad$dState$dTrans.applicativeStateT(dictMonad), Bind1: () => Control$dMonad$dState$dTrans.bindStateT(dictMonad)};
  return allow_amb => xs => Bind1.bind(Control$dSemigroupoid.composeImpl(v => Functor0.map(Data$dTuple.fst)(v(false)))(Control$dSemigroupoid.composeImpl(runListT1)(Control$dSemigroupoid.composeImpl(takeListT(monadStateT1)(allow_amb
    ? 1
    : 2))(runNondetT)))(xs))(xs$p => dictMonad.Applicative0().pure(xs$p.tag === "Cons" && xs$p._2.tag === "Nil" ? Data$dMaybe.$Maybe("Just", xs$p._1) : Data$dMaybe.Nothing));
};
export {
  $ComplResult,
  $TStep,
  ComplOption,
  ComplParser,
  ComplResult,
  Completion,
  ListT,
  NondetT,
  P,
  TCons,
  TNil,
  altExceptT1,
  altExceptT2,
  applicativeExceptT,
  applicativeExceptT1,
  applyExceptT,
  applyExceptT1,
  bindExceptT,
  bindExceptT1,
  complResultApplicative,
  complResultApply,
  complResultBind,
  complResultFunctor,
  complResultMonad,
  completionAlt,
  completionApplicative,
  completionApply,
  completionBind,
  completionFunctor,
  completionMonad,
  completionMonadP,
  contextNames,
  cut,
  disamb,
  enterContext,
  errorP,
  exitContext,
  exitP,
  functorExceptT,
  functorExceptT1,
  getPrefs,
  hoistEither,
  hoistList,
  hoistMaybe,
  lift1,
  lift3,
  lift4,
  listTAlt,
  listTAlternative,
  listTApplicative,
  listTApply,
  listTBind,
  listTFunctor,
  listTMonad,
  listTMonadPlus,
  listTMonadTrans,
  listTPlus,
  missingArgP,
  monadReaderT,
  monadReaderT1,
  monadStateStateT,
  monadStateT,
  nondetTAlt,
  nondetTAltOp,
  nondetTAlternative,
  nondetTApplicative,
  nondetTApply,
  nondetTBind,
  nondetTFunctor,
  nondetTMonad,
  nondetTMonadPlus,
  nondetTMonadTrans,
  nondetTPlus,
  pAlt,
  pApplicative,
  pApply,
  pBind,
  pFunctor,
  pMonad,
  pMonadP,
  pure,
  runCompletion,
  runListT,
  runNondetT,
  runP,
  runReadM,
  stepListT,
  takeListT,
  throwError,
  withReadM
};
