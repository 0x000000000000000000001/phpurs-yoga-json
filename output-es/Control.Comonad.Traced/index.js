// | This module defines the `Traced` comonad.
import * as Control$dComonad$dTraced$dTrans from "../Control.Comonad.Traced.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
const traced = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(Control$dComonad$dTraced$dTrans.TracedT)(Data$dIdentity.Identity);
const runTraced = v => v;
export {runTraced, traced};
