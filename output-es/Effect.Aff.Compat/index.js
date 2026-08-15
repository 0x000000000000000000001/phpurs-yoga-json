// | This module provides compatability functions for constructing `Aff`s which
// | are defined via the FFI.
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
const EffectFnCanceler = x => x;
const EffectFnAff = x => x;
const fromEffectFnAff = v => Effect$dAff._makeAff(
  Effect$dAff.isLeft,
  Effect$dAff.unsafeFromLeft,
  Effect$dAff.unsafeFromRight,
  Data$dEither.Left,
  Data$dEither.Right,
  k => () => {
    const v1 = v($0 => Control$dSemigroupoid.composeImpl(k)(Data$dEither.Left)($0)(), $0 => Control$dSemigroupoid.composeImpl(k)(Data$dEither.Right)($0)());
    return e => Effect$dAff._makeAff(
      Effect$dAff.isLeft,
      Effect$dAff.unsafeFromLeft,
      Effect$dAff.unsafeFromRight,
      Data$dEither.Left,
      Data$dEither.Right,
      k2 => () => {
        v1(e, $0 => Control$dSemigroupoid.composeImpl(k2)(Data$dEither.Left)($0)(), $0 => Control$dSemigroupoid.composeImpl(k2)(Data$dEither.Right)($0)());
        return Effect$dAff.nonCanceler;
      }
    );
  }
);
export {EffectFnAff, EffectFnCanceler, fromEffectFnAff};
