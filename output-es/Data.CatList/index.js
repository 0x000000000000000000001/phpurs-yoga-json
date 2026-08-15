import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import {null as $$null, append, cons, empty, length, singleton, snoc, unconsImpl} from "./foreign.js";
const unfoldable1CatList = {
  unfoldr1: f => b => {
    const go = go$a0$copy => go$a1$copy => {
      let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
      while (go$c) {
        const source = go$a0, memo = go$a1;
        const v = f(source);
        if (v._2.tag === "Nothing") {
          go$c = false;
          go$r = snoc(memo)(v._1);
          continue;
        }
        if (v._2.tag === "Just") {
          go$a0 = v._2._1;
          go$a1 = snoc(memo)(v._1);
          continue;
        }
        $runtime.fail();
      }
      return go$r;
    };
    return go(b)(empty);
  }
};
const unfoldableCatList = {
  unfoldr: f => b => {
    const go = go$a0$copy => go$a1$copy => {
      let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
      while (go$c) {
        const source = go$a0, memo = go$a1;
        const v = f(source);
        if (v.tag === "Nothing") {
          go$c = false;
          go$r = memo;
          continue;
        }
        if (v.tag === "Just") {
          go$a0 = v._1._2;
          go$a1 = snoc(memo)(v._1._1);
          continue;
        }
        $runtime.fail();
      }
      return go$r;
    };
    return go(b)(empty);
  },
  Unfoldable10: () => unfoldable1CatList
};
const uncons = /* #__PURE__ */ unconsImpl(Data$dMaybe.Nothing)(a => rest => Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(a, rest)));
const showCatList = dictShow => ({show: c => "(CatList " + Data$dShow.showIntImpl(length(c)) + " items)"});
const semigroupCatList = {append};
const monoidCatList = {mempty: empty, Semigroup0: () => semigroupCatList};
const functorCatList = {
  map: v => v1 => {
    if ($$null(v1)) { return empty; }
    const v2 = uncons(v1);
    if (v2.tag === "Nothing") { return empty; }
    if (v2.tag === "Just") { return cons(v(v2._1._1))(functorCatList.map(v)(v2._1._2)); }
    $runtime.fail();
  }
};
const fromFoldable = dictFoldable => f => dictFoldable.foldMap(monoidCatList)(singleton)(f);
const foldableCatList = {
  foldMap: dictMonoid => {
    const Semigroup0 = dictMonoid.Semigroup0();
    const mempty = dictMonoid.mempty;
    return f => foldableCatList.foldl(acc => x => Semigroup0.append(acc)(f(x)))(mempty);
  },
  foldr: f => s => l => Data$dFoldable.foldableFreeMonoidTree.foldr(f)(s)(foldableCatList.foldMap(Data$dFoldable.monoidFreeMonoidTree)(Data$dFoldable.Node)(l)),
  foldl: f => {
    const go = go$a0$copy => go$a1$copy => {
      let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
      while (go$c) {
        const acc = go$a0, q = go$a1;
        const v = uncons(q);
        if (v.tag === "Just") {
          go$a0 = f(acc)(v._1._1);
          go$a1 = v._1._2;
          continue;
        }
        if (v.tag === "Nothing") {
          go$c = false;
          go$r = acc;
          continue;
        }
        $runtime.fail();
      }
      return go$r;
    };
    return go;
  }
};
const traversableCatList = {
  traverse: dictApplicative => {
    const Apply0 = dictApplicative.Apply0();
    const Functor0 = dictApplicative.Apply0().Functor0();
    return v => v1 => {
      if ($$null(v1)) { return dictApplicative.pure(empty); }
      const v2 = uncons(v1);
      if (v2.tag === "Nothing") { return dictApplicative.pure(empty); }
      if (v2.tag === "Just") { return Apply0.apply(Functor0.map(cons)(v(v2._1._1)))(traversableCatList.traverse(dictApplicative)(v)(v2._1._2)); }
      $runtime.fail();
    };
  },
  sequence: dictApplicative => {
    const Apply0 = dictApplicative.Apply0();
    const Functor0 = dictApplicative.Apply0().Functor0();
    return v => {
      if ($$null(v)) { return dictApplicative.pure(empty); }
      const v1 = uncons(v);
      if (v1.tag === "Nothing") { return dictApplicative.pure(empty); }
      if (v1.tag === "Just") { return Apply0.apply(Functor0.map(cons)(v1._1._1))(traversableCatList.sequence(dictApplicative)(v1._1._2)); }
      $runtime.fail();
    };
  },
  Functor0: () => functorCatList,
  Foldable1: () => foldableCatList
};
const monadCatList = {Applicative0: () => applicativeCatList, Bind1: () => bindCatList$lazy()};
const applyCatList = {apply: f => a => bindCatList$lazy().bind(f)(f$p => bindCatList$lazy().bind(a)(a$p => applicativeCatList.pure(f$p(a$p)))), Functor0: () => functorCatList};
const applicativeCatList = {pure: singleton, Apply0: () => applyCatList};
const bindCatList$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    bind: (() => {
      const $0 = foldableCatList.foldMap(monoidCatList);
      return b => a => $0(a)(b);
    })(),
    Apply0: () => applyCatList
  }
));
const bindCatList = /* #__PURE__ */ bindCatList$lazy();
const altCatList = {alt: append, Functor0: () => functorCatList};
const plusCatList = {empty, Alt0: () => altCatList};
const alternativeCatList = {Applicative0: () => applicativeCatList, Plus1: () => plusCatList};
const monadPlusCatList = {Monad0: () => monadCatList, Alternative1: () => alternativeCatList};
export {
  altCatList,
  alternativeCatList,
  applicativeCatList,
  applyCatList,
  bindCatList,
  foldableCatList,
  fromFoldable,
  functorCatList,
  monadCatList,
  monadPlusCatList,
  monoidCatList,
  plusCatList,
  semigroupCatList,
  showCatList,
  traversableCatList,
  uncons,
  unfoldable1CatList,
  unfoldableCatList
};
export * from "./foreign.js";
