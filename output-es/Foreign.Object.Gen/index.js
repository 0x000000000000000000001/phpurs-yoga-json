import * as Control$dMonad$dGen from "../Control.Monad.Gen/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Foreign$dObject from "../Foreign.Object/index.js";
const genForeignObject = dictMonadRec => dictMonadGen => {
  const Monad0 = dictMonadGen.Monad0();
  const Bind1 = Monad0.Bind1();
  const Bind11 = Monad0.Bind1();
  const Functor0 = Bind11.Apply0().Functor0();
  const Apply0 = Bind11.Apply0();
  return genKey => genValue => dictMonadGen.sized(size => Bind1.bind(dictMonadGen.chooseInt(0)(size))(newSize => dictMonadGen.resize(v => newSize)(Functor0.map(Foreign$dObject.fromFoldable(Data$dList$dTypes.foldableList))(Control$dMonad$dGen.unfoldable(dictMonadRec)(dictMonadGen)(Data$dList$dTypes.unfoldableList)(Apply0.apply(Functor0.map(Data$dTuple.Tuple)(genKey))(genValue))))));
};
export {genForeignObject};
