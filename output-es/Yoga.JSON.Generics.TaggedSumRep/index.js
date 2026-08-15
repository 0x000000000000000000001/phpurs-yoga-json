import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
const readForeignObject = /* #__PURE__ */ Yoga$dJSON.readForeignObject(Yoga$dJSON.readForeignForeign);
const pure = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity).pure)();
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity);
const fail = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton))();
const writeForeignObject = {
  writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(/* #__PURE__ */ Foreign$dObject.mapWithKey(v => Yoga$dJSON.writeForeignForeign.writeImpl))
};
const fail1 = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton))();
const altExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity);
const writeGenericTaggedSumRepN = {genericWriteForeignTaggedSumRep: v => v1 => Yoga$dJSON._undefined};
const writeGenericTaggedSumRepA = dictWriteForeign => ({genericWriteForeignTaggedSumRep: v => v1 => dictWriteForeign.writeImpl(v1)});
const readGenericTaggedSumRepCo = dictIsSymbol => (
  {
    genericReadForeignTaggedSumRep: v => f => {
      const $0 = v.typeTag;
      const name = v.toConstructorName(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      return bindExceptT.bind(readForeignObject.readImpl(f))(v1 => bindExceptT.bind((() => {
        const $1 = Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton)(Foreign.$ForeignError(
          "ErrorAtProperty",
          $0,
          Foreign.$ForeignError("ForeignError", "Missing type tag: " + $0)
        ));
        const $2 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, $0, v1);
        if ($2.tag === "Nothing") { return $1; }
        if ($2.tag === "Just") { return pure($2._1); }
        $runtime.fail();
      })())(typeFgn => bindExceptT.bind(Yoga$dJSON.readString(typeFgn))(typeStr => {
        if (typeStr === name) {
          const $1 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty(name));
          const $2 = applicativeExceptT.pure(Data$dGeneric$dRep.NoArguments);
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $1($2._1)); }
          $runtime.fail();
        }
        return fail(Foreign.$ForeignError("ForeignError", "Wrong type tag " + typeStr + " where " + $0 + " was expected."));
      })));
    }
  }
);
const readGenericTaggedSumRepAr = dictReadForeign => (
  {
    genericReadForeignTaggedSumRep: v => f => {
      const $0 = dictReadForeign.readImpl(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      $runtime.fail();
    }
  }
);
const genericWriteForeignTaggedSumRep = dict => dict.genericWriteForeignTaggedSumRep;
const writeGenericTaggedSumRepC = dictWriteGenericTaggedSumRep => dictIsSymbol => (
  {
    genericWriteForeignTaggedSumRep: v => v1 => writeForeignObject.writeImpl(Foreign$dObject.fromFoldable(Data$dFoldable.foldableArray)([
      Data$dTuple.$Tuple(v.typeTag, v.toConstructorName(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))),
      Data$dTuple.$Tuple(v.valueTag, dictWriteGenericTaggedSumRep.genericWriteForeignTaggedSumRep(v)(v1))
    ]))
  }
);
const writeGenericTaggedSumRepS = dictWriteGenericTaggedSumRep => dictWriteGenericTaggedSumRep1 => (
  {
    genericWriteForeignTaggedSumRep: options => v => {
      if (v.tag === "Inl") { return dictWriteGenericTaggedSumRep.genericWriteForeignTaggedSumRep(options)(v._1); }
      if (v.tag === "Inr") { return dictWriteGenericTaggedSumRep1.genericWriteForeignTaggedSumRep(options)(v._1); }
      $runtime.fail();
    }
  }
);
const genericWriteForeignTaggedSum = dictGeneric => dictWriteGenericTaggedSumRep => options => r => dictWriteGenericTaggedSumRep.genericWriteForeignTaggedSumRep(options)(dictGeneric.from(r));
const genericReadForeignTaggedSumRep = dict => dict.genericReadForeignTaggedSumRep;
const readGenericTaggedSumRepCo1 = dictReadGenericTaggedSumRep => dictIsSymbol => (
  {
    genericReadForeignTaggedSumRep: v => f => {
      const $0 = v.typeTag;
      const $1 = v.valueTag;
      const name = v.toConstructorName(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy));
      return bindExceptT.bind(readForeignObject.readImpl(f))(v1 => bindExceptT.bind((() => {
        const $2 = Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton)(Foreign.$ForeignError(
          "ErrorAtProperty",
          $0,
          Foreign.$ForeignError("ForeignError", "Missing type tag: " + $0)
        ));
        const $3 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, $0, v1);
        if ($3.tag === "Nothing") { return $2; }
        if ($3.tag === "Just") { return pure($3._1); }
        $runtime.fail();
      })())(typeFgn => bindExceptT.bind(Yoga$dJSON.readString(typeFgn))(typeStr => bindExceptT.bind((() => {
        const $2 = Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton)(Foreign.$ForeignError(
          "ErrorAtProperty",
          $1,
          Foreign.$ForeignError("ForeignError", "Missing value tag: " + $1)
        ));
        const $3 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, $1, v1);
        if ($3.tag === "Nothing") { return $2; }
        if ($3.tag === "Just") { return pure($3._1); }
        $runtime.fail();
      })())(value => {
        if (typeStr === name) {
          const $2 = Data$dList$dTypes.functorNonEmptyList.map(Foreign.ErrorAtProperty(name));
          const $3 = dictReadGenericTaggedSumRep.genericReadForeignTaggedSumRep(v)(value);
          if ($3.tag === "Left") { return Data$dEither.$Either("Left", $2($3._1)); }
          if ($3.tag === "Right") { return Data$dEither.$Either("Right", $3._1); }
          $runtime.fail();
        }
        return fail1(Foreign.$ForeignError("ForeignError", "Wrong constructor name tag " + typeStr + " where " + name + " was expected."));
      }))));
    }
  }
);
const readGenericTaggedSumRepSu = dictReadGenericTaggedSumRep => dictReadGenericTaggedSumRep1 => (
  {
    genericReadForeignTaggedSumRep: options => f => altExceptT.alt((() => {
      const $0 = dictReadGenericTaggedSumRep.genericReadForeignTaggedSumRep(options)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inl", $0._1)); }
      $runtime.fail();
    })())((() => {
      const $0 = dictReadGenericTaggedSumRep1.genericReadForeignTaggedSumRep(options)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inr", $0._1)); }
      $runtime.fail();
    })())
  }
);
const genericReadForeignTaggedSum = dictGeneric => dictReadGenericTaggedSumRep => options => f => {
  const $0 = dictReadGenericTaggedSumRep.genericReadForeignTaggedSumRep(options)(f);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", dictGeneric.to($0._1)); }
  $runtime.fail();
};
const defaultOptions = {typeTag: "type", valueTag: "value", toConstructorName: x => x};
export {
  altExceptT,
  applicativeExceptT,
  bindExceptT,
  defaultOptions,
  fail,
  fail1,
  genericReadForeignTaggedSum,
  genericReadForeignTaggedSumRep,
  genericWriteForeignTaggedSum,
  genericWriteForeignTaggedSumRep,
  pure,
  readForeignObject,
  readGenericTaggedSumRepAr,
  readGenericTaggedSumRepCo,
  readGenericTaggedSumRepCo1,
  readGenericTaggedSumRepSu,
  writeForeignObject,
  writeGenericTaggedSumRepA,
  writeGenericTaggedSumRepC,
  writeGenericTaggedSumRepN,
  writeGenericTaggedSumRepS
};
