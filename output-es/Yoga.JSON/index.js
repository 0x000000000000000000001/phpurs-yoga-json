import * as $runtime from "../runtime.js";
import * as Control$dApplicative from "../Control.Applicative/index.js";
import * as Control$dMonad$dExcept from "../Control.Monad.Except/index.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dNonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dJSDate from "../Data.JSDate/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dNonEmpty$dInternal from "../Data.String.NonEmpty.Internal/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Effect$dUnsafe from "../Effect.Unsafe/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dIndex from "../Foreign.Index/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as JS$dBigInt from "../JS.BigInt/index.js";
import * as Partial from "../Partial/index.js";
import * as Record$dBuilder from "../Record.Builder/index.js";
import * as Record$dUnsafe from "../Record.Unsafe/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {_parseJSON, _undefined, _unsafePrettyStringify, _unsafeStringify} from "./foreign.js";
const identity = x => x;
const fail = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton))();
const readString = /* #__PURE__ */ Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String");
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity);
const applicativeExceptT1 = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity);
const typeIsSymbol = {reflectSymbol: () => "type"};
const valueIsSymbol = {reflectSymbol: () => "value"};
const childrenIsSymbol = {reflectSymbol: () => "children"};
const except = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity);
const except1 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity);
const except2 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity);
const fail1 = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton))();
const toUnfoldable = /* #__PURE__ */ Foreign$dObject.toUnfoldable(Data$dUnfoldable.unfoldableArray);
const except3 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity);
const altExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity);
const except4 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity);
const readArray = /* #__PURE__ */ Foreign.readArray(Data$dIdentity.monadIdentity);
const applyExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applyExceptT(Data$dIdentity.monadIdentity);
const monadThrowExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity);
const except5 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity);
const except6 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity);
const writeForeignVariantNilRow = {writeVariantImpl: v => v1 => Partial._crashWith("Attempted to write empty variant.")};
const writeForeignString = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignNumber = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignNonEmptyStrin = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignInt = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignForeign = {writeImpl: x => x};
const writeForeignFieldsNilRowR = {writeImplFields: v => v1 => identity};
const writeForeignChar = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignBoolean = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const writeForeignBigInt = {writeImpl: Unsafe$dCoerce.unsafeCoerce};
const readForeignVariantNil = {readVariantImpl: v => v1 => fail(Foreign.$ForeignError("ForeignError", "Unable to match any variant member."))};
const readForeignString = {readImpl: readString};
const readForeignNumber = {readImpl: /* #__PURE__ */ Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")};
const readForeignNonEmptyString = {
  readImpl: /* #__PURE__ */ (() => {
    const $0 = Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError("ForeignError", "String must not be empty"));
    const $1 = Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity))(v2 => {
      if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", $0); }
      if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    }))(Data$dString$dNonEmpty$dInternal.fromString);
    return a => bindExceptT.bind(readString(a))($1);
  })()
};
const readForeignInt = {readImpl: /* #__PURE__ */ Foreign.readInt(Data$dIdentity.monadIdentity)};
const readForeignForeign = /* #__PURE__ */ (() => ({readImpl: applicativeExceptT.pure}))();
const readForeignFieldsNilRowRo = {getFields: v => v1 => applicativeExceptT1.pure(x => x)};
const readForeignChar = {readImpl: /* #__PURE__ */ Foreign.readChar(Data$dIdentity.monadIdentity)};
const readForeignBoolean = {readImpl: /* #__PURE__ */ Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Boolean")};
const writeVariantImpl = dict => dict.writeVariantImpl;
const writeForeignVariant = () => dictWriteForeignVariant => ({writeImpl: variant => dictWriteForeignVariant.writeVariantImpl(Type$dProxy.Proxy)(variant)});
const writeImplFields = dict => dict.writeImplFields;
const writeForeignRecord = () => dictWriteForeignFields => ({writeImpl: rec => dictWriteForeignFields.writeImplFields(Type$dProxy.Proxy)(rec)({})});
const writeImpl = dict => dict.writeImpl;
const writeJSON = dictWriteForeign => Control$dSemigroupoid.composeImpl(_unsafeStringify)(dictWriteForeign.writeImpl);
const writePrettyJSON = dictWriteForeign => {
  const writeImpl4 = dictWriteForeign.writeImpl;
  return spaces => Control$dSemigroupoid.composeImpl(_unsafePrettyStringify(spaces))(writeImpl4);
};
const writeForeignArray = dictWriteForeign => {
  const writeImpl4 = dictWriteForeign.writeImpl;
  return {writeImpl: xs => Data$dFunctor.arrayMap(writeImpl4)(xs)};
};
const writeForeignDays = {writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)};
const writeForeignFieldsCons = dictIsSymbol => dictWriteForeign => dictWriteForeignFields => () => () => () => (
  {
    writeImplFields: v => rec => Control$dSemigroupoid.composeImpl(Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy)(dictWriteForeign.writeImpl(Record$dUnsafe.unsafeGet(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(rec))))(dictWriteForeignFields.writeImplFields(Type$dProxy.Proxy)(rec))
  }
);
const writeForeignRecord2 = /* #__PURE__ */ (() => {
  const $0 = writeForeignFieldsCons(typeIsSymbol)(writeForeignString)(writeForeignFieldsCons(valueIsSymbol)(writeForeignForeign)(writeForeignFieldsNilRowR)()()())()()();
  return {writeImpl: rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({})};
})();
const writeForeignEither = dictWriteForeign => dictWriteForeign1 => (
  {
    writeImpl: value => {
      if (value.tag === "Left") { return writeForeignRecord2.writeImpl({type: "left", value: dictWriteForeign.writeImpl(value._1)}); }
      if (value.tag === "Right") { return writeForeignRecord2.writeImpl({type: "right", value: dictWriteForeign1.writeImpl(value._1)}); }
      $runtime.fail();
    }
  }
);
const writeForeignHours = {writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)};
const writeForeignJSDate = {
  writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Effect$dUnsafe.unsafePerformEffect))(Data$dJSDate.toISOString)
};
const writeForeignDateTime = /* #__PURE__ */ (() => ({writeImpl: Control$dSemigroupoid.composeImpl(writeForeignJSDate.writeImpl)(Data$dJSDate.fromDateTime)}))();
const writeForeignMap = () => dictWriteForeign => ({writeImpl: Control$dSemigroupoid.composeImpl(dictWriteForeign.writeImpl)(Unsafe$dCoerce.unsafeCoerce)});
const writeForeignMilliseconds = {writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)};
const writeForeignInstant = /* #__PURE__ */ (() => ({writeImpl: Control$dSemigroupoid.composeImpl(writeForeignMilliseconds.writeImpl)(Data$dDateTime$dInstant.unInstant)}))();
const writeForeignMinutes = {writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)};
const writeForeignNullable = dictWriteForeign => (
  {
    writeImpl: Control$dSemigroupoid.composeImpl(v2 => {
      if (v2.tag === "Nothing") { return Data$dNullable.null; }
      if (v2.tag === "Just") { return dictWriteForeign.writeImpl(v2._1); }
      $runtime.fail();
    })(Data$dNullable.toMaybe)
  }
);
const writeForeignObject = dictWriteForeign => (
  {
    writeImpl: Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Foreign$dObject.mapWithKey((() => {
      const $0 = dictWriteForeign.writeImpl;
      return v => $0;
    })()))
  }
);
const writeImpl3 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Foreign$dObject.mapWithKey(v => writeForeignForeign.writeImpl));
const writeForeignMapBigInt = dictWriteForeign => (
  {
    writeImpl: (() => {
      const $0 = Control$dSemigroupoid.composeImpl(Foreign$dObject.insert)(JS$dBigInt.toString);
      return Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Foreign$dObject.mapWithKey((() => {
        const $1 = dictWriteForeign.writeImpl;
        return v => $1;
      })())))((() => {
        const go = (m$p, z$p) => {
          if (m$p.tag === "Leaf") { return z$p; }
          if (m$p.tag === "Node") { return go(m$p._5, $0(m$p._3)(m$p._4)(go(m$p._6, z$p))); }
          $runtime.fail();
        };
        return m => go(m, Foreign$dObject.empty);
      })());
    })()
  }
);
const writeForeignMapInt = dictWriteForeign => (
  {
    writeImpl: (() => {
      const $0 = Control$dSemigroupoid.composeImpl(Foreign$dObject.insert)(Data$dShow.showIntImpl);
      return Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Foreign$dObject.mapWithKey((() => {
        const $1 = dictWriteForeign.writeImpl;
        return v => $1;
      })())))((() => {
        const go = (m$p, z$p) => {
          if (m$p.tag === "Leaf") { return z$p; }
          if (m$p.tag === "Node") { return go(m$p._5, $0(m$p._3)(m$p._4)(go(m$p._6, z$p))); }
          $runtime.fail();
        };
        return m => go(m, Foreign$dObject.empty);
      })());
    })()
  }
);
const writeForeignMapString = dictWriteForeign => (
  {
    writeImpl: (() => {
      const go = (m$p, z$p) => {
        if (m$p.tag === "Leaf") { return z$p; }
        if (m$p.tag === "Node") {
          return go(
            m$p._5,
            (() => {
              const $0 = m$p._3;
              const $1 = m$p._4;
              return Foreign$dObject.mutate($2 => () => {
                $2[$0] = $1;
                return $2;
              })(go(m$p._6, z$p));
            })()
          );
        }
        $runtime.fail();
      };
      return Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Foreign$dObject.mapWithKey((() => {
        const $0 = dictWriteForeign.writeImpl;
        return v => $0;
      })())))(m => go(m, Foreign$dObject.empty));
    })()
  }
);
const writeForeignSeconds = {writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Unsafe$dCoerce.unsafeCoerce)};
const writeForeignSet = dictWriteForeign => {
  const writeImpl4 = dictWriteForeign.writeImpl;
  return {writeImpl: $$set => Data$dFunctor.arrayMap(writeImpl4)(Data$dSet.toUnfoldable(Data$dUnfoldable.unfoldableArray)($$set))};
};
const writeForeignTuple = dictWriteForeign => dictWriteForeign1 => (
  {writeImpl: v => Data$dFunctor.arrayMap(writeForeignForeign.writeImpl)([dictWriteForeign.writeImpl(v._1), dictWriteForeign1.writeImpl(v._2)])}
);
const writeForeignVariantCons = dictIsSymbol => dictWriteForeign => () => dictWriteForeignVariant => (
  {
    writeVariantImpl: v => variant => {
      const name = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      return Data$dVariant.onImpl(dictIsSymbol.reflectSymbol)(Type$dProxy.Proxy)(value => writeImpl3((() => {
        const $0 = dictWriteForeign.writeImpl(value);
        const $1 = {};
        $1[name] = $0;
        return $1;
      })()))(dictWriteForeignVariant.writeVariantImpl(Type$dProxy.Proxy))(variant);
    }
  }
);
const writeForeignNEArray = dictWriteForeign => {
  const writeImpl4 = dictWriteForeign.writeImpl;
  return {writeImpl: a => Control$dSemigroupoid.composeImpl(xs => Data$dFunctor.arrayMap(writeImpl4)(xs))(Data$dArray$dNonEmpty.toArray)(a)};
};
const write = dictWriteForeign => dictWriteForeign.writeImpl;
const unsafeStringify = _unsafeStringify;
const unsafeStringToInt = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v2 => {
  if (v2.tag === "Nothing") { return Partial._crashWith("impossible"); }
  if (v2.tag === "Just") { return v2._1; }
  $runtime.fail();
})(Data$dInt.fromString);
const unsafeStringToBigInt = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v2 => {
  if (v2.tag === "Nothing") { return Partial._crashWith("impossible"); }
  if (v2.tag === "Just") { return v2._1; }
  $runtime.fail();
})(JS$dBigInt.fromString);
const $$undefined = _undefined;
const writeForeignMaybe = dictWriteForeign => (
  {
    writeImpl: v2 => {
      if (v2.tag === "Nothing") { return _undefined; }
      if (v2.tag === "Just") { return dictWriteForeign.writeImpl(v2._1); }
      $runtime.fail();
    }
  }
);
const writeForeignFieldsCons2 = /* #__PURE__ */ writeForeignFieldsCons(childrenIsSymbol)({
  writeImpl: v2 => {
    if (v2.tag === "Nothing") { return _undefined; }
    if (v2.tag === "Just") { return Data$dFunctor.arrayMap(writeForeignForeign.writeImpl)(v2._1); }
    $runtime.fail();
  }
});
const writeForeignTree = dictWriteForeign => {
  const $0 = writeForeignFieldsCons2(writeForeignFieldsCons(valueIsSymbol)(dictWriteForeign)(writeForeignFieldsNilRowR)()()())()()();
  return {
    writeImpl: t => {
      const tail = Data$dLazy.force(t)._2;
      return $0.writeImplFields(Type$dProxy.Proxy)({
        value: Data$dLazy.force(t)._1,
        children: tail.length === 0 ? Data$dMaybe.Nothing : Data$dMaybe.$Maybe("Just", Data$dFunctor.arrayMap(writeForeignTree(dictWriteForeign).writeImpl)(tail))
      })({});
    }
  };
};
const tupleSize = dict => dict.tupleSize;
const sequenceCombining = dictMonoid => {
  const Semigroup0 = dictMonoid.Semigroup0();
  return dictFoldable => dictApplicative => Control$dSemigroupoid.composeImpl(except)(dictFoldable.foldl(acc => elem => {
    const v = Control$dMonad$dExcept.runExcept(elem);
    if (acc.tag === "Left") {
      if (v.tag === "Left") { return Data$dEither.$Either("Left", Data$dList$dTypes.semigroupNonEmptyList.append(acc._1)(v._1)); }
      if (v.tag === "Right") { return Data$dEither.$Either("Left", acc._1); }
      $runtime.fail();
    }
    if (acc.tag === "Right") {
      if (v.tag === "Right") { return Data$dEither.$Either("Right", Semigroup0.append(acc._1)(dictApplicative.pure(v._1))); }
      if (v.tag === "Left") { return Data$dEither.$Either("Left", v._1); }
    }
    $runtime.fail();
  })(Data$dEither.$Either("Right", dictMonoid.mempty)));
};
const sequenceCombining1 = /* #__PURE__ */ sequenceCombining(Data$dMonoid.monoidArray)(Data$dFoldable.foldableArray)(Control$dApplicative.applicativeArray);
const readVariantImpl = dict => dict.readVariantImpl;
const readForeignVariant = () => dictReadForeignVariant => ({readImpl: o => dictReadForeignVariant.readVariantImpl(Type$dProxy.Proxy)(o)});
const readTupleImpl = dict => dict.readTupleImpl;
const readForeignTuple = dictReadTuple => ({readImpl: dictReadTuple.readTupleImpl(0)});
const readImpl = dict => dict.readImpl;
const readForeignDays = /* #__PURE__ */ (() => (
  {
    readImpl: Control$dSemigroupoid.composeImpl(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", m._1); }
      $runtime.fail();
    })(readForeignNumber.readImpl)
  }
))();
const readForeignHours = /* #__PURE__ */ (() => (
  {
    readImpl: Control$dSemigroupoid.composeImpl(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", m._1); }
      $runtime.fail();
    })(readForeignNumber.readImpl)
  }
))();
const readForeignJSDate = {
  readImpl: /* #__PURE__ */ (() => {
    const $0 = Control$dSemigroupoid.composeImpl(Effect$dUnsafe.unsafePerformEffect)(Data$dJSDate.parse);
    return Control$dSemigroupoid.composeImpl(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", $0(m._1)); }
      $runtime.fail();
    })(readString);
  })()
};
const readForeignDateTime = {
  readImpl: /* #__PURE__ */ (() => {
    const $0 = Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError("ForeignError", "Invalid date time"));
    const $1 = Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity))(v2 => {
      if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", $0); }
      if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    }))(Data$dJSDate.toDateTime);
    return a => bindExceptT.bind(readForeignJSDate.readImpl(a))($1);
  })()
};
const readForeignMap = () => dictReadForeign => (
  {
    readImpl: Control$dSemigroupoid.composeImpl(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", m._1); }
      $runtime.fail();
    })(dictReadForeign.readImpl)
  }
);
const readForeignMaybe = dictReadForeign => (
  {
    readImpl: v1 => {
      if (Foreign.isNull(v1) || Foreign.isUndefined(v1)) { return applicativeExceptT1.pure(Data$dMaybe.Nothing); }
      const $0 = dictReadForeign.readImpl(v1);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $0._1)); }
      $runtime.fail();
    }
  }
);
const readForeignMilliseconds = /* #__PURE__ */ (() => (
  {
    readImpl: Control$dSemigroupoid.composeImpl(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", m._1); }
      $runtime.fail();
    })(readForeignNumber.readImpl)
  }
))();
const readForeignInstant = {
  readImpl: f => bindExceptT.bind(readForeignMilliseconds.readImpl(f))(millis => {
    if (millis >= -8639977881600000.0 && millis <= 8639977881599999.0) { return applicativeExceptT1.pure(millis); }
    return except1(Data$dEither.$Either("Left", Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError("ForeignError", "Invalid instant"))));
  })
};
const readForeignMinutes = /* #__PURE__ */ (() => (
  {
    readImpl: Control$dSemigroupoid.composeImpl(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", m._1); }
      $runtime.fail();
    })(readForeignNumber.readImpl)
  }
))();
const readForeignNullable = dictReadForeign => {
  const readImpl3 = dictReadForeign.readImpl;
  return {
    readImpl: o => {
      const $0 = Data$dList$dTypes.functorNonEmptyList.map(error => {
        if (error.tag === "TypeMismatch") { return Foreign.$ForeignError("TypeMismatch", "Nullable " + error._1, error._2); }
        return error;
      });
      const $1 = bindExceptT.bind(Foreign.readNull(Data$dIdentity.monadIdentity)(o))(Control$dSemigroupoid.composeImpl(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") {
          return Data$dEither.$Either(
            "Right",
            (() => {
              if (m._1.tag === "Nothing") { return Data$dNullable.null; }
              if (m._1.tag === "Just") { return Data$dNullable.notNull(m._1._1); }
              $runtime.fail();
            })()
          );
        }
        $runtime.fail();
      })(Data$dTraversable.traversableMaybe.traverse(applicativeExceptT1)(readImpl3)));
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
      $runtime.fail();
    }
  };
};
const readForeignObject = dictReadForeign => (
  {
    readImpl: (() => {
      const $0 = Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(except3)(Data$dFoldable.foldlArray(acc => v => {
        const v2 = Control$dMonad$dExcept.runExcept(v._2);
        if (acc.tag === "Left") {
          if (v2.tag === "Left") { return Data$dEither.$Either("Left", Data$dList$dTypes.semigroupNonEmptyList.append(acc._1)(v2._1)); }
          if (v2.tag === "Right") { return Data$dEither.$Either("Left", acc._1); }
          $runtime.fail();
        }
        if (acc.tag === "Right") {
          if (v2.tag === "Right") {
            const $0 = v2._1;
            return Data$dEither.$Either(
              "Right",
              Foreign$dObject.mutate($1 => () => {
                $1[v._1] = $0;
                return $1;
              })(acc._1)
            );
          }
          if (v2.tag === "Left") { return Data$dEither.$Either("Left", v2._1); }
        }
        $runtime.fail();
      })(Data$dEither.$Either("Right", Foreign$dObject.empty))))(toUnfoldable))(Foreign$dObject.mapWithKey(key => value => except2((() => {
        const $0 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty(key));
        const $1 = Control$dMonad$dExcept.runExcept(dictReadForeign.readImpl(value));
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
        $runtime.fail();
      })())));
      return a => bindExceptT.bind(Foreign.tagOf(a) === "Object" ? applicativeExceptT.pure(a) : fail1(Foreign.$ForeignError("TypeMismatch", "Object", Foreign.tagOf(a))))($0);
    })()
  }
);
const readForeignMapBigInt = dictReadForeign => (
  {
    readImpl: (() => {
      const $0 = Foreign$dObject.foldableWithIndexObject.foldrWithIndex(Control$dSemigroupoid.composeImpl(Data$dMap$dInternal.insert(JS$dBigInt.ordBigInt))(unsafeStringToBigInt))(Data$dMap$dInternal.Leaf);
      return Control$dSemigroupoid.composeImpl(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", $0(m._1)); }
        $runtime.fail();
      })(readForeignObject(dictReadForeign).readImpl);
    })()
  }
);
const readForeignMapInt = dictReadForeign => (
  {
    readImpl: (() => {
      const $0 = Foreign$dObject.foldableWithIndexObject.foldrWithIndex(Control$dSemigroupoid.composeImpl(Data$dMap$dInternal.insert(Data$dOrd.ordInt))(unsafeStringToInt))(Data$dMap$dInternal.Leaf);
      return Control$dSemigroupoid.composeImpl(m => {
        if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
        if (m.tag === "Right") { return Data$dEither.$Either("Right", $0(m._1)); }
        $runtime.fail();
      })(readForeignObject(dictReadForeign).readImpl);
    })()
  }
);
const readForeignMapString = dictReadForeign => (
  {
    readImpl: Control$dSemigroupoid.composeImpl(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") {
        return Data$dEither.$Either(
          "Right",
          Foreign$dObject.foldableWithIndexObject.foldrWithIndex(Data$dMap$dInternal.insert(Data$dOrd.ordString))(Data$dMap$dInternal.Leaf)(m._1)
        );
      }
      $runtime.fail();
    })(readForeignObject(dictReadForeign).readImpl)
  }
);
const readForeignSeconds = /* #__PURE__ */ (() => (
  {
    readImpl: Control$dSemigroupoid.composeImpl(m => {
      if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
      if (m.tag === "Right") { return Data$dEither.$Either("Right", m._1); }
      $runtime.fail();
    })(readForeignNumber.readImpl)
  }
))();
const readForeignVariantCons = dictIsSymbol => dictReadForeign => {
  const readImpl3 = dictReadForeign.readImpl;
  return () => dictReadForeignVariant => (
    {
      readVariantImpl: v => o => altExceptT.alt(dictReadForeignVariant.readVariantImpl(Type$dProxy.Proxy)(o))((() => {
        const $0 = bindExceptT.bind(Foreign$dIndex.unsafeReadProp(Data$dIdentity.monadIdentity)(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(o))(readImpl3);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", {type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: $0._1}); }
        $runtime.fail();
      })())
    }
  );
};
const readForeignBigInt = {
  readImpl: fValue => {
    const err = Control$dSemigroupoid.composeImpl(Data$dList$dTypes.applicativeNonEmptyList.pure)(Foreign.ForeignError);
    return altExceptT.alt((() => {
      const $0 = Foreign.readInt(Data$dIdentity.monadIdentity)(fValue);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", JS$dBigInt.fromInt($0._1)); }
      $runtime.fail();
    })())(altExceptT.alt(bindExceptT.bind(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("Number")(fValue))(num => {
      if (Data$dNumber.round(num) === num) {
        return except4((() => {
          const $0 = err("Cannot convert Number " + Data$dShow.showNumberImpl(num) + " to BigInt");
          const $1 = JS$dBigInt.fromNumber(num);
          if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", $0); }
          if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
          $runtime.fail();
        })());
      }
      return except4(Data$dEither.$Either("Left", err("Cannot convert decimal Number " + Data$dShow.showNumberImpl(num) + " to BigInt")));
    }))(altExceptT.alt(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("BigInt")(fValue))(bindExceptT.bind(Foreign.unsafeReadTagged(Data$dIdentity.monadIdentity)("String")(fValue))(bi => except4((() => {
      const $0 = err("Cannot convert String " + bi + " to BigInt");
      const $1 = JS$dBigInt.fromString(bi);
      if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", $0); }
      if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })())))));
  }
};
const readAtIdx = dictReadForeign => i => f => {
  const $0 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtIndex(i));
  const $1 = dictReadForeign.readImpl(f);
  if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
  if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
  $runtime.fail();
};
const readForeignArray = dictReadForeign => (
  {
    readImpl: (() => {
      const $0 = Control$dSemigroupoid.composeImpl(sequenceCombining1)(Data$dFunctorWithIndex.mapWithIndexArray(readAtIdx(dictReadForeign)));
      return a => bindExceptT.bind(readArray(a))($0);
    })()
  }
);
const readForeignArray1 = /* #__PURE__ */ readForeignArray(readForeignForeign);
const readTupleHelper = dictReadForeign => dictReadForeign1 => (
  {
    readTupleImpl: n => a => bindExceptT.bind(readForeignArray1.readImpl(a))(v => {
      if (v.length === 2) {
        return applyExceptT.apply(applyExceptT.Functor0().map(Data$dTuple.Tuple)(readAtIdx(dictReadForeign)(n)(v[0])))(readAtIdx(dictReadForeign1)(n + 1 | 0)(v[1]));
      }
      return monadThrowExceptT.throwError(Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError(
        "TypeMismatch",
        "array of length " + Data$dShow.showIntImpl(n + 2 | 0),
        "array of length " + Data$dShow.showIntImpl(n + v.length | 0)
      )));
    }),
    tupleSize: v => 2
  }
);
const readForeignNonEmptyArray = dictReadForeign => {
  const readForeignArray2 = readForeignArray(dictReadForeign);
  return {
    readImpl: f => bindExceptT.bind(readForeignArray2.readImpl(f))(v => except5((() => {
      const $0 = Data$dList$dNonEmpty.singleton(Foreign.$ForeignError("ForeignError", "Nonempty array expected, got empty array"));
      if (v.length > 0) { return Data$dEither.$Either("Right", v); }
      return Data$dEither.$Either("Left", $0);
    })()))
  };
};
const readForeignSet = dictOrd => {
  const fromFoldable1 = Data$dFoldable.foldlArray(m => a => Data$dMap$dInternal.insert(dictOrd)(a)()(m))(Data$dMap$dInternal.Leaf);
  return dictReadForeign => {
    const readForeignArray2 = readForeignArray(dictReadForeign);
    return {
      readImpl: f => {
        const $0 = readForeignArray2.readImpl(f);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable1($0._1)); }
        $runtime.fail();
      }
    };
  };
};
const readTupleTupleTuple = dictReadForeign => dictReadTuple => (
  {
    readTupleImpl: n => a => bindExceptT.bind(readForeignArray1.readImpl(a))(v => {
      const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v);
      if (v1.tag === "Just") {
        return applyExceptT.apply(applyExceptT.Functor0().map(Data$dTuple.Tuple)(readAtIdx(dictReadForeign)(n)(v1._1.head)))(dictReadTuple.readTupleImpl(n + 1 | 0)(Data$dFunctor.arrayMap(writeForeignForeign.writeImpl)(v1._1.tail)));
      }
      return monadThrowExceptT.throwError(Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError(
        "TypeMismatch",
        "array of length " + Data$dShow.showIntImpl((1 + n | 0) + dictReadTuple.tupleSize(Type$dProxy.Proxy) | 0),
        "array of length " + Data$dShow.showIntImpl(n)
      )));
    }),
    tupleSize: v => 1 + dictReadTuple.tupleSize(Type$dProxy.Proxy) | 0
  }
);
const read$p = dictReadForeign => dictReadForeign.readImpl;
const read = dictReadForeign => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept.runExcept)(dictReadForeign.readImpl);
const read_ = dictReadForeign => Control$dSemigroupoid.composeImpl(Data$dEither.hush)(Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept.runExcept)(dictReadForeign.readImpl));
const read_1 = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Data$dEither.hush)(Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept.runExcept)(readForeignArray1.readImpl)))();
const writeForeignTupleTuple = dictWriteForeign => dictWriteForeign1 => (
  {
    writeImpl: v => Data$dFunctor.arrayMap(writeForeignForeign.writeImpl)([
      dictWriteForeign.writeImpl(v._1),
      ...(() => {
        const $0 = read_1(dictWriteForeign1.writeImpl(v._2));
        if ($0.tag === "Nothing") { return []; }
        if ($0.tag === "Just") { return $0._1; }
        $runtime.fail();
      })()
    ])
  }
);
const parseJSON = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dIdentity.Identity)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ (() => {
  const $0 = Control$dSemigroupoid.composeImpl(Data$dList$dTypes.applicativeNonEmptyList.pure)(Control$dSemigroupoid.composeImpl(Foreign.ForeignError)(Effect$dException.message));
  return v2 => {
    if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
    if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
    $runtime.fail();
  };
})())(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Effect$dUnsafe.unsafePerformEffect)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Effect$dException.try)(/* #__PURE__ */ Effect$dUncurried.runEffectFn1(_parseJSON))))));
const readJSON = dictReadForeign => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept.runExcept)((() => {
  const $0 = dictReadForeign.readImpl;
  return a => bindExceptT.bind(parseJSON(a))($0);
})());
const readJSON_ = dictReadForeign => Control$dSemigroupoid.composeImpl(Data$dEither.hush)(readJSON(dictReadForeign));
const readJSON$p = dictReadForeign => {
  const $0 = dictReadForeign.readImpl;
  return a => bindExceptT.bind(parseJSON(a))($0);
};
const getFields = dict => dict.getFields;
const readForeignFieldsCons = dictIsSymbol => dictReadForeign => {
  const readImpl3 = dictReadForeign.readImpl;
  return dictReadForeignFields => () => () => (
    {
      getFields: v => obj => {
        const name = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
        return Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.ExceptT)(Data$dIdentity.Identity)((() => {
          const v1 = Control$dMonad$dExcept.runExcept(dictReadForeignFields.getFields(Type$dProxy.Proxy)(obj));
          const v2 = Control$dMonad$dExcept.runExcept((() => {
            const $0 = Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept.withExcept)(Data$dList$dTypes.functorNonEmptyList.map)(Foreign.ErrorAtProperty(name))(bindExceptT.bind(Foreign$dIndex.unsafeReadProp(Data$dIdentity.monadIdentity)(name)(obj))(readImpl3));
            if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
            if ($0.tag === "Right") { return Data$dEither.$Either("Right", Record$dBuilder.insert()()(dictIsSymbol)(Type$dProxy.Proxy)($0._1)); }
            $runtime.fail();
          })());
          if (v2.tag === "Right") {
            if (v1.tag === "Right") { return Data$dEither.$Either("Right", Control$dSemigroupoid.composeImpl(v2._1)(v1._1)); }
            if (v1.tag === "Left") { return Data$dEither.$Either("Left", v1._1); }
            $runtime.fail();
          }
          if (v2.tag === "Left") {
            if (v1.tag === "Left") { return Data$dEither.$Either("Left", Data$dList$dTypes.semigroupNonEmptyList.append(v2._1)(v1._1)); }
            if (v1.tag === "Right") { return Data$dEither.$Either("Left", v2._1); }
          }
          $runtime.fail();
        })());
      }
    }
  );
};
const readForeignFieldsCons2 = /* #__PURE__ */ readForeignFieldsCons(childrenIsSymbol)(/* #__PURE__ */ readForeignMaybe(readForeignArray1));
const readForeignRecord = () => dictReadForeignFields => (
  {
    readImpl: o => {
      const $0 = dictReadForeignFields.getFields(Type$dProxy.Proxy)(o);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1({})); }
      $runtime.fail();
    }
  }
);
const readForeignRecord2 = /* #__PURE__ */ (() => {
  const $0 = readForeignFieldsCons(typeIsSymbol)(readForeignString)(readForeignFieldsCons(valueIsSymbol)(readForeignForeign)(readForeignFieldsNilRowRo)()())()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const readForeignEither = dictReadForeign => dictReadForeign1 => (
  {
    readImpl: f => bindExceptT.bind(readForeignRecord2.readImpl(f))(v => {
      if (v.type === "left") {
        const $0 = dictReadForeign.readImpl(v.value);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dEither.$Either("Left", $0._1)); }
        $runtime.fail();
      }
      if (v.type === "right") {
        const $0 = dictReadForeign1.readImpl(v.value);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dEither.$Either("Right", $0._1)); }
        $runtime.fail();
      }
      return except6(Data$dEither.$Either("Left", Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError("ForeignError", "Invalid Either tag " + v.type))));
    })
  }
);
const readForeignTree = dictReadForeign => {
  const $0 = readForeignFieldsCons2(readForeignFieldsCons(valueIsSymbol)(dictReadForeign)(readForeignFieldsNilRowRo)()())()();
  return {
    readImpl: f => bindExceptT.bind((() => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(f);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    })())(v => {
      if (v.children.tag === "Nothing") { return applicativeExceptT1.pure(Data$dLazy.defer(v$1 => Data$dTuple.$Tuple(v.value, []))); }
      if (v.children.tag === "Just") {
        const $1 = Data$dTraversable.traversableArray.traverse(applicativeExceptT1)(readForeignTree(dictReadForeign).readImpl)(v.children._1);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") {
          return Data$dEither.$Either(
            "Right",
            (() => {
              const $2 = v.value;
              const $3 = $1._1;
              return Data$dLazy.defer(v$1 => Data$dTuple.$Tuple($2, $3));
            })()
          );
        }
      }
      $runtime.fail();
    })
  };
};
export {
  altExceptT,
  applicativeExceptT,
  applicativeExceptT1,
  applyExceptT,
  bindExceptT,
  childrenIsSymbol,
  except,
  except1,
  except2,
  except3,
  except4,
  except5,
  except6,
  fail,
  fail1,
  getFields,
  identity,
  monadThrowExceptT,
  parseJSON,
  read,
  read$p,
  readArray,
  readAtIdx,
  readForeignArray,
  readForeignArray1,
  readForeignBigInt,
  readForeignBoolean,
  readForeignChar,
  readForeignDateTime,
  readForeignDays,
  readForeignEither,
  readForeignFieldsCons,
  readForeignFieldsCons2,
  readForeignFieldsNilRowRo,
  readForeignForeign,
  readForeignHours,
  readForeignInstant,
  readForeignInt,
  readForeignJSDate,
  readForeignMap,
  readForeignMapBigInt,
  readForeignMapInt,
  readForeignMapString,
  readForeignMaybe,
  readForeignMilliseconds,
  readForeignMinutes,
  readForeignNonEmptyArray,
  readForeignNonEmptyString,
  readForeignNullable,
  readForeignNumber,
  readForeignObject,
  readForeignRecord,
  readForeignRecord2,
  readForeignSeconds,
  readForeignSet,
  readForeignString,
  readForeignTree,
  readForeignTuple,
  readForeignVariant,
  readForeignVariantCons,
  readForeignVariantNil,
  readImpl,
  readJSON,
  readJSON$p,
  readJSON_,
  readString,
  readTupleHelper,
  readTupleImpl,
  readTupleTupleTuple,
  readVariantImpl,
  read_,
  read_1,
  sequenceCombining,
  sequenceCombining1,
  toUnfoldable,
  tupleSize,
  typeIsSymbol,
  $$undefined as undefined,
  unsafeStringToBigInt,
  unsafeStringToInt,
  unsafeStringify,
  valueIsSymbol,
  write,
  writeForeignArray,
  writeForeignBigInt,
  writeForeignBoolean,
  writeForeignChar,
  writeForeignDateTime,
  writeForeignDays,
  writeForeignEither,
  writeForeignFieldsCons,
  writeForeignFieldsCons2,
  writeForeignFieldsNilRowR,
  writeForeignForeign,
  writeForeignHours,
  writeForeignInstant,
  writeForeignInt,
  writeForeignJSDate,
  writeForeignMap,
  writeForeignMapBigInt,
  writeForeignMapInt,
  writeForeignMapString,
  writeForeignMaybe,
  writeForeignMilliseconds,
  writeForeignMinutes,
  writeForeignNEArray,
  writeForeignNonEmptyStrin,
  writeForeignNullable,
  writeForeignNumber,
  writeForeignObject,
  writeForeignRecord,
  writeForeignRecord2,
  writeForeignSeconds,
  writeForeignSet,
  writeForeignString,
  writeForeignTree,
  writeForeignTuple,
  writeForeignTupleTuple,
  writeForeignVariant,
  writeForeignVariantCons,
  writeForeignVariantNilRow,
  writeImpl,
  writeImpl3,
  writeImplFields,
  writeJSON,
  writePrettyJSON,
  writeVariantImpl
};
export * from "./foreign.js";
