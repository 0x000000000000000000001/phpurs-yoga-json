import * as $runtime from "../runtime.js";
import * as Control$dMonad$dError$dClass from "../Control.Monad.Error.Class/index.js";
import * as Control$dParallel from "../Control.Parallel/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Partial from "../Partial/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {
  _bind,
  _catchError,
  _delay,
  _fork,
  _killAll,
  _liftEffect,
  _makeAff,
  _makeFiber,
  _makeSupervisedFiber,
  _map,
  _parAffAlt,
  _parAffApply,
  _parAffMap,
  _pure,
  _sequential,
  _throwError,
  generalBracket
} from "./foreign.js";
const Canceler = x => x;
const unsafeFromRight = v => {
  if (v.tag === "Right") { return v._1; }
  if (v.tag === "Left") { return Partial._crashWith("unsafeFromRight: Left"); }
  $runtime.fail();
};
const unsafeFromLeft = v => {
  if (v.tag === "Left") { return v._1; }
  if (v.tag === "Right") { return Partial._crashWith("unsafeFromLeft: Right"); }
  $runtime.fail();
};
const suspendAff = /* #__PURE__ */ _fork(false);
const newtypeCanceler = {Coercible0: () => {}};
const isLeft = v => {
  if (v.tag === "Left") { return true; }
  if (v.tag === "Right") { return false; }
  $runtime.fail();
};
const makeAff = k => _makeAff(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, k);
const makeFiber = aff => _makeFiber(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, aff);
const launchAff = aff => {
  const $0 = _makeFiber(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, aff);
  return () => {
    const fiber = $0();
    fiber.run();
    return fiber;
  };
};
const launchAff_ = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(a => () => {a();})(launchAff);
const launchSuspendedAff = makeFiber;
const functorParAff = {map: _parAffMap};
const functorAff = {map: _map};
const forkAff = /* #__PURE__ */ _fork(true);
const delay = v => _delay(Data$dEither.Right, v);
const bracket = acquire => completed => generalBracket(acquire)({killed: v => completed, failed: v => completed, completed: v => completed});
const applyParAff = {apply: _parAffApply, Functor0: () => functorParAff};
const semigroupParAff = dictSemigroup => (
  {
    append: (() => {
      const $0 = dictSemigroup.append;
      return a => b => _parAffApply(_parAffMap($0)(a))(b);
    })()
  }
);
const monadAff = {Applicative0: () => applicativeAff, Bind1: () => bindAff};
const bindAff = {bind: _bind, Apply0: () => applyAff};
const applyAff = {apply: f => a => _bind(f)(f$p => _bind(a)(a$p => applicativeAff.pure(f$p(a$p)))), Functor0: () => functorAff};
const applicativeAff = {pure: _pure, Apply0: () => applyAff};
const cancelWith = aff => v => generalBracket(_pure())({killed: e => v1 => v(e), failed: v$1 => _pure, completed: v$1 => _pure})(v$1 => aff);
const $$finally = fin => a => generalBracket(_pure())({killed: v => v$1 => fin, failed: v => v$1 => fin, completed: v => v$1 => fin})(v => a);
const invincible = a => {
  const $0 = _pure();
  return generalBracket(a)({killed: v => v$1 => $0, failed: v => v$1 => $0, completed: v => v$1 => $0})(_pure);
};
const lazyAff = {defer: f => _bind(_pure())(f)};
const parallelAff = {parallel: Unsafe$dCoerce.unsafeCoerce, sequential: _sequential, Apply0: () => applyAff, Apply1: () => applyParAff};
const applicativeParAff = {pure: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(_pure), Apply0: () => applyParAff};
const monoidParAff = dictMonoid => {
  const semigroupParAff1 = {
    append: (() => {
      const $0 = dictMonoid.Semigroup0().append;
      return a => b => _parAffApply(_parAffMap($0)(a))(b);
    })()
  };
  return {mempty: applicativeParAff.pure(dictMonoid.mempty), Semigroup0: () => semigroupParAff1};
};
const semigroupCanceler = {
  append: v => v1 => err => Control$dParallel.parTraverse_(parallelAff)(applicativeParAff)(Data$dFoldable.foldableArray)(Control$dParallel.identity)([v(err), v1(err)])
};
const semigroupAff = dictSemigroup => (
  {
    append: (() => {
      const $0 = dictSemigroup.append;
      return a => b => applyAff.apply(_map($0)(a))(b);
    })()
  }
);
const monadEffectAff = {liftEffect: _liftEffect, Monad0: () => monadAff};
const effectCanceler = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Canceler)(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(Data$dFunction.const)(_liftEffect));
const joinFiber = v => _makeAff(
  isLeft,
  unsafeFromLeft,
  unsafeFromRight,
  Data$dEither.Left,
  Data$dEither.Right,
  k => {
    const $0 = v.join(k);
    return () => {
      const a$p = $0();
      return effectCanceler(a$p);
    };
  }
);
const functorFiber = {map: f => t => _makeFiber(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, _map(f)(joinFiber(t)))()};
const applyFiber = {
  apply: t1 => t2 => _makeFiber(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, applyAff.apply(joinFiber(t1))(joinFiber(t2)))(),
  Functor0: () => functorFiber
};
const applicativeFiber = {pure: a => _makeFiber(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, _pure(a))(), Apply0: () => applyFiber};
const killFiber = e => v => _bind(_liftEffect(v.isSuspended))(suspended => {
  if (suspended) {
    return _liftEffect((() => {
      const $0 = v.kill(e, v$1 => () => {});
      return () => {$0();};
    })());
  }
  return _makeAff(
    isLeft,
    unsafeFromLeft,
    unsafeFromRight,
    Data$dEither.Left,
    Data$dEither.Right,
    k => {
      const $0 = v.kill(e, k);
      return () => {
        const a$p = $0();
        return effectCanceler(a$p);
      };
    }
  );
});
const fiberCanceler = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Canceler)(b => a => killFiber(a)(b));
const supervise = aff => {
  const killError = Effect$dException.error("[Aff] Child fiber outlived parent");
  return generalBracket(_liftEffect((() => {
    const $0 = _makeSupervisedFiber(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, aff);
    return () => {
      const sup = $0();
      sup.fiber.run();
      return sup;
    };
  })()))({
    killed: err => sup => Control$dParallel.parTraverse_(parallelAff)(applicativeParAff)(Data$dFoldable.foldableArray)(Control$dParallel.identity)([
      killFiber(err)(sup.fiber),
      _makeAff(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, k => _killAll(err, sup.supervisor, k(Data$dEither.$Either("Right", undefined))))
    ]),
    failed: v => sup => _makeAff(
      isLeft,
      unsafeFromLeft,
      unsafeFromRight,
      Data$dEither.Left,
      Data$dEither.Right,
      k => _killAll(killError, sup.supervisor, k(Data$dEither.$Either("Right", undefined)))
    ),
    completed: v => sup => _makeAff(
      isLeft,
      unsafeFromLeft,
      unsafeFromRight,
      Data$dEither.Left,
      Data$dEither.Right,
      k => _killAll(killError, sup.supervisor, k(Data$dEither.$Either("Right", undefined)))
    )
  })(Control$dSemigroupoid.composeImpl(joinFiber)(v => v.fiber));
};
const monadSTAff = {liftST: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(_liftEffect)(Unsafe$dCoerce.unsafeCoerce), Monad0: () => monadAff};
const monadThrowAff = {throwError: _throwError, Monad0: () => monadAff};
const monadErrorAff = {catchError: _catchError, MonadThrow0: () => monadThrowAff};
const attempt = /* #__PURE__ */ Control$dMonad$dError$dClass.try(monadErrorAff);
const runAff = k => aff => launchAff(_bind(Control$dMonad$dError$dClass.try(monadErrorAff)(aff))(Control$dSemigroupoid.composeImpl(_liftEffect)(k)));
const runAff_ = k => aff => {
  const $0 = runAff(k)(aff);
  return () => {$0();};
};
const runSuspendedAff = k => aff => _makeFiber(
  isLeft,
  unsafeFromLeft,
  unsafeFromRight,
  Data$dEither.Left,
  Data$dEither.Right,
  _bind(Control$dMonad$dError$dClass.try(monadErrorAff)(aff))(Control$dSemigroupoid.composeImpl(_liftEffect)(k))
);
const monadRecAff = {
  tailRecM: k => {
    const go = a => _bind(k(a))(res => {
      if (res.tag === "Done") { return _pure(res._1); }
      if (res.tag === "Loop") { return go(res._1); }
      $runtime.fail();
    });
    return go;
  },
  Monad0: () => monadAff
};
const monoidAff = dictMonoid => {
  const semigroupAff1 = semigroupAff(dictMonoid.Semigroup0());
  return {mempty: _pure(dictMonoid.mempty), Semigroup0: () => semigroupAff1};
};
const nonCanceler = /* #__PURE__ */ (() => {
  const $0 = _pure();
  return v => $0;
})();
const monoidCanceler = {mempty: nonCanceler, Semigroup0: () => semigroupCanceler};
const never = /* #__PURE__ */ _makeAff(isLeft, unsafeFromLeft, unsafeFromRight, Data$dEither.Left, Data$dEither.Right, v => () => nonCanceler);
const apathize = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ _map(v => {}))(attempt);
const altParAff = {alt: _parAffAlt, Functor0: () => functorParAff};
const altAff = {alt: a1 => a2 => _catchError(a1)(v => a2), Functor0: () => functorAff};
const plusAff = {empty: /* #__PURE__ */ _throwError(/* #__PURE__ */ Effect$dException.error("Always fails")), Alt0: () => altAff};
const plusParAff = /* #__PURE__ */ (() => ({empty: plusAff.empty, Alt0: () => altParAff}))();
const alternativeParAff = {Applicative0: () => applicativeParAff, Plus1: () => plusParAff};
export {
  Canceler,
  altAff,
  altParAff,
  alternativeParAff,
  apathize,
  applicativeAff,
  applicativeFiber,
  applicativeParAff,
  applyAff,
  applyFiber,
  applyParAff,
  attempt,
  bindAff,
  bracket,
  cancelWith,
  delay,
  effectCanceler,
  fiberCanceler,
  $$finally as finally,
  forkAff,
  functorAff,
  functorFiber,
  functorParAff,
  invincible,
  isLeft,
  joinFiber,
  killFiber,
  launchAff,
  launchAff_,
  launchSuspendedAff,
  lazyAff,
  makeAff,
  makeFiber,
  monadAff,
  monadEffectAff,
  monadErrorAff,
  monadRecAff,
  monadSTAff,
  monadThrowAff,
  monoidAff,
  monoidCanceler,
  monoidParAff,
  never,
  newtypeCanceler,
  nonCanceler,
  parallelAff,
  plusAff,
  plusParAff,
  runAff,
  runAff_,
  runSuspendedAff,
  semigroupAff,
  semigroupCanceler,
  semigroupParAff,
  supervise,
  suspendAff,
  unsafeFromLeft,
  unsafeFromRight
};
export * from "./foreign.js";
