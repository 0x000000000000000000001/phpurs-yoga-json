// | This module defines the reader monad transformer, `ReaderT`.
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
const ReaderT = x => x;
const withReaderT = f => v => Control$dSemigroupoid.composeImpl(v)(f);
const runReaderT = v => v;
const newtypeReaderT = {Coercible0: () => {}};
const monadTransReaderT = {lift: dictMonad => Control$dSemigroupoid.composeImpl(ReaderT)(Data$dFunction.const)};
const mapReaderT = f => v => Control$dSemigroupoid.composeImpl(f)(v);
const functorReaderT = dictFunctor => ({map: Control$dSemigroupoid.composeImpl(mapReaderT)(dictFunctor.map)});
const distributiveReaderT = dictDistributive => {
  const functorReaderT1 = {map: Control$dSemigroupoid.composeImpl(mapReaderT)(dictDistributive.Functor0().map)};
  return {
    distribute: dictFunctor => a => e => dictDistributive.collect(dictFunctor)(r => r(e))(a),
    collect: dictFunctor => f => Control$dSemigroupoid.composeImpl(distributiveReaderT(dictDistributive).distribute(dictFunctor))(dictFunctor.map(f)),
    Functor0: () => functorReaderT1
  };
};
const applyReaderT = dictApply => {
  const functorReaderT1 = {map: Control$dSemigroupoid.composeImpl(mapReaderT)(dictApply.Functor0().map)};
  return {apply: v => v1 => r => dictApply.apply(v(r))(v1(r)), Functor0: () => functorReaderT1};
};
const bindReaderT = dictBind => {
  const applyReaderT1 = applyReaderT(dictBind.Apply0());
  return {bind: v => k => r => dictBind.bind(v(r))(a => k(a)(r)), Apply0: () => applyReaderT1};
};
const semigroupReaderT = dictApply => {
  const applyReaderT1 = applyReaderT(dictApply);
  return dictSemigroup => (
    {
      append: (() => {
        const Functor0 = applyReaderT1.Functor0();
        const $0 = dictSemigroup.append;
        return a => b => applyReaderT1.apply(Functor0.map($0)(a))(b);
      })()
    }
  );
};
const applicativeReaderT = dictApplicative => {
  const applyReaderT1 = applyReaderT(dictApplicative.Apply0());
  return {pure: Control$dSemigroupoid.composeImpl(ReaderT)(Control$dSemigroupoid.composeImpl(Data$dFunction.const)(dictApplicative.pure)), Apply0: () => applyReaderT1};
};
const monadReaderT = dictMonad => {
  const applicativeReaderT1 = applicativeReaderT(dictMonad.Applicative0());
  const bindReaderT1 = bindReaderT(dictMonad.Bind1());
  return {Applicative0: () => applicativeReaderT1, Bind1: () => bindReaderT1};
};
const monadAskReaderT = dictMonad => {
  const monadReaderT1 = monadReaderT(dictMonad);
  return {ask: dictMonad.Applicative0().pure, Monad0: () => monadReaderT1};
};
const monadReaderReaderT = dictMonad => {
  const monadReaderT1 = monadReaderT(dictMonad);
  const monadAskReaderT1 = {ask: dictMonad.Applicative0().pure, Monad0: () => monadReaderT1};
  return {local: withReaderT, MonadAsk0: () => monadAskReaderT1};
};
const monadContReaderT = dictMonadCont => {
  const monadReaderT1 = monadReaderT(dictMonadCont.Monad0());
  return {
    callCC: f => r => dictMonadCont.callCC(c => f(Control$dSemigroupoid.composeImpl(ReaderT)(Control$dSemigroupoid.composeImpl(Data$dFunction.const)(c)))(r)),
    Monad0: () => monadReaderT1
  };
};
const monadEffectReader = dictMonadEffect => {
  const monadReaderT1 = monadReaderT(dictMonadEffect.Monad0());
  return {liftEffect: Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(ReaderT)(Data$dFunction.const))(dictMonadEffect.liftEffect), Monad0: () => monadReaderT1};
};
const monadRecReaderT = dictMonadRec => {
  const Monad0 = dictMonadRec.Monad0();
  const Bind1 = Monad0.Bind1();
  const pure = Monad0.Applicative0().pure;
  const monadReaderT1 = monadReaderT(Monad0);
  return {tailRecM: k => a => r => dictMonadRec.tailRecM(a$p => Bind1.bind(k(a$p)(r))(pure))(a), Monad0: () => monadReaderT1};
};
const monadStateReaderT = dictMonadState => {
  const monadReaderT1 = monadReaderT(dictMonadState.Monad0());
  return {state: Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(ReaderT)(Data$dFunction.const))(dictMonadState.state), Monad0: () => monadReaderT1};
};
const monadTellReaderT = dictMonadTell => {
  const Semigroup0 = dictMonadTell.Semigroup0();
  const monadReaderT1 = monadReaderT(dictMonadTell.Monad1());
  return {
    tell: Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(ReaderT)(Data$dFunction.const))(dictMonadTell.tell),
    Semigroup0: () => Semigroup0,
    Monad1: () => monadReaderT1
  };
};
const monadWriterReaderT = dictMonadWriter => {
  const Monoid0 = dictMonadWriter.Monoid0();
  const monadTellReaderT1 = monadTellReaderT(dictMonadWriter.MonadTell1());
  return {listen: mapReaderT(dictMonadWriter.listen), pass: mapReaderT(dictMonadWriter.pass), Monoid0: () => Monoid0, MonadTell1: () => monadTellReaderT1};
};
const monadThrowReaderT = dictMonadThrow => {
  const monadReaderT1 = monadReaderT(dictMonadThrow.Monad0());
  return {throwError: Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(ReaderT)(Data$dFunction.const))(dictMonadThrow.throwError), Monad0: () => monadReaderT1};
};
const monadErrorReaderT = dictMonadError => {
  const monadThrowReaderT1 = monadThrowReaderT(dictMonadError.MonadThrow0());
  return {catchError: v => h => r => dictMonadError.catchError(v(r))(e => h(e)(r)), MonadThrow0: () => monadThrowReaderT1};
};
const monadSTReaderT = dictMonadST => {
  const monadReaderT1 = monadReaderT(dictMonadST.Monad0());
  return {liftST: Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(ReaderT)(Data$dFunction.const))(dictMonadST.liftST), Monad0: () => monadReaderT1};
};
const monoidReaderT = dictApplicative => {
  const applicativeReaderT1 = applicativeReaderT(dictApplicative);
  const semigroupReaderT1 = semigroupReaderT(dictApplicative.Apply0());
  return dictMonoid => {
    const semigroupReaderT2 = semigroupReaderT1(dictMonoid.Semigroup0());
    return {mempty: applicativeReaderT1.pure(dictMonoid.mempty), Semigroup0: () => semigroupReaderT2};
  };
};
const altReaderT = dictAlt => {
  const functorReaderT1 = {map: Control$dSemigroupoid.composeImpl(mapReaderT)(dictAlt.Functor0().map)};
  return {alt: v => v1 => r => dictAlt.alt(v(r))(v1(r)), Functor0: () => functorReaderT1};
};
const plusReaderT = dictPlus => {
  const altReaderT1 = altReaderT(dictPlus.Alt0());
  return {
    empty: (() => {
      const $0 = dictPlus.empty;
      return v => $0;
    })(),
    Alt0: () => altReaderT1
  };
};
const alternativeReaderT = dictAlternative => {
  const applicativeReaderT1 = applicativeReaderT(dictAlternative.Applicative0());
  const plusReaderT1 = plusReaderT(dictAlternative.Plus1());
  return {Applicative0: () => applicativeReaderT1, Plus1: () => plusReaderT1};
};
const monadPlusReaderT = dictMonadPlus => {
  const monadReaderT1 = monadReaderT(dictMonadPlus.Monad0());
  const alternativeReaderT1 = alternativeReaderT(dictMonadPlus.Alternative1());
  return {Monad0: () => monadReaderT1, Alternative1: () => alternativeReaderT1};
};
export {
  ReaderT,
  altReaderT,
  alternativeReaderT,
  applicativeReaderT,
  applyReaderT,
  bindReaderT,
  distributiveReaderT,
  functorReaderT,
  mapReaderT,
  monadAskReaderT,
  monadContReaderT,
  monadEffectReader,
  monadErrorReaderT,
  monadPlusReaderT,
  monadReaderReaderT,
  monadReaderT,
  monadRecReaderT,
  monadSTReaderT,
  monadStateReaderT,
  monadTellReaderT,
  monadThrowReaderT,
  monadTransReaderT,
  monadWriterReaderT,
  monoidReaderT,
  newtypeReaderT,
  plusReaderT,
  runReaderT,
  semigroupReaderT,
  withReaderT
};
