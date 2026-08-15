import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dString$dCodePoints from "../Data.String.CodePoints/index.js";
import * as Data$dTraversable from "../Data.Traversable/index.js";
import * as Data$dTraversableWithIndex from "../Data.TraversableWithIndex/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
const fromFoldable = /* #__PURE__ */ Data$dFoldable.foldrArray(Data$dList$dTypes.Cons)(Data$dList$dTypes.Nil);
const traversableNonEmpty = /* #__PURE__ */ Data$dNonEmpty.traversableNonEmpty(Data$dTraversable.traversableArray);
const traversableNonEmpty1 = /* #__PURE__ */ Data$dNonEmpty.traversableNonEmpty(Data$dList$dTypes.traversableList);
const getFieldOptional$p = decoder => obj => str => {
  const $0 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, str, obj);
  if ($0.tag === "Nothing") { return Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
  if ($0.tag === "Just") {
    if (Data$dArgonaut$dCore._caseJson(v => true, v => false, v => false, v => false, v => false, v => false, $0._1)) { return Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
    const $1 = Control$dSemigroupoid.composeImpl((() => {
      const $1 = Data$dArgonaut$dDecode$dError.AtKey(str);
      return v2 => {
        if (v2.tag === "Left") { return Data$dEither.$Either("Left", $1(v2._1)); }
        if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
        $runtime.fail();
      };
    })())(decoder)($0._1);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $1._1)); }
  }
  $runtime.fail();
};
const getFieldOptional = decoder => obj => str => {
  const $0 = Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", m._1)); }
    $runtime.fail();
  })(Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.AtKey(str);
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(decoder));
  const $1 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, str, obj);
  if ($1.tag === "Nothing") { return Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
  if ($1.tag === "Just") { return $0($1._1); }
  $runtime.fail();
};
const getField = decoder => obj => str => {
  const $0 = Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.AtKey(str);
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(decoder);
  const $1 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, str, obj);
  if ($1.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtKey", str, Data$dArgonaut$dDecode$dError.MissingValue)); }
  if ($1.tag === "Just") { return $0($1._1); }
  $runtime.fail();
};
const decodeVoid = v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", Data$dArgonaut$dCore.fromString("Value cannot be Void")));
const decodeString = /* #__PURE__ */ Data$dArgonaut$dCore.caseJsonString(/* #__PURE__ */ Data$dEither.$Either(
  "Left",
  /* #__PURE__ */ Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
))(Data$dEither.Right);
const decodeNumber = /* #__PURE__ */ Data$dArgonaut$dCore.caseJsonNumber(/* #__PURE__ */ Data$dEither.$Either(
  "Left",
  /* #__PURE__ */ Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")
))(Data$dEither.Right);
const decodeNull = /* #__PURE__ */ Data$dArgonaut$dCore.caseJsonNull(/* #__PURE__ */ Data$dEither.$Either(
  "Left",
  /* #__PURE__ */ Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "null")
))(v => Data$dEither.$Either("Right", undefined));
const decodeNonEmptyString = json => {
  const $0 = Data$dArgonaut$dCore._caseJson(
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    Data$dEither.Right,
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    json
  );
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    if ($0._1 === "") {
      return Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("Named", "NonEmptyString", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", json))
      );
    }
    return Data$dEither.$Either("Right", $0._1);
  }
  $runtime.fail();
};
const decodeMaybe = decoder => json => {
  if (Data$dArgonaut$dCore._caseJson(v => true, v => false, v => false, v => false, v => false, v => false, json)) { return Data$dEither.$Either("Right", Data$dMaybe.Nothing); }
  const $0 = decoder(json);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", Data$dMaybe.$Maybe("Just", $0._1)); }
  $runtime.fail();
};
const decodeJObject = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v2 => {
  if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Object")); }
  if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
})(/* #__PURE__ */ Data$dArgonaut$dCore.caseJsonObject(Data$dMaybe.Nothing)(Data$dMaybe.Just));
const decodeJArray = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(v2 => {
  if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Array")); }
  if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
  $runtime.fail();
})(/* #__PURE__ */ Data$dArgonaut$dCore.caseJsonArray(Data$dMaybe.Nothing)(Data$dMaybe.Just));
const decodeList = decoder => {
  const $0 = Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.Named("List");
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(Data$dList$dTypes.traversableList.traverse(Data$dEither.applicativeEither)(decoder));
  const $1 = Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable(m._1)); }
    $runtime.fail();
  })(decodeJArray);
  return a => {
    const $2 = $1(a);
    if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
    if ($2.tag === "Right") { return $0($2._1); }
    $runtime.fail();
  };
};
const decodeSet = dictOrd => {
  const go = go$a0$copy => go$a1$copy => {
    let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
    while (go$c) {
      const b = go$a0, v = go$a1;
      if (v.tag === "Nil") {
        go$c = false;
        go$r = b;
        continue;
      }
      if (v.tag === "Cons") {
        go$a0 = Data$dMap$dInternal.insert(dictOrd)(v._1)()(b);
        go$a1 = v._2;
        continue;
      }
      $runtime.fail();
    }
    return go$r;
  };
  const fromFoldable2 = go(Data$dMap$dInternal.Leaf);
  return decoder => Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable2(m._1)); }
    $runtime.fail();
  })(decodeList(decoder));
};
const decodeNonEmptyArray = decoder => {
  const $0 = Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.Named("NonEmptyArray");
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(Data$dTraversable.traversableArray.traverse(Data$dEither.applicativeEither)(decoder));
  const $1 = Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", [m._1.head, ...m._1.tail]); }
    $runtime.fail();
  })(Control$dSemigroupoid.composeImpl(v2 => {
    if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "NonEmptyArray")); }
    if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
    $runtime.fail();
  })(Data$dArray.uncons));
  return a => {
    const $2 = decodeJArray(a);
    const $3 = (() => {
      if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
      if ($2.tag === "Right") { return $1($2._1); }
      $runtime.fail();
    })();
    if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
    if ($3.tag === "Right") { return $0($3._1); }
    $runtime.fail();
  };
};
const decodeNonEmptyList = decoder => {
  const $0 = Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.Named("NonEmptyList");
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(Data$dList$dTypes.traversableNonEmptyList.traverse(Data$dEither.applicativeEither)(decoder));
  const $1 = Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", Data$dNonEmpty.$NonEmpty(m._1.head, m._1.tail)); }
    $runtime.fail();
  })(Control$dSemigroupoid.composeImpl(v2 => {
    if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "NonEmptyList")); }
    if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
    $runtime.fail();
  })(Data$dList.uncons));
  const $2 = Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable(m._1)); }
    $runtime.fail();
  })(decodeJArray);
  return a => {
    const $3 = $2(a);
    const $4 = (() => {
      if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
      if ($3.tag === "Right") { return $1($3._1); }
      $runtime.fail();
    })();
    if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
    if ($4.tag === "Right") { return $0($4._1); }
    $runtime.fail();
  };
};
const decodeNonEmpty_Array = decoder => {
  const $0 = Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.Named("NonEmpty Array");
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(traversableNonEmpty.traverse(Data$dEither.applicativeEither)(decoder));
  const $1 = Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", Data$dNonEmpty.$NonEmpty(m._1.head, m._1.tail)); }
    $runtime.fail();
  })(Control$dSemigroupoid.composeImpl(v2 => {
    if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "NonEmpty Array")); }
    if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
    $runtime.fail();
  })(Data$dArray.uncons));
  return a => {
    const $2 = decodeJArray(a);
    const $3 = (() => {
      if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
      if ($2.tag === "Right") { return $1($2._1); }
      $runtime.fail();
    })();
    if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
    if ($3.tag === "Right") { return $0($3._1); }
    $runtime.fail();
  };
};
const decodeNonEmpty_List = decoder => {
  const $0 = Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.Named("NonEmpty List");
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(traversableNonEmpty1.traverse(Data$dEither.applicativeEither)(decoder));
  const $1 = Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", Data$dNonEmpty.$NonEmpty(m._1.head, m._1.tail)); }
    $runtime.fail();
  })(Control$dSemigroupoid.composeImpl(v2 => {
    if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "NonEmpty List")); }
    if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
    $runtime.fail();
  })(Data$dList.uncons));
  const $2 = Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable(m._1)); }
    $runtime.fail();
  })(decodeJArray);
  return a => {
    const $3 = $2(a);
    const $4 = (() => {
      if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
      if ($3.tag === "Right") { return $1($3._1); }
      $runtime.fail();
    })();
    if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
    if ($4.tag === "Right") { return $0($4._1); }
    $runtime.fail();
  };
};
const decodeInt = /* #__PURE__ */ (() => {
  const $0 = Control$dSemigroupoid.composeImpl(v2 => {
    if (v2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Integer")); }
    if (v2.tag === "Just") { return Data$dEither.$Either("Right", v2._1); }
    $runtime.fail();
  })(Data$dInt.fromNumber);
  return a => {
    const $1 = Data$dArgonaut$dCore._caseJson(
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
      Data$dEither.Right,
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Number")),
      a
    );
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return $0($1._1); }
    $runtime.fail();
  };
})();
const decodeIdentity = decoder => json => {
  const $0 = decoder(json);
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") { return Data$dEither.$Either("Right", $0._1); }
  $runtime.fail();
};
const decodeForeignObject = decoder => {
  const $0 = Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.Named("ForeignObject");
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(Control$dSemigroupoid.composeImpl(Foreign$dObject.traversableWithIndexObject.traverseWithIndex(Data$dEither.applicativeEither))(Data$dFunction.const)(decoder));
  return a => {
    const $1 = decodeJObject(a);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return $0($1._1); }
    $runtime.fail();
  };
};
const decodeEither = decoderA => decoderB => json => {
  const $0 = Data$dArgonaut$dDecode$dError.Named("Either");
  const $1 = decodeJObject(json);
  const $2 = (() => {
    if ($1.tag === "Left") {
      const $2 = $1._1;
      return v => Data$dEither.$Either("Left", $2);
    }
    if ($1.tag === "Right") {
      const $2 = $1._1;
      return f => f($2);
    }
    $runtime.fail();
  })()(obj => {
    const $2 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, "tag", obj);
    if ($2.tag === "Nothing") { return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtKey", "tag", Data$dArgonaut$dDecode$dError.MissingValue)); }
    if ($2.tag === "Just") {
      const $3 = Foreign$dObject._lookup(Data$dMaybe.Nothing, Data$dMaybe.Just, "value", obj);
      if ($3.tag === "Nothing") {
        return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtKey", "value", Data$dArgonaut$dDecode$dError.MissingValue));
      }
      if ($3.tag === "Just") {
        const v = Data$dArgonaut$dCore._caseJson(
          v => Data$dMaybe.Nothing,
          v => Data$dMaybe.Nothing,
          v => Data$dMaybe.Nothing,
          Data$dMaybe.Just,
          v => Data$dMaybe.Nothing,
          v => Data$dMaybe.Nothing,
          $2._1
        );
        if (v.tag === "Just") {
          if (v._1 === "Right") {
            const $4 = decoderB($3._1);
            if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
            if ($4.tag === "Right") { return Data$dEither.$Either("Right", Data$dEither.$Either("Right", $4._1)); }
            $runtime.fail();
          }
          if (v._1 === "Left") {
            const $4 = decoderA($3._1);
            if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
            if ($4.tag === "Right") { return Data$dEither.$Either("Right", Data$dEither.$Either("Left", $4._1)); }
            $runtime.fail();
          }
        }
        return Data$dEither.$Either(
          "Left",
          Data$dArgonaut$dDecode$dError.$JsonDecodeError("AtKey", "tag", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", $2._1))
        );
      }
    }
    $runtime.fail();
  });
  if ($2.tag === "Left") { return Data$dEither.$Either("Left", $0($2._1)); }
  if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1); }
  $runtime.fail();
};
const decodeCodePoint = json => {
  const $0 = Data$dArgonaut$dCore._caseJson(
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    Data$dEither.Right,
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
    json
  );
  if ($0.tag === "Left") { return Data$dEither.$Either("Left", $0._1); }
  if ($0.tag === "Right") {
    const $1 = Data$dString$dCodePoints.codePointAt(0)($0._1);
    if ($1.tag === "Nothing") {
      return Data$dEither.$Either(
        "Left",
        Data$dArgonaut$dDecode$dError.$JsonDecodeError("Named", "CodePoint", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", json))
      );
    }
    if ($1.tag === "Just") { return Data$dEither.$Either("Right", $1._1); }
  }
  $runtime.fail();
};
const decodeBoolean = /* #__PURE__ */ Data$dArgonaut$dCore.caseJsonBoolean(/* #__PURE__ */ Data$dEither.$Either(
  "Left",
  /* #__PURE__ */ Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Boolean")
))(Data$dEither.Right);
const decodeArray = decoder => {
  const $0 = Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.Named("Array");
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(Data$dTraversableWithIndex.traverseWithIndexDefault(Data$dTraversableWithIndex.traversableWithIndexArray)(Data$dEither.applicativeEither)(i => Control$dSemigroupoid.composeImpl((() => {
    const $0 = Data$dArgonaut$dDecode$dError.AtIndex(i);
    return v2 => {
      if (v2.tag === "Left") { return Data$dEither.$Either("Left", $0(v2._1)); }
      if (v2.tag === "Right") { return Data$dEither.$Either("Right", v2._1); }
      $runtime.fail();
    };
  })())(decoder)));
  return a => {
    const $1 = decodeJArray(a);
    if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
    if ($1.tag === "Right") { return $0($1._1); }
    $runtime.fail();
  };
};
const decodeTuple = decoderA => decoderB => json => {
  const $0 = decodeArray(Data$dEither.Right)(json);
  return (() => {
    if ($0.tag === "Left") {
      const $1 = $0._1;
      return v => Data$dEither.$Either("Left", $1);
    }
    if ($0.tag === "Right") {
      const $1 = $0._1;
      return f => f($1);
    }
    $runtime.fail();
  })()(v => {
    if (v.length === 2) {
      const $1 = decoderA(v[0]);
      if ($1.tag === "Left") { return Data$dEither.$Either("Left", $1._1); }
      if ($1.tag === "Right") {
        const $2 = decoderB(v[1]);
        if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
        if ($2.tag === "Right") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple($1._1, $2._1)); }
      }
      $runtime.fail();
    }
    return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Tuple"));
  });
};
const decodeMap = dictOrd => {
  const fromFoldable2 = Data$dMap$dInternal.fromFoldable(dictOrd)(Data$dList$dTypes.foldableList);
  return decoderA => decoderB => Control$dSemigroupoid.composeImpl(m => {
    if (m.tag === "Left") { return Data$dEither.$Either("Left", m._1); }
    if (m.tag === "Right") { return Data$dEither.$Either("Right", fromFoldable2(m._1)); }
    $runtime.fail();
  })(decodeList(decodeTuple(decoderA)(decoderB)));
};
export {
  decodeArray,
  decodeBoolean,
  decodeCodePoint,
  decodeEither,
  decodeForeignObject,
  decodeIdentity,
  decodeInt,
  decodeJArray,
  decodeJObject,
  decodeList,
  decodeMap,
  decodeMaybe,
  decodeNonEmptyArray,
  decodeNonEmptyList,
  decodeNonEmptyString,
  decodeNonEmpty_Array,
  decodeNonEmpty_List,
  decodeNull,
  decodeNumber,
  decodeSet,
  decodeString,
  decodeTuple,
  decodeVoid,
  fromFoldable,
  getField,
  getFieldOptional,
  getFieldOptional$p,
  traversableNonEmpty,
  traversableNonEmpty1
};
