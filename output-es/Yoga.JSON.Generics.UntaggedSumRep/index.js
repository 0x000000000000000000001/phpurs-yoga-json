import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept$dTrans from "../Control.Monad.Except.Trans/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
const altExceptT = /* #__PURE__ */ Control$dMonad$dExcept$dTrans.altExceptT(Data$dList$dTypes.semigroupNonEmptyList)(Data$dIdentity.monadIdentity);
const writeGenericUntaggedSumRe = dictWriteForeign => ({genericWriteForeignUntaggedSumRep: v => dictWriteForeign.writeImpl(v)});
const readGenericUntaggedSumRep = dictReadForeign => (
  {
    genericReadForeignUntaggedSumRep: f => {
      const $0 = dictReadForeign.readImpl(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      $runtime.fail();
    }
  }
);
const genericWriteForeignUntaggedSumRep = dict => dict.genericWriteForeignUntaggedSumRep;
const writeGenericUntaggedSumRe1 = dictWriteGenericUntaggedSumRep => dictWriteGenericUntaggedSumRep1 => (
  {
    genericWriteForeignUntaggedSumRep: v => {
      if (v.tag === "Inl") { return dictWriteGenericUntaggedSumRep.genericWriteForeignUntaggedSumRep(v._1); }
      if (v.tag === "Inr") { return dictWriteGenericUntaggedSumRep1.genericWriteForeignUntaggedSumRep(v._1); }
      $runtime.fail();
    }
  }
);
const writeGenericUntaggedSumRe2 = dictWriteGenericUntaggedSumRep => ({genericWriteForeignUntaggedSumRep: v => dictWriteGenericUntaggedSumRep.genericWriteForeignUntaggedSumRep(v)});
const genericWriteForeignUntaggedSum = dictGeneric => dictWriteGenericUntaggedSumRep => a => dictWriteGenericUntaggedSumRep.genericWriteForeignUntaggedSumRep(dictGeneric.from(a));
const genericReadForeignUntaggedSumRep = dict => dict.genericReadForeignUntaggedSumRep;
const readGenericUntaggedSumRep1 = dictReadGenericUntaggedSumRep => dictReadGenericUntaggedSumRep1 => (
  {
    genericReadForeignUntaggedSumRep: f => altExceptT.alt((() => {
      const $0 = dictReadGenericUntaggedSumRep.genericReadForeignUntaggedSumRep(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inl", $0._1)); }
      $runtime.fail();
    })())((() => {
      const $0 = dictReadGenericUntaggedSumRep1.genericReadForeignUntaggedSumRep(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dGeneric$dRep.$Sum("Inr", $0._1)); }
      $runtime.fail();
    })())
  }
);
const readGenericUntaggedSumRep2 = dictReadGenericUntaggedSumRep => (
  {
    genericReadForeignUntaggedSumRep: f => {
      const $0 = dictReadGenericUntaggedSumRep.genericReadForeignUntaggedSumRep(f);
      if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
      if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
      $runtime.fail();
    }
  }
);
const genericReadForeignUntaggedSum = dictGeneric => dictReadGenericUntaggedSumRep => f => {
  const $0 = dictReadGenericUntaggedSumRep.genericReadForeignUntaggedSumRep(f);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", dictGeneric.to($0._1)); }
  $runtime.fail();
};
export {
  altExceptT,
  genericReadForeignUntaggedSum,
  genericReadForeignUntaggedSumRep,
  genericWriteForeignUntaggedSum,
  genericWriteForeignUntaggedSumRep,
  readGenericUntaggedSumRep,
  readGenericUntaggedSumRep1,
  readGenericUntaggedSumRep2,
  writeGenericUntaggedSumRe,
  writeGenericUntaggedSumRe1,
  writeGenericUntaggedSumRe2
};
