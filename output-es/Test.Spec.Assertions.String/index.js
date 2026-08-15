import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import {_endsWith, _startsWith} from "./foreign.js";
const shouldStartWith = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return s => prefix => {
    const $0 = fail(Data$dShow.showStringImpl(s) + " does not start with " + Data$dShow.showStringImpl(prefix));
    if (!_startsWith(prefix)(s)) { return $0; }
    return Applicative0.pure();
  };
};
const shouldNotContain = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return s => subs => {
    const $0 = fail(Data$dShow.showStringImpl(subs) + " ∈ " + Data$dShow.showStringImpl(s));
    if (Control$dSemigroupoid.composeImpl(Data$dMaybe.isJust)(Data$dString$dCodeUnits.indexOf(subs))(s)) { return $0; }
    return Applicative0.pure();
  };
};
const shouldEndWith = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return s => suffix => {
    const $0 = fail(Data$dShow.showStringImpl(s) + " does not end with " + Data$dShow.showStringImpl(suffix));
    if (!_endsWith(suffix)(s)) { return $0; }
    return Applicative0.pure();
  };
};
const shouldContain = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return s => subs => {
    const $0 = fail(Data$dShow.showStringImpl(subs) + " ∉ " + Data$dShow.showStringImpl(s));
    if (!Control$dSemigroupoid.composeImpl(Data$dMaybe.isJust)(Data$dString$dCodeUnits.indexOf(subs))(s)) { return $0; }
    return Applicative0.pure();
  };
};
export {shouldContain, shouldEndWith, shouldNotContain, shouldStartWith};
export * from "./foreign.js";
