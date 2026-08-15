import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArgonaut$dDecode$dClass from "../Data.Argonaut.Decode.Class/index.js";
import * as Data$dArgonaut$dDecode$dDecoders from "../Data.Argonaut.Decode.Decoders/index.js";
import * as Data$dArgonaut$dDecode$dError from "../Data.Argonaut.Decode.Error/index.js";
import * as Data$dArgonaut$dEncode$dClass from "../Data.Argonaut.Encode.Class/index.js";
import * as Data$dArgonaut$dEncode$dEncoders from "../Data.Argonaut.Encode.Encoders/index.js";
import * as Data$dArgonaut$dParser from "../Data.Argonaut.Parser/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunction from "../Data.Function/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dNow from "../Effect.Now/index.js";
import * as Node$dEncoding from "../Node.Encoding/index.js";
import * as Node$dFS$dAff from "../Node.FS.Aff/index.js";
import * as Node$dFS$dAsync from "../Node.FS.Async/index.js";
import * as Test$dSpec$dTree from "../Test.Spec.Tree/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const timestampIsSymbol = {reflectSymbol: () => "timestamp"};
const successIsSymbol = {reflectSymbol: () => "success"};
const unions = /* #__PURE__ */ Data$dMap$dInternal.unions(Data$dOrd.ordString)(Data$dFoldable.foldableArray);
const Timestamp = x => x;
const newtypeTimestamp_ = {Coercible0: () => {}};
const encodeJsonTimestamp = {encodeJson: v => Data$dArgonaut$dCore.fromString(Data$dShow.showNumberImpl(v))};
const encodeJson = /* #__PURE__ */ (() => {
  const $0 = Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(Data$dArgonaut$dEncode$dClass.encodeJsonJBoolean)(Data$dArgonaut$dEncode$dClass.gEncodeJsonCons(encodeJsonTimestamp)(Data$dArgonaut$dEncode$dClass.gEncodeJsonNil)(timestampIsSymbol)())(successIsSymbol)();
  return Data$dArgonaut$dEncode$dEncoders.encodeMap(Data$dOrd.ordString)(Data$dArgonaut$dCore.fromString)(rec => Data$dArgonaut$dCore.fromObject($0.gEncodeJson(rec)(Type$dProxy.Proxy)));
})();
const decodeJsonTimestamp = {
  decodeJson: j => {
    const $0 = Data$dArgonaut$dCore._caseJson(
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      Data$dEither.Right,
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")),
      j
    );
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
    })()(str => {
      const $1 = Data$dNumber.fromStringImpl(str, Data$dNumber.isFinite, Data$dMaybe.Just, Data$dMaybe.Nothing);
      if ($1.tag === "Just" && $1._1 >= -8639977881600000.0 && $1._1 <= 8639977881599999.0) { return Data$dEither.$Either("Right", $1._1); }
      return Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("UnexpectedValue", j));
    });
  }
};
const decodeJson = /* #__PURE__ */ (() => Data$dArgonaut$dDecode$dDecoders.decodeMap(Data$dOrd.ordString)(Data$dArgonaut$dCore.caseJsonString(Data$dEither.$Either(
  "Left",
  Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "String")
))(Data$dEither.Right))(Data$dArgonaut$dDecode$dClass.decodeRecord(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") {
      return Data$dMaybe.$Maybe(
        "Just",
        Data$dArgonaut$dCore._caseJson(
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Boolean")),
          Data$dEither.Right,
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Boolean")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Boolean")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Boolean")),
          v => Data$dEither.$Either("Left", Data$dArgonaut$dDecode$dError.$JsonDecodeError("TypeMismatch", "Boolean")),
          j._1
        )
      );
    }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonCons({
  decodeJsonField: j => {
    if (j.tag === "Just") { return Data$dMaybe.$Maybe("Just", decodeJsonTimestamp.decodeJson(j._1)); }
    return Data$dMaybe.Nothing;
  }
})(Data$dArgonaut$dDecode$dClass.gDecodeJsonNil)(timestampIsSymbol)()())(successIsSymbol)()())().decodeJson))();
const persistFileName = ".spec-results";
const lastPersistedResults = /* #__PURE__ */ Effect$dAff._catchError(/* #__PURE__ */ Effect$dAff._map(text => {
  const $0 = Data$dArgonaut$dParser._jsonParser(Data$dEither.Left, Data$dEither.Right, text);
  const $1 = (() => {
    if ($0.tag === "Left") { return Data$dMaybe.Nothing; }
    if ($0.tag === "Right") { return Control$dSemigroupoid.composeImpl(Data$dEither.hush)(decodeJson)($0._1); }
    $runtime.fail();
  })();
  if ($1.tag === "Nothing") { return Data$dMap$dInternal.Leaf; }
  if ($1.tag === "Just") { return $1._1; }
  $runtime.fail();
})(/* #__PURE__ */ Node$dFS$dAff.toAff(/* #__PURE__ */ Node$dFS$dAsync.readTextFile(Node$dEncoding.UTF8)(".spec-results"))))(v => Effect$dAff._pure(Data$dMap$dInternal.Leaf));
const persistResults = trees => {
  const serializeRun = now => v => {
    if (v.tag === "Node") { return unions(Data$dFunctor.arrayMap(serializeRun(now))(v._2)); }
    if (v.tag === "Leaf") {
      if (v._2.tag === "Nothing") { return Data$dMap$dInternal.Leaf; }
      if (v._2.tag === "Just") {
        return Data$dMap$dInternal.$$$Map(
          "Node",
          1,
          1,
          Data$dString$dCommon.joinWith(" ")([...Data$dArray.mapMaybe(Control$dSemigroupoid.composeImpl(v$1 => v$1.name)(Unsafe$dCoerce.unsafeCoerce))(v._1._2), v._1._1]),
          {
            timestamp: now,
            success: (() => {
              if (v._2._1.tag === "Success") { return true; }
              if (v._2._1.tag === "Failure") { return false; }
              $runtime.fail();
            })()
          },
          Data$dMap$dInternal.Leaf,
          Data$dMap$dInternal.Leaf
        );
      }
    }
    $runtime.fail();
  };
  return Effect$dAff._bind(Effect$dAff._map(Timestamp)(Effect$dAff._liftEffect(Effect$dNow.now)))(now => {
    const currentRun = unions(Data$dFunctor.arrayMap(serializeRun(now))(Test$dSpec$dTree.annotateWithPaths(trees)));
    return Effect$dAff._bind(lastPersistedResults)(lastRun => Node$dFS$dAff.toAff(Node$dFS$dAsync.writeTextFile(Node$dEncoding.UTF8)(".spec-results")(Data$dArgonaut$dCore.stringifyWithIndent(2)(encodeJson(Data$dMap$dInternal.unsafeUnionWith(
      Data$dOrd.ordString.compare,
      Data$dFunction.const,
      currentRun,
      lastRun
    ))))));
  });
};
export {
  Timestamp,
  decodeJson,
  decodeJsonTimestamp,
  encodeJson,
  encodeJsonTimestamp,
  lastPersistedResults,
  newtypeTimestamp_,
  persistFileName,
  persistResults,
  successIsSymbol,
  timestampIsSymbol,
  unions
};
