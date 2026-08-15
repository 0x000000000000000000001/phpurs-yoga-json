// * Parser builders
//
// | This module contains utility functions and combinators to create parsers
// | for individual options.
// |
// | Each parser builder takes an option modifier. A modifier can be created by
// | composing the basic modifiers provided by this module using the 'Monoid'
// | operations 'mempty' and 'append', or their aliases 'idm' and '<>'.
// |
// | For example:
// |
// | ```purescript
// | out = strOption
// |     ( long "output"
// |    <> short 'o'
// |    <> metavar "FILENAME" )
// | ```
// |
// | creates a parser for an option called `output`.
import * as $runtime from "../runtime.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dString$dCommon from "../Data.String.Common/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as ExitCodes from "../ExitCodes/index.js";
import * as Options$dApplicative$dBuilder$dCompleter from "../Options.Applicative.Builder.Completer/index.js";
import * as Options$dApplicative$dBuilder$dInternal from "../Options.Applicative.Builder.Internal/index.js";
import * as Options$dApplicative$dHelp$dChunk from "../Options.Applicative.Help.Chunk/index.js";
import * as Options$dApplicative$dTypes from "../Options.Applicative.Types/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const identity = x => x;
const identity1 = x => x;
const mempty2 = /* #__PURE__ */ (() => ({argCompleter: Options$dApplicative$dTypes.completerMonoid.mempty}))();
const PrefsMod = x => x;
const InfoMod = x => x;
const value = dictHasValue => x => Options$dApplicative$dBuilder$dInternal.$Mod(
  identity,
  Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.$Maybe("Just", x), Data$dMaybe.Nothing),
  identity1
);
const subparserInline = p => ({...p, prefBacktrack: Options$dApplicative$dTypes.SubparserInline});
const style = x => Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propDescMod: Data$dMaybe.$Maybe("Just", x)}));
const str = Options$dApplicative$dTypes.readerAsk;
const showHelpOnError = p => ({...p, prefShowHelpOnError: true});
const showHelpOnEmpty = p => ({...p, prefShowHelpOnEmpty: true});
const showDefaultWith = s => Options$dApplicative$dBuilder$dInternal.$Mod(
  identity,
  Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.Nothing, Data$dMaybe.$Maybe("Just", s)),
  identity1
);
const showDefault = dictShow => Options$dApplicative$dBuilder$dInternal.$Mod(
  identity,
  Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.Nothing, Data$dMaybe.$Maybe("Just", dictShow.show)),
  identity1
);
const $$short = dictHasName => Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(dictHasName.name)(Options$dApplicative$dTypes.OptShort));
const progDescDoc = doc => i => ({...i, infoProgDesc: doc});
const progDesc = s => i => ({...i, infoProgDesc: Options$dApplicative$dHelp$dChunk.paragraph(s)});
const noIntersperse = p => ({...p, infoPolicy: Options$dApplicative$dTypes.NoIntersperse});
const noBacktrack = p => ({...p, prefBacktrack: Options$dApplicative$dTypes.NoBacktrack});
const noArgError = e => Options$dApplicative$dBuilder$dInternal.$Mod(
  p => ({...p, optNoArgError: v => e}),
  Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.Nothing, Data$dMaybe.Nothing),
  Options$dApplicative$dBuilder$dInternal.identity
);
const newtypePrefsMod = {Coercible0: () => {}};
const prefs = m => m({
  prefMultiSuffix: "",
  prefDisambiguate: false,
  prefShowHelpOnError: false,
  prefShowHelpOnEmpty: false,
  prefBacktrack: Options$dApplicative$dTypes.Backtrack,
  prefColumns: 80
});
const prefsModSemigroup = {append: m1 => m2 => Control$dSemigroupoid.composeImpl(m2)(m1)};
const prefsModMonoid = {mempty: x => x, Semigroup0: () => prefsModSemigroup};
const newtypeInfoMod = {Coercible0: () => {}};
const multiSuffix = s => p => ({...p, prefMultiSuffix: s});
const metavar = dictHasMetavar => $$var => Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: $$var}));
const option = r => m => {
  const v = Options$dApplicative$dBuilder$dInternal.modSemigroup.append(Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "ARG"})))(m);
  const $0 = v._1({optNames: [], optCompleter: Options$dApplicative$dTypes.completerMonoid.mempty, optNoArgError: Options$dApplicative$dTypes.ExpectsArgError});
  return Options$dApplicative$dBuilder$dInternal.mkParser(v._2)(v._3)(Options$dApplicative$dTypes.$OptReader(
    "OptReader",
    $0.optNames,
    {crCompleter: $0.optCompleter, crReader: r},
    $0.optNoArgError
  ));
};
const strOption = /* #__PURE__ */ option(Options$dApplicative$dTypes.readerAsk);
const subparser = m => {
  const v = Options$dApplicative$dBuilder$dInternal.modSemigroup.append(Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: "COMMAND"})))(m);
  const v1 = Options$dApplicative$dBuilder$dInternal.mkCommand(m);
  return Options$dApplicative$dBuilder$dInternal.mkParser(v._2)(v._3)(Options$dApplicative$dTypes.$OptReader("CmdReader", v1._1, v1._2._1, v1._2._2._1));
};
const maybeReader = f => Options$dApplicative$dTypes.bindReaderT.bind(Options$dApplicative$dTypes.readerAsk)(Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(arg => Control$dSemigroupoid.composeImpl((() => {
  const $0 = Options$dApplicative$dTypes.readerError("cannot parse value `" + arg + "'");
  return v2 => {
    if (v2.tag === "Nothing") { return $0; }
    if (v2.tag === "Just") { return Options$dApplicative$dTypes.readMApplicative.pure(v2._1); }
    $runtime.fail();
  };
})())(f)(arg)));
const $$long = dictHasName => Control$dSemigroupoid.composeImpl(Options$dApplicative$dBuilder$dInternal.fieldMod)(Control$dSemigroupoid.composeImpl(dictHasName.name)(Options$dApplicative$dTypes.OptLong));
const infoModSemigroup = {append: m1 => m2 => Control$dSemigroupoid.composeImpl(m2)(m1)};
const infoModMonoid = {mempty: x => x, Semigroup0: () => infoModSemigroup};
const info = parser => m => m({
  infoParser: parser,
  infoFullDesc: true,
  infoProgDesc: Data$dMaybe.Nothing,
  infoHeader: Data$dMaybe.Nothing,
  infoFooter: Data$dMaybe.Nothing,
  infoFailureCode: ExitCodes.Error,
  infoPolicy: Options$dApplicative$dTypes.Intersperse
});
const idm = dictMonoid => dictMonoid.mempty;
const hidden = /* #__PURE__ */ Options$dApplicative$dBuilder$dInternal.optionMod(p => (
  {...p, propVisibility: p.propVisibility === "Internal" ? p.propVisibility : Options$dApplicative$dTypes.Hidden}
));
const helpDoc = doc => Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: doc}));
const help = s => Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propHelp: Options$dApplicative$dHelp$dChunk.paragraph(s)}));
const headerDoc = doc => i => ({...i, infoHeader: doc});
const header = s => i => ({...i, infoHeader: Options$dApplicative$dHelp$dChunk.paragraph(s)});
const fullDesc = i => ({...i, infoFullDesc: true});
const forwardOptions = p => ({...p, infoPolicy: Options$dApplicative$dTypes.ForwardOptions});
const footerDoc = doc => i => ({...i, infoFooter: doc});
const footer = s => i => ({...i, infoFooter: Options$dApplicative$dHelp$dChunk.paragraph(s)});
const flag$p = actv => v => Options$dApplicative$dBuilder$dInternal.mkParser(v._2)(v._3)((() => {
  const $0 = v._1({flagNames: [], flagActive: actv});
  return Options$dApplicative$dTypes.$OptReader("FlagReader", $0.flagNames, $0.flagActive);
})());
const flag = defv => actv => m => Options$dApplicative$dTypes.$Parser("AltP", flag$p(actv)(m), Options$dApplicative$dTypes.$Parser("NilP", defv));
const $$switch = /* #__PURE__ */ flag(false)(true);
const failureCode = n => i => ({...i, infoFailureCode: n});
const eitherReader = f => Options$dApplicative$dTypes.bindReaderT.bind(Options$dApplicative$dTypes.readerAsk)(Control$dSemigroupoid.composeImpl(Unsafe$dCoerce.unsafeCoerce)(Control$dSemigroupoid.composeImpl(v2 => {
  if (v2.tag === "Left") { return Options$dApplicative$dTypes.readerError(v2._1); }
  if (v2.tag === "Right") { return Options$dApplicative$dTypes.readMApplicative.pure(v2._1); }
  $runtime.fail();
})(f)));
const $$int = /* #__PURE__ */ eitherReader(s => {
  const v = Data$dInt.fromString(s);
  if (v.tag === "Nothing") { return Data$dEither.$Either("Left", "Can't parse as Int: `" + Data$dShow.showStringImpl(s) + "`"); }
  if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
  $runtime.fail();
});
const number = /* #__PURE__ */ eitherReader(s => {
  const v = Data$dNumber.fromStringImpl(s, Data$dNumber.isFinite, Data$dMaybe.Just, Data$dMaybe.Nothing);
  if (v.tag === "Nothing") { return Data$dEither.$Either("Left", "Can't parse as Number: `" + Data$dShow.showStringImpl(s) + "`"); }
  if (v.tag === "Just") { return Data$dEither.$Either("Right", v._1); }
  $runtime.fail();
});
const disambiguate = p => ({...p, prefDisambiguate: true});
const disabled = /* #__PURE__ */ Options$dApplicative$dTypes.readerError("disabled option");
const defaultPrefs = {
  prefMultiSuffix: "",
  prefDisambiguate: false,
  prefShowHelpOnError: false,
  prefShowHelpOnEmpty: false,
  prefBacktrack: Options$dApplicative$dTypes.Backtrack,
  prefColumns: 80
};
const completer = dictHasCompleter => f => Options$dApplicative$dBuilder$dInternal.$Mod(
  dictHasCompleter.modCompleter(v => Options$dApplicative$dTypes.completerSemigroup.append(v)(f)),
  Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.Nothing, Data$dMaybe.Nothing),
  Options$dApplicative$dBuilder$dInternal.identity
);
const completeWith = dictHasCompleter => Control$dSemigroupoid.composeImpl(completer(dictHasCompleter))(Options$dApplicative$dBuilder$dCompleter.listCompleter);
const commandGroup = g => Options$dApplicative$dBuilder$dInternal.$Mod(
  p => ({...p, cmdGroup: Data$dMaybe.$Maybe("Just", g)}),
  Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.Nothing, Data$dMaybe.Nothing),
  Options$dApplicative$dBuilder$dInternal.identity
);
const command = cmd => pinfo => Options$dApplicative$dBuilder$dInternal.$Mod(
  p => ({...p, cmdCommands: [Data$dTuple.$Tuple(cmd, pinfo), ...p.cmdCommands]}),
  Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.Nothing, Data$dMaybe.Nothing),
  Options$dApplicative$dBuilder$dInternal.identity
);
const columns = cols => p => ({...p, prefColumns: cols});
const briefDesc = i => ({...i, infoFullDesc: false});
const $$boolean = /* #__PURE__ */ eitherReader(/* #__PURE__ */ Control$dSemigroupoid.composeImpl(v => {
  if (v === "true") { return Data$dEither.$Either("Right", true); }
  if (v === "false") { return Data$dEither.$Either("Right", false); }
  return Data$dEither.$Either("Left", "Can't parse as Boolean: `" + Data$dShow.showStringImpl(v) + "`");
})(Data$dString$dCommon.toLower));
const argument = p => v => Options$dApplicative$dBuilder$dInternal.mkParser(v._2)(v._3)(Options$dApplicative$dTypes.$OptReader(
  "ArgReader",
  {crCompleter: v._1(mempty2).argCompleter, crReader: p}
));
const strArgument = /* #__PURE__ */ argument(Options$dApplicative$dTypes.readerAsk);
const action = dictHasCompleter => Control$dSemigroupoid.composeImpl(completer(dictHasCompleter))(Options$dApplicative$dBuilder$dCompleter.bashCompleter);
const abortOption = err => m => Control$dSemigroupoid.composeImpl(option(Options$dApplicative$dTypes.readerAbort(err)))(v => Options$dApplicative$dBuilder$dInternal.modSemigroup.append(v)(m))(Data$dFoldable.foldableArray.foldMap(Options$dApplicative$dBuilder$dInternal.modMonoid)(Data$dFoldable.identity1)([
  Options$dApplicative$dBuilder$dInternal.$Mod(
    p => ({...p, optNoArgError: v => err}),
    Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.Nothing, Data$dMaybe.Nothing),
    Options$dApplicative$dBuilder$dInternal.identity
  ),
  Options$dApplicative$dBuilder$dInternal.$Mod(identity, Options$dApplicative$dBuilder$dInternal.$DefaultProp(Data$dMaybe.$Maybe("Just", x => x), Data$dMaybe.Nothing), identity1),
  Options$dApplicative$dBuilder$dInternal.optionMod(p => ({...p, propMetaVar: ""}))
]));
const infoOption = /* #__PURE__ */ Control$dSemigroupoid.composeImpl(abortOption)(Options$dApplicative$dTypes.InfoMsg);
export {
  InfoMod,
  PrefsMod,
  abortOption,
  action,
  argument,
  $$boolean as boolean,
  briefDesc,
  columns,
  command,
  commandGroup,
  completeWith,
  completer,
  defaultPrefs,
  disabled,
  disambiguate,
  eitherReader,
  failureCode,
  flag,
  flag$p,
  footer,
  footerDoc,
  forwardOptions,
  fullDesc,
  header,
  headerDoc,
  help,
  helpDoc,
  hidden,
  identity,
  identity1,
  idm,
  info,
  infoModMonoid,
  infoModSemigroup,
  infoOption,
  $$int as int,
  $$long as long,
  maybeReader,
  mempty2,
  metavar,
  multiSuffix,
  newtypeInfoMod,
  newtypePrefsMod,
  noArgError,
  noBacktrack,
  noIntersperse,
  number,
  option,
  prefs,
  prefsModMonoid,
  prefsModSemigroup,
  progDesc,
  progDescDoc,
  $$short as short,
  showDefault,
  showDefaultWith,
  showHelpOnEmpty,
  showHelpOnError,
  str,
  strArgument,
  strOption,
  style,
  subparser,
  subparserInline,
  $$switch as switch,
  value
};
