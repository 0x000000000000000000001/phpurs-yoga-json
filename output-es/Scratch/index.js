import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Effect$dConsole from "../Effect.Console/index.js";
import * as Foreign from "../Foreign/index.js";
import * as Type$dProxy from "../Type.Proxy/index.js";
import * as Yoga$dJSON from "../Yoga.JSON/index.js";
const aIsSymbol = {reflectSymbol: () => "a"};
const bIsSymbol = {reflectSymbol: () => "b"};
const cIsSymbol = {reflectSymbol: () => "c"};
const dIsSymbol = {reflectSymbol: () => "d"};
const main = /* #__PURE__ */ (() => {
  const $0 = Data$dList$dTypes.showNonEmptyList(Foreign.showForeignError);
  return Effect$dConsole.log((() => {
    const $1 = Yoga$dJSON.readJSON((() => {
      const $1 = Yoga$dJSON.readForeignFieldsCons(aIsSymbol)((() => {
        const $1 = Yoga$dJSON.readForeignFieldsCons(bIsSymbol)((() => {
          const $1 = Yoga$dJSON.readForeignFieldsCons(cIsSymbol)((() => {
            const $1 = Yoga$dJSON.readForeignFieldsCons(dIsSymbol)(Yoga$dJSON.readForeignString)(Yoga$dJSON.readForeignFieldsNilRowRo)()();
            return {
              readImpl: o => {
                const $2 = $1.getFields(Type$dProxy.Proxy)(o);
                if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
                if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1({})); }
                $runtime.fail();
              }
            };
          })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
          return {
            readImpl: o => {
              const $2 = $1.getFields(Type$dProxy.Proxy)(o);
              if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
              if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1({})); }
              $runtime.fail();
            }
          };
        })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
        return {
          readImpl: o => {
            const $2 = $1.getFields(Type$dProxy.Proxy)(o);
            if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
            if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1({})); }
            $runtime.fail();
          }
        };
      })())(Yoga$dJSON.readForeignFieldsNilRowRo)()();
      return {
        readImpl: o => {
          const $2 = $1.getFields(Type$dProxy.Proxy)(o);
          if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
          if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1({})); }
          $runtime.fail();
        }
      };
    })())("{ \"a\": { \"b\": { \"c\": { }}}}");
    if ($1.tag === "Left") { return "(Left " + $0.show($1._1) + ")"; }
    if ($1.tag === "Right") { return "(Right { a: { b: { c: { d: " + Data$dShow.showStringImpl($1._1.a.b.c.d) + " } } } })"; }
    $runtime.fail();
  })());
})();
export {aIsSymbol, bIsSymbol, cIsSymbol, dIsSymbol, main};
