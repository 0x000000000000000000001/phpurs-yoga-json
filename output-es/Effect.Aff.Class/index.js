import * as Control$dMonad$dCont$dTrans from "../Control.Monad.Cont.Trans/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dMonad$dList$dTrans from "../Control.Monad.List.Trans/index.js";
import * as Control$dMonad$dMaybe$dTrans from "../Control.Monad.Maybe.Trans/index.js";
import * as Control$dMonad$dRWS$dTrans from "../Control.Monad.RWS.Trans/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dState$dTrans from "../Control.Monad.State.Trans/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const monadAffAff = {liftAff: x => x, MonadEffect0: () => Effect$dAff.monadEffectAff};
const liftAff = dict => dict.liftAff;
const monadAffContT = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const monadEffectContT = Control$dMonad$dCont$dTrans.monadEffectContT(MonadEffect0);
  return {
    liftAff: Control$dSemigroupoid.composeImpl((() => {
      const Bind1 = MonadEffect0.Monad0().Bind1();
      return m => k => Bind1.bind(m)(k);
    })())(dictMonadAff.liftAff),
    MonadEffect0: () => monadEffectContT
  };
};
const monadAffExceptT = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const monadEffectExceptT = Control$dMonad$dExcept$dTrans.monadEffectExceptT(MonadEffect0);
  return {
    liftAff: Control$dSemigroupoid.composeImpl((() => {
      const $0 = MonadEffect0.Monad0();
      const Bind1 = $0.Bind1();
      return m => Bind1.bind(m)(a => $0.Applicative0().pure(Data$dEither.$Either("Right", a)));
    })())(dictMonadAff.liftAff),
    MonadEffect0: () => monadEffectExceptT
  };
};
const monadAffListT = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const monadEffectListT = Control$dMonad$dList$dTrans.monadEffectListT(MonadEffect0);
  return {
    liftAff: Control$dSemigroupoid.composeImpl(Control$dMonad$dList$dTrans.fromEffect(MonadEffect0.Monad0().Applicative0()))(dictMonadAff.liftAff),
    MonadEffect0: () => monadEffectListT
  };
};
const monadAffMaybe = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const monadEffectMaybe = Control$dMonad$dMaybe$dTrans.monadEffectMaybe(MonadEffect0);
  return {
    liftAff: Control$dSemigroupoid.composeImpl(Control$dMonad$dMaybe$dTrans.monadTransMaybeT.lift(MonadEffect0.Monad0()))(dictMonadAff.liftAff),
    MonadEffect0: () => monadEffectMaybe
  };
};
const monadAffRWS = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const liftAff1 = dictMonadAff.liftAff;
  return dictMonoid => {
    const monadEffectRWS = Control$dMonad$dRWS$dTrans.monadEffectRWS(dictMonoid)(MonadEffect0);
    return {
      liftAff: Control$dSemigroupoid.composeImpl((() => {
        const Bind1 = Monad0.Bind1();
        return m => v => s => Bind1.bind(m)(a => Monad0.Applicative0().pure(Control$dMonad$dRWS$dTrans.$RWSResult(s, a, dictMonoid.mempty)));
      })())(liftAff1),
      MonadEffect0: () => monadEffectRWS
    };
  };
};
const monadAffReader = dictMonadAff => {
  const monadEffectReader = Control$dMonad$dReader$dTrans.monadEffectReader(dictMonadAff.MonadEffect0());
  return {
    liftAff: Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Control$dMonad$dReader$dTrans.ReaderT)(Data$dFunction.const))(dictMonadAff.liftAff),
    MonadEffect0: () => monadEffectReader
  };
};
const monadAffState = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const monadEffectState = Control$dMonad$dState$dTrans.monadEffectState(MonadEffect0);
  return {
    liftAff: Control$dSemigroupoid.composeImpl((() => {
      const $0 = MonadEffect0.Monad0();
      const Bind1 = $0.Bind1();
      return m => s => Bind1.bind(m)(x => $0.Applicative0().pure(Data$dTuple.$Tuple(x, s)));
    })())(dictMonadAff.liftAff),
    MonadEffect0: () => monadEffectState
  };
};
const monadAffWriter = dictMonadAff => {
  const MonadEffect0 = dictMonadAff.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const liftAff1 = dictMonadAff.liftAff;
  return dictMonoid => {
    const monadEffectWriter = Control$dMonad$dWriter$dTrans.monadEffectWriter(dictMonoid)(MonadEffect0);
    return {
      liftAff: Control$dSemigroupoid.composeImpl((() => {
        const Bind1 = Monad0.Bind1();
        return m => Bind1.bind(m)(a => Monad0.Applicative0().pure(Data$dTuple.$Tuple(a, dictMonoid.mempty)));
      })())(liftAff1),
      MonadEffect0: () => monadEffectWriter
    };
  };
};
export {liftAff, monadAffAff, monadAffContT, monadAffExceptT, monadAffListT, monadAffMaybe, monadAffRWS, monadAffReader, monadAffState, monadAffWriter};
