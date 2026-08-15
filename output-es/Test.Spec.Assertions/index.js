import * as $runtime from "../runtime.js";
import * as Control$dMonad$dError$dClass from "../Control.Monad.Error.Class/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dHeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import {unsafeStringify} from "./foreign.js";
const AnyShow = x => x;
const showAnyShow = {show: unsafeStringify};
const newtypeAnyShow = {Coercible0: () => {}};
const eqAnyShow = dictEq => dictEq;
const fail = dictMonadThrow => Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
const shouldContain = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail1 = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return dictShow => dictEq => dictShow1 => dictFoldable => c => e => {
    const $0 = fail1(dictShow.show(e) + " ∉ " + dictShow1.show(c));
    if (Control$dSemigroupoid.composeImpl(Data$dHeytingAlgebra.boolNot)(Data$dFoldable.elem(dictFoldable)(dictEq)(e))(c)) { return $0; }
    return Applicative0.pure();
  };
};
const shouldEqual = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail1 = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return dictShow => dictEq => v1 => v2 => {
    const $0 = fail1(dictShow.show(v1) + " ≠ " + dictShow.show(v2));
    if (!dictEq.eq(v1)(v2)) { return $0; }
    return Applicative0.pure();
  };
};
const shouldReturn = dictMonadThrow => {
  const Bind1 = dictMonadThrow.Monad0().Bind1();
  return dictEq => dictShow => ft => t => Bind1.bind(ft)(v => shouldEqual(dictMonadThrow)(dictShow)(dictEq)(v)(t));
};
const shouldNotContain = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail1 = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return dictShow => dictEq => dictShow1 => dictFoldable => c => e => {
    const $0 = fail1(dictShow.show(e) + " ∈ " + dictShow1.show(c));
    if (Data$dFoldable.elem(dictFoldable)(dictEq)(e)(c)) { return $0; }
    return Applicative0.pure();
  };
};
const shouldNotEqual = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail1 = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return dictShow => dictEq => v1 => v2 => {
    const $0 = fail1(dictShow.show(v1) + " = " + dictShow.show(v2));
    if (dictEq.eq(v1)(v2)) { return $0; }
    return Applicative0.pure();
  };
};
const shouldNotReturn = dictMonadThrow => {
  const Bind1 = dictMonadThrow.Monad0().Bind1();
  return dictEq => dictShow => ft => t => Bind1.bind(ft)(v => shouldNotEqual(dictMonadThrow)(dictShow)(dictEq)(v)(t));
};
const shouldNotSatisfy = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail1 = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return dictShow => v => pred => {
    const $0 = fail1(dictShow.show(v) + " satisfies predicate, but should not");
    if (pred(v)) { return $0; }
    return Applicative0.pure();
  };
};
const shouldSatisfy = dictMonadThrow => {
  const Applicative0 = dictMonadThrow.Monad0().Applicative0();
  const fail1 = Control$dSemigroupoid.composeImpl(dictMonadThrow.throwError)(Effect$dException.error);
  return dictShow => v => pred => {
    const $0 = pred(v);
    const $1 = fail1(dictShow.show(v) + " doesn't satisfy predicate");
    if (!$0) { return $1; }
    if ($0) { return Applicative0.pure(); }
    $runtime.fail();
  };
};
const expectError = dictMonadError => {
  const MonadThrow0 = dictMonadError.MonadThrow0();
  const Monad0 = MonadThrow0.Monad0();
  const Bind1 = Monad0.Bind1();
  const Applicative0 = Monad0.Applicative0();
  return a => Bind1.bind(Control$dMonad$dError$dClass.try(dictMonadError)(a))(e => {
    if (e.tag === "Left") { return Applicative0.pure(); }
    if (e.tag === "Right") { return MonadThrow0.throwError(Effect$dException.error("Expected error")); }
    $runtime.fail();
  });
};
export {
  AnyShow,
  eqAnyShow,
  expectError,
  fail,
  newtypeAnyShow,
  shouldContain,
  shouldEqual,
  shouldNotContain,
  shouldNotEqual,
  shouldNotReturn,
  shouldNotSatisfy,
  shouldReturn,
  shouldSatisfy,
  showAnyShow
};
export * from "./foreign.js";
