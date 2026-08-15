import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import {write} from "./foreign.js";
const tellLns = dictMonadWriter => {
  const MonadTell1 = dictMonadWriter.MonadTell1();
  const Applicative0 = MonadTell1.Monad1().Applicative0();
  const tell = MonadTell1.tell;
  return l => Data$dFoldable.for_(Applicative0)(Data$dFoldable.foldableArray)(l)(Control$dSemigroupoid.composeImpl(tell)(v => v + "\n"));
};
const tellLn = dictMonadWriter => l => dictMonadWriter.MonadTell1().tell(l + "\n");
const logWriter = dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const $0 = Monad0.Bind1();
  const $1 = Control$dMonad$dWriter$dTrans.execWriterT(Monad0.Bind1().Apply0().Functor0());
  const $2 = Control$dSemigroupoid.composeImpl(dictMonadEffect.liftEffect)(write);
  return a => $0.bind($1(a))($2);
};
export {logWriter, tellLn, tellLns};
export * from "./foreign.js";
