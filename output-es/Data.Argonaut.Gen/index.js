import * as $runtime from "../runtime.js";
import * as Control$dMonad$dGen from "../Control.Monad.Gen/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArgonaut$dCore from "../Data.Argonaut.Core/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dChar$dGen from "../Data.Char.Gen/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dNonEmpty from "../Data.NonEmpty/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dString$dGen from "../Data.String.Gen/index.js";
import * as Data$dUnfoldable from "../Data.Unfoldable/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
const foldable1NonEmpty = /* #__PURE__ */ Data$dNonEmpty.foldable1NonEmpty(Data$dFoldable.foldableArray);
const genJson = dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const Functor0 = Monad0.Bind1().Apply0().Functor0();
  const chooseBool = dictMonadGen.chooseBool;
  const oneOf = Control$dMonad$dGen.oneOf(dictMonadGen)(foldable1NonEmpty);
  const Applicative0 = Monad0.Applicative0();
  const Bind1 = Monad0.Bind1();
  const Monad01 = dictMonadGen.Monad0();
  return dictMonadRec => {
    const genUnicodeString = Data$dString$dGen.genString(dictMonadRec)(dictMonadGen)(Data$dChar$dGen.genUnicodeChar(dictMonadGen));
    return dictLazy => {
      const genLeaf = oneOf(Data$dNonEmpty.$NonEmpty(
        Applicative0.pure(Data$dArgonaut$dCore.jsonNull),
        [
          Functor0.map(Data$dArgonaut$dCore.fromBoolean)(chooseBool),
          Functor0.map(Data$dArgonaut$dCore.fromNumber)(dictMonadGen.chooseFloat(-1000000.0)(1000000.0)),
          Functor0.map(Data$dArgonaut$dCore.fromString)(genUnicodeString)
        ]
      ));
      const genJArray = Functor0.map(Data$dArgonaut$dCore.fromArray)(Control$dMonad$dGen.unfoldable(dictMonadRec)(dictMonadGen)(Data$dUnfoldable.unfoldableArray)(dictLazy.defer(v => genJson(dictMonadGen)(dictMonadRec)(dictLazy))));
      const genJObject = Bind1.bind(Control$dMonad$dGen.unfoldable(dictMonadRec)(dictMonadGen)(Data$dUnfoldable.unfoldableArray)(genUnicodeString))(Data$dArray.foldM(Monad01)(obj => k => Bind1.bind(genJson(dictMonadGen)(dictMonadRec)(dictLazy))(v => Monad0.Applicative0().pure((() => {
        const $0 = Data$dArgonaut$dCore.jsonSingletonObject(k)(v);
        return Data$dArgonaut$dCore._caseJson(
          v$1 => $0,
          v$1 => $0,
          v$1 => $0,
          v$1 => $0,
          v$1 => $0,
          Control$dSemigroupoid.composeImpl(Data$dArgonaut$dCore.fromObject)(Foreign$dObject.insert(k)(v)),
          obj
        );
      })())))(Data$dArgonaut$dCore.jsonEmptyObject));
      return dictMonadGen.resize(y => {
        const v = Data$dOrd.ordInt.compare(5)(y);
        if (v === "LT") { return 5; }
        if (v === "EQ") { return 5; }
        if (v === "GT") { return y; }
        $runtime.fail();
      })(dictMonadGen.sized(size => {
        if (size > 1) {
          return dictMonadGen.resize(v => v - 1 | 0)(dictMonadGen.Monad0().Bind1().bind(dictMonadGen.chooseBool)(v => {
            if (v) { return genJArray; }
            return genJObject;
          }));
        }
        return genLeaf;
      }));
    };
  };
};
export {foldable1NonEmpty, genJson};
