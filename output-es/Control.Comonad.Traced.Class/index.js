// | This module defines the `ComonadTraced` type class and its instances.
import * as Control$dComonad$dEnv$dTrans from "../Control.Comonad.Env.Trans/index.js";
import * as Control$dComonad$dStore$dTrans from "../Control.Comonad.Store.Trans/index.js";
import * as Control$dComonad$dTraced$dTrans from "../Control.Comonad.Traced.Trans/index.js";
import * as Control$dComonad$dTrans$dClass from "../Control.Comonad.Trans.Class/index.js";
import * as Control$dMonad$dIdentity$dTrans from "../Control.Monad.Identity.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const track = dict => dict.track;
const tracks = dictComonadTraced => {
  const Comonad0 = dictComonadTraced.Comonad0();
  return f => w => dictComonadTraced.track(f(Comonad0.extract(w)))(w);
};
const lowerTrack = dictComonadTrans => dictComonadTraced => {
  const lower1 = dictComonadTrans.lower(dictComonadTraced.Comonad0());
  return m => Control$dSemigroupoid.composeImpl(dictComonadTraced.track(m))(lower1);
};
const listens = dictFunctor => f => v => dictFunctor.map(g => t => Data$dTuple.$Tuple(g(t), f(t)))(v);
const listen = dictFunctor => v => dictFunctor.map(f => t => Data$dTuple.$Tuple(f(t), t))(v);
const comonadTracedTracedT = dictComonad => {
  const comonadTracedT = Control$dComonad$dTraced$dTrans.comonadTracedT(dictComonad);
  return dictMonoid => {
    const comonadTracedT1 = comonadTracedT(dictMonoid);
    return {track: t => v => dictComonad.extract(v)(t), Comonad0: () => comonadTracedT1};
  };
};
const comonadTracedStoreT = dictComonadTraced => {
  const comonadStoreT = Control$dComonad$dStore$dTrans.comonadStoreT(dictComonadTraced.Comonad0());
  return {track: lowerTrack(Control$dComonad$dStore$dTrans.comonadTransStoreT)(dictComonadTraced), Comonad0: () => comonadStoreT};
};
const comonadTracedIdentityT = dictComonadTraced => {
  const comonadIdentityT = Control$dMonad$dIdentity$dTrans.comonadIdentityT(dictComonadTraced.Comonad0());
  return {track: lowerTrack(Control$dComonad$dTrans$dClass.comonadTransIdentityT)(dictComonadTraced), Comonad0: () => comonadIdentityT};
};
const comonadTracedEnvT = dictComonadTraced => {
  const comonadEnvT = Control$dComonad$dEnv$dTrans.comonadEnvT(dictComonadTraced.Comonad0());
  return {track: lowerTrack(Control$dComonad$dEnv$dTrans.comonadTransEnvT)(dictComonadTraced), Comonad0: () => comonadEnvT};
};
const censor = dictFunctor => f => v => dictFunctor.map(v1 => Control$dSemigroupoid.composeImpl(v1)(f))(v);
export {censor, comonadTracedEnvT, comonadTracedIdentityT, comonadTracedStoreT, comonadTracedTracedT, listen, listens, lowerTrack, track, tracks};
