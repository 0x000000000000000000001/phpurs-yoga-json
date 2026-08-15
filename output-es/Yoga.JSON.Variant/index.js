import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dVariant from "../Data.Variant/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dIndex from "../Foreign.Index/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Partial from "../Partial/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const fail = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton))();
const writeImpl = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Foreign$dObject.mapWithKey(v => Yoga$dJSON.writeForeignForeign.writeImpl));
const altExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity);
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
const pure = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity).pure)();
const fail1 = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton))();
const UntaggedVariant = x => x;
const TaggedVariant = x => x;
const writeForeignUntaggedVaria = {writeUntaggedVariantImpl: v => v1 => Partial._crashWith("Attempted to write empty Variant")};
const writeForeignTaggedVariant = {writeVariantImpl: v => v1 => v2 => v3 => Partial._crashWith("Attempted to write empty Variant")};
const showUntaggedVariant = dictShow => dictShow;
const showTaggedVariant = dictShow => dictShow;
const readForeignUntaggedVarian = {readUntaggedVariantImpl: v => v1 => fail(Foreign.$ForeignError("ForeignError", "Unable to match any variant member."))};
const readForeignTaggedVariantN = {readVariantImpl: __ => v => fail(Foreign.$ForeignError("ForeignError", "Unable to match any variant member."))};
const newtypeUntaggedVariantVar = {Coercible0: () => {}};
const newtypeTaggedVariantVaria = {Coercible0: () => {}};
const eqUntaggedVariant = dictEq => dictEq;
const eqTaggedVariant = dictEq => dictEq;
const writeVariantImpl = dict => dict.writeVariantImpl;
const writeForeignTaggedVariant1 = () => dictWriteForeignTaggedVariant => dictIsSymbol => dictIsSymbol1 => (
  {
    writeImpl: v => dictWriteForeignTaggedVariant.writeVariantImpl(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))(dictIsSymbol1.reflectSymbol(Type$dProxy.Proxy))(Type$dProxy.Proxy)(v)
  }
);
const writeForeignTaggedVariant2 = dictIsSymbol => dictWriteForeign => () => dictWriteForeignTaggedVariant => (
  {
    writeVariantImpl: typeTag => valueTag => v => variant => {
      const name = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      return Data$dVariant.onImpl(dictIsSymbol.reflectSymbol)(Type$dProxy.Proxy)(value => writeImpl(Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray)([
        Data$dTuple.$Tuple(valueTag, dictWriteForeign.writeImpl(value)),
        Data$dTuple.$Tuple(typeTag, name)
      ])))(dictWriteForeignTaggedVariant.writeVariantImpl(typeTag)(valueTag)(Type$dProxy.Proxy))(variant);
    }
  }
);
const writeUntaggedVariantImpl = dict => dict.writeUntaggedVariantImpl;
const writeForeignUntaggedVaria1 = () => dictWriteForeignUntaggedVariant => ({writeImpl: v => dictWriteForeignUntaggedVariant.writeUntaggedVariantImpl(Type$dProxy.Proxy)(v)});
const writeForeignUntaggedVaria2 = dictIsSymbol => dictWriteForeign => {
  const writeImpl1 = dictWriteForeign.writeImpl;
  return () => dictWriteForeignUntaggedVariant => (
    {
      writeUntaggedVariantImpl: v => variant => Data$dVariant.onImpl(dictIsSymbol.reflectSymbol)(Type$dProxy.Proxy)(writeImpl1)(dictWriteForeignUntaggedVariant.writeUntaggedVariantImpl(Type$dProxy.Proxy))(variant)
    }
  );
};
const readVariantImpl = dict => dict.readVariantImpl;
const readForeignTaggedVariant = () => dictReadForeignTaggedVariant => dictIsSymbol => dictIsSymbol1 => (
  {readImpl: o => dictReadForeignTaggedVariant.readVariantImpl(Type$dProxy.Proxy)(o)}
);
const readForeignTaggedVariantC = dictIsSymbol => dictIsSymbol1 => dictIsSymbol2 => dictReadForeign => {
  const readImpl1 = dictReadForeign.readImpl;
  return () => dictReadForeignTaggedVariant => (
    {
      readVariantImpl: v => o => {
        const valueTag = dictIsSymbol2.reflectSymbol(Type$dProxy.Proxy);
        const name = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
        return altExceptT.alt(dictReadForeignTaggedVariant.readVariantImpl(Type$dProxy.Proxy)(o))(bindExceptT.bind(bindExceptT.bind(Foreign$dIndex.unsafeReadProp(Data$dIdentity.monadIdentity)(dictIsSymbol1.reflectSymbol(Type$dProxy.Proxy))(o))(Yoga$dJSON.readString))(type_ => {
          if (type_ === name) {
            return bindExceptT.bind(bindExceptT.bind(Foreign$dIndex.unsafeReadProp(Data$dIdentity.monadIdentity)(valueTag)(o))(readImpl1))(v1 => pure({
              type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy),
              value: v1
            }));
          }
          return Control$dSemigroupoid.composeImpl(fail1)(Foreign.ForeignError)("Did not match variant tag " + name);
        }));
      }
    }
  );
};
const readUntaggedVariantImpl = dict => dict.readUntaggedVariantImpl;
const readForeignUntaggedVarian1 = () => dictReadForeignUntaggedVariant => ({readImpl: o => dictReadForeignUntaggedVariant.readUntaggedVariantImpl(Type$dProxy.Proxy)(o)});
const readForeignUntaggedVarian2 = dictIsSymbol => dictReadForeign => () => dictReadForeignUntaggedVariant => (
  {
    readUntaggedVariantImpl: v => o => altExceptT.alt(dictReadForeignUntaggedVariant.readUntaggedVariantImpl(Type$dProxy.Proxy)(o))((() => {
      const $0 = dictReadForeign.readImpl(o);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", {type: dictIsSymbol.reflectSymbol(Type$dProxy.Proxy), value: $0._1}); }
      $runtime.fail();
    })())
  }
);
export {
  TaggedVariant,
  UntaggedVariant,
  altExceptT,
  bindExceptT,
  eqTaggedVariant,
  eqUntaggedVariant,
  fail,
  fail1,
  newtypeTaggedVariantVaria,
  newtypeUntaggedVariantVar,
  pure,
  readForeignTaggedVariant,
  readForeignTaggedVariantC,
  readForeignTaggedVariantN,
  readForeignUntaggedVarian,
  readForeignUntaggedVarian1,
  readForeignUntaggedVarian2,
  readUntaggedVariantImpl,
  readVariantImpl,
  showTaggedVariant,
  showUntaggedVariant,
  writeForeignTaggedVariant,
  writeForeignTaggedVariant1,
  writeForeignTaggedVariant2,
  writeForeignUntaggedVaria,
  writeForeignUntaggedVaria1,
  writeForeignUntaggedVaria2,
  writeImpl,
  writeUntaggedVariantImpl,
  writeVariantImpl
};
