import * as $runtime from "../runtime.js";
import * as Control$dMonad$dError$dClass from "../Control.Monad.Error.Class/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAVar from "../Effect.AVar/index.js";
import * as Effect$dAff$dAVar from "../Effect.Aff.AVar/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const $ComputationType = (tag, _1) => ({tag, _1});
const $Memoized = (tag, _1) => ({tag, _1});
const monadTellWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadTellWriterT(Data$dMonoid.monoidArray);
const monadThrowWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadThrowWriterT(Data$dMonoid.monoidArray);
const monadStateWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadStateWriterT(Data$dMonoid.monoidArray);
const monadWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(Data$dMonoid.monoidArray);
const monadRecWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadRecWriterT(Data$dMonoid.monoidArray);
const monadReaderWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadReaderWriterT(Data$dMonoid.monoidArray);
const monadPlusWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadPlusWriterT(Data$dMonoid.monoidArray);
const monadErrorWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadErrorWriterT(Data$dMonoid.monoidArray);
const monadEffectWriter1 = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadEffectWriter(Data$dMonoid.monoidArray);
const monadContWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadContWriterT(Data$dMonoid.monoidArray);
const monadAskWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadAskWriterT(Data$dMonoid.monoidArray);
const identity = x => x;
const identity1 = x => x;
const identity2 = x => x;
const applyWriterT = dictApply => {
  const Functor0 = dictApply.Functor0();
  const $0 = dictApply.Functor0();
  const functorWriterT1 = {map: f => $0.map(v => Data$dTuple.$Tuple(f(v._1), v._2))};
  return {apply: v => v1 => dictApply.apply(Functor0.map(v3 => v4 => Data$dTuple.$Tuple(v3._1(v4._1), [...v3._2, ...v4._2]))(v))(v1), Functor0: () => functorWriterT1};
};
const applicativeWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.applicativeWriterT(Data$dMonoid.monoidArray);
const alternativeWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.alternativeWriterT(Data$dMonoid.monoidArray);
const SpecT = x => x;
const MEmpty = /* #__PURE__ */ $Memoized("MEmpty");
const MMemoized = value0 => $Memoized("MMemoized", value0);
const MFailed = value0 => $Memoized("MFailed", value0);
const CleanUpWithContext = value0 => $ComputationType("CleanUpWithContext", value0);
const TestWithName = value0 => $ComputationType("TestWithName", value0);
const warn = () => ({});
const plusSpecT = dictPlus => {
  const $0 = dictPlus.Alt0();
  const $1 = $0.Functor0();
  const functorWriterT1 = {map: f => $1.map(v => Data$dTuple.$Tuple(f(v._1), v._2))};
  const altWriterT1 = {alt: v => v1 => $0.alt(v)(v1), Functor0: () => functorWriterT1};
  return {empty: dictPlus.empty, Alt0: () => altWriterT1};
};
const pending = dictMonad => {
  const monadTellWriterT1 = monadTellWriterT(dictMonad);
  return name => monadTellWriterT1.tell([Test$dSpec$dTree.$Tree("Leaf", name, Data$dMaybe.Nothing)]);
};
const pending$p = dictMonad => name => v => monadTellWriterT(dictMonad).tell([Test$dSpec$dTree.$Tree("Leaf", name, Data$dMaybe.Nothing)]);
const newtypeSpecT = {Coercible0: () => {}};
const monadTransSpecT = {
  lift: dictMonad => {
    const Bind1 = dictMonad.Bind1();
    return m => Bind1.bind(m)(a => dictMonad.Applicative0().pure(Data$dTuple.$Tuple(a, [])));
  }
};
const monadThrowSpecT = dictMonadThrow => monadThrowWriterT(dictMonadThrow);
const monadStateSpecT = dictMonadState => monadStateWriterT(dictMonadState);
const monadSpecT = dictMonad => monadWriterT(dictMonad);
const monadRecSpecT = dictMonadRec => monadRecWriterT(dictMonadRec);
const monadReaderSpecT = dictMonadReader => monadReaderWriterT(dictMonadReader);
const monadPlusSpecT = dictMonadPlus => monadPlusWriterT(dictMonadPlus);
const monadErrorSpecT = dictMonadError => monadErrorWriterT(dictMonadError);
const monadEffectWriter = dictMonadEffect => monadEffectWriter1(dictMonadEffect);
const monadContSpecT = dictMonadCont => monadContWriterT(dictMonadCont);
const monadAskSpecT = dictMonadAsk => monadAskWriterT(dictMonadAsk);
const memoize = dictMonadAff => {
  const Monad0 = dictMonadAff.MonadEffect0().Monad0();
  const Bind1 = Monad0.Bind1();
  const Apply0 = Monad0.Bind1().Apply0();
  const Applicative0 = Monad0.Applicative0();
  return dictMonadError => {
    const $0 = dictMonadError.MonadThrow0();
    return $$var => action => Bind1.bind(dictMonadAff.liftAff(Effect$dAff$dAVar.take($$var)))(v => {
      if (v.tag === "MFailed") { return $0.throwError(Effect$dException.error("exception in beforeAll-hook (see previous failure)")); }
      if (v.tag === "MMemoized") {
        return Apply0.apply(Apply0.Functor0().map(Data$dFunction.const)(Applicative0.pure(v._1)))(dictMonadAff.liftAff(Effect$dAff$dAVar.put($Memoized("MMemoized", v._1))($$var)));
      }
      if (v.tag === "MEmpty") {
        return Bind1.bind(Control$dMonad$dError$dClass.try(dictMonadError)(action))(res => Bind1.bind(dictMonadAff.liftAff(Effect$dAff$dAVar.put((() => {
          if (res.tag === "Left") { return $Memoized("MFailed", res._1); }
          if (res.tag === "Right") { return $Memoized("MMemoized", res._1); }
          $runtime.fail();
        })())($$var)))(() => {
          if (res.tag === "Left") { return $0.throwError(res._1); }
          if (res.tag === "Right") { return Monad0.Applicative0().pure(res._1); }
          $runtime.fail();
        }));
      }
      $runtime.fail();
    });
  };
};
const mapSpecTree = dictFunctor => g => f => Control$dSemigroupoid.composeImpl(dictFunctor.map((() => {
  const $0 = Data$dFunctor.arrayMap(f);
  return m => Data$dTuple.$Tuple(m._1, $0(m._2));
})()))(g);
const parallel = dictMonad => mapSpecTree(dictMonad.Bind1().Apply0().Functor0())(identity)(Test$dSpec$dTree.bifunctorTree.bimap(identity1)(i => (
  {...i, isParallelizable: i.isParallelizable.tag === "Nothing" ? Data$dMaybe.$Maybe("Just", true) : i.isParallelizable}
)));
const sequential = dictMonad => mapSpecTree(dictMonad.Bind1().Apply0().Functor0())(identity)(Test$dSpec$dTree.bifunctorTree.bimap(identity1)(i => (
  {...i, isParallelizable: i.isParallelizable.tag === "Nothing" ? Data$dMaybe.$Maybe("Just", false) : i.isParallelizable}
)));
const mapSpec = dictFunctor => f => mapSpecTree(dictFunctor)(f)(identity2);
const hoistSpec = dictMonad => {
  const Functor0 = dictMonad.Bind1().Apply0().Functor0();
  return onM => f => mapSpecTree(Functor0)(onM)(Test$dSpec$dTree.bimapTreeWithPaths(name => around$p => i => f($ComputationType("CleanUpWithContext", name))(around$p(i)))(name => item => (
    {
      ...item,
      example: g => g(Control$dSemigroupoid.composeImpl(f($ComputationType("TestWithName", name)))(Control$dSemigroupoid.composeImpl(item.example)(Data$dFunction.applyFlipped)))
    }
  )));
};
const functorSpecT = dictFunctor => ({map: f => dictFunctor.map(v => Data$dTuple.$Tuple(f(v._1), v._2))});
const focus = () => dictMonad => dictMonad.Bind1().Apply0().Functor0().map(m => Data$dTuple.$Tuple(
  m._1,
  Data$dFoldable.foldableArray.foldMap((() => {
    const semigroupDisj1 = {append: v => v1 => v || v1};
    return {mempty: false, Semigroup0: () => semigroupDisj1};
  })())(Test$dSpec$dTree.foldableTree.foldMap((() => {
    const semigroupDisj1 = {append: v => v1 => v || v1};
    return {mempty: false, Semigroup0: () => semigroupDisj1};
  })())(Control$dSemigroupoid.composeImpl(v => v.isFocused)(Unsafe$dCoerce.unsafeCoerce)))(m._2)
    ? m._2
    : Data$dFunctor.arrayMap(Test$dSpec$dTree.bifunctorTree.bimap(identity1)(v => ({...v, isFocused: true})))(m._2)
));
const exampleMUnit = {evaluateExample: t => around$p => around$p(v => t)};
const exampleFunc = {evaluateExample: t => around$p => around$p(t)};
const evaluateExample = dict => dict.evaluateExample;
const it = dictMonad => {
  const monadTellWriterT1 = monadTellWriterT(dictMonad);
  return dictExample => name => test => monadTellWriterT1.tell([
    Test$dSpec$dTree.$Tree("Leaf", name, Data$dMaybe.$Maybe("Just", {isParallelizable: Data$dMaybe.Nothing, isFocused: false, example: dictExample.evaluateExample(test)}))
  ]);
};
const itOnly = () => dictMonad => {
  const focus2 = focus()(dictMonad);
  const it1 = it(dictMonad);
  return dictExample => Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.semigroupoidFn.compose(focus2))(it1(dictExample));
};
const describe = dictMonad => name => dictMonad.Bind1().Apply0().Functor0().map(m => Data$dTuple.$Tuple(
  m._1,
  [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", name), m._2)]
));
const describeOnly = () => dictMonad => Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.semigroupoidFn.compose(focus()(dictMonad)))(name => dictMonad.Bind1().Apply0().Functor0().map(m => Data$dTuple.$Tuple(
  m._1,
  [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", name), m._2)]
)));
const collect = dictFunctor => Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(dictFunctor.map(Test$dSpec$dTree.discardUnfocused))(Control$dMonad$dWriter$dTrans.execWriterT(dictFunctor)))(Unsafe$dCoerce.unsafeCoerce);
const bindSpecT = dictBind => Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupArray)(dictBind);
const aroundWith = dictMonad => {
  const Functor0 = dictMonad.Bind1().Apply0().Functor0();
  return action => mapSpecTree(Functor0)(identity)(Test$dSpec$dTree.bifunctorTree.bimap(action)(Test$dSpec$dTree.modifyAroundAction(action)));
};
const around_ = dictMonad => {
  const aroundWith1 = aroundWith(dictMonad);
  return action => aroundWith1(e => a => action(e(a)));
};
const before_ = dictMonad => dictMonad1 => {
  const Apply0 = dictMonad1.Bind1().Apply0();
  return action => around_(dictMonad)(v => Apply0.apply(Apply0.Functor0().map(v$1 => x => x)(action))(v));
};
const beforeAll_ = dictMonadEffect => {
  const bindSpecT1 = Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupArray)(dictMonadEffect.Monad0().Bind1());
  const Monad0 = dictMonadEffect.Monad0();
  return dictMonadAff => {
    const Monad01 = dictMonadAff.MonadEffect0().Monad0();
    return dictMonadError => action => spec => bindSpecT1.bind(monadEffectWriter1(dictMonadEffect).liftEffect(Effect$dAVar._newVar(MEmpty)))($$var => before_(Monad0)(Monad01)(memoize(dictMonadAff)(dictMonadError)($$var)(action))(spec));
  };
};
const beforeWith = dictMonad => {
  const aroundWith1 = aroundWith(dictMonad);
  return dictMonad1 => {
    const Bind1 = dictMonad1.Bind1();
    return action => aroundWith1(e => x => Bind1.bind(action(x))(e));
  };
};
const around = dictMonad => {
  const aroundWith1 = aroundWith(dictMonad);
  return action => aroundWith1(e => v => action(e));
};
const before = dictMonad => dictMonad1 => {
  const Bind1 = dictMonad1.Bind1();
  return action => aroundWith(dictMonad)(e => v => Bind1.bind(action)(e));
};
const beforeAll = dictMonadEffect => {
  const bindSpecT1 = Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupArray)(dictMonadEffect.Monad0().Bind1());
  const Monad0 = dictMonadEffect.Monad0();
  return dictMonadAff => {
    const Monad01 = dictMonadAff.MonadEffect0().Monad0();
    return dictMonadError => action => spec => bindSpecT1.bind(monadEffectWriter1(dictMonadEffect).liftEffect(Effect$dAVar._newVar(MEmpty)))($$var => before(Monad0)(Monad01)(memoize(dictMonadAff)(dictMonadError)($$var)(action))(spec));
  };
};
const applySpecT = dictApply => applyWriterT(dictApply);
const applicativeSpecT = dictApplicative => applicativeWriterT(dictApplicative);
const alternativeSpecT = dictAlternative => alternativeWriterT(dictAlternative);
const altSpecT = dictAlt => {
  const $0 = dictAlt.Functor0();
  const functorWriterT1 = {map: f => $0.map(v => Data$dTuple.$Tuple(f(v._1), v._2))};
  return {alt: v => v1 => dictAlt.alt(v)(v1), Functor0: () => functorWriterT1};
};
const afterAll = dictMonad => action => dictMonad.Bind1().Apply0().Functor0().map(m => Data$dTuple.$Tuple(
  m._1,
  [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Right", action), m._2)]
));
const afterAll_ = dictMonad => action => dictMonad.Bind1().Apply0().Functor0().map(m => Data$dTuple.$Tuple(
  m._1,
  [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Right", v => action), m._2)]
));
const after = dictMonad => {
  const aroundWith1 = aroundWith(dictMonad);
  return dictMonadBracket => {
    const Applicative0 = dictMonadBracket.MonadError1().MonadThrow0().Monad0().Applicative0();
    return action => aroundWith1(e => x => {
      const $0 = e(x);
      const $1 = action(x);
      return dictMonadBracket.bracket(Applicative0.pure())(v => v1 => $1)(v => $0);
    });
  };
};
const after_ = dictMonad => {
  const after1 = after(dictMonad);
  return dictMonadBracket => {
    const after2 = after1(dictMonadBracket);
    return action => after2(v => action);
  };
};
export {
  $ComputationType,
  $Memoized,
  CleanUpWithContext,
  MEmpty,
  MFailed,
  MMemoized,
  SpecT,
  TestWithName,
  after,
  afterAll,
  afterAll_,
  after_,
  altSpecT,
  alternativeSpecT,
  alternativeWriterT,
  applicativeSpecT,
  applicativeWriterT,
  applySpecT,
  applyWriterT,
  around,
  aroundWith,
  around_,
  before,
  beforeAll,
  beforeAll_,
  beforeWith,
  before_,
  bindSpecT,
  collect,
  describe,
  describeOnly,
  evaluateExample,
  exampleFunc,
  exampleMUnit,
  focus,
  functorSpecT,
  hoistSpec,
  identity,
  identity1,
  identity2,
  it,
  itOnly,
  mapSpec,
  mapSpecTree,
  memoize,
  monadAskSpecT,
  monadAskWriterT,
  monadContSpecT,
  monadContWriterT,
  monadEffectWriter,
  monadEffectWriter1,
  monadErrorSpecT,
  monadErrorWriterT,
  monadPlusSpecT,
  monadPlusWriterT,
  monadReaderSpecT,
  monadReaderWriterT,
  monadRecSpecT,
  monadRecWriterT,
  monadSpecT,
  monadStateSpecT,
  monadStateWriterT,
  monadTellWriterT,
  monadThrowSpecT,
  monadThrowWriterT,
  monadTransSpecT,
  monadWriterT,
  newtypeSpecT,
  parallel,
  pending,
  pending$p,
  plusSpecT,
  sequential,
  warn
};
