// | This module defines the `ComonadStore` type class and its instances.
import * as Control$dComonad$dEnv$dTrans from "../Control.Comonad.Env.Trans/index.js";
import * as Control$dComonad$dStore$dTrans from "../Control.Comonad.Store.Trans/index.js";
import * as Control$dComonad$dTraced$dTrans from "../Control.Comonad.Traced.Trans/index.js";
import * as Control$dExtend from "../Control.Extend/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
const pos = dict => dict.pos;
const peek = dict => dict.peek;
const peeks = dictComonadStore => f => x => dictComonadStore.peek(f(dictComonadStore.pos(x)))(x);
const seeks = dictComonadStore => {
  const duplicate = dictComonadStore.Comonad0().Extend0().extend(Control$dExtend.identity);
  return f => Control$dSemigroupoid.composeImpl(x => dictComonadStore.peek(f(dictComonadStore.pos(x)))(x))(duplicate);
};
const seek = dictComonadStore => {
  const duplicate = dictComonadStore.Comonad0().Extend0().extend(Control$dExtend.identity);
  return s => Control$dSemigroupoid.composeImpl(dictComonadStore.peek(s))(duplicate);
};
const experiment = dictComonadStore => dictFunctor => f => x => dictFunctor.map(a => dictComonadStore.peek(a)(x))(f(dictComonadStore.pos(x)));
const comonadStoreTracedT = dictComonadStore => {
  const pos1 = dictComonadStore.pos;
  const Comonad0 = dictComonadStore.Comonad0();
  const comonadTracedT = Control$dComonad$dTraced$dTrans.comonadTracedT(Comonad0);
  return dictMonoid => {
    const Functor0 = Comonad0.Extend0().Functor0();
    const comonadTracedT1 = comonadTracedT(dictMonoid);
    return {
      pos: Control$dSemigroupoid.composeImpl(pos1)(v => Functor0.map(f => f(dictMonoid.mempty))(v)),
      peek: s => Control$dSemigroupoid.composeImpl(dictComonadStore.peek(s))(v => Functor0.map(f => f(dictMonoid.mempty))(v)),
      Comonad0: () => comonadTracedT1
    };
  };
};
const comonadStoreStoreT = dictComonad => {
  const comonadStoreT = Control$dComonad$dStore$dTrans.comonadStoreT(dictComonad);
  return {pos: v => v._2, peek: s => v => dictComonad.extract(v._1)(s), Comonad0: () => comonadStoreT};
};
const comonadStoreEnvT = dictComonadStore => {
  const comonadEnvT = Control$dComonad$dEnv$dTrans.comonadEnvT(dictComonadStore.Comonad0());
  return {
    pos: Control$dSemigroupoid.composeImpl(dictComonadStore.pos)(v => v._2),
    peek: s => Control$dSemigroupoid.composeImpl(dictComonadStore.peek(s))(v => v._2),
    Comonad0: () => comonadEnvT
  };
};
export {comonadStoreEnvT, comonadStoreStoreT, comonadStoreTracedT, experiment, peek, peeks, pos, seek, seeks};
