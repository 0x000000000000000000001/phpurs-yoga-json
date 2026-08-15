import * as $runtime from "../runtime.js";
import * as Ansi$dCodes from "../Ansi.Codes/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList$dNonEmpty from "../Data.List.NonEmpty/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
const yellow = [/* #__PURE__ */ Ansi$dCodes.$GraphicsParam("PForeground", Ansi$dCodes.Yellow)];
const styled = as => str => {
  const v = Control$dSemigroupoid.composeImpl(Data$dList$dNonEmpty.fromList)(Data$dFoldable.foldrArray(Data$dList$dTypes.Cons)(Data$dList$dTypes.Nil))(as);
  if (v.tag === "Nothing") { return str; }
  if (v.tag === "Just") {
    return Ansi$dCodes.escapeCodeToString(Ansi$dCodes.$EscapeCode("Graphics", v._1)) + str + Ansi$dCodes.escapeCodeToString(Ansi$dCodes.$EscapeCode(
      "Graphics",
      Data$dList$dNonEmpty.singleton(Ansi$dCodes.Reset)
    ));
  }
  $runtime.fail();
};
const red = [/* #__PURE__ */ Ansi$dCodes.$GraphicsParam("PForeground", Ansi$dCodes.Red)];
const magenta = [/* #__PURE__ */ Ansi$dCodes.$GraphicsParam("PForeground", Ansi$dCodes.Magenta)];
const indent = i => Data$dString$dCodeUnits.fromCharArray(Data$dArray.replicateImpl(i, " "));
const green = [/* #__PURE__ */ Ansi$dCodes.$GraphicsParam("PForeground", Ansi$dCodes.Green)];
const dim = [/* #__PURE__ */ Ansi$dCodes.$GraphicsParam("PMode", Ansi$dCodes.Dim)];
const cyan = [/* #__PURE__ */ Ansi$dCodes.$GraphicsParam("PForeground", Ansi$dCodes.Cyan)];
const bold = [/* #__PURE__ */ Ansi$dCodes.$GraphicsParam("PMode", Ansi$dCodes.Bold)];
export {bold, cyan, dim, green, indent, magenta, red, styled, yellow};
