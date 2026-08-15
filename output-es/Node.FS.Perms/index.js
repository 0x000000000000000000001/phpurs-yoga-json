import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEnum from "../Data.Enum/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
const fromJust = v => {
  if (v.tag === "Just") { return v._1; }
  $runtime.fail();
};
const ordArray = /* #__PURE__ */ Data$dOrd.ordArray(Data$dOrd.ordBoolean);
const write = {r: false, w: true, x: false};
const semiringPerm = {
  add: v => v1 => ({r: v.r || v1.r, w: v.w || v1.w, x: v.x || v1.x}),
  zero: {r: false, w: false, x: false},
  mul: v => v1 => ({r: v.r && v1.r, w: v.w && v1.w, x: v.x && v1.x}),
  one: {r: true, w: true, x: true}
};
const read = {r: true, w: false, x: false};
const permToInt = v => ((v.r ? 4 : 0) + (v.w ? 2 : 0) | 0) + (v.x ? 1 : 0) | 0;
const permToString = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dShow.showIntImpl)(permToInt);
const permsToString = v => "0" + permToString(v.u) + permToString(v.g) + permToString(v.o);
const permsToInt = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(fromJust)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Data$dInt.fromStringAs(8))(permsToString));
const none = /* #__PURE__ */ (() => semiringPerm.zero)();
const mkPerms = u => g => o => ({u, g, o});
const mkPerm = r => w => x => ({r, w, x});
const execute = {r: false, w: false, x: true};
const permFromChar = c => {
  if (c === "0") { return Data$dMaybe.$Maybe("Just", semiringPerm.zero); }
  if (c === "1") { return Data$dMaybe.$Maybe("Just", execute); }
  if (c === "2") { return Data$dMaybe.$Maybe("Just", write); }
  if (c === "3") { return Data$dMaybe.$Maybe("Just", {r: false, w: true, x: true}); }
  if (c === "4") { return Data$dMaybe.$Maybe("Just", read); }
  if (c === "5") { return Data$dMaybe.$Maybe("Just", {r: true, w: false, x: true}); }
  if (c === "6") { return Data$dMaybe.$Maybe("Just", {r: true, w: true, x: false}); }
  if (c === "7") { return Data$dMaybe.$Maybe("Just", {r: true, w: true, x: true}); }
  return Data$dMaybe.Nothing;
};
const permsFromString = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => {
  if (v.length === 3) {
    const $0 = permFromChar(v[0]);
    if ($0.tag === "Just") {
      const $1 = permFromChar(v[1]);
      if ($1.tag === "Just") {
        const $2 = permFromChar(v[2]);
        if ($2.tag === "Just") { return Data$dMaybe.$Maybe("Just", {u: $0._1, g: $1._1, o: $2._1}); }
      }
    }
  }
  return Data$dMaybe.Nothing;
})(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dString$dCodeUnits.toCharArray)(/* #__PURE__ */ (() => {
  const $0 = Data$dEnum.fromCharCode(48);
  return xs => {
    if (
      (() => {
        const $1 = Data$dString$dCodeUnits.charAt(0)(xs);
        if ($1.tag === "Nothing") { return false; }
        return $1.tag === "Just" && $1._1 === $0;
      })()
    ) {
      return Data$dString$dCodeUnits.drop(Data$dString$dCodeUnits.length(Data$dString$dCodePoints.take(1)(xs)))(xs);
    }
    return xs;
  };
})()));
const eqPerm = {eq: ra => rb => ra.r === rb.r && ra.w === rb.w && ra.x === rb.x};
const eqPerms = {
  eq: ra => rb => ra.g.r === rb.g.r && ra.g.w === rb.g.w && ra.g.x === rb.g.x && ra.o.r === rb.o.r && ra.o.w === rb.o.w && ra.o.x === rb.o.x && ra.u.r === rb.u.r && ra.u.w === rb.u.w && ra.u.x === rb.u.x
};
const ordPerm = {compare: v => v1 => ordArray.compare([v.r, v.w, v.x])([v1.r, v1.w, v1.x]), Eq0: () => eqPerm};
const ordArray1 = /* #__PURE__ */ Data$dOrd.ordArray(ordPerm);
const ordPerms = {compare: v => v1 => ordArray1.compare([v.u, v.g, v.o])([v1.u, v1.g, v1.o]), Eq0: () => eqPerms};
const all = /* #__PURE__ */ (() => semiringPerm.one)();
const permsAll = /* #__PURE__ */ (() => ({u: semiringPerm.one, g: semiringPerm.one, o: semiringPerm.one}))();
const permsReadWrite = /* #__PURE__ */ (() => ({u: semiringPerm.one, g: semiringPerm.one, o: semiringPerm.zero}))();
const showPerm = {
  show: v => {
    if (!v.r && !v.w && !v.x) { return "none"; }
    if (v.r && v.w && v.x) { return "all"; }
    return Data$dString$dCommon.joinWith(" + ")([...v.r ? ["read"] : [], ...v.w ? ["write"] : [], ...v.x ? ["execute"] : []]);
  }
};
const showPerms = {
  show: v => "mkPerms " + Data$dString$dCommon.joinWith(" ")(Data$dFunctor.arrayMap(perm => {
    const str = showPerm.show(perm);
    if (
      (() => {
        const $0 = Data$dString$dCodePoints.indexOf(" ")(str);
        if ($0.tag === "Nothing") { return true; }
        if ($0.tag === "Just") { return false; }
        $runtime.fail();
      })()
    ) {
      return str;
    }
    return "(" + str + ")";
  })([v.u, v.g, v.o]))
};
export {
  all,
  eqPerm,
  eqPerms,
  execute,
  fromJust,
  mkPerm,
  mkPerms,
  none,
  ordArray,
  ordArray1,
  ordPerm,
  ordPerms,
  permFromChar,
  permToInt,
  permToString,
  permsAll,
  permsFromString,
  permsReadWrite,
  permsToInt,
  permsToString,
  read,
  semiringPerm,
  showPerm,
  showPerms,
  write
};
