import * as $runtime from "../runtime.js";
import * as Control$dComonad$dCofree from "../Control.Comonad.Cofree/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
const functorCofree = /* #__PURE__ */ Control$dComonad$dCofree.functorCofree(Data$dFunctor.functorArray);
const setNodeValue = a => n => {
  const $0 = Data$dLazy.force(n)._2;
  return Data$dLazy.defer(v => Data$dTuple.$Tuple(a, $0));
};
const scanTreeAccum = f => b => n => {
  const go = x => {
    const $0 = Data$dArray.unconsImpl(v => Data$dMaybe.Nothing, x$1 => xs => Data$dMaybe.$Maybe("Just", {head: x$1, tail: xs}), x.current);
    if ($0.tag === "Nothing") { return Control$dMonad$dRec$dClass.$Step("Done", x.final); }
    if ($0.tag === "Just") {
      const fb$p = f(Data$dLazy.force($0._1.head)._1)(x.b);
      return Control$dMonad$dRec$dClass.$Step(
        "Loop",
        {
          b: x.b,
          current: $0._1.tail,
          final: Data$dArray.snoc(x.final)((() => {
            const $1 = fb$p.value;
            const $2 = Control$dMonad$dRec$dClass.tailRec(go)({b: fb$p.accum, current: Data$dLazy.force($0._1.head)._2, final: []});
            return Data$dLazy.defer(v => Data$dTuple.$Tuple($1, $2));
          })())
        }
      );
    }
    $runtime.fail();
  };
  const fb = f(Data$dLazy.force(n)._1)(b);
  const $0 = fb.value;
  const $1 = Control$dMonad$dRec$dClass.tailRec(go)({b: fb.accum, current: Data$dLazy.force(n)._2, final: []});
  return Data$dLazy.defer(v => Data$dTuple.$Tuple($0, $1));
};
const scanTree = f => b => n => {
  const go = x => {
    const $0 = Data$dArray.unconsImpl(v => Data$dMaybe.Nothing, x$1 => xs => Data$dMaybe.$Maybe("Just", {head: x$1, tail: xs}), x.current);
    if ($0.tag === "Nothing") { return Control$dMonad$dRec$dClass.$Step("Done", x.final); }
    if ($0.tag === "Just") {
      const fb$p = f(Data$dLazy.force($0._1.head)._1)(x.b);
      return Control$dMonad$dRec$dClass.$Step(
        "Loop",
        {
          b: x.b,
          current: $0._1.tail,
          final: Data$dArray.snoc(x.final)((() => {
            const $1 = Control$dMonad$dRec$dClass.tailRec(go)({b: fb$p, current: Data$dLazy.force($0._1.head)._2, final: []});
            return Data$dLazy.defer(v => Data$dTuple.$Tuple(fb$p, $1));
          })())
        }
      );
    }
    $runtime.fail();
  };
  const fb = f(Data$dLazy.force(n)._1)(b);
  const $0 = Control$dMonad$dRec$dClass.tailRec(go)({b: fb, current: Data$dLazy.force(n)._2, final: []});
  return Data$dLazy.defer(v => Data$dTuple.$Tuple(fb, $0));
};
const modifyNodeValue = f => n => {
  const $0 = f(Data$dLazy.force(n)._1);
  const $1 = Data$dLazy.force(n)._2;
  return Data$dLazy.defer(v => Data$dTuple.$Tuple($0, $1));
};
const mkTree = Control$dComonad$dCofree.mkCofree;
const mkLeaf = a => Data$dLazy.defer(v => Data$dTuple.$Tuple(a, []));
const leaf = mkLeaf;
const drawTree = t => {
  const go = x => {
    const $0 = Data$dArray.unconsImpl(v => Data$dMaybe.Nothing, x$1 => xs => Data$dMaybe.$Maybe("Just", {head: x$1, tail: xs}), x.current);
    if ($0.tag === "Nothing") { return Control$dMonad$dRec$dClass.$Step("Done", x.drawn); }
    if ($0.tag === "Just") {
      return Control$dMonad$dRec$dClass.$Step(
        "Loop",
        {
          level: x.level,
          drawn: x.drawn + Data$dMonoid.power(Data$dMonoid.monoidString)("       ")(x.level) + "|----> " + Data$dLazy.force($0._1.head)._1 + "\n" + Control$dMonad$dRec$dClass.tailRec(go)({
            level: x.level + 1 | 0,
            drawn: "",
            current: Data$dLazy.force($0._1.head)._2
          }),
          current: $0._1.tail
        }
      );
    }
    $runtime.fail();
  };
  return Control$dMonad$dRec$dClass.tailRec(go)({level: 0, drawn: Data$dLazy.force(t)._1 + "\n", current: Data$dLazy.force(t)._2});
};
const showTree = dictShow => Control$dSemigroupoid.composeImpl(drawTree)(functorCofree.map(dictShow.show));
const appendChild = c => n => {
  const $0 = Data$dLazy.force(n)._1;
  const $1 = Data$dArray.snoc(Data$dLazy.force(n)._2)(c);
  return Data$dLazy.defer(v => Data$dTuple.$Tuple($0, $1));
};
export {appendChild, drawTree, functorCofree, leaf, mkLeaf, mkTree, modifyNodeValue, scanTree, scanTreeAccum, setNodeValue, showTree};
