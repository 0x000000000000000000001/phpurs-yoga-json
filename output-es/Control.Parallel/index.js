import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
const identity = x => x;
const parTraverse_ = dictParallel => {
  const sequential = dictParallel.sequential;
  const parallel = dictParallel.parallel;
  return dictApplicative => dictFoldable => f => Control$dSemigroupoid.composeImpl(sequential)(Data$dFoldable.traverse_(dictApplicative)(dictFoldable)(Control$dSemigroupoid.composeImpl(parallel)(f)));
};
const parTraverse = dictParallel => {
  const sequential = dictParallel.sequential;
  const parallel = dictParallel.parallel;
  return dictApplicative => dictTraversable => f => Control$dSemigroupoid.composeImpl(sequential)(dictTraversable.traverse(dictApplicative)(Control$dSemigroupoid.composeImpl(parallel)(f)));
};
const parSequence_ = dictParallel => dictApplicative => dictFoldable => parTraverse_(dictParallel)(dictApplicative)(dictFoldable)(identity);
const parSequence = dictParallel => dictApplicative => dictTraversable => parTraverse(dictParallel)(dictApplicative)(dictTraversable)(identity);
const parOneOfMap = dictParallel => {
  const sequential = dictParallel.sequential;
  const parallel = dictParallel.parallel;
  return dictAlternative => {
    const Plus1 = dictAlternative.Plus1();
    return dictFoldable => dictFunctor => f => Control$dSemigroupoid.composeImpl(sequential)(Data$dFoldable.oneOfMap(dictFoldable)(Plus1)(Control$dSemigroupoid.composeImpl(parallel)(f)));
  };
};
const parOneOf = dictParallel => {
  const sequential = dictParallel.sequential;
  const parallel = dictParallel.parallel;
  return dictAlternative => {
    const Plus1 = dictAlternative.Plus1();
    return dictFoldable => dictFunctor => Control$dSemigroupoid.composeImpl(sequential)(Data$dFoldable.oneOfMap(dictFoldable)(Plus1)(parallel));
  };
};
const parApply = dictParallel => {
  const Apply1 = dictParallel.Apply1();
  return mf => ma => dictParallel.sequential(Apply1.apply(dictParallel.parallel(mf))(dictParallel.parallel(ma)));
};
export {identity, parApply, parOneOf, parOneOfMap, parSequence, parSequence_, parTraverse, parTraverse_};
