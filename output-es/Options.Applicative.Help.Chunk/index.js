import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Options$dApplicative$dInternal$dUtils from "../Options.Applicative.Internal.Utils/index.js";
import * as Text$dPrettyPrint$dLeijen from "../Text.PrettyPrint.Leijen/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const ChunkIsSymbol = {reflectSymbol: () => "Chunk"};
const Chunk = x => x;
const chunked = v => v1 => v2 => {
  if (v1.tag === "Nothing") { return v2; }
  if (v2.tag === "Nothing") { return v1; }
  if (v1.tag === "Just" && v2.tag === "Just") { return Data$dMaybe.$Maybe("Just", v(v1._1)(v2._1)); }
  $runtime.fail();
};
const chunkSemigroup = dictSemigroup => (
  {
    append: v1 => v2 => {
      if (v1.tag === "Nothing") { return v2; }
      if (v2.tag === "Nothing") { return v1; }
      if (v1.tag === "Just" && v2.tag === "Just") { return Data$dMaybe.$Maybe("Just", dictSemigroup.append(v1._1)(v2._1)); }
      $runtime.fail();
    }
  }
);
const chunkPlus = Data$dMaybe.plusMaybe;
const chunkOrd = dictOrd => {
  const $0 = dictOrd.Eq0();
  const eqMaybe1 = {
    eq: x => y => {
      if (x.tag === "Nothing") { return y.tag === "Nothing"; }
      return x.tag === "Just" && y.tag === "Just" && $0.eq(x._1)(y._1);
    }
  };
  return {
    compare: x => y => {
      if (x.tag === "Nothing") {
        if (y.tag === "Nothing") { return Data$dOrdering.EQ; }
        return Data$dOrdering.LT;
      }
      if (y.tag === "Nothing") { return Data$dOrdering.GT; }
      if (x.tag === "Just" && y.tag === "Just") { return dictOrd.compare(x._1)(y._1); }
      $runtime.fail();
    },
    Eq0: () => eqMaybe1
  };
};
const chunkNewtype = {Coercible0: () => {}};
const extractChunk = dictMonoid => Control$dSemigroupoid.composeImpl((() => {
  const $0 = dictMonoid.mempty;
  return v2 => {
    if (v2.tag === "Nothing") { return $0; }
    if (v2.tag === "Just") { return v2._1; }
    $runtime.fail();
  };
})())(Unsafe$dCoerce.unsafeCoerce);
const isEmpty = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dMaybe.isNothing)(Unsafe$dCoerce.unsafeCoerce);
const chunkMonoid = dictSemigroup => {
  const chunkSemigroup1 = {
    append: v1 => v2 => {
      if (v1.tag === "Nothing") { return v2; }
      if (v2.tag === "Nothing") { return v1; }
      if (v1.tag === "Just" && v2.tag === "Just") { return Data$dMaybe.$Maybe("Just", dictSemigroup.append(v1._1)(v2._1)); }
      $runtime.fail();
    }
  };
  return {mempty: Data$dMaybe.Nothing, Semigroup0: () => chunkSemigroup1};
};
const vcatChunks = /* #__PURE__ */ Data$dFoldable.foldrArray(v1 => v2 => {
  if (v1.tag === "Nothing") { return v2; }
  if (v2.tag === "Nothing") { return v1; }
  if (v1.tag === "Just" && v2.tag === "Just") {
    return Data$dMaybe.$Maybe(
      "Just",
      Text$dPrettyPrint$dLeijen.$Doc(
        "Cat",
        v1._1,
        Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("FlatAlt", Text$dPrettyPrint$dLeijen.Line, Text$dPrettyPrint$dLeijen.$Doc("Char", " ")), v2._1)
      )
    );
  }
  $runtime.fail();
})(Data$dMaybe.Nothing);
const vsepChunks = /* #__PURE__ */ Data$dFoldable.foldrArray(v1 => v2 => {
  if (v1.tag === "Nothing") { return v2; }
  if (v2.tag === "Nothing") { return v1; }
  if (v1.tag === "Just" && v2.tag === "Just") {
    return Data$dMaybe.$Maybe(
      "Just",
      Text$dPrettyPrint$dLeijen.$Doc(
        "Cat",
        v1._1,
        Text$dPrettyPrint$dLeijen.$Doc(
          "Cat",
          Text$dPrettyPrint$dLeijen.$Doc("FlatAlt", Text$dPrettyPrint$dLeijen.Line, Text$dPrettyPrint$dLeijen.$Doc("Char", " ")),
          Text$dPrettyPrint$dLeijen.$Doc(
            "Cat",
            Text$dPrettyPrint$dLeijen.Empty,
            Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("FlatAlt", Text$dPrettyPrint$dLeijen.Line, Text$dPrettyPrint$dLeijen.$Doc("Char", " ")), v2._1)
          )
        )
      )
    );
  }
  $runtime.fail();
})(Data$dMaybe.Nothing);
const chunkMonad = Data$dMaybe.monadMaybe;
const chunkGeneric = {to: x => x, from: x => x};
const chunkShow = dictShow => (
  {
    show: (() => {
      const $0 = Data$dShow$dGeneric.genericShowConstructor({
        genericShowArgs: v => [
          (() => {
            if (v.tag === "Just") { return "(Just " + dictShow.show(v._1) + ")"; }
            if (v.tag === "Nothing") { return "Nothing"; }
            $runtime.fail();
          })()
        ]
      })(ChunkIsSymbol);
      return x => $0["genericShow'"](x);
    })()
  }
);
const chunkFunctor = Data$dMaybe.functorMaybe;
const chunkEq = dictEq => (
  {
    eq: x => y => {
      if (x.tag === "Nothing") { return y.tag === "Nothing"; }
      return x.tag === "Just" && y.tag === "Just" && dictEq.eq(x._1)(y._1);
    }
  }
);
const chunkBind = Data$dMaybe.bindMaybe;
const chunkBesideOrBelow = v1 => v2 => {
  if (v1.tag === "Nothing") { return v2; }
  if (v2.tag === "Nothing") { return v1; }
  if (v1.tag === "Just" && v2.tag === "Just") {
    return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", v1._1, Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.softline, v2._1)));
  }
  $runtime.fail();
};
const chunkBeside = v1 => v2 => {
  if (v1.tag === "Nothing") { return v2; }
  if (v2.tag === "Nothing") { return v1; }
  if (v1.tag === "Just" && v2.tag === "Just") {
    return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", v1._1, Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("Char", " "), v2._1)));
  }
  $runtime.fail();
};
const chunkApply = Data$dMaybe.applyMaybe;
const chunkApplicative = Data$dMaybe.applicativeMaybe;
const listToChunk = dictMonoid => v => {
  if (v.length === 0) { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", Data$dFoldable.foldableArray.foldMap(dictMonoid)(Data$dFoldable.identity1)(v));
};
const stringChunk = v => {
  if (v === "") { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe("Just", v === "" ? Text$dPrettyPrint$dLeijen.Empty : Text$dPrettyPrint$dLeijen.$Doc("Text", Data$dString$dCodePoints.length(v), v));
};
const paragraph = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Data$dFoldable.foldrArray(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v1 => v2 => {
  if (v1.tag === "Nothing") { return v2; }
  if (v2.tag === "Nothing") { return v1; }
  if (v1.tag === "Just" && v2.tag === "Just") {
    return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", v1._1, Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.softline, v2._1)));
  }
  $runtime.fail();
})(stringChunk))(Data$dMaybe.Nothing))(Options$dApplicative$dInternal$dUtils.words);
const tabulate$p = v => v1 => {
  if (v1.length === 0) { return Data$dMaybe.Nothing; }
  return Data$dMaybe.$Maybe(
    "Just",
    Text$dPrettyPrint$dLeijen.vcat(Data$dFunctor.arrayMap(v2 => Text$dPrettyPrint$dLeijen.indent(2)(Text$dPrettyPrint$dLeijen.$Doc(
      "Cat",
      Text$dPrettyPrint$dLeijen.fillBreak(v)(v2._1),
      Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("Char", " "), v2._2)
    )))(v1))
  );
};
const tabulate = /* #__PURE__ */ tabulate$p(24);
const chunkAlternative = Data$dMaybe.alternativeMaybe;
const chunkAlt = Data$dMaybe.altMaybe;
export {
  Chunk,
  ChunkIsSymbol,
  chunkAlt,
  chunkAlternative,
  chunkApplicative,
  chunkApply,
  chunkBeside,
  chunkBesideOrBelow,
  chunkBind,
  chunkEq,
  chunkFunctor,
  chunkGeneric,
  chunkMonad,
  chunkMonoid,
  chunkNewtype,
  chunkOrd,
  chunkPlus,
  chunkSemigroup,
  chunkShow,
  chunked,
  extractChunk,
  isEmpty,
  listToChunk,
  paragraph,
  stringChunk,
  tabulate,
  tabulate$p,
  vcatChunks,
  vsepChunks
};
