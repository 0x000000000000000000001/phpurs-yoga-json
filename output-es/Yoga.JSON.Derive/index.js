import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const writeVia = () => dictWriteForeign => Control$dSemigroupoid.composeImpl(dictWriteForeign.writeImpl)(Unsafe$dCoerce.unsafeCoerce);
const readVia = () => dictReadForeign => fgn => {
  const $0 = dictReadForeign.readImpl(fgn);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
export {readVia, writeVia};
