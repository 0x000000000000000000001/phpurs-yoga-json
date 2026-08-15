import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dParser from "../Data.Argonaut.Parser/index.js";
import * as Data$dEither from "../Data.Either/index.js";
const parseJson = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v2 => {
  if (v2.tag === "Left") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "JSON")); }
  if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
})(Data$dArgonaut$dParser.jsonParser);
export {parseJson};
