// | This module defines types and functions for working with _foreign_
// | data.
// |
// | `ExceptT (NonEmptyList ForeignError) m` is used in this library
// | to encode possible failures when dealing with foreign data.
// |
// | The `Alt` instance for `ExceptT` allows us to accumulate errors,
// | unlike `Either`, which preserves only the last error.
import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {isArray, isNull, isUndefined, tagOf, typeOf} from "./foreign.js";
const $ForeignError = (tag, _1, _2) => ({tag, _1, _2});
const ForeignError = value0 => $ForeignError("ForeignError", value0);
const TypeMismatch = value0 => value1 => $ForeignError("TypeMismatch", value0, value1);
const ErrorAtIndex = value0 => value1 => $ForeignError("ErrorAtIndex", value0, value1);
const ErrorAtProperty = value0 => value1 => $ForeignError("ErrorAtProperty", value0, value1);
const unsafeToForeign = Unsafe$dCoerce.unsafeCoerce;
const unsafeFromForeign = Unsafe$dCoerce.unsafeCoerce;
const showForeignError = {
  show: v => {
    if (v.tag === "ForeignError") { return "(ForeignError " + Data$dShow.showStringImpl(v._1) + ")"; }
    if (v.tag === "ErrorAtIndex") { return "(ErrorAtIndex " + Data$dShow.showIntImpl(v._1) + " " + showForeignError.show(v._2) + ")"; }
    if (v.tag === "ErrorAtProperty") { return "(ErrorAtProperty " + Data$dShow.showStringImpl(v._1) + " " + showForeignError.show(v._2) + ")"; }
    if (v.tag === "TypeMismatch") { return "(TypeMismatch " + Data$dShow.showStringImpl(v._1) + " " + Data$dShow.showStringImpl(v._2) + ")"; }
    $runtime.fail();
  }
};
const renderForeignError = v => {
  if (v.tag === "ForeignError") { return v._1; }
  if (v.tag === "ErrorAtIndex") { return "Error at array index " + Data$dShow.showIntImpl(v._1) + ": " + renderForeignError(v._2); }
  if (v.tag === "ErrorAtProperty") { return "Error at property " + Data$dShow.showStringImpl(v._1) + ": " + renderForeignError(v._2); }
  if (v.tag === "TypeMismatch") { return "Type mismatch: expected " + v._1 + ", found " + v._2; }
  $runtime.fail();
};
const readUndefined = dictMonad => {
  const applicativeExceptT = Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad);
  return value => {
    if (isUndefined(value)) { return applicativeExceptT.pure(Data$dMaybe.Nothing); }
    return applicativeExceptT.pure(Data$dMaybe.$Maybe("Just", value));
  };
};
const readNullOrUndefined = dictMonad => {
  const applicativeExceptT = Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad);
  return value => {
    if (isNull(value) || isUndefined(value)) { return applicativeExceptT.pure(Data$dMaybe.Nothing); }
    return applicativeExceptT.pure(Data$dMaybe.$Maybe("Just", value));
  };
};
const readNull = dictMonad => {
  const applicativeExceptT = Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad);
  return value => {
    if (isNull(value)) { return applicativeExceptT.pure(Data$dMaybe.Nothing); }
    return applicativeExceptT.pure(Data$dMaybe.$Maybe("Just", value));
  };
};
const fail = dictMonad => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(dictMonad).throwError)(Data$dList$dNonEmpty.singleton);
const readArray = dictMonad => {
  const fail1 = Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(dictMonad).throwError)(Data$dList$dNonEmpty.singleton);
  return value => {
    if (isArray(value)) { return Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad).pure(value); }
    return fail1($ForeignError("TypeMismatch", "array", tagOf(value)));
  };
};
const unsafeReadTagged = dictMonad => {
  const applicativeExceptT = Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad);
  const fail1 = Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(dictMonad).throwError)(Data$dList$dNonEmpty.singleton);
  return tag => value => {
    if (tagOf(value) === tag) { return applicativeExceptT.pure(value); }
    return fail1($ForeignError("TypeMismatch", tag, tagOf(value)));
  };
};
const readBoolean = dictMonad => unsafeReadTagged(dictMonad)("Boolean");
const readNumber = dictMonad => unsafeReadTagged(dictMonad)("Number");
const readInt = dictMonad => value => {
  const error = Data$dEither.$Either("Left", Data$dList$dNonEmpty.singleton($ForeignError("TypeMismatch", "Int", tagOf(value))));
  return dictMonad.Bind1().Apply0().Functor0().map((() => {
    const $0 = Control$dSemigroupoid.composeImpl(v2 => {
      if (v2.tag === "Nothing") { return error; }
      if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    })(Data$dInt.fromNumber);
    return v2 => {
      if (v2.tag === "Left") { return error; }
      if (v2.tag === "Right") { return $0(v2._1); }
      $runtime.fail();
    };
  })())(unsafeReadTagged(dictMonad)("Number")(value));
};
const readString = dictMonad => unsafeReadTagged(dictMonad)("String");
const readChar = dictMonad => value => {
  const error = Data$dEither.$Either("Left", Data$dList$dNonEmpty.singleton($ForeignError("TypeMismatch", "Char", tagOf(value))));
  return dictMonad.Bind1().Apply0().Functor0().map((() => {
    const $0 = Control$dSemigroupoid.composeImpl(v2 => {
      if (v2.tag === "Nothing") { return error; }
      if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    })(Data$dString$dCodeUnits.toChar);
    return v2 => {
      if (v2.tag === "Left") { return error; }
      if (v2.tag === "Right") { return $0(v2._1); }
      $runtime.fail();
    };
  })())(unsafeReadTagged(dictMonad)("String")(value));
};
const eqForeignError = {
  eq: x => y => {
    if (x.tag === "ForeignError") { return y.tag === "ForeignError" && x._1 === y._1; }
    if (x.tag === "TypeMismatch") { return y.tag === "TypeMismatch" && x._1 === y._1 && x._2 === y._2; }
    if (x.tag === "ErrorAtIndex") { return y.tag === "ErrorAtIndex" && x._1 === y._1 && eqForeignError.eq(x._2)(y._2); }
    return x.tag === "ErrorAtProperty" && y.tag === "ErrorAtProperty" && x._1 === y._1 && eqForeignError.eq(x._2)(y._2);
  }
};
const ordForeignError = {
  compare: x => y => {
    if (x.tag === "ForeignError") {
      if (y.tag === "ForeignError") { return Data$dOrd.ordString.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ForeignError") { return Data$dOrdering.GT; }
    if (x.tag === "TypeMismatch") {
      if (y.tag === "TypeMismatch") {
        const v = Data$dOrd.ordString.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return Data$dOrd.ordString.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "TypeMismatch") { return Data$dOrdering.GT; }
    if (x.tag === "ErrorAtIndex") {
      if (y.tag === "ErrorAtIndex") {
        const v = Data$dOrd.ordInt.compare(x._1)(y._1);
        if (v === "LT") { return Data$dOrdering.LT; }
        if (v === "GT") { return Data$dOrdering.GT; }
        return ordForeignError.compare(x._2)(y._2);
      }
      return Data$dOrdering.LT;
    }
    if (y.tag === "ErrorAtIndex") { return Data$dOrdering.GT; }
    if (x.tag === "ErrorAtProperty" && y.tag === "ErrorAtProperty") {
      const v = Data$dOrd.ordString.compare(x._1)(y._1);
      if (v === "LT") { return Data$dOrdering.LT; }
      if (v === "GT") { return Data$dOrdering.GT; }
      return ordForeignError.compare(x._2)(y._2);
    }
    $runtime.fail();
  },
  Eq0: () => eqForeignError
};
export {
  $ForeignError,
  ErrorAtIndex,
  ErrorAtProperty,
  ForeignError,
  TypeMismatch,
  eqForeignError,
  fail,
  ordForeignError,
  readArray,
  readBoolean,
  readChar,
  readInt,
  readNull,
  readNullOrUndefined,
  readNumber,
  readString,
  readUndefined,
  renderForeignError,
  showForeignError,
  unsafeFromForeign,
  unsafeReadTagged,
  unsafeToForeign
};
export * from "./foreign.js";
