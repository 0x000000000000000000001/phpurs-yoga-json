import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dDateTime from "../Data.DateTime/index.js";
import * as Data$dDateTime$dInstant from "../Data.DateTime.Instant/index.js";
import {getTimezoneOffset, now} from "./foreign.js";
const nowTime = /* #__PURE__ */ (() => {
  const $0 = Control$dSemigroupoid.composeImpl(Data$dDateTime.time)(Data$dDateTime$dInstant.toDateTime);
  return () => {
    const a$p = now();
    return $0(a$p);
  };
})();
const nowDateTime = () => {
  const a$p = now();
  return Data$dDateTime$dInstant.toDateTime(a$p);
};
const nowDate = /* #__PURE__ */ (() => {
  const $0 = Control$dSemigroupoid.composeImpl(Data$dDateTime.date)(Data$dDateTime$dInstant.toDateTime);
  return () => {
    const a$p = now();
    return $0(a$p);
  };
})();
export {nowDate, nowDateTime, nowTime};
export * from "./foreign.js";
