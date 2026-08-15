import * as $runtime from "../runtime.js";
import * as Control$dComonad$dCofree from "../Control.Comonad.Cofree/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray$dNonEmpty$dInternal from "../Data.Array.NonEmpty.Internal/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dJSDate from "../Data.JSDate/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dList$dLazy$dTypes from "../Data.List.Lazy.Types/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dNonEmpty$dInternal from "../Data.String.NonEmpty.Internal/index.js";
import * as Data$dTime$dDuration from "../Data.Time.Duration/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as JS$dBigInt from "../JS.BigInt/index.js";
import * as Partial from "../Partial/index.js";
import * as Test$dSpec from "../Test.Spec/index.js";
import * as Test$dSpec$dAssertions from "../Test.Spec.Assertions/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Test$dUtil from "../Test.Util/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
import * as Yoga$dJSON$dVariant from "../Yoga.JSON.Variant/index.js";
import * as Yoga$dTree from "../Yoga.Tree/index.js";
const bindSpecT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupArray)(Data$dIdentity.bindIdentity);
const showMaybe = {
  show: v => {
    if (v.tag === "Just") { return "(Just " + Data$dShow.showIntImpl(v._1) + ")"; }
    if (v.tag === "Nothing") { return "Nothing"; }
    $runtime.fail();
  }
};
const eqMaybe = {
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && x._1 === y._1;
  }
};
const readForeignMaybe = /* #__PURE__ */ Yoga$dJSON.readForeignMaybe(Yoga$dJSON.readForeignInt);
const writeForeignMaybe = {
  writeImpl: v2 => {
    if (v2.tag === "Nothing") { return Yoga$dJSON._undefined; }
    if (v2.tag === "Just") { return v2._1; }
    $runtime.fail();
  }
};
const emptyIsSymbol = {reflectSymbol: () => "empty"};
const showMaybe1 = {
  show: v => {
    if (v.tag === "Just") { return "(Just " + Data$dShow.showIntImpl(v._1) + ")"; }
    if (v.tag === "Nothing") { return "Nothing"; }
    $runtime.fail();
  }
};
const showRecord1 = {show: record => "{ empty: " + showMaybe1.show(record.empty) + " }"};
const eqRec1 = {
  eq: ra => rb => {
    if (ra.empty.tag === "Nothing") { return rb.empty.tag === "Nothing"; }
    return ra.empty.tag === "Just" && rb.empty.tag === "Just" && ra.empty._1 === rb.empty._1;
  }
};
const readForeignMaybe1 = /* #__PURE__ */ Yoga$dJSON.readForeignMaybe(Yoga$dJSON.readForeignInt);
const readForeignRecord1 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.readForeignFieldsCons(emptyIsSymbol)(readForeignMaybe1)(Yoga$dJSON.readForeignFieldsNilRowRo)()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const writeForeignMaybe1 = {
  writeImpl: v2 => {
    if (v2.tag === "Nothing") { return Yoga$dJSON._undefined; }
    if (v2.tag === "Just") { return v2._1; }
    $runtime.fail();
  }
};
const writeForeignRecord1 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignFieldsCons(emptyIsSymbol)(writeForeignMaybe1)(Yoga$dJSON.writeForeignFieldsNilRowR)()()();
  return {writeImpl: rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({})};
})();
const roundtrips = /* #__PURE__ */ Test$dUtil.roundtrips(/* #__PURE__ */ Data$dNullable.showNullable(Data$dShow.showInt))(/* #__PURE__ */ Data$dNullable.eqNullable(Data$dEq.eqInt))(/* #__PURE__ */ Yoga$dJSON.readForeignNullable(Yoga$dJSON.readForeignInt))(/* #__PURE__ */ Yoga$dJSON.writeForeignNullable(Yoga$dJSON.writeForeignInt));
const showEither = {
  show: v => {
    if (v.tag === "Left") { return "(Left " + Data$dShow.showIntImpl(v._1) + ")"; }
    if (v.tag === "Right") { return "(Right " + Data$dShow.showIntImpl(v._1) + ")"; }
    $runtime.fail();
  }
};
const eqEither = {
  eq: x => y => {
    if (x.tag === "Left") { return y.tag === "Left" && x._1 === y._1; }
    return x.tag === "Right" && y.tag === "Right" && x._1 === y._1;
  }
};
const readForeignEither = /* #__PURE__ */ Yoga$dJSON.readForeignEither(Yoga$dJSON.readForeignInt)(Yoga$dJSON.readForeignInt);
const writeForeignEither = /* #__PURE__ */ Yoga$dJSON.writeForeignEither(Yoga$dJSON.writeForeignInt)(Yoga$dJSON.writeForeignInt);
const showEither1 = {
  show: v => {
    if (v.tag === "Left") { return "(Left " + Data$dShow.showStringImpl(v._1) + ")"; }
    if (v.tag === "Right") { return "(Right " + Data$dShow.showIntImpl(v._1) + ")"; }
    $runtime.fail();
  }
};
const eqEither1 = {
  eq: x => y => {
    if (x.tag === "Left") { return y.tag === "Left" && x._1 === y._1; }
    return x.tag === "Right" && y.tag === "Right" && x._1 === y._1;
  }
};
const readForeignEither1 = /* #__PURE__ */ Yoga$dJSON.readForeignEither(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignInt);
const writeForeignEither1 = /* #__PURE__ */ Yoga$dJSON.writeForeignEither(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignInt);
const writeForeignEither2 = /* #__PURE__ */ Yoga$dJSON.writeForeignEither(Yoga$dJSON.writeForeignBoolean)(Yoga$dJSON.writeForeignInt);
const showTuple = dictShow1 => ({show: v => "(Tuple " + Data$dShow.showIntImpl(v._1) + " " + dictShow1.show(v._2) + ")"});
const showTuple1 = /* #__PURE__ */ showTuple(Data$dShow.showInt);
const eqTuple1 = {eq: x => y => x._1 === y._1 && x._2 === y._2};
const readForeignTuple = /* #__PURE__ */ (() => ({readImpl: Yoga$dJSON.readTupleHelper(Yoga$dJSON.readForeignInt)(Yoga$dJSON.readForeignInt).readTupleImpl(0)}))();
const writeForeignTuple1 = /* #__PURE__ */ Yoga$dJSON.writeForeignTuple(Yoga$dJSON.writeForeignInt)(Yoga$dJSON.writeForeignInt);
const showTuple2 = /* #__PURE__ */ (() => {
  const $0 = showTuple(showMaybe1);
  return {show: v => "(Tuple " + Data$dShow.showStringImpl(v._1) + " " + $0.show(v._2) + ")"};
})();
const eqTuple2 = {
  eq: x => y => x._1 === y._1 && x._2._1 === y._2._1 && (x._2._2.tag === "Nothing"
    ? y._2._2.tag === "Nothing"
    : x._2._2.tag === "Just" && y._2._2.tag === "Just" && x._2._2._1 === y._2._2._1)
};
const readForeignTuple1 = /* #__PURE__ */ (() => (
  {readImpl: Yoga$dJSON.readTupleTupleTuple(Yoga$dJSON.readForeignString)(Yoga$dJSON.readTupleHelper(Yoga$dJSON.readForeignInt)(readForeignMaybe1)).readTupleImpl(0)}
))();
const writeForeignTupleTuple = /* #__PURE__ */ Yoga$dJSON.writeForeignTupleTuple(Yoga$dJSON.writeForeignString)(/* #__PURE__ */ Yoga$dJSON.writeForeignTuple(Yoga$dJSON.writeForeignInt)(writeForeignMaybe1));
const roundtrips1 = /* #__PURE__ */ Test$dUtil.roundtrips({show: /* #__PURE__ */ Data$dShow.showArrayImpl(Data$dShow.showStringImpl)})({
  eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)
})(/* #__PURE__ */ Yoga$dJSON.readForeignArray(Yoga$dJSON.readForeignString))({writeImpl: xs => Data$dFunctor.arrayMap(Unsafe$dCoerce.unsafeCoerce)(xs)});
const showNonEmptyArray = /* #__PURE__ */ Data$dArray$dNonEmpty$dInternal.showNonEmptyArray(Data$dShow.showString);
const eqNonEmptyArray = {eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)};
const readForeignNonEmptyArray = /* #__PURE__ */ Yoga$dJSON.readForeignNonEmptyArray(Yoga$dJSON.readForeignString);
const writeForeignNEArray = /* #__PURE__ */ Yoga$dJSON.writeForeignNEArray(Yoga$dJSON.writeForeignString);
const showObject = /* #__PURE__ */ Foreign$dObject.showObject(Data$dShow.showInt);
const eqObject = /* #__PURE__ */ Foreign$dObject.eqObject(Data$dEq.eqInt);
const readForeignObject = /* #__PURE__ */ Yoga$dJSON.readForeignObject(Yoga$dJSON.readForeignInt);
const writeForeignObject = {
  writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Foreign$dObject.mapWithKey(v => Unsafe$dCoerce.unsafeCoerce))
};
const showMap = /* #__PURE__ */ Data$dMap$dInternal.showMap(Data$dShow.showString)(Data$dShow.showInt);
const eqMap = /* #__PURE__ */ Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dEq.eqInt);
const readForeignMapString = /* #__PURE__ */ Yoga$dJSON.readForeignMapString(Yoga$dJSON.readForeignInt);
const writeForeignMapString = /* #__PURE__ */ Yoga$dJSON.writeForeignMapString(Yoga$dJSON.writeForeignInt);
const showMap1 = /* #__PURE__ */ Data$dMap$dInternal.showMap(Data$dShow.showInt)(Data$dShow.showString);
const eqMap1 = /* #__PURE__ */ Data$dMap$dInternal.eqMap(Data$dEq.eqInt)(Data$dEq.eqString);
const readForeignMapInt = /* #__PURE__ */ Yoga$dJSON.readForeignMapInt(Yoga$dJSON.readForeignString);
const writeForeignMapInt = /* #__PURE__ */ Yoga$dJSON.writeForeignMapInt(Yoga$dJSON.writeForeignString);
const readForeignMap1 = /* #__PURE__ */ Yoga$dJSON.readForeignMap()(/* #__PURE__ */ Yoga$dJSON.readForeignMapString(Yoga$dJSON.readForeignString));
const writeForeignMap1 = /* #__PURE__ */ (() => (
  {writeImpl: Control$dSemigroupoid.composeImpl(Yoga$dJSON.writeForeignMapString(Yoga$dJSON.writeForeignString).writeImpl)(Unsafe$dCoerce.unsafeCoerce)}
))();
const readForeignMap2 = /* #__PURE__ */ Yoga$dJSON.readForeignMap()(/* #__PURE__ */ Yoga$dJSON.readForeignMapInt(Yoga$dJSON.readForeignString));
const writeForeignMap2 = /* #__PURE__ */ (() => (
  {writeImpl: Control$dSemigroupoid.composeImpl(Yoga$dJSON.writeForeignMapInt(Yoga$dJSON.writeForeignString).writeImpl)(Unsafe$dCoerce.unsafeCoerce)}
))();
const readForeignMap3 = /* #__PURE__ */ Yoga$dJSON.readForeignMap()(/* #__PURE__ */ Yoga$dJSON.readForeignMapBigInt(Yoga$dJSON.readForeignString));
const writeForeignMap3 = /* #__PURE__ */ (() => (
  {writeImpl: Control$dSemigroupoid.composeImpl(Yoga$dJSON.writeForeignMapBigInt(Yoga$dJSON.writeForeignString).writeImpl)(Unsafe$dCoerce.unsafeCoerce)}
))();
const showSet = /* #__PURE__ */ Data$dSet.showSet(Data$dShow.showString);
const eqSet = /* #__PURE__ */ (() => {
  const eqMap$1 = Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dEq.eqUnit);
  return {eq: v => v1 => eqMap$1.eq(v)(v1)};
})();
const readForeignSet = /* #__PURE__ */ Yoga$dJSON.readForeignSet(Data$dOrd.ordString)(Yoga$dJSON.readForeignString);
const writeForeignSet = {writeImpl: $$set => Data$dFunctor.arrayMap(Unsafe$dCoerce.unsafeCoerce)(Data$dSet.toUnfoldable(Data$dUnfoldable.unfoldableArray)($$set))};
const bigIsSymbol = {reflectSymbol: () => "big"};
const readForeignFieldsCons = /* #__PURE__ */ Yoga$dJSON.readForeignFieldsCons(bigIsSymbol)(Yoga$dJSON.readForeignBigInt);
const mediumBigIsSymbol = {reflectSymbol: () => "mediumBig"};
const numberIsSymbol = {reflectSymbol: () => "number"};
const smallBigIsSymbol = {reflectSymbol: () => "smallBig"};
const readForeignFieldsCons1 = /* #__PURE__ */ Yoga$dJSON.readForeignFieldsCons(smallBigIsSymbol)(Yoga$dJSON.readForeignBigInt)(Yoga$dJSON.readForeignFieldsNilRowRo)()();
const readForeignRecord2 = /* #__PURE__ */ (() => {
  const $0 = readForeignFieldsCons(Yoga$dJSON.readForeignFieldsCons(mediumBigIsSymbol)(Yoga$dJSON.readForeignBigInt)(Yoga$dJSON.readForeignFieldsCons(numberIsSymbol)(Yoga$dJSON.readForeignInt)(readForeignFieldsCons1)()())()())()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const writeForeignFieldsCons1 = /* #__PURE__ */ Yoga$dJSON.writeForeignFieldsCons(smallBigIsSymbol)(Yoga$dJSON.writeForeignBigInt)(Yoga$dJSON.writeForeignFieldsNilRowR)()()();
const writeJSON = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignFieldsCons(bigIsSymbol)(Yoga$dJSON.writeForeignBigInt)(Yoga$dJSON.writeForeignFieldsCons(mediumBigIsSymbol)(Yoga$dJSON.writeForeignBigInt)(Yoga$dJSON.writeForeignFieldsCons(numberIsSymbol)(Yoga$dJSON.writeForeignInt)(writeForeignFieldsCons1)()()())()()())()()();
  return Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({}));
})();
const showEither2 = /* #__PURE__ */ (() => {
  const $0 = Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError);
  return dictShow1 => (
    {
      show: v => {
        if (v.tag === "Left") { return "(Left " + $0.show(v._1) + ")"; }
        if (v.tag === "Right") { return "(Right " + dictShow1.show(v._1) + ")"; }
        $runtime.fail();
      }
    }
  );
})();
const showEither3 = /* #__PURE__ */ showEither2(Data$dShow.showString);
const eqEither2 = dictEq1 => (
  {
    eq: x => y => {
      if (x.tag === "Left") {
        return y.tag === "Left" && Foreign.eqForeignError.eq(x._1._1)(y._1._1) && (() => {
          const go = v => v1 => v2 => {
            if (!v2) { return false; }
            if (v.tag === "Nil") { return v1.tag === "Nil" && v2; }
            return v.tag === "Cons" && v1.tag === "Cons" && go(v._2)(v1._2)(v2 && Foreign.eqForeignError.eq(v1._1)(v._1));
          };
          return go(x._1._2)(y._1._2)(true);
        })();
      }
      return x.tag === "Right" && y.tag === "Right" && dictEq1.eq(x._1)(y._1);
    }
  }
);
const eqEither3 = /* #__PURE__ */ eqEither2(Data$dEq.eqString);
const writeForeignRecord2 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignFieldsCons(bigIsSymbol)(Yoga$dJSON.writeForeignBigInt)(writeForeignFieldsCons1)()()();
  return {writeImpl: rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({})};
})();
const readForeignRecord3 = /* #__PURE__ */ (() => {
  const $0 = readForeignFieldsCons(readForeignFieldsCons1)()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const showEither4 = /* #__PURE__ */ showEither2({show: record => "{ big: " + JS$dBigInt.toString(record.big) + ", smallBig: " + JS$dBigInt.toString(record.smallBig) + " }"});
const eqEither4 = /* #__PURE__ */ eqEither2({eq: ra => rb => JS$dBigInt.biEquals(ra.big)(rb.big) && JS$dBigInt.biEquals(ra.smallBig)(rb.smallBig)});
const aIsSymbol = {reflectSymbol: () => "a"};
const bIsSymbol = {reflectSymbol: () => "b"};
const showRecord2 = {show: record => "{ a: " + Data$dShow.showIntImpl(record.a) + ", b: " + Data$dShow.showStringImpl(record.b) + " }"};
const eqRec2 = {eq: ra => rb => ra.a === rb.a && ra.b === rb.b};
const readForeignFieldsCons2 = /* #__PURE__ */ Yoga$dJSON.readForeignFieldsCons(aIsSymbol)(Yoga$dJSON.readForeignInt);
const readForeignRecord4 = /* #__PURE__ */ (() => {
  const $0 = readForeignFieldsCons2(Yoga$dJSON.readForeignFieldsCons(bIsSymbol)(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()())()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const writeForeignRecord3 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignFieldsCons(aIsSymbol)(Yoga$dJSON.writeForeignInt)(Yoga$dJSON.writeForeignFieldsCons(bIsSymbol)(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()();
  return {writeImpl: rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({})};
})();
const cIsSymbol = {reflectSymbol: () => "c"};
const showRecord3 = {show: record => "{ a: " + Data$dShow.showIntImpl(record.a) + ", b: { c: " + Data$dShow.showStringImpl(record.b.c) + " } }"};
const eqRec3 = {eq: ra => rb => ra.a === rb.a && ra.b.c === rb.b.c};
const readForeignRecord5 = /* #__PURE__ */ (() => {
  const $0 = readForeignFieldsCons2(Yoga$dJSON.readForeignFieldsCons(bIsSymbol)((() => {
    const $0 = Yoga$dJSON.readForeignFieldsCons(cIsSymbol)(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()();
    return {
      readImpl: o => {
        const $1 = $0.getFields(Type$dProxy.Proxy)(o);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
        $runtime.fail();
      }
    };
  })())(Yoga$dJSON.readForeignFieldsNilRowRo)()())()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const writeForeignRecord4 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignFieldsCons(aIsSymbol)(Yoga$dJSON.writeForeignInt)(Yoga$dJSON.writeForeignFieldsCons(bIsSymbol)((() => {
    const $0 = Yoga$dJSON.writeForeignFieldsCons(cIsSymbol)(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsNilRowR)()()();
    return {writeImpl: rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({})};
  })())(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()();
  return {writeImpl: rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({})};
})();
const showRecord4 = {show: record => "{}"};
const eqRec4 = {eq: v1 => v2 => true};
const readForeignRecord6 = {
  readImpl: o => {
    const $0 = Yoga$dJSON.applicativeExceptT1.pure(x => x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1({})); }
    $runtime.fail();
  }
};
const writeForeignRecord5 = {writeImpl: rec => ({})};
const erwinIsSymbol1 = {reflectSymbol: () => "erwin"};
const variantTagsCons1 = {variantTags: v => Data$dList$dTypes.$List("Cons", "erwin", Data$dList$dTypes.Nil)};
const showVariantCons1 = {variantShows: v => Data$dList$dTypes.$List("Cons", Data$dShow.showStringImpl, Data$dList$dTypes.Nil)};
const showVariant2 = /* #__PURE__ */ Data$dVariant.showVariant()(variantTagsCons1)(showVariantCons1);
const eqVariantCons1 = {variantEqs: v => Data$dList$dTypes.$List("Cons", Data$dEq.eqStringImpl, Data$dList$dTypes.Nil)};
const eqVariant2 = /* #__PURE__ */ Data$dVariant.eqVariant()(variantTagsCons1)(eqVariantCons1);
const readForeignVariantCons = /* #__PURE__ */ Yoga$dJSON.readForeignVariantCons(erwinIsSymbol1)(Yoga$dJSON.readForeignString)();
const readForeignVariant1 = /* #__PURE__ */ (() => {
  const $0 = readForeignVariantCons(Yoga$dJSON.readForeignVariantNil);
  return {readImpl: o => $0.readVariantImpl(Type$dProxy.Proxy)(o)};
})();
const writeForeignVariant1 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignVariantCons(erwinIsSymbol1)(Yoga$dJSON.writeForeignString)()(Yoga$dJSON.writeForeignVariantNilRow);
  return {writeImpl: variant => $0.writeVariantImpl(Type$dProxy.Proxy)(variant)};
})();
const jackieIsSymbol = {reflectSymbol: () => "jackie"};
const variantTagsCons2 = {variantTags: v => Data$dList$dTypes.$List("Cons", "erwin", Data$dList$dTypes.$List("Cons", "jackie", Data$dList$dTypes.Nil))};
const showVariantCons2 = {
  variantShows: v => Data$dList$dTypes.$List("Cons", Data$dShow.showStringImpl, Data$dList$dTypes.$List("Cons", Data$dShow.showIntImpl, Data$dList$dTypes.Nil))
};
const showVariant4 = /* #__PURE__ */ Data$dVariant.showVariant()(variantTagsCons2)(showVariantCons2);
const eqVariantCons2 = {variantEqs: v => Data$dList$dTypes.$List("Cons", Data$dEq.eqStringImpl, Data$dList$dTypes.$List("Cons", Data$dEq.eqIntImpl, Data$dList$dTypes.Nil))};
const eqVariant4 = /* #__PURE__ */ Data$dVariant.eqVariant()(variantTagsCons2)(eqVariantCons2);
const readForeignVariant2 = /* #__PURE__ */ (() => {
  const $0 = readForeignVariantCons(Yoga$dJSON.readForeignVariantCons(jackieIsSymbol)(Yoga$dJSON.readForeignInt)()(Yoga$dJSON.readForeignVariantNil));
  return {readImpl: o => $0.readVariantImpl(Type$dProxy.Proxy)(o)};
})();
const writeForeignVariant2 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.writeForeignVariantCons(erwinIsSymbol1)(Yoga$dJSON.writeForeignString)()(Yoga$dJSON.writeForeignVariantCons(jackieIsSymbol)(Yoga$dJSON.writeForeignInt)()(Yoga$dJSON.writeForeignVariantNilRow));
  return {writeImpl: variant => $0.writeVariantImpl(Type$dProxy.Proxy)(variant)};
})();
const showVariant5 = /* #__PURE__ */ Data$dVariant.showVariant()(variantTagsCons1)(showVariantCons1);
const eqVariant5 = /* #__PURE__ */ Data$dVariant.eqVariant()(variantTagsCons1)(eqVariantCons1);
const superIsSymbol = {reflectSymbol: () => "super"};
const hansIsSymbol = {reflectSymbol: () => "hans"};
const readForeignTaggedVariant1 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON$dVariant.readForeignTaggedVariantC(erwinIsSymbol1)(superIsSymbol)(hansIsSymbol)(Yoga$dJSON.readForeignString)()(Yoga$dJSON$dVariant.readForeignTaggedVariantN);
  return {readImpl: o => $0.readVariantImpl(Type$dProxy.Proxy)(o)};
})();
const writeForeignTaggedVariant11 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON$dVariant.writeForeignTaggedVariant2(erwinIsSymbol1)(Yoga$dJSON.writeForeignString)()(Yoga$dJSON$dVariant.writeForeignTaggedVariant);
  return {writeImpl: v => $0.writeVariantImpl("super")("hans")(Type$dProxy.Proxy)(v)};
})();
const typeIsSymbol = {reflectSymbol: () => "type"};
const valueIsSymbol = {reflectSymbol: () => "value"};
const writeForeignTaggedVariant12 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON$dVariant.writeForeignTaggedVariant2(erwinIsSymbol1)(Yoga$dJSON.writeForeignString)()(Yoga$dJSON$dVariant.writeForeignTaggedVariant2(jackieIsSymbol)(Yoga$dJSON.writeForeignInt)()(Yoga$dJSON$dVariant.writeForeignTaggedVariant));
  return {writeImpl: v => $0.writeVariantImpl("type")("value")(Type$dProxy.Proxy)(v)};
})();
const readForeignTaggedVariant2 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON$dVariant.readForeignTaggedVariantC(erwinIsSymbol1)(typeIsSymbol)(valueIsSymbol)(Yoga$dJSON.readForeignString)()(Yoga$dJSON$dVariant.readForeignTaggedVariantC(jackieIsSymbol)(typeIsSymbol)(valueIsSymbol)(Yoga$dJSON.readForeignInt)()(Yoga$dJSON$dVariant.readForeignTaggedVariantN));
  return {readImpl: o => $0.readVariantImpl(Type$dProxy.Proxy)(o)};
})();
const showEither5 = /* #__PURE__ */ showEither2(/* #__PURE__ */ Data$dVariant.showVariant()(variantTagsCons2)(showVariantCons2));
const eqEither5 = /* #__PURE__ */ eqEither2(/* #__PURE__ */ Data$dVariant.eqVariant()(variantTagsCons2)(eqVariantCons2));
const readForeignUntaggedVarian11 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON$dVariant.readForeignUntaggedVarian2(erwinIsSymbol1)(Yoga$dJSON.readForeignString)()(Yoga$dJSON$dVariant.readForeignUntaggedVarian);
  return {readImpl: o => $0.readUntaggedVariantImpl(Type$dProxy.Proxy)(o)};
})();
const writeForeignUntaggedVaria2 = /* #__PURE__ */ Yoga$dJSON$dVariant.writeForeignUntaggedVaria2(erwinIsSymbol1)(Yoga$dJSON.writeForeignString)();
const writeForeignUntaggedVaria11 = /* #__PURE__ */ (() => {
  const $0 = writeForeignUntaggedVaria2(Yoga$dJSON$dVariant.writeForeignUntaggedVaria);
  return {writeImpl: v => $0.writeUntaggedVariantImpl(Type$dProxy.Proxy)(v)};
})();
const writeForeignUntaggedVaria12 = /* #__PURE__ */ (() => {
  const $0 = writeForeignUntaggedVaria2(Yoga$dJSON$dVariant.writeForeignUntaggedVaria2(jackieIsSymbol)(Yoga$dJSON.writeForeignInt)()(Yoga$dJSON$dVariant.writeForeignUntaggedVaria));
  return {writeImpl: v => $0.writeUntaggedVariantImpl(Type$dProxy.Proxy)(v)};
})();
const readForeignUntaggedVarian12 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON$dVariant.readForeignUntaggedVarian2(erwinIsSymbol1)(Yoga$dJSON.readForeignString)()(Yoga$dJSON$dVariant.readForeignUntaggedVarian2(jackieIsSymbol)(Yoga$dJSON.readForeignInt)()(Yoga$dJSON$dVariant.readForeignUntaggedVarian));
  return {readImpl: o => $0.readUntaggedVariantImpl(Type$dProxy.Proxy)(o)};
})();
const showEither6 = /* #__PURE__ */ showEither2(Data$dString$dNonEmpty$dInternal.showNonEmptyString);
const eqEither6 = /* #__PURE__ */ eqEither2(Data$dEq.eqString);
const Stringy = x => x;
const ShowTree = x => x;
const Inty = x => x;
const BigInty = x => x;
const writeForeignStringy = Yoga$dJSON.writeForeignString;
const writeForeignShowTree = /* #__PURE__ */ Yoga$dJSON.writeForeignTree(Yoga$dJSON.writeForeignString);
const writeForeignInty = Yoga$dJSON.writeForeignInt;
const writeForeignBigInty = Yoga$dJSON.writeForeignBigInt;
const showStringy = Data$dShow.showString;
const showMap2 = /* #__PURE__ */ Data$dMap$dInternal.showMap(Data$dShow.showString)(Data$dShow.showString);
const showShowTree = {show: v => Control$dSemigroupoid.composeImpl(Yoga$dTree.drawTree)(Yoga$dTree.functorCofree.map(Data$dShow.showStringImpl))(v)};
const showInty = Data$dShow.showInt;
const showMap3 = /* #__PURE__ */ Data$dMap$dInternal.showMap(Data$dShow.showInt)(Data$dShow.showString);
const showBigInty = JS$dBigInt.showBigInt;
const showMap4 = /* #__PURE__ */ Data$dMap$dInternal.showMap(JS$dBigInt.showBigInt)(Data$dShow.showString);
const readForeignStringy = Yoga$dJSON.readForeignString;
const readForeignShowTree = /* #__PURE__ */ Yoga$dJSON.readForeignTree(Yoga$dJSON.readForeignString);
const readForeignInty = Yoga$dJSON.readForeignInt;
const readForeignBigInty = Yoga$dJSON.readForeignBigInt;
const ordStringy = Data$dOrd.ordString;
const ordInty = Data$dOrd.ordInt;
const ordBigInty = JS$dBigInt.ordBigInt;
const newtypeStringy_ = {Coercible0: () => {}};
const newtypeInty_ = {Coercible0: () => {}};
const newtypeBigInty_ = {Coercible0: () => {}};
const eqStringy = Data$dEq.eqString;
const eqMap2 = /* #__PURE__ */ Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dEq.eqString);
const eqShowTree = /* #__PURE__ */ Control$dComonad$dCofree.eqCofree(Data$dEq.eq1Array)(Data$dEq.eqString);
const eqInty = Data$dEq.eqInt;
const eqMap3 = /* #__PURE__ */ Data$dMap$dInternal.eqMap(Data$dEq.eqInt)(Data$dEq.eqString);
const eqBigInty = JS$dBigInt.eqBigInt;
const eqMap4 = /* #__PURE__ */ Data$dMap$dInternal.eqMap(JS$dBigInt.eqBigInt)(Data$dEq.eqString);
const erwin = value => ({type: "erwin", value});
const big = /* #__PURE__ */ (() => {
  const $0 = JS$dBigInt.fromString("18014398509481982");
  if ($0.tag === "Just") { return $0._1; }
  $runtime.fail();
})();
const spec = /* #__PURE__ */ (() => {
  const $0 = bindSpecT.bind((() => {
    const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Number")(Test$dUtil.roundtrips(Data$dShow.showNumber)(Data$dEq.eqNumber)(Yoga$dJSON.readForeignNumber)(Yoga$dJSON.writeForeignNumber)(3.1414)))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Int")(Test$dUtil.roundtrips(Data$dShow.showInt)(Data$dEq.eqInt)(Yoga$dJSON.readForeignInt)(Yoga$dJSON.writeForeignInt)(-200)))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Char")(Test$dUtil.roundtrips(Data$dShow.showChar)(Data$dEq.eqChar)(Yoga$dJSON.readForeignChar)(Yoga$dJSON.writeForeignChar)("a")))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips String")(Test$dUtil.roundtrips(Data$dShow.showString)(Data$dEq.eqString)(Yoga$dJSON.readForeignString)(Yoga$dJSON.writeForeignString)("A")))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on primitive types"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Maybe")(Effect$dAff._bind(Test$dUtil.roundtrips(showMaybe)(eqMaybe)(readForeignMaybe)(writeForeignMaybe)(Data$dMaybe.$Maybe(
      "Just",
      3
    )))(() => Test$dUtil.roundtrips(showRecord1)(eqRec1)(readForeignRecord1)(writeForeignRecord1)({empty: Data$dMaybe.Nothing}))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Nullable")(Data$dFoldable.traverse_(Effect$dAff.applicativeAff)(Data$dFoldable.foldableArray)(roundtrips)([
      Data$dNullable.notNull(3),
      Data$dNullable.null
    ])))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Either")(Effect$dAff._bind(Test$dUtil.roundtrips(showEither)(eqEither)(readForeignEither)(writeForeignEither)(Data$dEither.$Either(
      "Left",
      3
    )))(() => Effect$dAff._bind(Test$dUtil.roundtrips(showEither1)(eqEither1)(readForeignEither1)(writeForeignEither1)(Data$dEither.$Either("Right", 3)))(() => Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignEither.writeImpl)(Data$dEither.$Either(
      "Right",
      3
    )))("{\"value\":3,\"type\":\"right\"}"))(() => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignEither2.writeImpl)(Data$dEither.$Either(
      "Left",
      true
    )))("{\"value\":true,\"type\":\"left\"}"))))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Tuple")(Effect$dAff._bind(Test$dUtil.roundtrips(showTuple1)(eqTuple1)(readForeignTuple)(writeForeignTuple1)(Data$dTuple.$Tuple(
      3,
      4
    )))(() => Test$dUtil.roundtrips(showTuple2)(eqTuple2)(readForeignTuple1)(writeForeignTupleTuple)(Data$dTuple.$Tuple("4", Data$dTuple.$Tuple(8, Data$dMaybe.$Maybe("Just", 4)))))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Array")(Data$dFoldable.traverse_(Effect$dAff.applicativeAff)(Data$dFoldable.foldableArray)(roundtrips1)([
      ["A", "B"],
      []
    ])))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips LazyList")(Data$dFoldable.traverse_(Effect$dAff.applicativeAff)(Data$dList$dLazy$dTypes.foldableList)(roundtrips1)(Data$dFoldable.foldrArray(Data$dList$dLazy$dTypes.cons)(Data$dList$dLazy$dTypes.nil)([
      ["A", "B"],
      []
    ]))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips List")(Data$dFoldable.traverse_(Effect$dAff.applicativeAff)(Data$dList$dTypes.foldableList)(roundtrips1)(Data$dFoldable.foldrArray(Data$dList$dTypes.Cons)(Data$dList$dTypes.Nil)([
      ["A", "B"],
      []
    ]))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips NonEmptyArray")(Test$dUtil.roundtrips(showNonEmptyArray)(eqNonEmptyArray)(readForeignNonEmptyArray)(writeForeignNEArray)([
      "A",
      "B"
    ])))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Object")(Test$dUtil.roundtrips(showObject)(eqObject)(readForeignObject)(writeForeignObject)({
      a: 12,
      b: 54
    })))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips String Map")(Test$dUtil.roundtrips(showMap)(eqMap)(readForeignMapString)(writeForeignMapString)(Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray)([
      Data$dTuple.$Tuple("A", 8),
      Data$dTuple.$Tuple("C", 7)
    ]))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Int Map")(Test$dUtil.roundtrips(showMap1)(eqMap1)(readForeignMapInt)(writeForeignMapInt)(Data$dMap$dInternal.fromFoldable(Data$dOrd.ordInt)(Data$dFoldable.foldableArray)([
      Data$dTuple.$Tuple(4, "B"),
      Data$dTuple.$Tuple(8, "D")
    ]))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Map with String newtype keys")(Test$dUtil.roundtrips(showMap2)(eqMap2)(readForeignMap1)(writeForeignMap1)(Data$dMap$dInternal.fromFoldable(Data$dOrd.ordString)(Data$dFoldable.foldableArray)([
      Data$dTuple.$Tuple("A", "B"),
      Data$dTuple.$Tuple("C", "D")
    ]))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Map with Int newtype keys")(Test$dUtil.roundtrips(showMap3)(eqMap3)(readForeignMap2)(writeForeignMap2)(Data$dMap$dInternal.fromFoldable(Data$dOrd.ordInt)(Data$dFoldable.foldableArray)([
      Data$dTuple.$Tuple(4, "B"),
      Data$dTuple.$Tuple(8, "D")
    ]))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Map with BigInt newtype keys")(Test$dUtil.roundtrips(showMap4)(eqMap4)(readForeignMap3)(writeForeignMap3)(Data$dMap$dInternal.fromFoldable(JS$dBigInt.ordBigInt)(Data$dFoldable.foldableArray)([
      Data$dTuple.$Tuple(JS$dBigInt.fromInt(5), "B"),
      Data$dTuple.$Tuple(big, "D")
    ]))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips Set String")(Test$dUtil.roundtrips(showSet)(eqSet)(readForeignSet)(writeForeignSet)(Data$dFoldable.foldlArray(m => a => Data$dMap$dInternal.insert(Data$dOrd.ordString)(a)()(m))(Data$dMap$dInternal.Leaf)([
      "A",
      "B",
      "C"
    ]))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips BigInt")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither3)(eqEither3)((() => {
      const $0 = Yoga$dJSON.readJSON(readForeignRecord2)("{ \"number\":1, \"big\": 18014398509481982, \"mediumBig\": 1652955871799, \"smallBig\": 10 }");
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", writeJSON($0._1)); }
      $runtime.fail();
    })())(Data$dEither.$Either("Right", "{\"smallBig\":\"10\",\"number\":1,\"mediumBig\":\"1652955871799\",\"big\":\"18014398509481982\"}"))))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips BigInt (2)")((() => {
      const expected = {big, smallBig: JS$dBigInt.fromInt(10)};
      return Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither4)(eqEither4)(Yoga$dJSON.readJSON(readForeignRecord3)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignRecord2.writeImpl)(expected)))(Data$dEither.$Either(
        "Right",
        expected
      ));
    })())))))))))))))))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on containers types"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Effect$dAff._liftEffect(Data$dJSDate.now))(now => Effect$dAff._bind(Test$dUtil.roundtrips(Data$dJSDate.showJSDate)(Data$dJSDate.eqJSDate)(Yoga$dJSON.readForeignJSDate)(Yoga$dJSON.writeForeignJSDate)(now))(() => Effect$dAff._bind(Effect$dAff._liftEffect(Data$dJSDate.parse("2022-01-01:00:00:00Z")))(someDate => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(Yoga$dJSON.writeForeignJSDate.writeImpl)(someDate))("\"2022-01-01T00:00:00.000Z\"")))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works with JSDate"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Effect$dAff._liftEffect(Effect$dNow.nowDateTime))(now => Effect$dAff._bind(Test$dUtil.roundtrips(Data$dDateTime.showDateTime)(Data$dDateTime.eqDateTime)(Yoga$dJSON.readForeignDateTime)(Yoga$dJSON.writeForeignDateTime)(now))(() => Effect$dAff._bind(Effect$dAff._liftEffect((() => {
      const $0 = Data$dJSDate.parse("2022-01-01:00:00:00Z");
      const $1 = Control$dSemigroupoid.composeImpl(v2 => {
        if (v2.tag === "Nothing") { return Partial._crashWith("nope"); }
        if (v2.tag === "Just") { return v2._1; }
        $runtime.fail();
      })(Data$dJSDate.toDateTime);
      return () => {
        const a$p = $0();
        return $1(a$p);
      };
    })()))(someDate => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(Yoga$dJSON.writeForeignDateTime.writeImpl)(someDate))("\"2022-01-01T00:00:00.000Z\"")))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works with DateTime"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(Data$dTime$dDuration.showMilliseconds)(Data$dEq.eqNumber)(Yoga$dJSON.readForeignMilliseconds)(Yoga$dJSON.writeForeignMilliseconds)(16.67))(() => Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(Yoga$dJSON.writeForeignMilliseconds.writeImpl)(16.67))("16.67"))(() => Effect$dAff._bind(Test$dUtil.roundtrips(Data$dTime$dDuration.showSeconds)(Data$dEq.eqNumber)(Yoga$dJSON.readForeignSeconds)(Yoga$dJSON.writeForeignSeconds)(60.0))(() => Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(Yoga$dJSON.writeForeignSeconds.writeImpl)(60.0))("60"))(() => Effect$dAff._bind(Test$dUtil.roundtrips(Data$dTime$dDuration.showMinutes)(Data$dEq.eqNumber)(Yoga$dJSON.readForeignMinutes)(Yoga$dJSON.writeForeignMinutes)(10.0))(() => Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(Yoga$dJSON.writeForeignMinutes.writeImpl)(10.0))("10"))(() => Effect$dAff._bind(Test$dUtil.roundtrips(Data$dTime$dDuration.showHours)(Data$dEq.eqNumber)(Yoga$dJSON.readForeignHours)(Yoga$dJSON.writeForeignHours)(24.0))(() => Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(Yoga$dJSON.writeForeignHours.writeImpl)(24.0))("24"))(() => Effect$dAff._bind(Test$dUtil.roundtrips(Data$dTime$dDuration.showDays)(Data$dEq.eqNumber)(Yoga$dJSON.readForeignDays)(Yoga$dJSON.writeForeignDays)(365.0))(() => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(Yoga$dJSON.writeForeignDays.writeImpl)(365.0))("365")))))))))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works with Durations"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showRecord2)(eqRec2)(readForeignRecord4)(writeForeignRecord3)({
      a: 12,
      b: "54"
    }))(() => Effect$dAff._bind(Test$dUtil.roundtrips(showRecord3)(eqRec3)(readForeignRecord5)(writeForeignRecord4)({a: 12, b: {c: "54"}}))(() => Test$dUtil.roundtrips(showRecord4)(eqRec4)(readForeignRecord6)(writeForeignRecord5)({}))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on record types"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Test$dUtil.roundtrips(Data$dShow.showString)(Data$dEq.eqString)(Yoga$dJSON.readForeignString)(Yoga$dJSON.writeForeignString)("A string is here"));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on newtypes"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showVariant2)(eqVariant2)(readForeignVariant1)(writeForeignVariant1)({
      type: "erwin",
      value: "e"
    }))(() => Test$dUtil.roundtrips(showVariant4)(eqVariant4)(readForeignVariant2)(writeForeignVariant2)({type: "jackie", value: 7})));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on variant types"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showVariant5)(eqVariant5)(readForeignTaggedVariant1)(writeForeignTaggedVariant11)({
      type: "erwin",
      value: "e"
    }))(() => {
      const bareVariant = {type: "erwin", value: "e"};
      return Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignTaggedVariant12.writeImpl)(bareVariant))("{\"value\":\"e\",\"type\":\"erwin\"}"))(() => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither5)(eqEither5)((() => {
        const $0 = Yoga$dJSON.readJSON(readForeignTaggedVariant2)("{\"value\":\"e\",\"type\":\"erwin\"}");
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
        $runtime.fail();
      })())(Data$dEither.$Either("Right", bareVariant)));
    }));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on tagged variant types"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showVariant5)(eqVariant5)(readForeignUntaggedVarian11)(writeForeignUntaggedVaria11)({
      type: "erwin",
      value: "e"
    }))(() => {
      const bareVariant = {type: "erwin", value: "e"};
      return Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignUntaggedVaria12.writeImpl)(bareVariant))("\"e\""))(() => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither5)(eqEither5)((() => {
        const $0 = Yoga$dJSON.readJSON(readForeignUntaggedVarian12)("\"e\"");
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
        $runtime.fail();
      })())(Data$dEither.$Either("Right", bareVariant)));
    }));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on untagged variant types"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips NonEmptyString")(Test$dUtil.roundtrips(Data$dString$dNonEmpty$dInternal.showNonEmptyString)(Data$dEq.eqString)(Yoga$dJSON.readForeignNonEmptyString)(Yoga$dJSON.writeForeignNonEmptyStrin)("Non-Empty")))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("fails to decode empty strings")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither6)(eqEither6)(Yoga$dJSON.readJSON(Yoga$dJSON.readForeignNonEmptyString)("\"\""))(Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError("ForeignError", "String must not be empty"))
    ))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on non empty strings"), $0._2)]);
  })())(() => {
    const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Test$dUtil.roundtrips(showShowTree)(eqShowTree)(readForeignShowTree)(writeForeignShowTree)((() => {
      const $0 = [
        (() => {
          const $0 = [Data$dLazy.defer(v => Data$dTuple.$Tuple("c", [])), Data$dLazy.defer(v => Data$dTuple.$Tuple("d", []))];
          return Data$dLazy.defer(v => Data$dTuple.$Tuple("b", $0));
        })()
      ];
      return Data$dLazy.defer(v => Data$dTuple.$Tuple("a", $0));
    })())))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("encodes as expected")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignShowTree.writeImpl)((() => {
      const $0 = [
        (() => {
          const $0 = [Data$dLazy.defer(v => Data$dTuple.$Tuple("c", [])), Data$dLazy.defer(v => Data$dTuple.$Tuple("d", []))];
          return Data$dLazy.defer(v => Data$dTuple.$Tuple("b", $0));
        })()
      ];
      return Data$dLazy.defer(v => Data$dTuple.$Tuple("a", $0));
    })()))("{\"value\":\"a\",\"children\":[{\"value\":\"b\",\"children\":[{\"value\":\"c\"},{\"value\":\"d\"}]}]}")));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works on trees"), $0._2)]);
  })))))))))));
  return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "En- and decoding"), $0._2)]);
})();
export {
  BigInty,
  Inty,
  ShowTree,
  Stringy,
  aIsSymbol,
  bIsSymbol,
  big,
  bigIsSymbol,
  bindSpecT,
  cIsSymbol,
  emptyIsSymbol,
  eqBigInty,
  eqEither,
  eqEither1,
  eqEither2,
  eqEither3,
  eqEither4,
  eqEither5,
  eqEither6,
  eqInty,
  eqMap,
  eqMap1,
  eqMap2,
  eqMap3,
  eqMap4,
  eqMaybe,
  eqNonEmptyArray,
  eqObject,
  eqRec1,
  eqRec2,
  eqRec3,
  eqRec4,
  eqSet,
  eqShowTree,
  eqStringy,
  eqTuple1,
  eqTuple2,
  eqVariant2,
  eqVariant4,
  eqVariant5,
  eqVariantCons1,
  eqVariantCons2,
  erwin,
  erwinIsSymbol1,
  hansIsSymbol,
  jackieIsSymbol,
  mediumBigIsSymbol,
  newtypeBigInty_,
  newtypeInty_,
  newtypeStringy_,
  numberIsSymbol,
  ordBigInty,
  ordInty,
  ordStringy,
  readForeignBigInty,
  readForeignEither,
  readForeignEither1,
  readForeignFieldsCons,
  readForeignFieldsCons1,
  readForeignFieldsCons2,
  readForeignInty,
  readForeignMap1,
  readForeignMap2,
  readForeignMap3,
  readForeignMapInt,
  readForeignMapString,
  readForeignMaybe,
  readForeignMaybe1,
  readForeignNonEmptyArray,
  readForeignObject,
  readForeignRecord1,
  readForeignRecord2,
  readForeignRecord3,
  readForeignRecord4,
  readForeignRecord5,
  readForeignRecord6,
  readForeignSet,
  readForeignShowTree,
  readForeignStringy,
  readForeignTaggedVariant1,
  readForeignTaggedVariant2,
  readForeignTuple,
  readForeignTuple1,
  readForeignUntaggedVarian11,
  readForeignUntaggedVarian12,
  readForeignVariant1,
  readForeignVariant2,
  readForeignVariantCons,
  roundtrips,
  roundtrips1,
  showBigInty,
  showEither,
  showEither1,
  showEither2,
  showEither3,
  showEither4,
  showEither5,
  showEither6,
  showInty,
  showMap,
  showMap1,
  showMap2,
  showMap3,
  showMap4,
  showMaybe,
  showMaybe1,
  showNonEmptyArray,
  showObject,
  showRecord1,
  showRecord2,
  showRecord3,
  showRecord4,
  showSet,
  showShowTree,
  showStringy,
  showTuple,
  showTuple1,
  showTuple2,
  showVariant2,
  showVariant4,
  showVariant5,
  showVariantCons1,
  showVariantCons2,
  smallBigIsSymbol,
  spec,
  superIsSymbol,
  typeIsSymbol,
  valueIsSymbol,
  variantTagsCons1,
  variantTagsCons2,
  writeForeignBigInty,
  writeForeignEither,
  writeForeignEither1,
  writeForeignEither2,
  writeForeignFieldsCons1,
  writeForeignInty,
  writeForeignMap1,
  writeForeignMap2,
  writeForeignMap3,
  writeForeignMapInt,
  writeForeignMapString,
  writeForeignMaybe,
  writeForeignMaybe1,
  writeForeignNEArray,
  writeForeignObject,
  writeForeignRecord1,
  writeForeignRecord2,
  writeForeignRecord3,
  writeForeignRecord4,
  writeForeignRecord5,
  writeForeignSet,
  writeForeignShowTree,
  writeForeignStringy,
  writeForeignTaggedVariant11,
  writeForeignTaggedVariant12,
  writeForeignTuple1,
  writeForeignTupleTuple,
  writeForeignUntaggedVaria11,
  writeForeignUntaggedVaria12,
  writeForeignUntaggedVaria2,
  writeForeignVariant1,
  writeForeignVariant2,
  writeJSON
};
