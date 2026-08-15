import * as $runtime from "../runtime.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import {bindImpl, bindLeafClass, bindNodeClass, freeObjClass, liftF, pureImpl, resumePrime} from "./foreign.js";
const identity = x => x;
const identity1 = x => x;
const identity2 = x => x;
const substFree = k => {
  const go = f => resumePrime(g => i => bindImpl(k(g))(x => go(i(x))))(pureImpl)(f);
  return go;
};
const runFreeM = dictFunctor => dictMonadRec => {
  const Monad0 = dictMonadRec.Monad0();
  const Functor0 = Monad0.Bind1().Apply0().Functor0();
  const Applicative0 = Monad0.Applicative0();
  return k => dictMonadRec.tailRecM(f => resumePrime(g => i => Functor0.map(Control$dMonad$dRec$dClass.Loop)(k(dictFunctor.map(i)(g))))(a => Applicative0.pure(Control$dMonad$dRec$dClass.$Step(
    "Done",
    a
  )))(f));
};
const runFree = dictFunctor => k => {
  const go = f => resumePrime(g => i => go(k(dictFunctor.map(i)(g))))(identity)(f);
  return go;
};
const resume$p = resumePrime;
const resume = dictFunctor => resumePrime(g => i => Data$dEither.$Either("Left", dictFunctor.map(i)(g)))(Data$dEither.Right);
const monadTransFree = {lift: dictMonad => liftF};
const hoistFree = k => substFree(fa => liftF(k(fa)));
const functorFree = {map: k => f => bindImpl(f)(Control$dSemigroupoid.composeImpl(pureImpl)(k))};
const foldableFree = dictFunctor => {
  const resume1 = resumePrime(g => i => Data$dEither.$Either("Left", dictFunctor.map(i)(g)))(Data$dEither.Right);
  return dictFoldable => (
    {
      foldMap: dictMonoid => f => {
        const go$lazy = $runtime.binding(() => Control$dSemigroupoid.composeImpl(v => {
          if (v.tag === "Left") { return dictFoldable.foldMap(dictMonoid)(go$lazy())(v._1); }
          if (v.tag === "Right") { return f(v._1); }
          $runtime.fail();
        })(resume1));
        const go = go$lazy();
        return go;
      },
      foldl: f => {
        const go = r => Control$dSemigroupoid.composeImpl(v => {
          if (v.tag === "Left") { return dictFoldable.foldl(go)(r)(v._1); }
          if (v.tag === "Right") { return f(r)(v._1); }
          $runtime.fail();
        })(resume1);
        return go;
      },
      foldr: f => {
        const go = r => Control$dSemigroupoid.composeImpl(v => {
          if (v.tag === "Left") { return dictFoldable.foldr(b => a => go(a)(b))(r)(v._1); }
          if (v.tag === "Right") { return f(v._1)(r); }
          $runtime.fail();
        })(resume1);
        return go;
      }
    }
  );
};
const foldFree = dictMonadRec => {
  const Monad0 = dictMonadRec.Monad0();
  const Functor0 = Monad0.Bind1().Apply0().Functor0();
  const Applicative0 = Monad0.Applicative0();
  return k => dictMonadRec.tailRecM(f => resumePrime(g => i => Functor0.map(x => Control$dMonad$dRec$dClass.$Step("Loop", i(x)))(k(g)))(a => Applicative0.pure(Control$dMonad$dRec$dClass.$Step(
    "Done",
    a
  )))(f));
};
const eqFree = dictFunctor => dictEq1 => dictEq => (
  {
    eq: x => y => {
      const v = resumePrime(g => i => Data$dEither.$Either("Left", dictFunctor.map(i)(g)))(Data$dEither.Right)(y);
      const v1 = resumePrime(g => i => Data$dEither.$Either("Left", dictFunctor.map(i)(g)))(Data$dEither.Right)(x);
      if (v1.tag === "Left") { return v.tag === "Left" && dictEq1.eq1(eqFree(dictFunctor)(dictEq1)(dictEq))(v1._1)(v._1); }
      return v1.tag === "Right" && v.tag === "Right" && dictEq.eq(v1._1)(v._1);
    }
  }
);
const ordFree = dictFunctor => dictOrd1 => {
  const eqFree2 = eqFree(dictFunctor)(dictOrd1.Eq10());
  return dictOrd => {
    const eqFree3 = eqFree2(dictOrd.Eq0());
    return {
      compare: x => y => {
        const v = resumePrime(g => i => Data$dEither.$Either("Left", dictFunctor.map(i)(g)))(Data$dEither.Right)(y);
        const v1 = resumePrime(g => i => Data$dEither.$Either("Left", dictFunctor.map(i)(g)))(Data$dEither.Right)(x);
        if (v1.tag === "Left") {
          if (v.tag === "Left") { return dictOrd1.compare1(ordFree(dictFunctor)(dictOrd1)(dictOrd))(v1._1)(v._1); }
          return Data$dOrdering.LT;
        }
        if (v.tag === "Left") { return Data$dOrdering.GT; }
        if (v1.tag === "Right" && v.tag === "Right") { return dictOrd.compare(v1._1)(v._1); }
        $runtime.fail();
      },
      Eq0: () => eqFree3
    };
  };
};
const eq1Free = dictFunctor => dictEq1 => ({eq1: dictEq => eqFree(dictFunctor)(dictEq1)(dictEq).eq});
const ord1Free = dictFunctor => dictOrd1 => {
  const ordFree2 = ordFree(dictFunctor)(dictOrd1);
  const $0 = dictOrd1.Eq10();
  const eq1Free2 = {eq1: dictEq => eqFree(dictFunctor)($0)(dictEq).eq};
  return {compare1: dictOrd => ordFree2(dictOrd).compare, Eq10: () => eq1Free2};
};
const monadFree = {Applicative0: () => applicativeFree, Bind1: () => bindFree};
const bindFree = {bind: bindImpl, Apply0: () => applyFree};
const applyFree = {apply: f => a => bindImpl(f)(f$p => bindImpl(a)(a$p => applicativeFree.pure(f$p(a$p)))), Functor0: () => functorFree};
const applicativeFree = {pure: pureImpl, Apply0: () => applyFree};
const wrap = f => bindImpl(liftF(f))(identity1);
const suspendF = dictApplicative => f => bindImpl(liftF(dictApplicative.pure(f)))(identity1);
const semigroupFree = dictSemigroup => (
  {
    append: (() => {
      const $0 = dictSemigroup.append;
      return a => b => applyFree.apply(bindImpl(a)(Control$dSemigroupoid.composeImpl(pureImpl)($0)))(b);
    })()
  }
);
const monadRecFree = {
  tailRecM: k => a => bindImpl(k(a))(res => {
    if (res.tag === "Loop") { return monadRecFree.tailRecM(k)(res._1); }
    if (res.tag === "Done") { return pureImpl(res._1); }
    $runtime.fail();
  }),
  Monad0: () => monadFree
};
const monoidFree = dictMonoid => {
  const semigroupFree1 = semigroupFree(dictMonoid.Semigroup0());
  return {mempty: pureImpl(dictMonoid.mempty), Semigroup0: () => semigroupFree1};
};
const traversableFree = dictTraversable => {
  const Functor0 = dictTraversable.Functor0();
  const resume1 = resumePrime(g => i => Data$dEither.$Either("Left", Functor0.map(i)(g)))(Data$dEither.Right);
  const foldableFree1 = foldableFree(Functor0)(dictTraversable.Foldable1());
  return {
    traverse: dictApplicative => {
      const Functor01 = dictApplicative.Apply0().Functor0();
      return f => {
        const go$lazy = $runtime.binding(() => Control$dSemigroupoid.composeImpl(v => {
          if (v.tag === "Left") {
            return Functor01.map(Control$dSemigroupoid.composeImpl(m => bindImpl(m)(Control$dBind.identity))(liftF))(dictTraversable.traverse(dictApplicative)(go$lazy())(v._1));
          }
          if (v.tag === "Right") { return Functor01.map(pureImpl)(f(v._1)); }
          $runtime.fail();
        })(resume1));
        const go = go$lazy();
        return go;
      };
    },
    sequence: dictApplicative => tma => traversableFree(dictTraversable).traverse(dictApplicative)(identity2)(tma),
    Functor0: () => functorFree,
    Foldable1: () => foldableFree1
  };
};
export {
  applicativeFree,
  applyFree,
  bindFree,
  eq1Free,
  eqFree,
  foldFree,
  foldableFree,
  functorFree,
  hoistFree,
  identity,
  identity1,
  identity2,
  monadFree,
  monadRecFree,
  monadTransFree,
  monoidFree,
  ord1Free,
  ordFree,
  resume,
  resume$p,
  runFree,
  runFreeM,
  semigroupFree,
  substFree,
  suspendF,
  traversableFree,
  wrap
};
export * from "./foreign.js";
