import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dMaybe$dTrans from "../Control.Monad.Maybe.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor$dCostar from "../Data.Functor.Costar/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dProfunctor$dStar from "../Data.Profunctor.Star/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const ParCont = x => x;
const sequential = dict => dict.sequential;
const parallel = dict => dict.parallel;
const newtypeParCont = {Coercible0: () => {}};
const monadParWriterT = dictMonoid => {
  const $0 = dictMonoid.Semigroup0();
  const applyWriterT = dictApply => {
    const Functor0 = dictApply.Functor0();
    const $1 = dictApply.Functor0();
    const functorWriterT1 = {map: f => $1.map(v => Data$dTuple.$Tuple(f(v._1), v._2))};
    return {apply: v => v1 => dictApply.apply(Functor0.map(v3 => v4 => Data$dTuple.$Tuple(v3._1(v4._1), $0.append(v3._2)(v4._2)))(v))(v1), Functor0: () => functorWriterT1};
  };
  return dictParallel => {
    const applyWriterT1 = applyWriterT(dictParallel.Apply0());
    const applyWriterT2 = applyWriterT(dictParallel.Apply1());
    return {parallel: v => dictParallel.parallel(v), sequential: v => dictParallel.sequential(v), Apply0: () => applyWriterT1, Apply1: () => applyWriterT2};
  };
};
const monadParStar = dictParallel => {
  const parallel1 = dictParallel.parallel;
  const sequential1 = dictParallel.sequential;
  const applyStar = Data$dProfunctor$dStar.applyStar(dictParallel.Apply0());
  const applyStar1 = Data$dProfunctor$dStar.applyStar(dictParallel.Apply1());
  return {
    parallel: v => Control$dSemigroupoid.composeImpl(parallel1)(v),
    sequential: v => Control$dSemigroupoid.composeImpl(sequential1)(v),
    Apply0: () => applyStar,
    Apply1: () => applyStar1
  };
};
const monadParReaderT = dictParallel => {
  const applyReaderT = Control$dMonad$dReader$dTrans.applyReaderT(dictParallel.Apply0());
  const applyReaderT1 = Control$dMonad$dReader$dTrans.applyReaderT(dictParallel.Apply1());
  return {
    parallel: Control$dMonad$dReader$dTrans.mapReaderT(dictParallel.parallel),
    sequential: Control$dMonad$dReader$dTrans.mapReaderT(dictParallel.sequential),
    Apply0: () => applyReaderT,
    Apply1: () => applyReaderT1
  };
};
const monadParMaybeT = dictParallel => {
  const $0 = dictParallel.Apply1();
  const Functor0 = $0.Functor0();
  const $1 = $0.Functor0();
  const functorCompose2 = {
    map: f => v => $1.map(v1 => {
      if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", f(v1._1)); }
      return Data$dMaybe.Nothing;
    })(v)
  };
  const applyCompose = {apply: v => v1 => $0.apply(Functor0.map(Data$dMaybe.applyMaybe.apply)(v))(v1), Functor0: () => functorCompose2};
  return dictMonad => {
    const applyMaybeT = Control$dMonad$dMaybe$dTrans.applyMaybeT(dictMonad);
    return {parallel: v => dictParallel.parallel(v), sequential: v => dictParallel.sequential(v), Apply0: () => applyMaybeT, Apply1: () => applyCompose};
  };
};
const monadParExceptT = dictParallel => {
  const $0 = dictParallel.Apply1();
  const Functor0 = $0.Functor0();
  const $1 = $0.Functor0();
  const functorCompose2 = {
    map: f => v => $1.map(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", f(m._1)); }
      $runtime.fail();
    })(v)
  };
  const applyCompose = {apply: v => v1 => $0.apply(Functor0.map(Data$dEither.applyEither.apply)(v))(v1), Functor0: () => functorCompose2};
  return dictMonad => {
    const applyExceptT = Control$dMonad$dExcept$dTrans.applyExceptT(dictMonad);
    return {parallel: v => dictParallel.parallel(v), sequential: v => dictParallel.sequential(v), Apply0: () => applyExceptT, Apply1: () => applyCompose};
  };
};
const monadParCostar = dictParallel => {
  const sequential1 = dictParallel.sequential;
  const parallel1 = dictParallel.parallel;
  return {
    parallel: v => Control$dSemigroupoid.composeImpl(v)(sequential1),
    sequential: v => Control$dSemigroupoid.composeImpl(v)(parallel1),
    Apply0: () => Data$dFunctor$dCostar.applyCostar,
    Apply1: () => Data$dFunctor$dCostar.applyCostar
  };
};
const monadParParCont = dictMonadEffect => {
  const functorContT1 = {map: f => v => k => v(a => k(f(a)))};
  const applyContT = {apply: v => v1 => k => v(g => v1(a => k(g(a)))), Functor0: () => functorContT1};
  return {parallel: ParCont, sequential: v => v, Apply0: () => applyContT, Apply1: () => applyParCont(dictMonadEffect)};
};
const functorParCont = dictMonadEffect => (
  {
    map: f => Control$dSemigroupoid.composeImpl(monadParParCont(dictMonadEffect).parallel)(Control$dSemigroupoid.composeImpl(v => k => v(a => k(f(a))))(monadParParCont(dictMonadEffect).sequential))
  }
);
const applyParCont = dictMonadEffect => {
  const Bind1 = dictMonadEffect.Monad0().Bind1();
  return {
    apply: v => v1 => k => Bind1.bind(dictMonadEffect.liftEffect(() => ({value: Data$dMaybe.Nothing})))(ra => Bind1.bind(dictMonadEffect.liftEffect(() => (
      {value: Data$dMaybe.Nothing}
    )))(rb => Bind1.bind(v(a => Bind1.bind(dictMonadEffect.liftEffect(() => rb.value))(mb => {
      if (mb.tag === "Nothing") { return dictMonadEffect.liftEffect(() => ra.value = Data$dMaybe.$Maybe("Just", a)); }
      if (mb.tag === "Just") { return k(a(mb._1)); }
      $runtime.fail();
    })))(() => v1(b => Bind1.bind(dictMonadEffect.liftEffect(() => ra.value))(ma => {
      if (ma.tag === "Nothing") { return dictMonadEffect.liftEffect(() => rb.value = Data$dMaybe.$Maybe("Just", b)); }
      if (ma.tag === "Just") { return k(ma._1(b)); }
      $runtime.fail();
    }))))),
    Functor0: () => functorParCont(dictMonadEffect)
  };
};
const applicativeParCont = dictMonadEffect => {
  const applyParCont1 = applyParCont(dictMonadEffect);
  return {pure: Control$dSemigroupoid.composeImpl(monadParParCont(dictMonadEffect).parallel)(a => k => k(a)), Apply0: () => applyParCont1};
};
const altParCont = dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const Bind1 = Monad0.Bind1();
  const Applicative0 = Monad0.Applicative0();
  const functorParCont1 = functorParCont(dictMonadEffect);
  return {
    alt: v => v1 => k => Bind1.bind(dictMonadEffect.liftEffect(() => ({value: false})))(done => Bind1.bind(v(a => Bind1.bind(dictMonadEffect.liftEffect(() => done.value))(b => {
      if (b) { return Applicative0.pure(); }
      return Bind1.bind(dictMonadEffect.liftEffect(() => done.value = true))(() => k(a));
    })))(() => v1(a => Bind1.bind(dictMonadEffect.liftEffect(() => done.value))(b => {
      if (b) { return Applicative0.pure(); }
      return Bind1.bind(dictMonadEffect.liftEffect(() => done.value = true))(() => k(a));
    })))),
    Functor0: () => functorParCont1
  };
};
const plusParCont = dictMonadEffect => {
  const Applicative0 = dictMonadEffect.Monad0().Applicative0();
  const altParCont1 = altParCont(dictMonadEffect);
  return {empty: v => Applicative0.pure(), Alt0: () => altParCont1};
};
const alternativeParCont = dictMonadEffect => {
  const applicativeParCont1 = applicativeParCont(dictMonadEffect);
  const plusParCont1 = plusParCont(dictMonadEffect);
  return {Applicative0: () => applicativeParCont1, Plus1: () => plusParCont1};
};
export {
  ParCont,
  altParCont,
  alternativeParCont,
  applicativeParCont,
  applyParCont,
  functorParCont,
  monadParCostar,
  monadParExceptT,
  monadParMaybeT,
  monadParParCont,
  monadParReaderT,
  monadParStar,
  monadParWriterT,
  newtypeParCont,
  parallel,
  plusParCont,
  sequential
};
