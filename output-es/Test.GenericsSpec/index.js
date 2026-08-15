import * as $runtime from "../runtime.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dGeneric$dRep from "../Data.Generic.Rep/index.js";
import * as Data$dIdentity from "../Data.Identity/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dShow$dGeneric from "../Data.Show.Generic/index.js";
import * as Data$dString$dExtra from "../Data.String.Extra/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Test$dSpec from "../Test.Spec/index.js";
import * as Test$dSpec$dAssertions from "../Test.Spec.Assertions/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Test$dUtil from "../Test.Util/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
import * as Yoga$dJSON$dGenerics$dEnumSumRep from "../Yoga.JSON.Generics.EnumSumRep/index.js";
import * as Yoga$dJSON$dGenerics$dTaggedSumRep from "../Yoga.JSON.Generics.TaggedSumRep/index.js";
import * as Yoga$dJSON$dGenerics$dUntaggedProductRep from "../Yoga.JSON.Generics.UntaggedProductRep/index.js";
import * as Yoga$dJSON$dGenerics$dUntaggedSumRep from "../Yoga.JSON.Generics.UntaggedSumRep/index.js";
const $DoubleTrouble = (_1, _2) => ({tag: "IntAndString", _1, _2});
const $HalfEnum = (tag, _1) => ({tag, _1});
const $IntOrString = (tag, _1) => ({tag, _1});
const $IntOrStringTagged = (tag, _1) => ({tag, _1});
const $MyEnum = tag => tag;
const $MyEnum2 = tag => tag;
const Enum1IsSymbol = {reflectSymbol: () => "Enum1"};
const Enum2IsSymbol = {reflectSymbol: () => "Enum2"};
const Enum3IsSymbol = {reflectSymbol: () => "Enum3"};
const genericEnumSumRepSum = /* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepSum(/* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepConstruc(Enum1IsSymbol))(/* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepSum(/* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepConstruc(Enum2IsSymbol))(/* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepConstruc(Enum3IsSymbol)));
const SomeEnum2IsSymbol = {reflectSymbol: () => "SomeEnum2"};
const SomeOtherEnum2IsSymbol = {reflectSymbol: () => "SomeOtherEnum2"};
const SomeThirdEnum3IsSymbol = {reflectSymbol: () => "SomeThirdEnum3"};
const genericEnumSumRepSum1 = /* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepSum(/* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepConstruc(SomeEnum2IsSymbol))(/* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepSum(/* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepConstruc(SomeOtherEnum2IsSymbol))(/* #__PURE__ */ Yoga$dJSON$dGenerics$dEnumSumRep.genericEnumSumRepConstruc(SomeThirdEnum3IsSymbol)));
const genericShowArgsArgument = {genericShowArgs: v => [Data$dShow.showIntImpl(v)]};
const genericShowArgsArgument1 = {genericShowArgs: v => [Data$dShow.showStringImpl(v)]};
const readGenericTaggedSumRepCo1 = /* #__PURE__ */ Yoga$dJSON$dGenerics$dTaggedSumRep.readGenericTaggedSumRepCo1({
  genericReadForeignTaggedSumRep: v => f => {
    const $0 = Foreign.readInt(Data$dIdentity.monadIdentity)(f);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
    $runtime.fail();
  }
});
const ATaggedIntIsSymbol = {reflectSymbol: () => "ATaggedInt"};
const ATaggedStringIsSymbol = {reflectSymbol: () => "ATaggedString"};
const NotEnumIsSymbol = {reflectSymbol: () => "NotEnum"};
const IsEnumIsSymbol = {reflectSymbol: () => "IsEnum"};
const bindSpecT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupArray)(Data$dIdentity.bindIdentity);
const SomeEnum2 = /* #__PURE__ */ $MyEnum2("SomeEnum2");
const SomeOtherEnum2 = /* #__PURE__ */ $MyEnum2("SomeOtherEnum2");
const SomeThirdEnum3 = /* #__PURE__ */ $MyEnum2("SomeThirdEnum3");
const Enum1 = /* #__PURE__ */ $MyEnum("Enum1");
const Enum2 = /* #__PURE__ */ $MyEnum("Enum2");
const Enum3 = /* #__PURE__ */ $MyEnum("Enum3");
const ATaggedInt = value0 => $IntOrStringTagged("ATaggedInt", value0);
const ATaggedString = value0 => $IntOrStringTagged("ATaggedString", value0);
const AnInt = value0 => $IntOrString("AnInt", value0);
const AString = value0 => $IntOrString("AString", value0);
const NotEnum = value0 => $HalfEnum("NotEnum", value0);
const IsEnum = /* #__PURE__ */ $HalfEnum("IsEnum");
const IntAndString = value0 => value1 => $DoubleTrouble(value0, value1);
const genericMyEnum_ = {
  to: x => {
    if (x.tag === "Inl") { return Enum1; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return Enum2; }
      if (x._1.tag === "Inr") { return Enum3; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "Enum1") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "Enum2") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "Enum3") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const readForeignMyEnum = {
  readImpl: f => {
    const $0 = genericEnumSumRepSum.genericEnumReadForeign(Yoga$dJSON$dGenerics$dEnumSumRep.defaultOptions)(f);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") {
      return Data$dEither.$Either(
        "Right",
        (() => {
          if ($0._1.tag === "Inl") { return Enum1; }
          if ($0._1.tag === "Inr") {
            if ($0._1._1.tag === "Inl") { return Enum2; }
            if ($0._1._1.tag === "Inr") { return Enum3; }
          }
          $runtime.fail();
        })()
      );
    }
    $runtime.fail();
  }
};
const showMyEnum = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)(Enum1IsSymbol);
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)(Enum2IsSymbol);
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)(Enum3IsSymbol);
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"]((() => {
      if (x === "Enum1") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
      if (x === "Enum2") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
      if (x === "Enum3") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
      $runtime.fail();
    })());
  })()
};
const writeForeignMyEnum = {
  writeImpl: a => genericEnumSumRepSum.genericEnumWriteForeign(Yoga$dJSON$dGenerics$dEnumSumRep.defaultOptions)((() => {
    if (a === "Enum1") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (a === "Enum2") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (a === "Enum3") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  })())
};
const genericMyEnum2_ = {
  to: x => {
    if (x.tag === "Inl") { return SomeEnum2; }
    if (x.tag === "Inr") {
      if (x._1.tag === "Inl") { return SomeOtherEnum2; }
      if (x._1.tag === "Inr") { return SomeThirdEnum3; }
    }
    $runtime.fail();
  },
  from: x => {
    if (x === "SomeEnum2") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (x === "SomeOtherEnum2") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (x === "SomeThirdEnum3") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  }
};
const readForeignMyEnum2 = {
  readImpl: f => {
    const $0 = genericEnumSumRepSum1.genericEnumReadForeign({toConstructorName: Data$dString$dExtra.snakeCase})(f);
    if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
    if ($0.tag === "Right") {
      return Data$dEither.$Either(
        "Right",
        (() => {
          if ($0._1.tag === "Inl") { return SomeEnum2; }
          if ($0._1.tag === "Inr") {
            if ($0._1._1.tag === "Inl") { return SomeOtherEnum2; }
            if ($0._1._1.tag === "Inr") { return SomeThirdEnum3; }
          }
          $runtime.fail();
        })()
      );
    }
    $runtime.fail();
  }
};
const showMyEnum2 = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)(SomeEnum2IsSymbol);
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)(SomeOtherEnum2IsSymbol);
    const $2 = (() => {
      const $2 = (() => {
        const $2 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)(SomeThirdEnum3IsSymbol);
        return {
          "genericShow'": v => {
            if (v.tag === "Inl") { return $1["genericShow'"](v._1); }
            if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
            $runtime.fail();
          }
        };
      })();
      return {
        "genericShow'": v => {
          if (v.tag === "Inl") { return $0["genericShow'"](v._1); }
          if (v.tag === "Inr") { return $2["genericShow'"](v._1); }
          $runtime.fail();
        }
      };
    })();
    return x => $2["genericShow'"]((() => {
      if (x === "SomeEnum2") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
      if (x === "SomeOtherEnum2") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
      if (x === "SomeThirdEnum3") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
      $runtime.fail();
    })());
  })()
};
const writeForeignMyEnum2 = {
  writeImpl: a => genericEnumSumRepSum1.genericEnumWriteForeign({toConstructorName: Data$dString$dExtra.snakeCase})((() => {
    if (a === "SomeEnum2") { return Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments); }
    if (a === "SomeOtherEnum2") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inl", Data$dGeneric$dRep.NoArguments)); }
    if (a === "SomeThirdEnum3") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments)); }
    $runtime.fail();
  })())
};
const genericIntOrString_ = {
  to: x => {
    if (x.tag === "Inl") { return $IntOrString("AnInt", x._1); }
    if (x.tag === "Inr") { return $IntOrString("AString", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "AnInt") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "AString") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const readForeignIntOrString = {
  readImpl: /* #__PURE__ */ (() => {
    const $0 = Yoga$dJSON$dGenerics$dUntaggedSumRep.readGenericUntaggedSumRep1({
      genericReadForeignUntaggedSumRep: f => {
        const $0 = Foreign.readInt(Data$dIdentity.monadIdentity)(f);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
        $runtime.fail();
      }
    })({
      genericReadForeignUntaggedSumRep: f => {
        const $0 = Yoga$dJSON.readString(f);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
        $runtime.fail();
      }
    });
    return f => {
      const $1 = $0.genericReadForeignUntaggedSumRep(f);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") {
        return Data$dEither.$Either(
          "Right",
          (() => {
            if ($1._1.tag === "Inl") { return $IntOrString("AnInt", $1._1._1); }
            if ($1._1.tag === "Inr") { return $IntOrString("AString", $1._1._1); }
            $runtime.fail();
          })()
        );
      }
      $runtime.fail();
    };
  })()
};
const showIntOrString = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)({reflectSymbol: () => "AnInt"});
    const $1 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument1)({reflectSymbol: () => "AString"});
    return x => {
      if (x.tag === "AnInt") { return $0["genericShow'"](x._1); }
      if (x.tag === "AString") { return $1["genericShow'"](x._1); }
      $runtime.fail();
    };
  })()
};
const writeForeignIntOrString = {
  writeImpl: a => {
    if (a.tag === "AnInt") { return a._1; }
    if (a.tag === "AString") { return a._1; }
    $runtime.fail();
  }
};
const genericIntOrStringTagged_ = {
  to: x => {
    if (x.tag === "Inl") { return $IntOrStringTagged("ATaggedInt", x._1); }
    if (x.tag === "Inr") { return $IntOrStringTagged("ATaggedString", x._1); }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "ATaggedInt") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "ATaggedString") { return Data$dGeneric$dRep.$Sum("Inr", x._1); }
    $runtime.fail();
  }
};
const readForeignIntOrStringTag = {
  readImpl: /* #__PURE__ */ (() => {
    const $0 = Yoga$dJSON$dGenerics$dTaggedSumRep.readGenericTaggedSumRepSu(readGenericTaggedSumRepCo1(ATaggedIntIsSymbol))(Yoga$dJSON$dGenerics$dTaggedSumRep.readGenericTaggedSumRepCo1({
      genericReadForeignTaggedSumRep: v => f => {
        const $0 = Yoga$dJSON.readString(f);
        if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
        if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
        $runtime.fail();
      }
    })(ATaggedStringIsSymbol));
    return f => {
      const $1 = $0.genericReadForeignTaggedSumRep(Yoga$dJSON$dGenerics$dTaggedSumRep.defaultOptions)(f);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") {
        return Data$dEither.$Either(
          "Right",
          (() => {
            if ($1._1.tag === "Inl") { return $IntOrStringTagged("ATaggedInt", $1._1._1); }
            if ($1._1.tag === "Inr") { return $IntOrStringTagged("ATaggedString", $1._1._1); }
            $runtime.fail();
          })()
        );
      }
      $runtime.fail();
    };
  })()
};
const showIntOrStringTagged = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)(ATaggedIntIsSymbol);
    const $1 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument1)(ATaggedStringIsSymbol);
    return x => {
      if (x.tag === "ATaggedInt") { return $0["genericShow'"](x._1); }
      if (x.tag === "ATaggedString") { return $1["genericShow'"](x._1); }
      $runtime.fail();
    };
  })()
};
const writeForeignIntOrStringTa = {
  writeImpl: /* #__PURE__ */ (() => {
    const $0 = Yoga$dJSON$dGenerics$dTaggedSumRep.writeGenericTaggedSumRepC({genericWriteForeignTaggedSumRep: v => v1 => v1})(ATaggedIntIsSymbol);
    const $1 = Yoga$dJSON$dGenerics$dTaggedSumRep.writeGenericTaggedSumRepC({genericWriteForeignTaggedSumRep: v => v1 => v1})(ATaggedStringIsSymbol);
    return r => {
      if (r.tag === "ATaggedInt") { return $0.genericWriteForeignTaggedSumRep(Yoga$dJSON$dGenerics$dTaggedSumRep.defaultOptions)(r._1); }
      if (r.tag === "ATaggedString") { return $1.genericWriteForeignTaggedSumRep(Yoga$dJSON$dGenerics$dTaggedSumRep.defaultOptions)(r._1); }
      $runtime.fail();
    };
  })()
};
const genericHalfEnum_ = {
  to: x => {
    if (x.tag === "Inl") { return $HalfEnum("NotEnum", x._1); }
    if (x.tag === "Inr") { return IsEnum; }
    $runtime.fail();
  },
  from: x => {
    if (x.tag === "NotEnum") { return Data$dGeneric$dRep.$Sum("Inl", x._1); }
    if (x.tag === "IsEnum") { return Data$dGeneric$dRep.$Sum("Inr", Data$dGeneric$dRep.NoArguments); }
    $runtime.fail();
  }
};
const showHalfEnum = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(genericShowArgsArgument)(NotEnumIsSymbol);
    const $1 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsNoArguments)(IsEnumIsSymbol);
    return x => {
      if (x.tag === "NotEnum") { return $0["genericShow'"](x._1); }
      if (x.tag === "IsEnum") { return $1["genericShow'"](Data$dGeneric$dRep.NoArguments); }
      $runtime.fail();
    };
  })()
};
const genericDoubleTrouble_ = {to: x => $DoubleTrouble(x._1, x._2), from: x => Data$dGeneric$dRep.$Product(x._1, x._2)};
const readForeignDoubleTrouble = {
  readImpl: /* #__PURE__ */ (() => {
    const $0 = Yoga$dJSON$dGenerics$dUntaggedProductRep.readGenericUntaggedProduc2(Yoga$dJSON$dGenerics$dUntaggedProductRep.readGenericUntaggedProduc(Yoga$dJSON.readForeignInt))(Yoga$dJSON$dGenerics$dUntaggedProductRep.readGenericUntaggedProduc(Yoga$dJSON.readForeignString));
    return f => {
      const $1 = $0.genericReadForeignUntaggedProductRep(0)(f);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") { return Data$dEither.$Either("Right", $DoubleTrouble($1._1._1, $1._1._2)); }
      $runtime.fail();
    };
  })()
};
const showDoubleTrouble = {
  show: /* #__PURE__ */ (() => {
    const $0 = Data$dShow$dGeneric.genericShowConstructor(Data$dShow$dGeneric.genericShowArgsProduct(genericShowArgsArgument)(genericShowArgsArgument1))({
      reflectSymbol: () => "IntAndString"
    });
    return x => $0["genericShow'"](Data$dGeneric$dRep.$Product(x._1, x._2));
  })()
};
const writeForeignDoubleTrouble = {
  writeImpl: /* #__PURE__ */ Yoga$dJSON$dGenerics$dUntaggedProductRep.genericWriteForeignUntaggedProduct(genericDoubleTrouble_)({
    genericWriteForeignUntaggedProductRep: arr => v => Data$dArray.snoc(Data$dArray.snoc(arr)(v._1))(v._2)
  })
};
const eqMyEnum2 = {
  eq: x => y => {
    if (x === "SomeEnum2") { return y === "SomeEnum2"; }
    if (x === "SomeOtherEnum2") { return y === "SomeOtherEnum2"; }
    return x === "SomeThirdEnum3" && y === "SomeThirdEnum3";
  }
};
const eqMyEnum = {
  eq: x => y => {
    if (x === "Enum1") { return y === "Enum1"; }
    if (x === "Enum2") { return y === "Enum2"; }
    return x === "Enum3" && y === "Enum3";
  }
};
const eqIntOrStringTagged = {
  eq: x => y => {
    if (x.tag === "ATaggedInt") { return y.tag === "ATaggedInt" && x._1 === y._1; }
    return x.tag === "ATaggedString" && y.tag === "ATaggedString" && x._1 === y._1;
  }
};
const eqIntOrString = {
  eq: x => y => {
    if (x.tag === "AnInt") { return y.tag === "AnInt" && x._1 === y._1; }
    return x.tag === "AString" && y.tag === "AString" && x._1 === y._1;
  }
};
const eqHalfEnum = {
  eq: x => y => {
    if (x.tag === "NotEnum") { return y.tag === "NotEnum" && x._1 === y._1; }
    return x.tag === "IsEnum" && y.tag === "IsEnum";
  }
};
const eqDoubleTrouble = {eq: x => y => x._1 === y._1 && x._2 === y._2};
const halfEnumOptions = {typeTag: "kind", valueTag: "data", toConstructorName: Data$dString$dExtra.snakeCase};
const readForeignHalfEnum = {
  readImpl: /* #__PURE__ */ (() => {
    const $0 = Yoga$dJSON$dGenerics$dTaggedSumRep.readGenericTaggedSumRepSu(readGenericTaggedSumRepCo1(NotEnumIsSymbol))(Yoga$dJSON$dGenerics$dTaggedSumRep.readGenericTaggedSumRepCo(IsEnumIsSymbol));
    return f => {
      const $1 = $0.genericReadForeignTaggedSumRep(halfEnumOptions)(f);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") {
        return Data$dEither.$Either(
          "Right",
          (() => {
            if ($1._1.tag === "Inl") { return $HalfEnum("NotEnum", $1._1._1); }
            if ($1._1.tag === "Inr") { return IsEnum; }
            $runtime.fail();
          })()
        );
      }
      $runtime.fail();
    };
  })()
};
const writeForeignHalfEnum = {
  writeImpl: /* #__PURE__ */ (() => {
    const $0 = Yoga$dJSON$dGenerics$dTaggedSumRep.writeGenericTaggedSumRepC({genericWriteForeignTaggedSumRep: v => v1 => v1})(NotEnumIsSymbol);
    const $1 = Yoga$dJSON$dGenerics$dTaggedSumRep.writeGenericTaggedSumRepC(Yoga$dJSON$dGenerics$dTaggedSumRep.writeGenericTaggedSumRepN)(IsEnumIsSymbol);
    return r => {
      if (r.tag === "NotEnum") { return $0.genericWriteForeignTaggedSumRep(halfEnumOptions)(r._1); }
      if (r.tag === "IsEnum") { return $1.genericWriteForeignTaggedSumRep(halfEnumOptions)(Data$dGeneric$dRep.NoArguments); }
      $runtime.fail();
    };
  })()
};
const spec = /* #__PURE__ */ (() => {
  const $0 = bindSpecT.bind((() => {
    const $0 = bindSpecT.bind((() => {
      const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showMyEnum)(eqMyEnum)(readForeignMyEnum)(writeForeignMyEnum)(Enum1))(() => Test$dUtil.roundtrips(showMyEnum)(eqMyEnum)(readForeignMyEnum)(writeForeignMyEnum)(Enum3)));
      return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "MyEnum = Enum1 | Enum2 | Enum3"), $0._2)]);
    })())(() => {
      const $0 = Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showMyEnum2)(eqMyEnum2)(readForeignMyEnum2)(writeForeignMyEnum2)(SomeOtherEnum2))(() => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignMyEnum2.writeImpl)(SomeThirdEnum3))("\"some_third_enum_3\"")));
      return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "works with custom constructor names"), $0._2)]);
    });
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "Enum"), $0._2)]);
  })())(() => bindSpecT.bind((() => {
    const $0 = bindSpecT.bind((() => {
      const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showIntOrString)(eqIntOrString)(readForeignIntOrString)(writeForeignIntOrString)($IntOrString(
        "AnInt",
        1
      )))(() => Test$dUtil.roundtrips(showIntOrString)(eqIntOrString)(readForeignIntOrString)(writeForeignIntOrString)($IntOrString("AString", "Abc")))))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("serialises without tags")(Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignIntOrString.writeImpl)($IntOrString(
        "AnInt",
        1
      )))("1"))(() => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignIntOrString.writeImpl)($IntOrString(
        "AString",
        "Abc"
      )))("\"Abc\""))));
      return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "IntOrString = AnInt Int | AString String"), $0._2)]);
    })())(() => {
      const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Test$dUtil.roundtrips(showDoubleTrouble)(eqDoubleTrouble)(readForeignDoubleTrouble)(writeForeignDoubleTrouble)($DoubleTrouble(
        1,
        "Freddy"
      ))))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("serialises without tags")(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignDoubleTrouble.writeImpl)($DoubleTrouble(
        1,
        "Freddy"
      )))("[1,\"Freddy\"]")));
      return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "data DoubleTrouble = IntAndString Int String"), $0._2)]);
    });
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "Untagged"), $0._2)]);
  })())(() => {
    const $0 = bindSpecT.bind((() => {
      const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showIntOrStringTagged)(eqIntOrStringTagged)(readForeignIntOrStringTag)(writeForeignIntOrStringTa)($IntOrStringTagged(
        "ATaggedInt",
        1
      )))(() => Test$dUtil.roundtrips(showIntOrStringTagged)(eqIntOrStringTagged)(readForeignIntOrStringTag)(writeForeignIntOrStringTa)($IntOrStringTagged(
        "ATaggedString",
        "HOHOHOHO"
      )))))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("serialises with tags")(Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignIntOrStringTa.writeImpl)($IntOrStringTagged(
        "ATaggedInt",
        1
      )))("{\"type\":\"ATaggedInt\",\"value\":1}"))(() => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignIntOrStringTa.writeImpl)($IntOrStringTagged(
        "ATaggedString",
        "Abc"
      )))("{\"type\":\"ATaggedString\",\"value\":\"Abc\"}"))));
      return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "IntOrStringTagged = ATaggedInt Int | ATaggedString String"), $0._2)]);
    })())(() => {
      const $0 = bindSpecT.bind(Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("roundtrips")(Effect$dAff._bind(Test$dUtil.roundtrips(showHalfEnum)(eqHalfEnum)(readForeignHalfEnum)(writeForeignHalfEnum)($HalfEnum(
        "NotEnum",
        1
      )))(() => Test$dUtil.roundtrips(showHalfEnum)(eqHalfEnum)(readForeignHalfEnum)(writeForeignHalfEnum)(IsEnum))))(() => Test$dSpec.it(Data$dIdentity.monadIdentity)(Test$dSpec.exampleMUnit)("serialises with tags")(Effect$dAff._bind(Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignHalfEnum.writeImpl)($HalfEnum(
        "NotEnum",
        1
      )))("{\"kind\":\"not_enum\",\"data\":1}"))(() => Test$dSpec$dAssertions.shouldEqual(Effect$dAff.monadThrowAff)(Data$dShow.showString)(Data$dEq.eqString)(Control$dSemigroupoid.composeImpl(Yoga$dJSON._unsafeStringify)(writeForeignHalfEnum.writeImpl)(IsEnum))("{\"kind\":\"is_enum\"}"))));
      return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "data HalfEnum = NotEnum Int | IsEnum"), $0._2)]);
    });
    return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "Tagged"), $0._2)]);
  }));
  return Data$dTuple.$Tuple($0._1, [Test$dSpec$dTree.$Tree("Node", Data$dEither.$Either("Left", "Generics"), $0._2)]);
})();
export {
  $DoubleTrouble,
  $HalfEnum,
  $IntOrString,
  $IntOrStringTagged,
  $MyEnum,
  $MyEnum2,
  AString,
  ATaggedInt,
  ATaggedIntIsSymbol,
  ATaggedString,
  ATaggedStringIsSymbol,
  AnInt,
  Enum1,
  Enum1IsSymbol,
  Enum2,
  Enum2IsSymbol,
  Enum3,
  Enum3IsSymbol,
  IntAndString,
  IsEnum,
  IsEnumIsSymbol,
  NotEnum,
  NotEnumIsSymbol,
  SomeEnum2,
  SomeEnum2IsSymbol,
  SomeOtherEnum2,
  SomeOtherEnum2IsSymbol,
  SomeThirdEnum3,
  SomeThirdEnum3IsSymbol,
  bindSpecT,
  eqDoubleTrouble,
  eqHalfEnum,
  eqIntOrString,
  eqIntOrStringTagged,
  eqMyEnum,
  eqMyEnum2,
  genericDoubleTrouble_,
  genericEnumSumRepSum,
  genericEnumSumRepSum1,
  genericHalfEnum_,
  genericIntOrStringTagged_,
  genericIntOrString_,
  genericMyEnum2_,
  genericMyEnum_,
  genericShowArgsArgument,
  genericShowArgsArgument1,
  halfEnumOptions,
  readForeignDoubleTrouble,
  readForeignHalfEnum,
  readForeignIntOrString,
  readForeignIntOrStringTag,
  readForeignMyEnum,
  readForeignMyEnum2,
  readGenericTaggedSumRepCo1,
  showDoubleTrouble,
  showHalfEnum,
  showIntOrString,
  showIntOrStringTagged,
  showMyEnum,
  showMyEnum2,
  spec,
  writeForeignDoubleTrouble,
  writeForeignHalfEnum,
  writeForeignIntOrString,
  writeForeignIntOrStringTa,
  writeForeignMyEnum,
  writeForeignMyEnum2
};
