import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dNonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data$dCodePoint$dUnicode$dInternal$dCasing from "../Data.CodePoint.Unicode.Internal.Casing/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dString$dRegex from "../Data.String.Regex/index.js";
import * as Data$dString$dRegex$dUnsafe from "../Data.String.Regex.Unsafe/index.js";
import * as Data$dString$dUnicode from "../Data.String.Unicode/index.js";
import {levenshtein, sorensenDiceCoefficient} from "./foreign.js";
const upperCaseFirst = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v1 => {
  if (v1.tag === "Nothing") { return ""; }
  if (v1.tag === "Just") {
    return Data$dString$dCodePoints.fromCodePointArray(Data$dCodePoint$dUnicode$dInternal$dCasing.title(v1._1.head)) + Data$dString$dUnicode.toLower(v1._1.tail);
  }
  $runtime.fail();
})(Data$dString$dCodePoints.uncons);
const regexHasASCIIWords = /* #__PURE__ */ Data$dString$dRegex$dUnsafe.unsafeRegex("[^\u0000-/:-@[-`{-]+")({
  global: true,
  ignoreCase: false,
  multiline: false,
  dotAll: false,
  sticky: false,
  unicode: true
});
const regexHasUnicodeWords = /* #__PURE__ */ Data$dString$dRegex$dUnsafe.unsafeRegex("[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9]")({
  global: true,
  ignoreCase: false,
  multiline: false,
  dotAll: false,
  sticky: false,
  unicode: true
});
const regexUnicodeWords = /* #__PURE__ */ (() => {
  const rsBreakRange = "\\x{00ac}\\x{00b1}\\x{00d7}\\x{00f7}\\x{0000}-\\x{002f}\\x{003a}-\\x{0040}\\x{005b}-\\x{0060}\\x{007b}-\\x{00bf}\\x{2000}-\\x{206f} \\t\\x{000b}\\f\\x{00a0}\\x{feff}\\n\\r\\x{2028}\\x{2029}\\x{1680}\\x{180e}\\x{2000}\\x{2001}\\x{2002}\\x{2003}\\x{2004}\\x{2005}\\x{2006}\\x{2007}\\x{2008}\\x{2009}\\x{200a}\\x{202f}\\x{205f}\\x{3000}";
  const rsBreak = "[" + rsBreakRange + "]";
  const rsMisc = "[^\\x{10000}-\\x{10ffff}" + rsBreakRange + "\\d\\x{2700}-\\x{27bf}a-z\\x{00df}-\\x{00f6}\\x{00f8}-\\x{00ff}A-Z\\x{00c0}-\\x{00d6}\\x{00d8}-\\x{00de}]";
  const rsMiscLower = "(?:[a-z\\x{00df}-\\x{00f6}\\x{00f8}-\\x{00ff}]|" + rsMisc + ")";
  return Data$dString$dRegex$dUnsafe.unsafeRegex(Data$dString$dCommon.joinWith("|")([
    "[A-Z\\x{00c0}-\\x{00d6}\\x{00d8}-\\x{00de}]?[a-z\\x{00df}-\\x{00f6}\\x{00f8}-\\x{00ff}]+(?:['\\x{2019}](?:d|ll|m|re|s|t|ve))?(?=" + rsBreak + "|[A-Z\\x{00c0}-\\x{00d6}\\x{00d8}-\\x{00de}]|$)",
    "(?:[A-Z\\x{00c0}-\\x{00d6}\\x{00d8}-\\x{00de}]|" + rsMisc + ")+(?:['\\x{2019}](?:D|LL|M|RE|S|T|VE))?(?=" + rsBreak + "|[A-Z\\x{00c0}-\\x{00d6}\\x{00d8}-\\x{00de}]" + rsMiscLower + "|$)",
    "[A-Z\\x{00c0}-\\x{00d6}\\x{00d8}-\\x{00de}]?" + rsMiscLower + "+(?:['\\x{2019}](?:d|ll|m|re|s|t|ve))?",
    "[A-Z\\x{00c0}-\\x{00d6}\\x{00d8}-\\x{00de}]+(?:['\\x{2019}](?:D|LL|M|RE|S|T|VE))?",
    "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
    "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
    "\\d+",
    "(?:[\\x{2700}-\\x{27bf}]|(?:\\x{1f1e6}-\\x{1f1ff}){2}|[\\x{10000}-\\x{10ffff}])[\\x{fe0e}\\x{fe0f}]?(?:[\\x{0300}-\\x{036f}\\x{fe20}-\\x{fe2f}\\x{20d0}-\\x{20ff}\\x{1ab0}-\\x{1aff}\\x{1dc0}-\\x{1dff}]|\\x{1f3fb}-\\x{1f3ff})?(?:\\x{200d}(?:[^\\x{10000}-\\x{10ffff}]|(?:\\x{1f1e6}-\\x{1f1ff}){2}|[\\x{10000}-\\x{10ffff}])[\\x{fe0e}\\x{fe0f}]?(?:[\\x{0300}-\\x{036f}\\x{fe20}-\\x{fe2f}\\x{20d0}-\\x{20ff}\\x{1ab0}-\\x{1aff}\\x{1dc0}-\\x{1dff}]|\\x{1f3fb}-\\x{1f3ff})?)*"
  ]))({global: true, ignoreCase: false, multiline: false, dotAll: false, sticky: false, unicode: true});
})();
const unicodeWords = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v1 => {
  if (v1.tag === "Nothing") { return []; }
  if (v1.tag === "Just") { return Data$dArray$dNonEmpty.catMaybes(v1._1); }
  $runtime.fail();
})(/* #__PURE__ */ Data$dString$dRegex.match(regexUnicodeWords));
const hasUnicodeWords = /* #__PURE__ */ Data$dString$dRegex.test(regexHasUnicodeWords);
const asciiWords = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v1 => {
  if (v1.tag === "Nothing") { return []; }
  if (v1.tag === "Just") { return Data$dArray$dNonEmpty.catMaybes(v1._1); }
  $runtime.fail();
})(/* #__PURE__ */ Data$dString$dRegex.match(regexHasASCIIWords));
const words = string => {
  if (hasUnicodeWords(string)) { return unicodeWords(string); }
  return asciiWords(string);
};
const kebabCase = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Data$dString$dCommon.joinWith("-"))(/* #__PURE__ */ Data$dFunctor.arrayMap(Data$dString$dUnicode.toLower)))(words);
const pascalCase = /* #__PURE__ */ (() => Control$dSemigroupoid.composeImpl(Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidString)(upperCaseFirst))(words))();
const camelCase = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v1 => {
  if (v1.tag === "Nothing") { return ""; }
  if (v1.tag === "Just") { return Data$dString$dUnicode.toLower(v1._1.head) + Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidString)(pascalCase)(v1._1.tail); }
  $runtime.fail();
})(Data$dArray.uncons))(words);
const snakeCase = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ Data$dString$dCommon.joinWith("_"))(/* #__PURE__ */ Data$dFunctor.arrayMap(Data$dString$dUnicode.toLower)))(words);
export {asciiWords, camelCase, hasUnicodeWords, kebabCase, pascalCase, regexHasASCIIWords, regexHasUnicodeWords, regexUnicodeWords, snakeCase, unicodeWords, upperCaseFirst, words};
export * from "./foreign.js";
