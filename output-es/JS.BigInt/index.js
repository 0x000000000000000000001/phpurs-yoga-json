import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import {
  and,
  asIntN,
  asUintN,
  biAdd,
  biCompare,
  biDegree,
  biDiv,
  biEquals,
  biMod,
  biMul,
  biOne,
  biSub,
  biZero,
  fromInt,
  fromNumberImpl,
  fromStringAsImpl,
  fromStringImpl,
  fromTypeLevelInt,
  not,
  or,
  pow,
  shl,
  shr,
  toNumber,
  toString,
  toStringAs,
  xor
} from "./foreign.js";
const showBigInt = {show: toString};
const semiringBigInt = {add: biAdd, zero: biZero, mul: biMul, one: biOne};
const ringBigInt = {sub: biSub, Semiring0: () => semiringBigInt};
const eqBigInt = {eq: biEquals};
const ordBigInt = {
  compare: x => y => {
    const v = biCompare(x)(y);
    if (v === 1) { return Data$dOrdering.GT; }
    if (v === 0) { return Data$dOrdering.EQ; }
    return Data$dOrdering.LT;
  },
  Eq0: () => eqBigInt
};
const commutativeRingBigInt = {Ring0: () => ringBigInt};
const euclideanRingBigInt = {degree: biDegree, div: biDiv, mod: biMod, CommutativeRing0: () => commutativeRingBigInt};
const toInt = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dInt.fromNumber)(toNumber);
const odd = x => !biEquals(and(x)(biOne))(biZero);
const fromTLInt = () => dictReflectable => v => fromTypeLevelInt(dictReflectable.reflectType(Type$dProxy.Proxy));
const fromStringAs = /* #__PURE__ */ fromStringAsImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing);
const fromString = /* #__PURE__ */ fromStringImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing);
const fromNumber = /* #__PURE__ */ fromNumberImpl(Data$dMaybe.Just)(Data$dMaybe.Nothing);
const even = x => biEquals(and(x)(biOne))(biZero);
const parity = n => {
  if (biEquals(and(n)(biOne))(biZero)) { return Data$dInt.Even; }
  return Data$dInt.Odd;
};
export {
  commutativeRingBigInt,
  eqBigInt,
  euclideanRingBigInt,
  even,
  fromNumber,
  fromString,
  fromStringAs,
  fromTLInt,
  odd,
  ordBigInt,
  parity,
  ringBigInt,
  semiringBigInt,
  showBigInt,
  toInt
};
export * from "./foreign.js";
