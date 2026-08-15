import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dVariant$dInternal from "../Data.Variant.Internal/index.js";
import * as Partial from "../Partial/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {onImpl} from "./foreign.js";
const UnvariantF = x => x;
const variantFShows = dict => dict.variantFShows;
const variantFMaps = dict => dict.variantFMaps;
const unvariantF = v => f => f({
  reflectSymbol: (() => {
    const $0 = v.type;
    return v$1 => $0;
  })()
})()({map: v.map})(Type$dProxy.Proxy)(v.value);
const traverseVFRL = dict => dict.traverseVFRL;
const traverseSome = () => () => () => dictVariantTags => dictVariantFMaps => () => () => dictFunctor => r => k => v => {
  if (Record$dUnsafe.unsafeHas(v.type)(r)) {
    const map = Data$dVariant$dInternal.lookup("map")(v.type)(dictVariantTags.variantTags(Type$dProxy.Proxy))(dictVariantFMaps.variantFMaps(Type$dProxy.Proxy));
    return dictFunctor.map(value => ({type: v.type, map, value}))(Record$dUnsafe.unsafeGet(v.type)(r)(v.value));
  }
  return k(v);
};
const traverse = () => () => () => dictVariantTags => dictVariantFMaps => () => () => dictApplicative => {
  const Functor0 = dictApplicative.Apply0().Functor0();
  return dictTraversable => r => f => traverseSome()()()(dictVariantTags)(dictVariantFMaps)()()(Functor0)(r)(Control$dSemigroupoid.composeImpl(Functor0.map(Unsafe$dCoerce.unsafeCoerce))(dictTraversable.traverse(dictApplicative)(f)));
};
const showVariantFNil = {variantFShows: v => v1 => Data$dList$dTypes.Nil};
const showVariantFCons = dictVariantFShows => dictShow => {
  const show = dictShow.show;
  return dictShow1 => ({variantFShows: v => p => Data$dList$dTypes.$List("Cons", show, dictVariantFShows.variantFShows(Type$dProxy.Proxy)(p))});
};
const showVariantF = () => dictVariantTags => dictVariantFShows => dictShow => (
  {
    show: v1 => "(inj @" + Data$dShow.showStringImpl(v1.type) + " " + Data$dVariant$dInternal.lookup("show")(v1.type)(dictVariantTags.variantTags(Type$dProxy.Proxy))(dictVariantFShows.variantFShows(Type$dProxy.Proxy)(Type$dProxy.Proxy))(v1.value) + ")"
  }
);
const overSome = () => () => () => dictVariantTags => dictVariantFMaps => () => () => r => k => v => {
  if (Record$dUnsafe.unsafeHas(v.type)(r)) {
    return {
      type: v.type,
      map: Data$dVariant$dInternal.lookup("map")(v.type)(dictVariantTags.variantTags(Type$dProxy.Proxy))(dictVariantFMaps.variantFMaps(Type$dProxy.Proxy)),
      value: Record$dUnsafe.unsafeGet(v.type)(r)(v.value)
    };
  }
  return k(v);
};
const onMatch = () => () => () => r => k => v => {
  if (Record$dUnsafe.unsafeHas(v.type)(r)) { return Record$dUnsafe.unsafeGet(v.type)(r)(v.value); }
  return k(v);
};
const on = () => dictIsSymbol => onImpl(dictIsSymbol.reflectSymbol);
const prj = () => dictAlternative => {
  const pure = dictAlternative.Applicative0().pure;
  const Plus1 = dictAlternative.Plus1();
  return dictIsSymbol => p => onImpl(dictIsSymbol.reflectSymbol)(p)(pure)((() => {
    const $0 = Plus1.empty;
    return v => $0;
  })());
};
const mapVariantFNil = {variantFMaps: v => Data$dList$dTypes.Nil};
const mapVariantFCons = dictVariantFMaps => dictFunctor => {
  const map = dictFunctor.map;
  return {variantFMaps: v => Data$dList$dTypes.$List("Cons", map, dictVariantFMaps.variantFMaps(Type$dProxy.Proxy))};
};
const inj = () => dictIsSymbol => dictFunctor => {
  const map = dictFunctor.map;
  return p => value => ({type: dictIsSymbol.reflectSymbol(p), value, map});
};
const overOne = () => () => dictIsSymbol => dictFunctor => p => f => onImpl(dictIsSymbol.reflectSymbol)(p)(Control$dSemigroupoid.composeImpl((() => {
  const map = dictFunctor.map;
  return value => ({type: dictIsSymbol.reflectSymbol(p), value, map});
})())(f));
const revariantF = v => v(dictIsSymbol => () => dictFunctor => {
  const map = dictFunctor.map;
  return p => value => ({type: dictIsSymbol.reflectSymbol(p), value, map});
});
const traverseOne = () => () => dictIsSymbol => dictFunctor => dictFunctor1 => p => f => onImpl(dictIsSymbol.reflectSymbol)(p)(Control$dSemigroupoid.composeImpl(dictFunctor1.map((() => {
  const map = dictFunctor.map;
  return value => ({type: dictIsSymbol.reflectSymbol(p), value, map});
})()))(f));
const functorVariantF = {map: f => a => ({type: a.type, value: a.map(f)(a.value), map: a.map})};
const over = () => () => () => dictVariantTags => dictVariantFMaps => () => () => r => f => overSome()()()(dictVariantTags)(dictVariantFMaps)()()(r)(Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(a => (
  {type: a.type, value: a.map(f)(a.value), map: a.map}
)));
const foldrVFRL = dict => dict.foldrVFRL;
const foldlVFRL = dict => dict.foldlVFRL;
const foldMapVFRL = dict => dict.foldMapVFRL;
const foldableCons = dictIsSymbol => dictFoldable => dictFoldableVFRL => () => (
  {
    foldrVFRL: v => f => b => onImpl(dictIsSymbol.reflectSymbol)(Type$dProxy.Proxy)(dictFoldable.foldr(f)(b))(dictFoldableVFRL.foldrVFRL(Type$dProxy.Proxy)(f)(b)),
    foldlVFRL: v => f => b => onImpl(dictIsSymbol.reflectSymbol)(Type$dProxy.Proxy)(dictFoldable.foldl(f)(b))(dictFoldableVFRL.foldlVFRL(Type$dProxy.Proxy)(f)(b)),
    foldMapVFRL: dictMonoid => v => f => onImpl(dictIsSymbol.reflectSymbol)(Type$dProxy.Proxy)(dictFoldable.foldMap(dictMonoid)(f))(dictFoldableVFRL.foldMapVFRL(dictMonoid)(Type$dProxy.Proxy)(f))
  }
);
const foldableVariantF = () => dictFoldableVFRL => (
  {
    foldr: dictFoldableVFRL.foldrVFRL(Type$dProxy.Proxy),
    foldl: dictFoldableVFRL.foldlVFRL(Type$dProxy.Proxy),
    foldMap: dictMonoid => dictFoldableVFRL.foldMapVFRL(dictMonoid)(Type$dProxy.Proxy)
  }
);
const traversableVariantF = () => dictTraversableVFRL => {
  const $0 = dictTraversableVFRL.FoldableVFRL0();
  const foldableVariantF2 = {foldr: $0.foldrVFRL(Type$dProxy.Proxy), foldl: $0.foldlVFRL(Type$dProxy.Proxy), foldMap: dictMonoid => $0.foldMapVFRL(dictMonoid)(Type$dProxy.Proxy)};
  return {
    traverse: dictApplicative => dictTraversableVFRL.traverseVFRL(dictApplicative)(Type$dProxy.Proxy),
    sequence: dictApplicative => traversableVariantF()(dictTraversableVFRL).traverse(dictApplicative)(Data$dTraversable.identity),
    Functor0: () => functorVariantF,
    Foldable1: () => foldableVariantF2
  };
};
const expand = () => Unsafe$dCoerce.unsafeCoerce;
const traversableCons = dictIsSymbol => dictTraversable => {
  const Functor0 = dictTraversable.Functor0();
  const foldableCons2 = foldableCons(dictIsSymbol)(dictTraversable.Foldable1());
  return dictTraversableVFRL => {
    const foldableCons3 = foldableCons2(dictTraversableVFRL.FoldableVFRL0())();
    return () => () => (
      {
        traverseVFRL: dictApplicative => {
          const Functor01 = dictApplicative.Apply0().Functor0();
          return v => f => onImpl(dictIsSymbol.reflectSymbol)(Type$dProxy.Proxy)(Control$dSemigroupoid.composeImpl(Functor01.map((() => {
            const map = Functor0.map;
            return value => ({type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value, map});
          })()))(dictTraversable.traverse(dictApplicative)(f)))(Control$dSemigroupoid.composeImpl(Functor01.map(Unsafe$dCoerce.unsafeCoerce))(dictTraversableVFRL.traverseVFRL(dictApplicative)(Type$dProxy.Proxy)(f)));
        },
        FoldableVFRL0: () => foldableCons3
      }
    );
  };
};
const $$default = a => v => a;
const contract = dictAlternative => dictContractable => v => dictContractable.contractWith(dictAlternative)(Type$dProxy.Proxy)(Type$dProxy.Proxy)(v.type)(v);
const case_ = r => Partial._crashWith("Data.Functor.Variant: pattern match failure [" + r.type + "]");
const foldableNil = {foldrVFRL: v => v1 => v2 => case_, foldlVFRL: v => v1 => v2 => case_, foldMapVFRL: dictMonoid => v => v1 => case_};
const match = () => () => () => r => onMatch()()()(r)(case_);
const traversableNil = {traverseVFRL: dictApplicative => v => v1 => case_, FoldableVFRL0: () => foldableNil};
export {
  UnvariantF,
  case_,
  contract,
  $$default as default,
  expand,
  foldMapVFRL,
  foldableCons,
  foldableNil,
  foldableVariantF,
  foldlVFRL,
  foldrVFRL,
  functorVariantF,
  inj,
  mapVariantFCons,
  mapVariantFNil,
  match,
  on,
  onMatch,
  over,
  overOne,
  overSome,
  prj,
  revariantF,
  showVariantF,
  showVariantFCons,
  showVariantFNil,
  traversableCons,
  traversableNil,
  traversableVariantF,
  traverse,
  traverseOne,
  traverseSome,
  traverseVFRL,
  unvariantF,
  variantFMaps,
  variantFShows
};
export * from "./foreign.js";
