import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Foreign$dIndex from "../Foreign.Index/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const bindExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.bindExceptT(Data$dIdentity.monadIdentity);
const applicativeExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applicativeExceptT(Data$dIdentity.monadIdentity);
const applyExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.applyExceptT(Data$dIdentity.monadIdentity);
const writeGenericUntaggedProdu = dictWriteForeign => ({genericWriteForeignUntaggedProductRep: arr => v => Data$dArray.snoc(arr)(dictWriteForeign.writeImpl(v))});
const readGenericUntaggedProduc = dictReadForeign => {
  const readImpl = dictReadForeign.readImpl;
  return {
    genericReadForeignUntaggedProductRep: i => f => bindExceptT.bind(bindExceptT.bind(Foreign$dIndex.unsafeReadProp(Data$dIdentity.monadIdentity)(i)(f))(readImpl))(x => applicativeExceptT.pure(x))
  };
};
const genericWriteForeignUntaggedProductRep = dict => dict.genericWriteForeignUntaggedProductRep;
const writeGenericUntaggedProdu1 = dictWriteGenericUntaggedProduct => (
  {genericWriteForeignUntaggedProductRep: arr => v => dictWriteGenericUntaggedProduct.genericWriteForeignUntaggedProductRep(arr)(v)}
);
const writeGenericUntaggedProdu2 = dictWriteGenericUntaggedProduct => dictWriteGenericUntaggedProduct1 => (
  {
    genericWriteForeignUntaggedProductRep: arr => v => dictWriteGenericUntaggedProduct1.genericWriteForeignUntaggedProductRep(dictWriteGenericUntaggedProduct.genericWriteForeignUntaggedProductRep(arr)(v._1))(v._2)
  }
);
const genericWriteForeignUntaggedProduct = dictGeneric => dictWriteGenericUntaggedProduct => a => Data$dFunctor.arrayMap(Yoga$dJSON.writeForeignForeign.writeImpl)(dictWriteGenericUntaggedProduct.genericWriteForeignUntaggedProductRep([])(dictGeneric.from(a)));
const genericReadForeignUntaggedProductRep = dict => dict.genericReadForeignUntaggedProductRep;
const readGenericUntaggedProduc1 = dictReadGenericUntaggedProduct => (
  {
    genericReadForeignUntaggedProductRep: i => f => {
      const $0 = dictReadGenericUntaggedProduct.genericReadForeignUntaggedProductRep(i)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      $runtime.fail();
    }
  }
);
const readGenericUntaggedProduc2 = dictReadGenericUntaggedProduct => dictReadGenericUntaggedProduct1 => (
  {
    genericReadForeignUntaggedProductRep: i => f => applyExceptT.apply((() => {
      const $0 = dictReadGenericUntaggedProduct.genericReadForeignUntaggedProductRep(i)(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.Product($0._1)); }
      $runtime.fail();
    })())(dictReadGenericUntaggedProduct1.genericReadForeignUntaggedProductRep(i + 1 | 0)(f))
  }
);
const genericReadForeignUntaggedProduct = dictGeneric => dictReadGenericUntaggedProduct => f => {
  const $0 = dictReadGenericUntaggedProduct.genericReadForeignUntaggedProductRep(0)(f);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", dictGeneric.to($0._1)); }
  $runtime.fail();
};
export {
  applicativeExceptT,
  applyExceptT,
  bindExceptT,
  genericReadForeignUntaggedProduct,
  genericReadForeignUntaggedProductRep,
  genericWriteForeignUntaggedProduct,
  genericWriteForeignUntaggedProductRep,
  readGenericUntaggedProduc,
  readGenericUntaggedProduc1,
  readGenericUntaggedProduc2,
  writeGenericUntaggedProdu,
  writeGenericUntaggedProdu1,
  writeGenericUntaggedProdu2
};
