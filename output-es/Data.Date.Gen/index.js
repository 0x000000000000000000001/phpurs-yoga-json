import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dDate from "../Data.Date/index.js";
import * as Data$dDate$dComponent from "../Data.Date.Component/index.js";
import * as Data$dDate$dComponent$dGen from "../Data.Date.Component.Gen/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTime$dDuration from "../Data.Time.Duration/index.js";
const genDate = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const Bind1 = Monad0.Bind1();
  const Functor0 = Monad0.Bind1().Apply0().Functor0();
  return Bind1.bind(Data$dDate$dComponent$dGen.genYear(dictMonadGen))(year => Bind1.bind(Functor0.map(Control$dSemigroupoid.composeImpl(Data$dTime$dDuration.Days)(Data$dInt.toNumber))(dictMonadGen.chooseInt(0)(Data$dDate.isLeapYear(year)
    ? 365
    : 364)))(days => Monad0.Applicative0().pure((() => {
    const $0 = Data$dDate.exactDate(year)(Data$dDate$dComponent.January)(1);
    const $1 = (() => {
      if ($0.tag === "Just") { return Data$dDate.adjust(days)($0._1); }
      if ($0.tag === "Nothing") { return Data$dMaybe.Nothing; }
      $runtime.fail();
    })();
    if ($1.tag === "Just") { return $1._1; }
    $runtime.fail();
  })())));
};
export {genDate};
