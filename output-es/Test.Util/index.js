import * as $runtime from "../runtime.js";
import * as Control$dMonad$dExcept from "../Control.Monad.Except/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dSemigroup$dFoldable from "../Data.Semigroup.Foldable/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dException from "../Effect.Exception/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
import * as Yoga$dJSON$dError from "../Yoga.JSON.Error/index.js";
const shouldReadJSON = dictReadForeign => {
  const readJSON = Yoga$dJSON.readJSON(dictReadForeign);
  return v => Control$dSemigroupoid.composeImpl(v1 => {
    if (v1.tag === "Left") {
      return Control$dSemigroupoid.composeImpl(Effect$dAff._throwError)(Effect$dException.error)(Data$dSemigroup$dFoldable.intercalateMap(Data$dList$dTypes.foldable1NonEmptyList)(Data$dSemigroup.semigroupString)("\n")(Yoga$dJSON$dError.renderHumanError)(v1._1) + "\n" + Data$dSemigroup$dFoldable.intercalateMap(Data$dList$dTypes.foldable1NonEmptyList)(Data$dSemigroup.semigroupString)("\n")(Yoga$dJSON$dError.toJSONPath)(v1._1));
    }
    if (v1.tag === "Right") { return Effect$dAff._pure(); }
    $runtime.fail();
  })(readJSON);
};
const shouldRead = dictReadForeign => {
  const read = Control$dSemigroupoid.composeImpl(Control$dMonad$dExcept.runExcept)(dictReadForeign.readImpl);
  return v => Control$dSemigroupoid.composeImpl(v1 => {
    if (v1.tag === "Left") {
      return Control$dSemigroupoid.composeImpl(Effect$dAff._throwError)(Effect$dException.error)(Data$dSemigroup$dFoldable.intercalateMap(Data$dList$dTypes.foldable1NonEmptyList)(Data$dSemigroup.semigroupString)("\n")(Yoga$dJSON$dError.renderHumanError)(v1._1) + "\n" + Data$dSemigroup$dFoldable.intercalateMap(Data$dList$dTypes.foldable1NonEmptyList)(Data$dSemigroup.semigroupString)("\n")(Yoga$dJSON$dError.toJSONPath)(v1._1));
    }
    if (v1.tag === "Right") { return Effect$dAff._pure(); }
    $runtime.fail();
  })(read);
};
const roundtrips = dictShow => dictEq => dictReadForeign => dictWriteForeign => {
  const writeJSON = Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(dictWriteForeign.writeImpl);
  return x => Effect$dAff._bind(shouldRead(dictReadForeign)(Type$dProxy.Proxy)(dictWriteForeign.writeImpl(x)))(() => shouldReadJSON(dictReadForeign)(Type$dProxy.Proxy)(writeJSON(x)));
};
export {roundtrips, shouldRead, shouldReadJSON};
