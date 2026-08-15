import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Pipes from "../Pipes/index.js";
import * as Pipes$dCore from "../Pipes.Core/index.js";
import * as Pipes$dInternal from "../Pipes.Internal/index.js";
const identity = x => x;
const identity1 = x => x;
const identity2 = x => x;
const identity3 = x => x;
const toList = prod0 => {
  const go = prod => v => nil => {
    if (prod.tag === "Request") { return Pipes$dInternal.closed(prod._1); }
    if (prod.tag === "Respond") { return Data$dList$dTypes.$List("Cons", prod._1, go(prod._2())(Data$dList$dTypes.Cons)(nil)); }
    if (prod.tag === "M") { return go(prod._1)(Data$dList$dTypes.Cons)(nil); }
    if (prod.tag === "Pure") { return nil; }
    $runtime.fail();
  };
  return go(prod0)(Data$dList$dTypes.Cons)(Data$dList$dTypes.Nil);
};
const takeWhile$p = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return predicate => {
    const go$lazy = $runtime.binding(() => bindProxy.bind(Pipes$dInternal.$$$Proxy("Request", undefined, Pipes$dInternal.Pure))(a => {
      if (predicate(a)) { return bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", a, Pipes$dInternal.Pure))(() => go$lazy()); }
      return Pipes$dInternal.$$$Proxy("Pure", a);
    }));
    const go = go$lazy();
    return go;
  };
};
const takeWhile = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return predicate => {
    const go$lazy = $runtime.binding(() => bindProxy.bind(Pipes$dInternal.$$$Proxy("Request", undefined, Pipes$dInternal.Pure))(a => {
      if (predicate(a)) { return bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", a, Pipes$dInternal.Pure))(() => go$lazy()); }
      return Pipes$dInternal.$$$Proxy("Pure", undefined);
    }));
    const go = go$lazy();
    return go;
  };
};
const take = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  const loop = v => {
    if (v === 0) { return Pipes$dInternal.$$$Proxy("Pure", undefined); }
    return bindProxy.bind(Pipes$dInternal.$$$Proxy("Request", undefined, Pipes$dInternal.Pure))(a => bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", a, Pipes$dInternal.Pure))(() => loop(v - 1 | 0)));
  };
  return loop;
};
const seq = dictMonad => Pipes$dCore.composeResponse(dictMonad)((() => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  return go();
})())(a => Pipes$dInternal.$$$Proxy("Respond", a, Pipes$dInternal.Pure));
const scanM = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return step => begin => done => {
    const go = x => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(dictMonad)(done(x)))(b => bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", b, Pipes$dInternal.Pure))(() => bindProxy.bind(Pipes$dInternal.$$$Proxy(
      "Request",
      undefined,
      Pipes$dInternal.Pure
    ))(a => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(dictMonad)(step(x)(a)))(x$p => go(x$p)))));
    return bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(dictMonad)(begin))(x => go(x));
  };
};
const scan = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return step => begin => done => {
    const go = x => bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", done(x), Pipes$dInternal.Pure))(() => bindProxy.bind(Pipes$dInternal.$$$Proxy(
      "Request",
      undefined,
      Pipes$dInternal.Pure
    ))(a => go(step(x)(a))));
    return go(begin);
  };
};
const replicateM = dictMonad => n => m => {
  const $0 = Pipes$dInternal.monadTransProxy.lift(dictMonad)(m);
  return Pipes$dCore.composeRequest(dictMonad)(v => $0)(take(dictMonad)(n));
};
const repeatM = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  return m => {
    const $1 = Pipes$dInternal.monadTransProxy.lift(dictMonad)(m);
    return Pipes$dCore.composeRequest(dictMonad)(v => $1)($0);
  };
};
const $$null = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  return p => Bind1.bind(Pipes.next(dictMonad)(p))(x => dictMonad.Applicative0().pure((() => {
    if (x.tag === "Left") { return true; }
    if (x.tag === "Right") { return false; }
    $runtime.fail();
  })()));
};
const mapM_ = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  return f => Pipes$dCore.composeResponse(dictMonad)($0)(a => Pipes$dInternal.monadTransProxy.lift(dictMonad)(f(a)));
};
const mapM = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return f => Pipes$dCore.composeResponse(dictMonad)($0)(a => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(dictMonad)(f(a)))(b => Pipes$dInternal.$$$Proxy(
    "Respond",
    b,
    Pipes$dInternal.Pure
  )));
};
const sequence = dictMonad => mapM(dictMonad)(identity);
const mapFoldable = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  return dictFoldable => f => Pipes$dCore.composeResponse(dictMonad)($0)(a => Pipes.each(dictMonad)(dictFoldable)(f(a)));
};
const map = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  return f => Pipes$dCore.composeResponse(dictMonad)($0)(a => Pipes$dInternal.$$$Proxy("Respond", f(a), Pipes$dInternal.Pure));
};
const show = dictMonad => dictShow => map(dictMonad)(dictShow.show);
const last = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  return p0 => {
    const go = a => p => Bind1.bind(Pipes.next(dictMonad)(p))(x => {
      if (x.tag === "Left") { return Applicative0.pure(Data$dMaybe.$Maybe("Just", a)); }
      if (x.tag === "Right") { return go(x._1._1)(x._1._2); }
      $runtime.fail();
    });
    return Bind1.bind(Pipes.next(dictMonad)(p0))(x => {
      if (x.tag === "Left") { return Applicative0.pure(Data$dMaybe.Nothing); }
      if (x.tag === "Right") { return go(x._1._1)(x._1._2); }
      $runtime.fail();
    });
  };
};
const head = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  return p => Bind1.bind(Pipes.next(dictMonad)(p))(x => dictMonad.Applicative0().pure((() => {
    if (x.tag === "Left") { return Data$dMaybe.Nothing; }
    if (x.tag === "Right") { return Data$dMaybe.$Maybe("Just", x._1._1); }
    $runtime.fail();
  })()));
};
const foldM$p = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  return step => begin => done => p0 => {
    const go = p => x => {
      if (p.tag === "Request") { return Pipes$dInternal.closed(p._1); }
      if (p.tag === "Respond") { return Bind1.bind(step(x)(p._1))(x$p => go(p._2())(x$p)); }
      if (p.tag === "M") { return Bind1.bind(p._1)(p$p => go(p$p)(x)); }
      if (p.tag === "Pure") {
        const $0 = p._1;
        return Bind1.bind(done(x))(b => Applicative0.pure(Data$dTuple.$Tuple(b, $0)));
      }
      $runtime.fail();
    };
    return Bind1.bind(begin)(x0 => go(p0)(x0));
  };
};
const foldM = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  return step => begin => done => p0 => {
    const go = p => x => {
      if (p.tag === "Request") { return Pipes$dInternal.closed(p._1); }
      if (p.tag === "Respond") { return Bind1.bind(step(x)(p._1))(x$p => go(p._2())(x$p)); }
      if (p.tag === "M") { return Bind1.bind(p._1)(p$p => go(p$p)(x)); }
      if (p.tag === "Pure") { return done(x); }
      $runtime.fail();
    };
    return Bind1.bind(begin)(x0 => go(p0)(x0));
  };
};
const fold$p = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  return step => begin => done => p0 => {
    const go = p => x => {
      if (p.tag === "Request") { return Pipes$dInternal.closed(p._1); }
      if (p.tag === "Respond") { return go(p._2())(step(x)(p._1)); }
      if (p.tag === "M") { return Bind1.bind(p._1)(p$p => go(p$p)(x)); }
      if (p.tag === "Pure") { return dictMonad.Applicative0().pure(Data$dTuple.$Tuple(done(x), p._1)); }
      $runtime.fail();
    };
    return go(p0)(begin);
  };
};
const fold = dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  return step => begin => done => p0 => {
    const go = p => x => {
      if (p.tag === "Request") { return Pipes$dInternal.closed(p._1); }
      if (p.tag === "Respond") { return go(p._2())(step(x)(p._1)); }
      if (p.tag === "M") { return Bind1.bind(p._1)(p$p => go(p$p)(x)); }
      if (p.tag === "Pure") { return Applicative0.pure(done(x)); }
      $runtime.fail();
    };
    return go(p0)(begin);
  };
};
const length = dictMonad => fold(dictMonad)(n => v => n + 1 | 0)(0)(identity1);
const maximum = dictMonad => dictOrd => fold(dictMonad)(x => a => Data$dMaybe.$Maybe(
  "Just",
  (() => {
    if (x.tag === "Nothing") { return a; }
    if (x.tag === "Just") {
      if (dictOrd.compare(a)(x._1) !== "LT") { return a; }
      return x._1;
    }
    $runtime.fail();
  })()
))(Data$dMaybe.Nothing)(identity2);
const minimum = dictMonad => dictOrd => fold(dictMonad)(x => a => Data$dMaybe.$Maybe(
  "Just",
  (() => {
    if (x.tag === "Nothing") { return a; }
    if (x.tag === "Just") {
      if (dictOrd.compare(a)(x._1) === "LT") { return a; }
      return x._1;
    }
    $runtime.fail();
  })()
))(Data$dMaybe.Nothing)(identity2);
const toListM = dictMonad => fold(dictMonad)(x => a => Control$dSemigroupoid.composeImpl(x)(v => Data$dList$dTypes.$List("Cons", a, v)))(x => x)(x => x(Data$dList$dTypes.Nil));
const findIndices = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return predicate => {
    const go = n => bindProxy.bind(Pipes$dInternal.$$$Proxy("Request", undefined, Pipes$dInternal.Pure))(a => bindProxy.bind(predicate(a)
      ? Pipes$dInternal.$$$Proxy("Respond", n, Pipes$dInternal.Pure)
      : Pipes$dInternal.$$$Proxy("Pure", undefined))(() => go(n + 1 | 0)));
    return go(0);
  };
};
const findIndex = dictMonad => predicate => p => head(dictMonad)(Pipes$dCore.composePull$p(dictMonad)(v => p)(findIndices(dictMonad)(predicate)));
const filterM = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return predicate => Pipes$dCore.composeResponse(dictMonad)($0)(a => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(dictMonad)(predicate(a)))(b => {
    if (b) { return Pipes$dInternal.$$$Proxy("Respond", a, Pipes$dInternal.Pure); }
    return Pipes$dInternal.$$$Proxy("Pure", undefined);
  }));
};
const filter = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  return predicate => Pipes$dCore.composeResponse(dictMonad)($0)(a => {
    if (predicate(a)) { return Pipes$dInternal.$$$Proxy("Respond", a, Pipes$dInternal.Pure); }
    return Pipes$dInternal.$$$Proxy("Pure", undefined);
  });
};
const find = dictMonad => predicate => p => head(dictMonad)(Pipes$dCore.composePull$p(dictMonad)(v => p)(filter(dictMonad)(predicate)));
const dropWhile = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  return predicate => {
    const go$1$lazy = $runtime.binding(() => bindProxy.bind(Pipes$dInternal.$$$Proxy("Request", undefined, Pipes$dInternal.Pure))(a => {
      if (predicate(a)) { return go$1$lazy(); }
      return bindProxy.bind(Pipes$dInternal.$$$Proxy("Respond", a, Pipes$dInternal.Pure))(() => $0);
    }));
    const go$1 = go$1$lazy();
    return go$1;
  };
};
const drop = dictMonad => {
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  const loop = v => {
    if (v === 0) {
      const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
      return go();
    }
    return bindProxy.bind(Pipes$dInternal.$$$Proxy("Request", undefined, Pipes$dInternal.Pure))(() => loop(v - 1 | 0));
  };
  return loop;
};
const index = dictMonad => n => p => head(dictMonad)(Pipes$dCore.composePull$p(dictMonad)(v => p)(drop(dictMonad)(n)));
const drain = dictMonad => Pipes$dCore.composeResponse(dictMonad)((() => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  return go();
})())((() => {
  const Applicative0 = Pipes$dInternal.monadProxy(dictMonad).Applicative0();
  return v => Applicative0.pure();
})());
const concat = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  const each = Pipes.each(dictMonad);
  return dictFoldable => Pipes$dCore.composeResponse(dictMonad)($0)(each(dictFoldable));
};
const chain = dictMonad => {
  const go = a$p => Pipes$dInternal.$$$Proxy("Request", a$p, a => Pipes$dInternal.$$$Proxy("Respond", a, go));
  const $0 = go();
  const bindProxy = Pipes$dInternal.bindProxy(dictMonad);
  return f => Pipes$dCore.composeResponse(dictMonad)($0)(a => bindProxy.bind(Pipes$dInternal.monadTransProxy.lift(dictMonad)(f(a)))(() => Pipes$dInternal.$$$Proxy(
    "Respond",
    a,
    Pipes$dInternal.Pure
  )));
};
const any = dictMonad => predicate => p => {
  const Applicative0 = dictMonad.Applicative0();
  return dictMonad.Bind1().bind($$null(dictMonad)(Pipes$dCore.composePull$p(dictMonad)(v => p)(filter(dictMonad)(predicate))))(a$p => Applicative0.pure(!a$p));
};
const elem = dictMonad => dictEq => a => any(dictMonad)(v => dictEq.eq(a)(v));
const or = dictMonad => any(dictMonad)(identity3);
const all = dictMonad => {
  const null1 = $$null(dictMonad);
  return predicate => p => null1(Pipes$dCore.composePull$p(dictMonad)(v => p)(filter(dictMonad)(a => !predicate(a))));
};
const and = dictMonad => all(dictMonad)(identity3);
const notElem = dictMonad => dictEq => a => all(dictMonad)(v => !dictEq.eq(a)(v));
export {
  all,
  and,
  any,
  chain,
  concat,
  drain,
  drop,
  dropWhile,
  elem,
  filter,
  filterM,
  find,
  findIndex,
  findIndices,
  fold,
  fold$p,
  foldM,
  foldM$p,
  head,
  identity,
  identity1,
  identity2,
  identity3,
  index,
  last,
  length,
  map,
  mapFoldable,
  mapM,
  mapM_,
  maximum,
  minimum,
  notElem,
  $$null as null,
  or,
  repeatM,
  replicateM,
  scan,
  scanM,
  seq,
  sequence,
  show,
  take,
  takeWhile,
  takeWhile$p,
  toList,
  toListM
};
