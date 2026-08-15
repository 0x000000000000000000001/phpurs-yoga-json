import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
const toJsonString = dictEncodeJson => Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.stringify)(dictEncodeJson.encodeJson);
export {toJsonString};
