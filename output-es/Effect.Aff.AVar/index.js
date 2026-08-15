import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Effect$dAVar from "../Effect.AVar/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const tryTake = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Effect$dAff._liftEffect)(Effect$dAVar.tryTake);
const tryRead = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Effect$dAff._liftEffect)(Effect$dAVar.tryRead);
const tryPut = value => Control$dSemigroupoid.composeImpl(Effect$dAff._liftEffect)(Effect$dAVar.tryPut(value));
const take = avar => Effect$dAff._makeAff(
  Effect$dAff.isLeft,
  Effect$dAff.unsafeFromLeft,
  Effect$dAff.unsafeFromRight,
  Data$dEither.Left,
  Data$dEither.Right,
  k => {
    const $0 = Effect$dAVar._takeVar(Effect$dAVar.ffiUtil, avar, k);
    return () => {
      const c = $0();
      return Effect$dAff.effectCanceler(c);
    };
  }
);
const status = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Effect$dAff._liftEffect)(Effect$dAVar.status);
const read = avar => Effect$dAff._makeAff(
  Effect$dAff.isLeft,
  Effect$dAff.unsafeFromLeft,
  Effect$dAff.unsafeFromRight,
  Data$dEither.Left,
  Data$dEither.Right,
  k => {
    const $0 = Effect$dAVar._readVar(Effect$dAVar.ffiUtil, avar, k);
    return () => {
      const c = $0();
      return Effect$dAff.effectCanceler(c);
    };
  }
);
const put = value => avar => Effect$dAff._makeAff(
  Effect$dAff.isLeft,
  Effect$dAff.unsafeFromLeft,
  Effect$dAff.unsafeFromRight,
  Data$dEither.Left,
  Data$dEither.Right,
  k => {
    const $0 = Effect$dAVar._putVar(Effect$dAVar.ffiUtil, value, avar, k);
    return () => {
      const c = $0();
      return Effect$dAff.effectCanceler(c);
    };
  }
);
const $$new = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Effect$dAff._liftEffect)(Effect$dAVar._newVar);
const kill = error => Control$dSemigroupoid.composeImpl(Effect$dAff._liftEffect)(Effect$dAVar.kill(error));
const empty = /* #__PURE__ */ Effect$dAff._liftEffect(Effect$dAVar.empty);
export {empty, kill, $$new as new, put, read, status, take, tryPut, tryRead, tryTake};
