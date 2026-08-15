// | Mutable buffers and associated operations.
import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dUncurried from "../Effect.Uncurried/index.js";
import * as Node$dBuffer$dImmutable from "../Node.Buffer.Immutable/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import {
  allocUnsafeImpl,
  allocUnsafeSlowImpl,
  copyImpl,
  fillImpl,
  freezeImpl,
  poolSize,
  setAtOffsetImpl,
  setPoolSizeImpl,
  swap16Impl,
  swap32Impl,
  swap64Impl,
  thawImpl,
  transcodeImpl,
  writeInternal,
  writeStringInternal
} from "./foreign.js";
const writeString = enc => offset => len => value => buf => {
  const $0 = (() => {
    if (enc === "ASCII") { return "ascii"; }
    if (enc === "UTF8") { return "utf8"; }
    if (enc === "UTF16LE") { return "utf16le"; }
    if (enc === "UCS2") { return "ucs2"; }
    if (enc === "Base64") { return "base64"; }
    if (enc === "Base64Url") { return "base64url"; }
    if (enc === "Latin1") { return "latin1"; }
    if (enc === "Binary") { return "binary"; }
    if (enc === "Hex") { return "hex"; }
    $runtime.fail();
  })();
  return () => writeStringInternal($0, offset, len, value, buf);
};
const write = ty => value => offset => buf => {
  const $0 = (() => {
    if (ty === "UInt8") { return "UInt8"; }
    if (ty === "UInt16LE") { return "UInt16LE"; }
    if (ty === "UInt16BE") { return "UInt16BE"; }
    if (ty === "UInt32LE") { return "UInt32LE"; }
    if (ty === "UInt32BE") { return "UInt32BE"; }
    if (ty === "Int8") { return "Int8"; }
    if (ty === "Int16LE") { return "Int16LE"; }
    if (ty === "Int16BE") { return "Int16BE"; }
    if (ty === "Int32LE") { return "Int32LE"; }
    if (ty === "Int32BE") { return "Int32BE"; }
    if (ty === "FloatLE") { return "FloatLE"; }
    if (ty === "FloatBE") { return "FloatBE"; }
    if (ty === "DoubleLE") { return "DoubleLE"; }
    if (ty === "DoubleBE") { return "DoubleBE"; }
    $runtime.fail();
  })();
  return () => writeInternal($0, value, offset, buf);
};
const unsafeThaw = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Effect.pureE)(Unsafe$dCoerce.unsafeCoerce);
const usingToImmutable = f => x => unsafeThaw(f(x));
const unsafeFreeze = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Effect.pureE)(Unsafe$dCoerce.unsafeCoerce);
const usingFromImmutable = f => buf => {
  const $0 = unsafeFreeze(buf);
  return () => {
    const a$p = $0();
    return f(a$p);
  };
};
const transcode = buf => from => to => {
  const $0 = (() => {
    if (from === "ASCII") { return "ascii"; }
    if (from === "UTF8") { return "utf8"; }
    if (from === "UTF16LE") { return "utf16le"; }
    if (from === "UCS2") { return "ucs2"; }
    if (from === "Base64") { return "base64"; }
    if (from === "Base64Url") { return "base64url"; }
    if (from === "Latin1") { return "latin1"; }
    if (from === "Binary") { return "binary"; }
    if (from === "Hex") { return "hex"; }
    $runtime.fail();
  })();
  const $1 = (() => {
    if (to === "ASCII") { return "ascii"; }
    if (to === "UTF8") { return "utf8"; }
    if (to === "UTF16LE") { return "utf16le"; }
    if (to === "UCS2") { return "ucs2"; }
    if (to === "Base64") { return "base64"; }
    if (to === "Base64Url") { return "base64url"; }
    if (to === "Latin1") { return "latin1"; }
    if (to === "Binary") { return "binary"; }
    if (to === "Hex") { return "hex"; }
    $runtime.fail();
  })();
  return () => transcodeImpl(buf, $0, $1);
};
const toString$p = enc => start => end => usingFromImmutable(Node$dBuffer$dImmutable.toString$p(enc)(start)(end));
const toString = enc => usingFromImmutable(Node$dBuffer$dImmutable.toString(enc));
const toArrayBuffer = /* #__PURE__ */ usingFromImmutable(Node$dBuffer$dImmutable.toArrayBuffer);
const toArray = /* #__PURE__ */ usingFromImmutable(Node$dBuffer$dImmutable.toArray);
const thaw = /* #__PURE__ */ Effect$dUncurried.runEffectFn1(thawImpl);
const swap64 = b => () => swap64Impl(b);
const swap32 = b => () => swap32Impl(b);
const swap16 = b => () => swap16Impl(b);
const slice = Node$dBuffer$dImmutable.slice;
const size = /* #__PURE__ */ usingFromImmutable(Node$dBuffer$dImmutable.size);
const setPoolSize = sizeInBytes => () => setPoolSizeImpl(sizeInBytes);
const setAtOffset = val => off => buff => () => setAtOffsetImpl(val, off, buff);
const readString = enc => o => o$p => usingFromImmutable(Node$dBuffer$dImmutable.readString(enc)(o)(o$p));
const read = t => o => usingFromImmutable(Node$dBuffer$dImmutable.read(t)(o));
const getAtOffset = o => usingFromImmutable(Node$dBuffer$dImmutable.getAtOffset(o));
const fromString = s => usingToImmutable(Node$dBuffer$dImmutable.fromString(s));
const fromArrayBuffer = /* #__PURE__ */ usingToImmutable(Node$dBuffer$dImmutable.fromArrayBuffer);
const fromArray = /* #__PURE__ */ usingToImmutable(Node$dBuffer$dImmutable.fromArray);
const freeze = /* #__PURE__ */ Effect$dUncurried.runEffectFn1(freezeImpl);
const fill = octet => start => end => buf => () => fillImpl(octet, start, end, buf);
const copy = srcStart => srcEnd => src => targStart => targ => () => copyImpl(srcStart, srcEnd, src, targStart, targ);
const concat$p = arrs => n => v => Node$dBuffer$dImmutable.concatToLength(arrs, n);
const concat = arrs => v => Node$dBuffer$dImmutable.concat(arrs);
const compareParts = src => target => targetSrc => targetEnd => srcStart => srcEnd => {
  const $0 = unsafeFreeze(src);
  return () => {
    const src$p = $0();
    const target$p = unsafeFreeze(target)();
    return Node$dBuffer$dImmutable.compareParts(src$p)(target$p)(targetSrc)(targetEnd)(srcStart)(srcEnd)();
  };
};
const allocUnsafeSlow = s => () => allocUnsafeSlowImpl(s);
const allocUnsafe = s => () => allocUnsafeImpl(s);
const alloc = /* #__PURE__ */ usingToImmutable(Node$dBuffer$dImmutable.alloc);
const create = /* #__PURE__ */ usingToImmutable(Node$dBuffer$dImmutable.alloc);
const mutableBufferEffect = {
  create: /* #__PURE__ */ usingToImmutable(Node$dBuffer$dImmutable.alloc),
  freeze,
  unsafeFreeze,
  thaw,
  unsafeThaw,
  fromArray: /* #__PURE__ */ usingToImmutable(Node$dBuffer$dImmutable.fromArray),
  fromString,
  fromArrayBuffer: /* #__PURE__ */ usingToImmutable(Node$dBuffer$dImmutable.fromArrayBuffer),
  toArrayBuffer: /* #__PURE__ */ usingFromImmutable(Node$dBuffer$dImmutable.toArrayBuffer),
  read,
  readString,
  toString,
  write,
  writeString,
  toArray: /* #__PURE__ */ usingFromImmutable(Node$dBuffer$dImmutable.toArray),
  getAtOffset,
  setAtOffset,
  slice: Node$dBuffer$dImmutable.slice,
  size: /* #__PURE__ */ usingFromImmutable(Node$dBuffer$dImmutable.size),
  concat,
  "concat'": concat$p,
  copy,
  fill,
  Monad0: () => Effect.monadEffect
};
export {
  alloc,
  allocUnsafe,
  allocUnsafeSlow,
  compareParts,
  concat,
  concat$p,
  copy,
  create,
  fill,
  freeze,
  fromArray,
  fromArrayBuffer,
  fromString,
  getAtOffset,
  mutableBufferEffect,
  read,
  readString,
  setAtOffset,
  setPoolSize,
  size,
  slice,
  swap16,
  swap32,
  swap64,
  thaw,
  toArray,
  toArrayBuffer,
  toString,
  toString$p,
  transcode,
  unsafeFreeze,
  unsafeThaw,
  usingFromImmutable,
  usingToImmutable,
  write,
  writeString
};
export * from "./foreign.js";
