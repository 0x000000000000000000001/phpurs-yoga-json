import * as $runtime from "../runtime.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Test$dSpec from "../Test.Spec/index.js";
import * as Test$dSpec$dAssertions from "../Test.Spec.Assertions/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const myIntIsSymbol = {reflectSymbol: () => "myInt"};
const myStringIsSymbol = {reflectSymbol: () => "myString"};
const MyString = x => x;
const MyInt = x => x;
const MyRecord = x => x;
const writeForeignMyRecord = {
  writeImpl: /* #__PURE__ */ Control$dSemigroupoid.composeImpl(/* #__PURE__ */ (() => {
    const $0 = Yoga$dJSON.writeForeignFieldsCons(myIntIsSymbol)(Yoga$dJSON.writeForeignInt)(Yoga$dJSON.writeForeignFieldsCons(myStringIsSymbol)(Yoga$dJSON.writeForeignString)(Yoga$dJSON.writeForeignFieldsNilRowR)()()())()()();
    return rec => $0.writeImplFields(Type$dProxy.Proxy)(rec)({});
  })())(Unsafe$dCoerce.unsafeCoerce)
};
const showMyRecord = /* #__PURE__ */ (() => ({show: Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignMyRecord.writeImpl)}))();
const showEither = /* #__PURE__ */ (() => {
  const $0 = Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError);
  return {
    show: v => {
      if (v.tag === "Left") { return "(Left " + $0.show(v._1) + ")"; }
      if (v.tag === "Right") { return "(Right " + showMyRecord.show(v._1) + ")"; }
      $runtime.fail();
    }
  };
})();
const readForeignMyRecord = {
  readImpl: /* #__PURE__ */ (() => {
    const $0 = Yoga$dJSON.readForeignFieldsCons(myIntIsSymbol)(Yoga$dJSON.readForeignInt)(Yoga$dJSON.readForeignFieldsCons(myStringIsSymbol)(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()())()();
    return fgn => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(fgn);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    };
  })()
};
const eqMyString = {eq: x => y => x === y};
const eqMyInt = {eq: x => y => x === y};
const eqMyRecord = {eq: x => y => x.myInt === y.myInt && x.myString === y.myString};
const eqEither = {
  eq: x => y => {
    if (x.tag === "Left") {
      return y.tag === "Left" && Foreign.eqForeignError.eq(x._1._1)(y._1._1) && (() => {
        const go = v => v1 => v2 => {
          if (!v2) { return false; }
          if (v.tag === "Nil") { return v1.tag === "Nil" && v2; }
          return v.tag === "Cons" && v1.tag === "Cons" && go(v._2)(v1._2)(v2 && Foreign.eqForeignError.eq(v1._1)(v._1));
        };
        return go(x._1._2)(y._1._2)(true);
      })();
    }
    return x.tag === "Right" && y.tag === "Right" && x._1.myInt === y._1.myInt && x._1.myString === y._1.myString;
  }
};
const spec = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupArray)(Data$dIdentity.bindIdentity).bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("writing works")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignMyRecord.writeImpl)({
    myInt: 3,
    myString: "A"
  }))("{\"myString\":\"A\",\"myInt\":3}")))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("reading works")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither)(eqEither)(Yoga$dJSON.readJSON(readForeignMyRecord)("{\"myString\":\"A\",\"myInt\":3}"))(Data$dEither.$Either(
    "Right",
    {myInt: 3, myString: "A"}
  ))));
  return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "En- and decoding with Coercibles"), $0._2)]);
})();
export {
  MyInt,
  MyRecord,
  MyString,
  eqEither,
  eqMyInt,
  eqMyRecord,
  eqMyString,
  myIntIsSymbol,
  myStringIsSymbol,
  readForeignMyRecord,
  showEither,
  showMyRecord,
  spec,
  writeForeignMyRecord
};
