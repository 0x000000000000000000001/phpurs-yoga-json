import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import * as Data$dShow from "../Data.Show/index.js";
const $Month = tag => tag;
const $Weekday = tag => tag;
const Monday = /* #__PURE__ */ $Weekday("Monday");
const Tuesday = /* #__PURE__ */ $Weekday("Tuesday");
const Wednesday = /* #__PURE__ */ $Weekday("Wednesday");
const Thursday = /* #__PURE__ */ $Weekday("Thursday");
const Friday = /* #__PURE__ */ $Weekday("Friday");
const Saturday = /* #__PURE__ */ $Weekday("Saturday");
const Sunday = /* #__PURE__ */ $Weekday("Sunday");
const January = /* #__PURE__ */ $Month("January");
const February = /* #__PURE__ */ $Month("February");
const March = /* #__PURE__ */ $Month("March");
const April = /* #__PURE__ */ $Month("April");
const May = /* #__PURE__ */ $Month("May");
const June = /* #__PURE__ */ $Month("June");
const July = /* #__PURE__ */ $Month("July");
const August = /* #__PURE__ */ $Month("August");
const September = /* #__PURE__ */ $Month("September");
const October = /* #__PURE__ */ $Month("October");
const November = /* #__PURE__ */ $Month("November");
const December = /* #__PURE__ */ $Month("December");
const showYear = {show: v => "(Year " + Data$dShow.showIntImpl(v) + ")"};
const showWeekday = {
  show: v => {
    if (v === "Monday") { return "Monday"; }
    if (v === "Tuesday") { return "Tuesday"; }
    if (v === "Wednesday") { return "Wednesday"; }
    if (v === "Thursday") { return "Thursday"; }
    if (v === "Friday") { return "Friday"; }
    if (v === "Saturday") { return "Saturday"; }
    if (v === "Sunday") { return "Sunday"; }
    $runtime.fail();
  }
};
const showMonth = {
  show: v => {
    if (v === "January") { return "January"; }
    if (v === "February") { return "February"; }
    if (v === "March") { return "March"; }
    if (v === "April") { return "April"; }
    if (v === "May") { return "May"; }
    if (v === "June") { return "June"; }
    if (v === "July") { return "July"; }
    if (v === "August") { return "August"; }
    if (v === "September") { return "September"; }
    if (v === "October") { return "October"; }
    if (v === "November") { return "November"; }
    if (v === "December") { return "December"; }
    $runtime.fail();
  }
};
const showDay = {show: v => "(Day " + Data$dShow.showIntImpl(v) + ")"};
const ordYear = Data$dOrd.ordInt;
const ordDay = Data$dOrd.ordInt;
const eqYear = Data$dEq.eqInt;
const eqWeekday = {
  eq: x => y => {
    if (x === "Monday") { return y === "Monday"; }
    if (x === "Tuesday") { return y === "Tuesday"; }
    if (x === "Wednesday") { return y === "Wednesday"; }
    if (x === "Thursday") { return y === "Thursday"; }
    if (x === "Friday") { return y === "Friday"; }
    if (x === "Saturday") { return y === "Saturday"; }
    return x === "Sunday" && y === "Sunday";
  }
};
const ordWeekday = {
  compare: x => y => {
    if (x === "Monday") {
      if (y === "Monday") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Monday") { return Data$dOrdering.GT; }
    if (x === "Tuesday") {
      if (y === "Tuesday") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Tuesday") { return Data$dOrdering.GT; }
    if (x === "Wednesday") {
      if (y === "Wednesday") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Wednesday") { return Data$dOrdering.GT; }
    if (x === "Thursday") {
      if (y === "Thursday") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Thursday") { return Data$dOrdering.GT; }
    if (x === "Friday") {
      if (y === "Friday") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Friday") { return Data$dOrdering.GT; }
    if (x === "Saturday") {
      if (y === "Saturday") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "Saturday") { return Data$dOrdering.GT; }
    if (x === "Sunday" && y === "Sunday") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqWeekday
};
const eqMonth = {
  eq: x => y => {
    if (x === "January") { return y === "January"; }
    if (x === "February") { return y === "February"; }
    if (x === "March") { return y === "March"; }
    if (x === "April") { return y === "April"; }
    if (x === "May") { return y === "May"; }
    if (x === "June") { return y === "June"; }
    if (x === "July") { return y === "July"; }
    if (x === "August") { return y === "August"; }
    if (x === "September") { return y === "September"; }
    if (x === "October") { return y === "October"; }
    if (x === "November") { return y === "November"; }
    return x === "December" && y === "December";
  }
};
const ordMonth = {
  compare: x => y => {
    if (x === "January") {
      if (y === "January") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "January") { return Data$dOrdering.GT; }
    if (x === "February") {
      if (y === "February") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "February") { return Data$dOrdering.GT; }
    if (x === "March") {
      if (y === "March") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "March") { return Data$dOrdering.GT; }
    if (x === "April") {
      if (y === "April") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "April") { return Data$dOrdering.GT; }
    if (x === "May") {
      if (y === "May") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "May") { return Data$dOrdering.GT; }
    if (x === "June") {
      if (y === "June") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "June") { return Data$dOrdering.GT; }
    if (x === "July") {
      if (y === "July") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "July") { return Data$dOrdering.GT; }
    if (x === "August") {
      if (y === "August") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "August") { return Data$dOrdering.GT; }
    if (x === "September") {
      if (y === "September") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "September") { return Data$dOrdering.GT; }
    if (x === "October") {
      if (y === "October") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "October") { return Data$dOrdering.GT; }
    if (x === "November") {
      if (y === "November") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y === "November") { return Data$dOrdering.GT; }
    if (x === "December" && y === "December") { return Data$dOrdering.EQ; }
    $runtime.fail();
  },
  Eq0: () => eqMonth
};
const eqDay = Data$dEq.eqInt;
const boundedYear = {bottom: -271820, top: 275759, Ord0: () => Data$dOrd.ordInt};
const boundedWeekday = {bottom: Monday, top: Sunday, Ord0: () => ordWeekday};
const boundedMonth = {bottom: January, top: December, Ord0: () => ordMonth};
const boundedEnumYear = {
  cardinality: 547580,
  toEnum: n => {
    if (n >= -271820 && n <= 275759) { return Data$dMaybe.$Maybe("Just", n); }
    return Data$dMaybe.Nothing;
  },
  fromEnum: v => v,
  Bounded0: () => boundedYear,
  Enum1: () => enumYear$lazy()
};
const enumYear$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    succ: Control$dSemigroupoid.composeImpl(boundedEnumYear.toEnum)(Control$dSemigroupoid.composeImpl(v => v + 1 | 0)(boundedEnumYear.fromEnum)),
    pred: Control$dSemigroupoid.composeImpl(boundedEnumYear.toEnum)(Control$dSemigroupoid.composeImpl(v => v - 1 | 0)(boundedEnumYear.fromEnum)),
    Ord0: () => Data$dOrd.ordInt
  }
));
const enumYear = /* #__PURE__ */ enumYear$lazy();
const boundedEnumWeekday = {
  cardinality: 7,
  toEnum: v => {
    if (v === 1) { return Data$dMaybe.$Maybe("Just", Monday); }
    if (v === 2) { return Data$dMaybe.$Maybe("Just", Tuesday); }
    if (v === 3) { return Data$dMaybe.$Maybe("Just", Wednesday); }
    if (v === 4) { return Data$dMaybe.$Maybe("Just", Thursday); }
    if (v === 5) { return Data$dMaybe.$Maybe("Just", Friday); }
    if (v === 6) { return Data$dMaybe.$Maybe("Just", Saturday); }
    if (v === 7) { return Data$dMaybe.$Maybe("Just", Sunday); }
    return Data$dMaybe.Nothing;
  },
  fromEnum: v => {
    if (v === "Monday") { return 1; }
    if (v === "Tuesday") { return 2; }
    if (v === "Wednesday") { return 3; }
    if (v === "Thursday") { return 4; }
    if (v === "Friday") { return 5; }
    if (v === "Saturday") { return 6; }
    if (v === "Sunday") { return 7; }
    $runtime.fail();
  },
  Bounded0: () => boundedWeekday,
  Enum1: () => enumWeekday$lazy()
};
const enumWeekday$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    succ: Control$dSemigroupoid.composeImpl(boundedEnumWeekday.toEnum)(Control$dSemigroupoid.composeImpl(v => v + 1 | 0)(boundedEnumWeekday.fromEnum)),
    pred: Control$dSemigroupoid.composeImpl(boundedEnumWeekday.toEnum)(Control$dSemigroupoid.composeImpl(v => v - 1 | 0)(boundedEnumWeekday.fromEnum)),
    Ord0: () => ordWeekday
  }
));
const enumWeekday = /* #__PURE__ */ enumWeekday$lazy();
const boundedEnumMonth = {
  cardinality: 12,
  toEnum: v => {
    if (v === 1) { return Data$dMaybe.$Maybe("Just", January); }
    if (v === 2) { return Data$dMaybe.$Maybe("Just", February); }
    if (v === 3) { return Data$dMaybe.$Maybe("Just", March); }
    if (v === 4) { return Data$dMaybe.$Maybe("Just", April); }
    if (v === 5) { return Data$dMaybe.$Maybe("Just", May); }
    if (v === 6) { return Data$dMaybe.$Maybe("Just", June); }
    if (v === 7) { return Data$dMaybe.$Maybe("Just", July); }
    if (v === 8) { return Data$dMaybe.$Maybe("Just", August); }
    if (v === 9) { return Data$dMaybe.$Maybe("Just", September); }
    if (v === 10) { return Data$dMaybe.$Maybe("Just", October); }
    if (v === 11) { return Data$dMaybe.$Maybe("Just", November); }
    if (v === 12) { return Data$dMaybe.$Maybe("Just", December); }
    return Data$dMaybe.Nothing;
  },
  fromEnum: v => {
    if (v === "January") { return 1; }
    if (v === "February") { return 2; }
    if (v === "March") { return 3; }
    if (v === "April") { return 4; }
    if (v === "May") { return 5; }
    if (v === "June") { return 6; }
    if (v === "July") { return 7; }
    if (v === "August") { return 8; }
    if (v === "September") { return 9; }
    if (v === "October") { return 10; }
    if (v === "November") { return 11; }
    if (v === "December") { return 12; }
    $runtime.fail();
  },
  Bounded0: () => boundedMonth,
  Enum1: () => enumMonth$lazy()
};
const enumMonth$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    succ: Control$dSemigroupoid.composeImpl(boundedEnumMonth.toEnum)(Control$dSemigroupoid.composeImpl(v => v + 1 | 0)(boundedEnumMonth.fromEnum)),
    pred: Control$dSemigroupoid.composeImpl(boundedEnumMonth.toEnum)(Control$dSemigroupoid.composeImpl(v => v - 1 | 0)(boundedEnumMonth.fromEnum)),
    Ord0: () => ordMonth
  }
));
const enumMonth = /* #__PURE__ */ enumMonth$lazy();
const boundedDay = {bottom: 1, top: 31, Ord0: () => Data$dOrd.ordInt};
const boundedEnumDay = {
  cardinality: 31,
  toEnum: n => {
    if (n >= 1 && n <= 31) { return Data$dMaybe.$Maybe("Just", n); }
    return Data$dMaybe.Nothing;
  },
  fromEnum: v => v,
  Bounded0: () => boundedDay,
  Enum1: () => enumDay$lazy()
};
const enumDay$lazy = /* #__PURE__ */ $runtime.binding(() => (
  {
    succ: Control$dSemigroupoid.composeImpl(boundedEnumDay.toEnum)(Control$dSemigroupoid.composeImpl(v => v + 1 | 0)(boundedEnumDay.fromEnum)),
    pred: Control$dSemigroupoid.composeImpl(boundedEnumDay.toEnum)(Control$dSemigroupoid.composeImpl(v => v - 1 | 0)(boundedEnumDay.fromEnum)),
    Ord0: () => Data$dOrd.ordInt
  }
));
const enumDay = /* #__PURE__ */ enumDay$lazy();
export {
  $Month,
  $Weekday,
  April,
  August,
  December,
  February,
  Friday,
  January,
  July,
  June,
  March,
  May,
  Monday,
  November,
  October,
  Saturday,
  September,
  Sunday,
  Thursday,
  Tuesday,
  Wednesday,
  boundedDay,
  boundedEnumDay,
  boundedEnumMonth,
  boundedEnumWeekday,
  boundedEnumYear,
  boundedMonth,
  boundedWeekday,
  boundedYear,
  enumDay,
  enumMonth,
  enumWeekday,
  enumYear,
  eqDay,
  eqMonth,
  eqWeekday,
  eqYear,
  ordDay,
  ordMonth,
  ordWeekday,
  ordYear,
  showDay,
  showMonth,
  showWeekday,
  showYear
};
