import * as $runtime from "../runtime.js";
import * as Control$dComonad$dCofree from "../Control.Comonad.Cofree/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dLazy from "../Data.Lazy/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Yoga$dTree from "../Yoga.Tree/index.js";
const Loc = x => x;
const siblings = v => [...Data$dArray.reverse(v.before), v.node, ...v.after];
const setNode = a => v => ({node: a, before: v.before, after: v.after, parents: v.parents});
const prev = v => {
  const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v.before);
  if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
  if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", {node: v1._1.head, before: v1._1.tail, after: [v.node, ...v.after], parents: v.parents}); }
  $runtime.fail();
};
const parents = v => v.parents;
const node = v => v.node;
const setValue = a => l => {
  const $0 = Data$dLazy.force(l.node)._2;
  return {node: Data$dLazy.defer(v => Data$dTuple.$Tuple(a, $0)), before: l.before, after: l.after, parents: l.parents};
};
const value = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dComonad$dCofree.head)(node);
const next = v => {
  const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v.after);
  if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
  if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", {node: v1._1.head, before: [v.node, ...v.before], after: v1._1.tail, parents: v.parents}); }
  $runtime.fail();
};
const modifyValue = f => l => ({node: Yoga$dTree.modifyNodeValue(f)(l.node), before: l.before, after: l.after, parents: l.parents});
const modifyNode = f => v => ({node: f(v.node), before: v.before, after: v.after, parents: v.parents});
const last = v => {
  const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), Data$dArray.reverse(v.after));
  if (v1.tag === "Nothing") { return v; }
  if (v1.tag === "Just") { return {node: v1._1.head, before: [...v1._1.tail, ...v.before], after: [], parents: v.parents}; }
  $runtime.fail();
};
const fromTree = n => ({node: n, before: [], after: [], parents: []});
const first = v => {
  const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v.before);
  if (v1.tag === "Nothing") { return v; }
  if (v1.tag === "Just") { return {node: v1._1.head, before: [], after: [...Data$dArray.reverse(v1._1.tail), ...v.after], parents: v.parents}; }
  $runtime.fail();
};
const eqLoc = dictEq => {
  const eqCofree1 = Control$dComonad$dCofree.eqCofree(Data$dEq.eq1Array)(dictEq);
  const $0 = Data$dEq.eqArrayImpl(Control$dComonad$dCofree.eqCofree(Data$dEq.eq1Array)(dictEq).eq);
  return {eq: v => v1 => eqCofree1.eq(v.node)(v1.node) && $0(v.before)(v1.before) && $0(v.after)(v1.after) && Data$dEq.eqArrayImpl(eqLoc(dictEq).eq)(v.parents)(v1.parents)};
};
const children = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dComonad$dCofree.tail)(node);
const firstChild = n => {
  const v = Data$dArray.unconsImpl(v => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), children(n));
  if (v.tag === "Nothing") { return Data$dMaybe.Nothing; }
  if (v.tag === "Just") { return Data$dMaybe.$Maybe("Just", {node: v._1.head, before: [], after: v._1.tail, parents: [n, ...n.parents]}); }
  $runtime.fail();
};
const down = firstChild;
const findDownWhere = v => v1 => {
  if (v(value(v1))) { return Data$dMaybe.$Maybe("Just", v1); }
  const $0 = next(v1);
  const $1 = findDownWhere(v);
  const $2 = (() => {
    if ($0.tag === "Just") { return $1($0._1); }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
  const $3 = firstChild(v1);
  const $4 = (() => {
    const $4 = findDownWhere(v);
    if ($3.tag === "Just") { return $4($3._1); }
    if ($3.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
  if ($2.tag === "Nothing") { return $4; }
  return $2;
};
const findDown = dictEq => a => findDownWhere(v => dictEq.eq(v)(a));
const flattenLocDepthFirst = loc => {
  const goDir = loc$p => dirFn => {
    const v = dirFn(loc$p);
    if (v.tag === "Just") { return [v._1, ...go(v._1)]; }
    if (v.tag === "Nothing") { return []; }
    $runtime.fail();
  };
  const go = loc$p => [...goDir(loc$p)(firstChild), ...goDir(loc$p)(next)];
  return [loc, ...go(loc)];
};
const lastChild = p => {
  const $0 = firstChild(p);
  if ($0.tag === "Just") { return Data$dMaybe.$Maybe("Just", last($0._1)); }
  return Data$dMaybe.Nothing;
};
const before = v => v.before;
const after = v => v.after;
const $$delete = v => {
  const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v.after);
  if (v1.tag === "Just") { return {node: v1._1.head, before: v.before, after: v1._1.tail, parents: v.parents}; }
  if (v1.tag === "Nothing") {
    const v2 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v.before);
    if (v2.tag === "Just") { return {node: v2._1.head, before: v2._1.tail, after: v.after, parents: v.parents}; }
    if (v2.tag === "Nothing") {
      const v3 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v.parents);
      if (v3.tag === "Nothing") { return v; }
      if (v3.tag === "Just") {
        return {
          node: (() => {
            const $0 = value(v3._1.head);
            return Data$dLazy.defer(v$1 => Data$dTuple.$Tuple($0, []));
          })(),
          before: v3._1.head.before,
          after: v3._1.head.after,
          parents: v3._1.head.parents
        };
      }
    }
  }
  $runtime.fail();
};
const insertAfter = n => l => ({node: n, after: l.after, before: [l.node, ...l.before], parents: l.parents});
const insertChild = n => l => {
  const v = firstChild(l);
  if (v.tag === "Just") { return {node: n, after: v._1.after, before: [v._1.node, ...v._1.before], parents: v._1.parents}; }
  if (v.tag === "Nothing") { return {node: n, after: [], before: [], parents: [l, ...l.parents]}; }
  $runtime.fail();
};
const insertBefore = n => l => ({node: n, after: [l.node, ...l.after], before: l.before, parents: l.parents});
const up = v => {
  const v1 = Data$dArray.unconsImpl(v$1 => Data$dMaybe.Nothing, x => xs => Data$dMaybe.$Maybe("Just", {head: x, tail: xs}), v.parents);
  if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
  if (v1.tag === "Just") {
    return Data$dMaybe.$Maybe(
      "Just",
      {
        node: (() => {
          const $0 = value(v1._1.head);
          const $1 = siblings(v);
          return Data$dLazy.defer(v$1 => Data$dTuple.$Tuple($0, $1));
        })(),
        before: v1._1.head.before,
        after: v1._1.head.after,
        parents: v1._1.tail
      }
    );
  }
  $runtime.fail();
};
const findUpWhere = v => v1 => {
  if (v(value(v1))) { return Data$dMaybe.$Maybe("Just", v1); }
  const $0 = prev(v1);
  const $1 = findUpWhere(v);
  const $2 = (() => {
    if ($0.tag === "Just") { return $1($0._1); }
    if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
  const $3 = up(v1);
  const $4 = (() => {
    const $4 = findUpWhere(v);
    if ($3.tag === "Just") { return $4($3._1); }
    if ($3.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  })();
  if ($2.tag === "Nothing") { return $4; }
  return $2;
};
const findUp = dictEq => a => findUpWhere(v => dictEq.eq(v)(a));
const root = root$a0$copy => {
  let root$a0 = root$a0$copy, root$c = true, root$r;
  while (root$c) {
    const l = root$a0;
    const v = up(l);
    if (v.tag === "Nothing") {
      root$c = false;
      root$r = l;
      continue;
    }
    if (v.tag === "Just") {
      root$a0 = v._1;
      continue;
    }
    $runtime.fail();
  }
  return root$r;
};
const findFromRootWhere = v => v1 => {
  if (v(value(v1))) { return Data$dMaybe.$Maybe("Just", v1); }
  return findDownWhere(v)(root(v1));
};
const findFromRoot = dictEq => a => findFromRootWhere(v => dictEq.eq(v)(a));
const toTree = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(node)(root);
const siblingAt = i => v => {
  const v1 = up(v);
  if (v1.tag === "Nothing") { return Data$dMaybe.Nothing; }
  if (v1.tag === "Just") {
    const $0 = children(v1._1);
    if (i >= 0 && i < $0.length) {
      return Data$dMaybe.$Maybe(
        "Just",
        {
          node: $0[i],
          before: Data$dArray.reverse((() => {
            const $1 = children(v1._1);
            if (i < 1) { return []; }
            return Data$dArray.sliceImpl(0, i, $1);
          })()),
          after: (() => {
            const $1 = i + 1 | 0;
            const $2 = children(v1._1);
            if ($1 < 1) { return $2; }
            return Data$dArray.sliceImpl($1, $2.length, $2);
          })(),
          parents: v.parents
        }
      );
    }
    return Data$dMaybe.Nothing;
  }
  $runtime.fail();
};
const childAt = i => p => {
  const $0 = firstChild(p);
  if ($0.tag === "Just") { return siblingAt(i)($0._1); }
  if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
export {
  Loc,
  after,
  before,
  childAt,
  children,
  $$delete as delete,
  down,
  eqLoc,
  findDown,
  findDownWhere,
  findFromRoot,
  findFromRootWhere,
  findUp,
  findUpWhere,
  first,
  firstChild,
  flattenLocDepthFirst,
  fromTree,
  insertAfter,
  insertBefore,
  insertChild,
  last,
  lastChild,
  modifyNode,
  modifyValue,
  next,
  node,
  parents,
  prev,
  root,
  setNode,
  setValue,
  siblingAt,
  siblings,
  toTree,
  up,
  value
};
