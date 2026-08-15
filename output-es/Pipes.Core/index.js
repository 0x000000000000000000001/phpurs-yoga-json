import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Pipes$dInternal from "../Pipes.Internal/index.js";
const runEffectRec = dictMonadRec => {
  const Monad0 = dictMonadRec.Monad0();
  const Functor0 = Monad0.Bind1().Apply0().Functor0();
  const Applicative0 = Monad0.Applicative0();
  return dictMonadRec.tailRecM(v => {
    if (v.tag === "Request") { return Functor0.map(Control$dMonad$dRec$dClass.Done)(Pipes$dInternal.closed(v._1)); }
    if (v.tag === "Respond") { return Functor0.map(Control$dMonad$dRec$dClass.Done)(Pipes$dInternal.closed(v._1)); }
    if (v.tag === "Pure") { return Applicative0.pure(Control$dMonad$dRec$dClass.$Step("Done", v._1)); }
    if (v.tag === "M") { return Functor0.map(Control$dMonad$dRec$dClass.Loop)(v._1); }
    $runtime.fail();
  });
};
const runEffect = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  const go = p => {
    if (p.tag === "Request") { return Pipes$dInternal.closed(p._1); }
    if (p.tag === "Respond") { return Pipes$dInternal.closed(p._1); }
    if (p.tag === "M") { return Bind1.bind(p._1)(go); }
    if (p.tag === "Pure") { return Applicative0.pure(p._1); }
    $runtime.fail();
  };
  return go;
};
const respond = dictMonad => a => Pipes$dInternal.$$$Proxy("Respond", a, Pipes$dInternal.Pure);
const request = dictMonad => a$p => Pipes$dInternal.$$$Proxy("Request", a$p, Pipes$dInternal.Pure);
const reflect = dictMonad => {
  const Functor0 = dictMonad.Bind1().Apply0().Functor0();
  const go = p => {
    if (p.tag === "Request") { return Pipes$dInternal.$$$Proxy("Respond", p._1, Control$dSemigroupoid.composeImpl(go)(p._2)); }
    if (p.tag === "Respond") { return Pipes$dInternal.$$$Proxy("Request", p._1, Control$dSemigroupoid.composeImpl(go)(p._2)); }
    if (p.tag === "M") { return Pipes$dInternal.$$$Proxy("M", Functor0.map(go)(p._1)); }
    if (p.tag === "Pure") { return Pipes$dInternal.$$$Proxy("Pure", p._1); }
    $runtime.fail();
  };
  return go;
};
const push = dictMonad => {
  const go = a => Pipes$dInternal.$$$Proxy("Respond", a, a$p => Pipes$dInternal.$$$Proxy("Request", a$p, go));
  return go;
};
const pull = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  return go;
};
const composeResponse = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  const Functor0 = dictMonad.Bind1().Apply0().Functor0();
  return p0 => fb => {
    const go = p => {
      if (p.tag === "Request") { return Pipes$dInternal.$$$Proxy("Request", p._1, Control$dSemigroupoid.composeImpl(go)(p._2)); }
      if (p.tag === "Respond") { return bindProxy.bind(fb(p._1))(Control$dSemigroupoid.composeImpl(go)(p._2)); }
      if (p.tag === "M") { return Pipes$dInternal.$$$Proxy("M", Functor0.map(go)(p._1)); }
      if (p.tag === "Pure") { return Pipes$dInternal.$$$Proxy("Pure", p._1); }
      $runtime.fail();
    };
    return go(p0);
  };
};
const composeResponse$p = dictMonad => fa => fb => a => composeResponse(dictMonad)(fa(a))(fb);
const flippedComposeResponse$p = dictMonad => p1 => p2 => composeResponse$p(dictMonad)(p2)(p1);
const flippedComposeResponse = dictMonad => f => p => composeResponse(dictMonad)(p)(f);
const composeRequest = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  const Functor0 = dictMonad.Bind1().Apply0().Functor0();
  return fb$p => p0 => {
    const go = p => {
      if (p.tag === "Request") { return bindProxy.bind(fb$p(p._1))(Control$dSemigroupoid.composeImpl(go)(p._2)); }
      if (p.tag === "Respond") { return Pipes$dInternal.$$$Proxy("Respond", p._1, Control$dSemigroupoid.composeImpl(go)(p._2)); }
      if (p.tag === "M") { return Pipes$dInternal.$$$Proxy("M", Functor0.map(go)(p._1)); }
      if (p.tag === "Pure") { return Pipes$dInternal.$$$Proxy("Pure", p._1); }
      $runtime.fail();
    };
    return go(p0);
  };
};
const composeRequest$p = dictMonad => fb$p => fc$p => c$p => composeRequest(dictMonad)(fb$p)(fc$p(c$p));
const flippedComposeRequest$p = dictMonad => p1 => p2 => composeRequest$p(dictMonad)(p2)(p1);
const flippedComposeRequest = dictMonad => p => f => composeRequest(dictMonad)(f)(p);
const composePush$p = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  return p => fb => {
    if (p.tag === "Request") { return Pipes$dInternal.$$$Proxy("Request", p._1, a => composePush$p(dictMonad)(p._2(a))(fb)); }
    if (p.tag === "Respond") { return composePull$p(dictMonad)(p._2)(fb(p._1)); }
    if (p.tag === "M") { return Pipes$dInternal.$$$Proxy("M", Bind1.bind(p._1)(p$p => Applicative0.pure(composePush$p(dictMonad)(p$p)(fb)))); }
    if (p.tag === "Pure") { return Pipes$dInternal.$$$Proxy("Pure", p._1); }
    $runtime.fail();
  };
};
const composePull$p = dictMonad => {
  const Functor0 = dictMonad.Bind1().Apply0().Functor0();
  return fb$p => p => {
    if (p.tag === "Request") { return composePush$p(dictMonad)(fb$p(p._1))(p._2); }
    if (p.tag === "Respond") { return Pipes$dInternal.$$$Proxy("Respond", p._1, Control$dSemigroupoid.composeImpl(v => composePull$p(dictMonad)(fb$p)(v))(p._2)); }
    if (p.tag === "M") { return Pipes$dInternal.$$$Proxy("M", Functor0.map(v => composePull$p(dictMonad)(fb$p)(v))(p._1)); }
    if (p.tag === "Pure") { return Pipes$dInternal.$$$Proxy("Pure", p._1); }
    $runtime.fail();
  };
};
const composePush = dictMonad => fa => fb => a => composePush$p(dictMonad)(fa(a))(fb);
const flippedComposePush = dictMonad => p1 => p2 => composePush(dictMonad)(p2)(p1);
const flippedComposePush$p = dictMonad => k => p => composePush$p(dictMonad)(p)(k);
const flippedComposePull$p = dictMonad => k => p => composePull$p(dictMonad)(p)(k);
const composePull = dictMonad => fb$p => fc$p => c$p => composePull$p(dictMonad)(fb$p)(fc$p(c$p));
const flippedComposePull = dictMonad => p1 => p2 => composePull(dictMonad)(p2)(p1);
export {
  composePull,
  composePull$p,
  composePush,
  composePush$p,
  composeRequest,
  composeRequest$p,
  composeResponse,
  composeResponse$p,
  flippedComposePull,
  flippedComposePull$p,
  flippedComposePush,
  flippedComposePush$p,
  flippedComposeRequest,
  flippedComposeRequest$p,
  flippedComposeResponse,
  flippedComposeResponse$p,
  pull,
  push,
  reflect,
  request,
  respond,
  runEffect,
  runEffectRec
};
