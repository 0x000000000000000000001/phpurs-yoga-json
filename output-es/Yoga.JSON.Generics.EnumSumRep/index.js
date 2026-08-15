import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
const pure = /* #__PURE__ */ (() => Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity).pure)();
const fail = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept$dTrans.monadThrowExceptT(Data$dIdentity.monadIdentity).throwError)(Data$dList$dNonEmpty.singleton))();
const altExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity);
const genericEnumSumRepConstruc = dictIsSymbol => (
  {
    genericEnumReadForeign: options => f => {
      const name = dictIsSymbol.reflectSymbol(Type$dProxy.Proxy);
      return bindExceptT.bind(Yoga$dJSON.readString(f))(s => {
        if (s === options.toConstructorName(name)) { return pure(Data$dGeneric$dRep.NoArguments); }
        return Control$dSemigroupoid.composeImpl(fail)(Foreign.ForeignError)("Enum string " + s + " did not match expected string " + options.toConstructorName(name));
      });
    },
    genericEnumWriteForeign: options => v => options.toConstructorName(dictIsSymbol.reflectSymbol(Type$dProxy.Proxy))
  }
);
const genericEnumWriteForeign = dict => dict.genericEnumWriteForeign;
const genericWriteForeignEnum = dictGeneric => dictGenericEnumSumRep => options => a => dictGenericEnumSumRep.genericEnumWriteForeign(options)(dictGeneric.from(a));
const genericEnumReadForeign = dict => dict.genericEnumReadForeign;
const genericReadForeignEnum = dictGeneric => dictGenericEnumSumRep => options => f => {
  const $0 = dictGenericEnumSumRep.genericEnumReadForeign(options)(f);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", dictGeneric.to($0._1)); }
  $runtime.fail();
};
const genericEnumSumRepSum = dictGenericEnumSumRep => dictGenericEnumSumRep1 => (
  {
    genericEnumReadForeign: options => f => altExceptT.alt((() => {
      const $0 = dictGenericEnumSumRep.genericEnumReadForeign(options)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inl", $0._1)); }
      $runtime.fail();
    })())((() => {
      const $0 = dictGenericEnumSumRep1.genericEnumReadForeign(options)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inr", $0._1)); }
      $runtime.fail();
    })()),
    genericEnumWriteForeign: options => v => {
      if (v.tag === "Inl") { return dictGenericEnumSumRep.genericEnumWriteForeign(options)(v._1); }
      if (v.tag === "Inr") { return dictGenericEnumSumRep1.genericEnumWriteForeign(options)(v._1); }
      $runtime.fail();
    }
  }
);
const defaultOptions = {toConstructorName: x => x};
export {
  altExceptT,
  bindExceptT,
  defaultOptions,
  fail,
  genericEnumReadForeign,
  genericEnumSumRepConstruc,
  genericEnumSumRepSum,
  genericEnumWriteForeign,
  genericReadForeignEnum,
  genericWriteForeignEnum,
  pure
};
