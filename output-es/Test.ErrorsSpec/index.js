import * as $runtime from "../runtime.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
import * as Test$dSpec from "../Test.Spec/index.js";
import * as Test$dSpec$dAssertions from "../Test.Spec.Assertions/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
import * as Yoga$dJSON$dError from "../Yoga.JSON.Error/index.js";
const fromFoldable = $0 => Data$dArray.fromFoldableImpl(Data$dList$dTypes.foldableNonEmptyList.foldr, $0);
const bindSpecT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupArray)(Data$dIdentity.bindIdentity);
const readForeignObject = /* #__PURE__ */ Yoga$dJSON.readForeignObject(Yoga$dJSON.readForeignInt);
const showEither = /* #__PURE__ */ (() => {
  const $0 = Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError);
  return dictShow1 => (
    {
      show: v => {
        if (v.tag === "Left") { return "(Left " + $0.show(v._1) + ")"; }
        if (v.tag === "Right") { return "(Right " + dictShow1.show(v._1) + ")"; }
        $runtime.fail();
      }
    }
  );
})();
const showObject = /* #__PURE__ */ Foreign$dObject.showObject(Data$dShow.showInt);
const eqEither = dictEq1 => (
  {
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
      return x.tag === "Right" && y.tag === "Right" && dictEq1.eq(x._1)(y._1);
    }
  }
);
const eqObject = /* #__PURE__ */ Foreign$dObject.eqObject(Data$dEq.eqInt);
const aIsSymbol = {reflectSymbol: () => "a"};
const bIsSymbol = {reflectSymbol: () => "b"};
const readForeignRecord1 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.readForeignFieldsCons(aIsSymbol)(Yoga$dJSON.readForeignInt)(Yoga$dJSON.readForeignFieldsCons(bIsSymbol)(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()())()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const showEither1 = /* #__PURE__ */ showEither({show: record => "{ a: " + Data$dShow.showIntImpl(record.a) + ", b: " + Data$dShow.showStringImpl(record.b) + " }"});
const eqEither1 = /* #__PURE__ */ eqEither({eq: ra => rb => ra.a === rb.a && ra.b === rb.b});
const readForeignArray = /* #__PURE__ */ Yoga$dJSON.readForeignArray(Yoga$dJSON.readForeignInt);
const showEither2 = /* #__PURE__ */ showEither({show: /* #__PURE__ */ Data$dShow.showArrayImpl(Data$dShow.showIntImpl)});
const eqEither2 = /* #__PURE__ */ eqEither({eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqIntImpl)});
const showArray = {show: /* #__PURE__ */ Data$dShow.showArrayImpl(Data$dShow.showStringImpl)};
const showEither3 = dictShow1 => (
  {
    show: v => {
      if (v.tag === "Left") { return "(Left " + showArray.show(v._1) + ")"; }
      if (v.tag === "Right") { return "(Right " + dictShow1.show(v._1) + ")"; }
      $runtime.fail();
    }
  }
);
const showEither4 = /* #__PURE__ */ showEither3(showObject);
const eqArray = {eq: /* #__PURE__ */ Data$dEq.eqArrayImpl(Data$dEq.eqStringImpl)};
const eqEither3 = dictEq1 => (
  {
    eq: x => y => {
      if (x.tag === "Left") { return y.tag === "Left" && eqArray.eq(x._1)(y._1); }
      return x.tag === "Right" && y.tag === "Right" && dictEq1.eq(x._1)(y._1);
    }
  }
);
const eqEither4 = /* #__PURE__ */ eqEither3(eqObject);
const cIsSymbol = {reflectSymbol: () => "c"};
const dIsSymbol = {reflectSymbol: () => "d"};
const readForeignRecord2 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.readForeignFieldsCons(aIsSymbol)((() => {
    const $0 = Yoga$dJSON.readForeignFieldsCons(bIsSymbol)((() => {
      const $0 = Yoga$dJSON.readForeignFieldsCons(cIsSymbol)((() => {
        const $0 = Yoga$dJSON.readForeignFieldsCons(dIsSymbol)(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()();
        return {
          readImpl: o => {
            const $1 = $0.getFields(Type$dProxy.Proxy)(o);
            if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
            if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
            $runtime.fail();
          }
        };
      })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
      return {
        readImpl: o => {
          const $1 = $0.getFields(Type$dProxy.Proxy)(o);
          if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
          if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
          $runtime.fail();
        }
      };
    })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
    return {
      readImpl: o => {
        const $1 = $0.getFields(Type$dProxy.Proxy)(o);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
        $runtime.fail();
      }
    };
  })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const showEither5 = /* #__PURE__ */ showEither3({show: record => "{ a: { b: { c: { d: " + Data$dShow.showStringImpl(record.a.b.c.d) + " } } } }"});
const eqEither5 = /* #__PURE__ */ eqEither3({eq: ra => rb => ra.a.b.c.d === rb.a.b.c.d});
const showMaybe = {
  show: v => {
    if (v.tag === "Just") { return "(Just " + showArray.show(v._1) + ")"; }
    if (v.tag === "Nothing") { return "Nothing"; }
    $runtime.fail();
  }
};
const eqMaybe = {
  eq: x => y => {
    if (x.tag === "Nothing") { return y.tag === "Nothing"; }
    return x.tag === "Just" && y.tag === "Just" && eqArray.eq(x._1)(y._1);
  }
};
const readForeignRecord3 = {
  readImpl: o => {
    const $0 = Yoga$dJSON.applicativeExceptT1.pure(x => x);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1({})); }
    $runtime.fail();
  }
};
const readForeignRecord4 = /* #__PURE__ */ (() => {
  const $0 = Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "deeply"})((() => {
    const $0 = Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "nested"})((() => {
      const $0 = Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "array"})(Yoga$dJSON.readForeignArray((() => {
        const $0 = Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "of"})((() => {
          const $0 = Yoga$dJSON.readForeignFieldsCons({reflectSymbol: () => "values"})(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()();
          return {
            readImpl: o => {
              const $1 = $0.getFields(Type$dProxy.Proxy)(o);
              if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
              if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
              $runtime.fail();
            }
          };
        })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
        return {
          readImpl: o => {
            const $1 = $0.getFields(Type$dProxy.Proxy)(o);
            if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
            if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
            $runtime.fail();
          }
        };
      })()))(Yoga$dJSON.readForeignFieldsNilRowRo)()();
      return {
        readImpl: o => {
          const $1 = $0.getFields(Type$dProxy.Proxy)(o);
          if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
          if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
          $runtime.fail();
        }
      };
    })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
    return {
      readImpl: o => {
        const $1 = $0.getFields(Type$dProxy.Proxy)(o);
        if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
        if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
        $runtime.fail();
      }
    };
  })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
  return {
    readImpl: o => {
      const $1 = $0.getFields(Type$dProxy.Proxy)(o);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1({})); }
      $runtime.fail();
    }
  };
})();
const getErrorPath = dictReadForeign => v => x => {
  const $0 = Yoga$dJSON.readJSON(dictReadForeign)(x);
  if ($0.tag === "Left") {
    return Data$dMaybe.$Maybe(
      "Just",
      Data$dArray.fromFoldableImpl(
        Data$dList$dTypes.foldableNonEmptyList.foldr,
        Data$dNonEmpty.$NonEmpty(Yoga$dJSON$dError.toJSONPath($0._1._1), Data$dList$dTypes.listMap(Yoga$dJSON$dError.toJSONPath)($0._1._2))
      )
    );
  }
  if ($0.tag === "Right") { return Data$dMaybe.Nothing; }
  $runtime.fail();
};
const spec = /* #__PURE__ */ (() => {
  const $0 = bindSpecT.bind((() => {
    const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("returns multiple errors for object")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither(showObject))(eqEither(eqObject))(Yoga$dJSON.readJSON(readForeignObject)("{ \"something\": \"no\", \"else\": true }"))(Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.semigroupNonEmptyList.append(Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError(
        "ErrorAtProperty",
        "something",
        Foreign.$ForeignError("TypeMismatch", "Int", "String")
      )))(Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError("ErrorAtProperty", "else", Foreign.$ForeignError("TypeMismatch", "Int", "Boolean"))))
    ))))(() => bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("returns multiple errors for record")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither1)(eqEither1)(Yoga$dJSON.readJSON(readForeignRecord1)("{ \"b\": true }"))(Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.semigroupNonEmptyList.append(Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError(
        "ErrorAtProperty",
        "a",
        Foreign.$ForeignError("TypeMismatch", "Int", "Undefined")
      )))(Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError("ErrorAtProperty", "b", Foreign.$ForeignError("TypeMismatch", "String", "Boolean"))))
    ))))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("returns multiple errors for array")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither2)(eqEither2)(Yoga$dJSON.readJSON(readForeignArray)("[1,\"a\",2,true]"))(Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.semigroupNonEmptyList.append(Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError(
        "ErrorAtIndex",
        1,
        Foreign.$ForeignError("TypeMismatch", "Int", "String")
      )))(Data$dList$dTypes.applicativeNonEmptyList.pure(Foreign.$ForeignError("ErrorAtIndex", 3, Foreign.$ForeignError("TypeMismatch", "Int", "Boolean"))))
    )))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "are returned at once"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("For some object")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither4)(eqEither4)((() => {
      const $0 = Control$dSemigroupoid.composeImpl(fromFoldable)(Data$dList$dTypes.functorNonEmptyList.map(Yoga$dJSON$dError.renderHumanError));
      const $1 = Yoga$dJSON.readJSON(readForeignObject)("{ \"something\": \"no\", \"else\": true }");
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })())(Data$dEither.$Either(
      "Left",
      ["Must provide a value of type 'Int' instead of 'String' at $.something", "Must provide a value of type 'Int' instead of 'Boolean' at $.else"]
    ))))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("For deeply nested keys")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showEither5)(eqEither5)((() => {
      const $0 = Control$dSemigroupoid.composeImpl(fromFoldable)(Data$dList$dTypes.functorNonEmptyList.map(Yoga$dJSON$dError.renderHumanError));
      const $1 = Yoga$dJSON.readJSON(readForeignRecord2)("{ \"a\": { \"b\": { \"c\": { }}}}");
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $0($1._1)); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $1._1); }
      $runtime.fail();
    })())(Data$dEither.$Either("Left", ["Must provide a value of type 'String' at $.a.b.c.d"]))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "produces human-friendly errors"), $0._2)]);
  })())(() => {
    const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("empty json")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showMaybe)(eqMaybe)(getErrorPath(readForeignRecord3)(Type$dProxy.Proxy)(""))(Data$dMaybe.$Maybe(
      "Just",
      ["$"]
    ))))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("nested json json")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(showMaybe)(eqMaybe)(getErrorPath(readForeignRecord4)(Type$dProxy.Proxy)("\n          { \"deeply\": { \"nested\": { \"array\":\n            [ { \"of\": { \"values\": \"hello\" } }\n              , 8\n            ]\n          } } }"))(Data$dMaybe.$Maybe(
      "Just",
      ["$.deeply.nested.array[1].of"]
    ))));
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "have the correct JSON path"), $0._2)]);
  }));
  return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "Errors"), $0._2)]);
})();
export {
  aIsSymbol,
  bIsSymbol,
  bindSpecT,
  cIsSymbol,
  dIsSymbol,
  eqArray,
  eqEither,
  eqEither1,
  eqEither2,
  eqEither3,
  eqEither4,
  eqEither5,
  eqMaybe,
  eqObject,
  fromFoldable,
  getErrorPath,
  readForeignArray,
  readForeignObject,
  readForeignRecord1,
  readForeignRecord2,
  readForeignRecord3,
  readForeignRecord4,
  showArray,
  showEither,
  showEither1,
  showEither2,
  showEither3,
  showEither4,
  showEither5,
  showMaybe,
  showObject,
  spec
};
