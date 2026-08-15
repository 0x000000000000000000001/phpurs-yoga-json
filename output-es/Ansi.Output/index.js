// | Convenience functions to simplify outputting ANSI escape codes to
// | terminals.
import * as Ansi$dCodes from "../Ansi.Codes/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
const withGraphics = params => text => Ansi$dCodes.escapeCodeToString(Ansi$dCodes.$EscapeCode("Graphics", params)) + text + Ansi$dCodes.escapeCodeToString(Ansi$dCodes.$EscapeCode(
  "Graphics",
  Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.Reset)
));
const underline = /* #__PURE__ */ (() => Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.$GraphicsParam("PMode", Ansi$dCodes.Underline)))();
const strikethrough = /* #__PURE__ */ (() => Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.$GraphicsParam("PMode", Ansi$dCodes.Strikethrough)))();
const italic = /* #__PURE__ */ (() => Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.$GraphicsParam("PMode", Ansi$dCodes.Italic)))();
const inverse = /* #__PURE__ */ (() => Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.$GraphicsParam("PMode", Ansi$dCodes.Inverse)))();
const foreground = c => Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.$GraphicsParam("PForeground", c));
const dim = /* #__PURE__ */ (() => Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.$GraphicsParam("PMode", Ansi$dCodes.Dim)))();
const bold = /* #__PURE__ */ (() => Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.$GraphicsParam("PMode", Ansi$dCodes.Bold)))();
const background = c => Data$dList$dTypes.applicativeNonEmptyList.pure(Ansi$dCodes.$GraphicsParam("PBackground", c));
export {background, bold, dim, foreground, inverse, italic, strikethrough, underline, withGraphics};
