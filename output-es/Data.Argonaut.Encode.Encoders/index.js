import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArray$dNonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dSet from "../Data.Set/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dNonEmpty$dInternal from "../Data.String.NonEmpty.Internal/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Data$dVoid from "../Data.Void/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
const toUnfoldable = /* #__PURE__ */ (() => Data$dUnfoldable.unfoldableArray.unfoldr(xs => {
  if (xs.tag === "Nil") { return Data$dMaybe.Nothing; }
  if (xs.tag === "Cons") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple(xs._1, xs._2)); }
  $runtime.fail();
}))();
const toUnfoldable1 = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(b => {
  const go = go$a0$copy => go$a1$copy => {
    let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
    while (go$c) {
      const source = go$a0, memo = go$a1;
      const v = Data$dMap$dInternal.stepUnfoldr(source);
      if (v.tag === "Nothing") {
        const go$1 = go$1$a0$copy => go$1$a1$copy => {
          let go$1$a0 = go$1$a0$copy, go$1$a1 = go$1$a1$copy, go$1$c = true, go$1$r;
          while (go$1$c) {
            const b$1 = go$1$a0, v$1 = go$1$a1;
            if (v$1.tag === "Nil") {
              go$1$c = false;
              go$1$r = b$1;
              continue;
            }
            if (v$1.tag === "Cons") {
              go$1$a0 = Data$dList$dTypes.$List("Cons", v$1._1, b$1);
              go$1$a1 = v$1._2;
              continue;
            }
            $runtime.fail();
          }
          return go$1$r;
        };
        go$c = false;
        go$r = go$1(Data$dList$dTypes.Nil)(memo);
        continue;
      }
      if (v.tag === "Just") {
        go$a0 = v._1._2;
        go$a1 = Data$dList$dTypes.$List("Cons", v._1._1, memo);
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  return go(b)(Data$dList$dTypes.Nil);
})(Data$dMap$dInternal.toMapIter);
const toUnfoldable2 = /* #__PURE__ */ Data$dSet.toUnfoldable(Data$dList$dTypes.unfoldableList);
const extend = encoder => v => Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.caseJsonObject(Data$dArgonaut$dCore.jsonSingletonObject(v._1)(v._2))(Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromObject)(Foreign$dObject.insert(v._1)(v._2))))(encoder);
const extendOptional = encoder => v => {
  if (v.tag === "Just") { return extend(encoder)(v._1); }
  if (v.tag === "Nothing") { return encoder; }
  $runtime.fail();
};
const encodeVoid = Data$dVoid.absurd;
const encodeUnit = v => Data$dArgonaut$dCore.jsonNull;
const encodeTuple = encoderA => encoderB => v => Data$dArgonaut$dCore.fromArray([encoderA(v._1), encoderB(v._2)]);
const encodeString = Data$dArgonaut$dCore.fromString;
const encodeNumber = Data$dArgonaut$dCore.fromNumber;
const encodeNonEmptyString = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromString)(Data$dString$dNonEmpty$dInternal.toString);
const encodeMaybe = encoder => v => {
  if (v.tag === "Nothing") { return Data$dArgonaut$dCore.jsonNull; }
  if (v.tag === "Just") { return encoder(v._1); }
  $runtime.fail();
};
const encodeList = encoder => Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromArray)(Control$dSemigroupoid.composeImpl(Data$dFunctor.arrayMap(encoder))(toUnfoldable));
const encodeMap = dictOrd => encoderA => encoderB => Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromArray)(Control$dSemigroupoid.composeImpl(Data$dFunctor.arrayMap(encodeTuple(encoderA)(encoderB)))(toUnfoldable)))(toUnfoldable1);
const encodeNonEmptyList = encoder => Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromArray)(Control$dSemigroupoid.composeImpl(Data$dFunctor.arrayMap(encoder))(toUnfoldable)))(Data$dList$dNonEmpty.toList);
const encodeNonEmpty_List = encoder => v => Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromArray)(Control$dSemigroupoid.composeImpl(Data$dFunctor.arrayMap(encoder))(toUnfoldable))(Data$dList$dTypes.$List(
  "Cons",
  v._1,
  v._2
));
const encodeSet = dictOrd => encoder => Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromArray)(Control$dSemigroupoid.composeImpl(Data$dFunctor.arrayMap(encoder))(toUnfoldable)))(toUnfoldable2);
const encodeInt = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromNumber)(Data$dInt.toNumber);
const encodeIdentity = encoder => v => encoder(v);
const encodeForeignObject = encoder => Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromObject)(Foreign$dObject.functorObject.map(encoder));
const encodeEither = encoderA => encoderB => v2 => {
  if (v2.tag === "Left") {
    return Data$dArgonaut$dCore.fromObject(Foreign$dObject.fromFoldable(Data$dList$dTypes.foldableList)(Data$dList$dTypes.$List(
      "Cons",
      Data$dTuple.$Tuple("tag", Data$dArgonaut$dCore.fromString("Left")),
      Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple("value", encoderA(v2._1)), Data$dList$dTypes.Nil)
    )));
  }
  if (v2.tag === "Right") {
    return Data$dArgonaut$dCore.fromObject(Foreign$dObject.fromFoldable(Data$dList$dTypes.foldableList)(Data$dList$dTypes.$List(
      "Cons",
      Data$dTuple.$Tuple("tag", Data$dArgonaut$dCore.fromString("Right")),
      Data$dList$dTypes.$List("Cons", Data$dTuple.$Tuple("value", encoderB(v2._1)), Data$dList$dTypes.Nil)
    )));
  }
  $runtime.fail();
};
const encodeCodePoint = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromString)(Data$dString$dCodePoints.singleton);
const encodeChar = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromString)(Data$dString$dCodeUnits.singleton);
const encodeBoolean = Data$dArgonaut$dCore.fromBoolean;
const encodeArray = encoder => Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromArray)(Data$dFunctor.arrayMap(encoder));
const encodeNonEmptyArray = encoder => Control$dSemigroupoid.composeImpl(Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromArray)(Data$dFunctor.arrayMap(encoder)))(Data$dArray$dNonEmpty.toArray);
const encodeNonEmpty_Array = encoder => v => Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromArray)(Data$dFunctor.arrayMap(encoder))([v._1, ...v._2]);
const assocOptional = encoder => k => {
  const $0 = Control$dSemigroupoid.composeImpl(Data$dTuple.Tuple(k))(encoder);
  return v1 => {
    if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0(v1._1)); }
    return Data$dMaybe.Nothing;
  };
};
const assoc = encoder => k => Control$dSemigroupoid.composeImpl(Data$dTuple.Tuple(k))(encoder);
export {
  assoc,
  assocOptional,
  encodeArray,
  encodeBoolean,
  encodeChar,
  encodeCodePoint,
  encodeEither,
  encodeForeignObject,
  encodeIdentity,
  encodeInt,
  encodeList,
  encodeMap,
  encodeMaybe,
  encodeNonEmptyArray,
  encodeNonEmptyList,
  encodeNonEmptyString,
  encodeNonEmpty_Array,
  encodeNonEmpty_List,
  encodeNumber,
  encodeSet,
  encodeString,
  encodeTuple,
  encodeUnit,
  encodeVoid,
  extend,
  extendOptional,
  toUnfoldable,
  toUnfoldable1,
  toUnfoldable2
};
