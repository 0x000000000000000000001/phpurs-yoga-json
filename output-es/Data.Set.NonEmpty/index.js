import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray$dNonEmpty$dInternal from "../Data.Array.NonEmpty.Internal/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable1 from "../Data.Unfoldable1/index.js";
import * as Partial from "../Partial/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const unionSet = dictOrd => {
  const compare = dictOrd.compare;
  return m1 => m2 => Data$dMap$dInternal.unsafeUnionWith(compare, Data$dFunction.const, m1, m2);
};
const toUnfoldable1 = dictUnfoldable1 => {
  const stepNext = Data$dMap$dInternal.stepAscCps((k, v, next) => Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(k, next)))(v => Data$dMaybe.Nothing);
  return Control$dSemigroupoid.composeImpl(dictUnfoldable1.unfoldr1(v => Data$dTuple.$Tuple(v._1, stepNext(v._2))))(Control$dSemigroupoid.composeImpl(Data$dMap$dInternal.stepAscCps((
    k,
    v,
    next
  ) => Data$dTuple.$Tuple(k, next))(v => Partial._crashWith("toUnfoldable1: impossible")))(Control$dSemigroupoid.composeImpl(Data$dMap$dInternal.toMapIter)(Control$dSemigroupoid.composeImpl(Data$dSet.toMap)(Unsafe$dCoerce.unsafeCoerce))));
};
const toUnfoldable11 = /* #__PURE__ */ toUnfoldable1(Data$dList$dTypes.unfoldable1NonEmptyList);
const toUnfoldable = dictUnfoldable => Data$dSet.toUnfoldable(dictUnfoldable);
const toSet = v => v;
const subset = dictOrd => Data$dSet.subset(dictOrd);
const size = Data$dMap$dInternal.size;
const singleton = Data$dSet.singleton;
const showNonEmptySet = dictShow => {
  const showNonEmptyArray = Data$dArray$dNonEmpty$dInternal.showNonEmptyArray(dictShow);
  return {show: s => "(fromFoldable1 " + showNonEmptyArray.show(toUnfoldable1(Data$dUnfoldable1.unfoldable1Array)(s)) + ")"};
};
const semigroupNonEmptySet = dictOrd => (
  {
    append: (() => {
      const compare = dictOrd.compare;
      return m1 => m2 => Data$dMap$dInternal.unsafeUnionWith(compare, Data$dFunction.const, m1, m2);
    })()
  }
);
const properSubset = dictOrd => Data$dSet.properSubset(dictOrd);
const ordNonEmptySet = dictOrd => Data$dSet.ordSet(dictOrd);
const ord1NonEmptySet = Data$dSet.ord1Set;
const min = v => {
  const $0 = Data$dMap$dInternal.findMin(v);
  if ($0.tag === "Just") { return $0._1.key; }
  $runtime.fail();
};
const member = dictOrd => k => {
  const go = go$a0$copy => {
    let go$a0 = go$a0$copy, go$c = true, go$r;
    while (go$c) {
      const v = go$a0;
      if (v.tag === "Leaf") {
        go$c = false;
        go$r = false;
        continue;
      }
      if (v.tag === "Node") {
        const v1 = dictOrd.compare(k)(v._3);
        if (v1 === "LT") {
          go$a0 = v._5;
          continue;
        }
        if (v1 === "GT") {
          go$a0 = v._6;
          continue;
        }
        if (v1 === "EQ") {
          go$c = false;
          go$r = true;
          continue;
        }
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go;
};
const max = v => {
  const $0 = Data$dMap$dInternal.findMax(v);
  if ($0.tag === "Just") { return $0._1.key; }
  $runtime.fail();
};
const mapMaybe = dictOrd => Data$dSet.mapMaybe(dictOrd);
const map = dictOrd => Data$dSet.map(dictOrd);
const insert = dictOrd => Data$dSet.insert(dictOrd);
const fromSet = s => {
  if (s.tag === "Leaf") { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", s);
};
const intersection = dictOrd => v => v1 => {
  const $0 = Data$dMap$dInternal.unsafeIntersectionWith(dictOrd.compare, Data$dFunction.const, v, v1);
  if ($0.tag === "Leaf") { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", $0);
};
const fromFoldable1 = dictFoldable1 => dictOrd => dictFoldable1.foldMap1({
  append: (() => {
    const compare = dictOrd.compare;
    return m1 => m2 => Data$dMap$dInternal.unsafeUnionWith(compare, Data$dFunction.const, m1, m2);
  })()
})(Data$dSet.singleton);
const fromFoldable = dictFoldable => dictOrd => Control$dSemigroupoid.composeImpl(fromSet)(dictFoldable.foldl(m => a => Data$dMap$dInternal.insert(dictOrd)(a)()(m))(Data$dMap$dInternal.Leaf));
const foldableNonEmptySet = Data$dSet.foldableSet;
const foldable1NonEmptySet = {
  foldMap1: dictSemigroup => f => Control$dSemigroupoid.composeImpl(Data$dList$dTypes.foldable1NonEmptyList.foldMap1(dictSemigroup)(f))(toUnfoldable11),
  foldr1: f => Control$dSemigroupoid.composeImpl(Data$dList$dTypes.foldable1NonEmptyList.foldr1(f))(toUnfoldable11),
  foldl1: f => Control$dSemigroupoid.composeImpl(Data$dList$dTypes.foldable1NonEmptyList.foldl1(f))(toUnfoldable11),
  Foldable0: () => Data$dSet.foldableSet
};
const filter = dictOrd => Data$dSet.filter(dictOrd);
const eqNonEmptySet = dictEq => {
  const eqMap = Data$dMap$dInternal.eqMap(dictEq)(Data$dEq.eqUnit);
  return {eq: v => v1 => eqMap.eq(v)(v1)};
};
const eq1NonEmptySet = Data$dSet.eq1Set;
const difference = dictOrd => v => v1 => {
  const $0 = Data$dMap$dInternal.unsafeDifference(dictOrd.compare, v, v1);
  if ($0.tag === "Leaf") { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", $0);
};
const $$delete = dictOrd => a => v => {
  const $0 = Data$dMap$dInternal.delete(dictOrd)(a)(v);
  if ($0.tag === "Leaf") { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", $0);
};
const cons = dictOrd => Data$dSet.insert(dictOrd);
export {
  cons,
  $$delete as delete,
  difference,
  eq1NonEmptySet,
  eqNonEmptySet,
  filter,
  foldable1NonEmptySet,
  foldableNonEmptySet,
  fromFoldable,
  fromFoldable1,
  fromSet,
  insert,
  intersection,
  map,
  mapMaybe,
  max,
  member,
  min,
  ord1NonEmptySet,
  ordNonEmptySet,
  properSubset,
  semigroupNonEmptySet,
  showNonEmptySet,
  singleton,
  size,
  subset,
  toSet,
  toUnfoldable,
  toUnfoldable1,
  toUnfoldable11,
  unionSet
};
