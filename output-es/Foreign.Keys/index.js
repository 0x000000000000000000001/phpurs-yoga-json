// | This module provides functions for working with object properties
// | of Javascript objects.
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Foreign from "../Foreign/index.js";
import {unsafeKeys} from "./foreign.js";
const keys = dictMonad => {
  const fail = Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(dictMonad).throwError)(Data$dList$dNonEmpty.singleton);
  return value => {
    if (Foreign.isNull(value)) { return fail(Foreign.$ForeignError("TypeMismatch", "object", "null")); }
    if (Foreign.isUndefined(value)) { return fail(Foreign.$ForeignError("TypeMismatch", "object", "undefined")); }
    if (Foreign.typeOf(value) === "object") { return Control$dMonad$dExcept$dTrans.applicativeExceptT(dictMonad).pure(unsafeKeys(value)); }
    return fail(Foreign.$ForeignError("TypeMismatch", "object", Foreign.typeOf(value)));
  };
};
export {keys};
export * from "./foreign.js";
