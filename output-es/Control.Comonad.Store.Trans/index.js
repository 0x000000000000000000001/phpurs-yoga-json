// | This module defines the store comonad transformer, `StoreT`.
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const StoreT = x => x;
const runStoreT = v => v;
const newtypeStoreT = {Coercible0: () => {}};
const functorStoreT = dictFunctor => ({map: f => v => Data$dTuple.$Tuple(dictFunctor.map(h => Control$dSemigroupoid.composeImpl(f)(h))(v._1), v._2)});
const extendStoreT = dictExtend => {
  const functorStoreT1 = functorStoreT(dictExtend.Functor0());
  return {extend: f => v => Data$dTuple.$Tuple(dictExtend.extend(w$p => s$p => f(Data$dTuple.$Tuple(w$p, s$p)))(v._1), v._2), Functor0: () => functorStoreT1};
};
const comonadTransStoreT = {
  lower: dictComonad => {
    const Functor0 = dictComonad.Extend0().Functor0();
    return v => {
      const $0 = v._2;
      return Functor0.map(v1 => v1($0))(v._1);
    };
  }
};
const comonadStoreT = dictComonad => {
  const extendStoreT1 = extendStoreT(dictComonad.Extend0());
  return {extract: v => dictComonad.extract(v._1)(v._2), Extend0: () => extendStoreT1};
};
export {StoreT, comonadStoreT, comonadTransStoreT, extendStoreT, functorStoreT, newtypeStoreT, runStoreT};
