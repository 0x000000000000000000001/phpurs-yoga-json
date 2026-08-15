import * as $runtime from "../runtime.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Control$dSemigroupoid from "../Control.Semigroupoid/index.js";
import * as Data$dArray from "../Data.Array/index.js";
import * as Data$dArray$dNonEmpty from "../Data.Array.NonEmpty/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dFunctorWithIndex from "../Data.FunctorWithIndex/index.js";
import * as Data$dHeytingAlgebra from "../Data.HeytingAlgebra/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Options$dApplicative$dCommon from "../Options.Applicative.Common/index.js";
import * as Options$dApplicative$dHelp$dChunk from "../Options.Applicative.Help.Chunk/index.js";
import * as Options$dApplicative$dHelp$dTypes from "../Options.Applicative.Help.Types/index.js";
import * as Options$dApplicative$dTypes from "../Options.Applicative.Types/index.js";
import * as Text$dPrettyPrint$dLeijen from "../Text.PrettyPrint.Leijen/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
const fold = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidArray)(Data$dFoldable.identity1))();
const chunkMonoid = /* #__PURE__ */ (() => {
  const chunkSemigroup1 = {
    append: v1 => v2 => {
      if (v1.tag === "Nothing") { return v2; }
      if (v2.tag === "Nothing") { return v1; }
      if (v1.tag === "Just" && v2.tag === "Just") { return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", v1._1, v2._1)); }
      $runtime.fail();
    }
  };
  return {mempty: Data$dMaybe.Nothing, Semigroup0: () => chunkSemigroup1};
})();
const extractChunk = /* #__PURE__ */ Options$dApplicative$dHelp$dChunk.extractChunk(Text$dPrettyPrint$dLeijen.docMonoid);
const chunkMonoid1 = /* #__PURE__ */ (() => {
  const chunkSemigroup1 = {
    append: v1 => v2 => {
      if (v1.tag === "Nothing") { return v2; }
      if (v2.tag === "Nothing") { return v1; }
      if (v1.tag === "Just" && v2.tag === "Just") { return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", v1._1, v2._1)); }
      $runtime.fail();
    }
  };
  return {mempty: Data$dMaybe.Nothing, Semigroup0: () => chunkSemigroup1};
})();
const usageHelp = chunk => ({...Options$dApplicative$dHelp$dTypes.parserHelpMonoid.mempty, helpUsage: chunk});
const suggestionsHelp = chunk => ({...Options$dApplicative$dHelp$dTypes.parserHelpMonoid.mempty, helpSuggestions: chunk});
const intersperse = sep => Control$dSemigroupoid.composeImpl(fold)(Data$dFunctorWithIndex.mapWithIndexArray(idx => e => {
  if (idx === 0) { return [e]; }
  return [sep, e];
}));
const optDesc = pprefs => style => info => opt => {
  const suffix = info.hinfoMulti ? Options$dApplicative$dHelp$dChunk.stringChunk(pprefs.prefMultiSuffix) : chunkMonoid.mempty;
  const descs = Data$dFunctor.arrayMap(Control$dSemigroupoid.composeImpl(Text$dPrettyPrint$dLeijen.string)(Options$dApplicative$dCommon.showOption))(Data$dArray.sortBy(Options$dApplicative$dTypes.optNameOrd.compare)((() => {
    if (opt.optMain.tag === "OptReader") { return opt.optMain._1; }
    if (opt.optMain.tag === "FlagReader") { return opt.optMain._1; }
    return [];
  })()));
  const $0 = Options$dApplicative$dTypes.optDescMod(opt);
  return (() => {
    if ($0.tag === "Nothing") { return x => x; }
    if ($0.tag === "Just") {
      return v1 => {
        if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0._1(v1._1)); }
        return Data$dMaybe.Nothing;
      };
    }
    $runtime.fail();
  })()((() => {
    const $1 = intersperse(style.descSep)(descs);
    const $2 = $1.length === 0
      ? Data$dMaybe.Nothing
      : Data$dMaybe.$Maybe("Just", Data$dFoldable.foldableArray.foldMap(Text$dPrettyPrint$dLeijen.docMonoid)(Data$dFoldable.identity1)($1));
    const $3 = Options$dApplicative$dHelp$dChunk.stringChunk(Options$dApplicative$dTypes.optMetaVar(opt));
    const $4 = (() => {
      if ($2.tag === "Nothing") { return $3; }
      if ($3.tag === "Nothing") { return $2; }
      if ($2.tag === "Just" && $3.tag === "Just") {
        return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", $2._1, Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("Char", " "), $3._1)));
      }
      $runtime.fail();
    })();
    if (
      (() => {
        if (info.hinfoDefault && !style.descOptional) { return true; }
        if (Options$dApplicative$dTypes.optVisibility(opt) === "Hidden") { return !style.descHidden; }
        return Options$dApplicative$dTypes.optVisibility(opt) !== "Visible";
      })()
    ) {
      return chunkMonoid.mempty;
    }
    if (Options$dApplicative$dHelp$dChunk.isEmpty($4) || !style.descSurround) {
      if ($4.tag === "Nothing") { return suffix; }
      if (suffix.tag === "Nothing") { return $4; }
      if ($4.tag === "Just" && suffix.tag === "Just") { return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", $4._1, suffix._1)); }
      $runtime.fail();
    }
    if (info.hinfoDefault) {
      const $5 = $4.tag === "Just"
        ? Data$dMaybe.$Maybe(
            "Just",
            Text$dPrettyPrint$dLeijen.$Doc(
              "Cat",
              Text$dPrettyPrint$dLeijen.$Doc("Char", "["),
              Text$dPrettyPrint$dLeijen.$Doc("Cat", $4._1, Text$dPrettyPrint$dLeijen.$Doc("Char", "]"))
            )
          )
        : Data$dMaybe.Nothing;
      if ($5.tag === "Nothing") { return suffix; }
      if (suffix.tag === "Nothing") { return $5; }
      if ($5.tag === "Just" && suffix.tag === "Just") { return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", $5._1, suffix._1)); }
      $runtime.fail();
    }
    if (Data$dArray.sliceImpl(1, descs.length, descs).length === 0) {
      if ($4.tag === "Nothing") { return suffix; }
      if (suffix.tag === "Nothing") { return $4; }
      if ($4.tag === "Just" && suffix.tag === "Just") { return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", $4._1, suffix._1)); }
      $runtime.fail();
    }
    const $5 = $4.tag === "Just"
      ? Data$dMaybe.$Maybe(
          "Just",
          Text$dPrettyPrint$dLeijen.$Doc(
            "Cat",
            Text$dPrettyPrint$dLeijen.$Doc("Char", "("),
            Text$dPrettyPrint$dLeijen.$Doc("Cat", $4._1, Text$dPrettyPrint$dLeijen.$Doc("Char", ")"))
          )
        )
      : Data$dMaybe.Nothing;
    if ($5.tag === "Nothing") { return suffix; }
    if (suffix.tag === "Nothing") { return $5; }
    if ($5.tag === "Just" && suffix.tag === "Just") { return Data$dMaybe.$Maybe("Just", Text$dPrettyPrint$dLeijen.$Doc("Cat", $5._1, suffix._1)); }
    $runtime.fail();
  })());
};
const headerHelp = chunk => ({...Options$dApplicative$dHelp$dTypes.parserHelpMonoid.mempty, helpHeader: chunk});
const fullDesc = pprefs => {
  const style = {descSep: Text$dPrettyPrint$dLeijen.string(","), descHidden: true, descOptional: true, descSurround: false};
  return Control$dSemigroupoid.composeImpl(Options$dApplicative$dHelp$dChunk.tabulate$p(24))(Control$dSemigroupoid.composeImpl(Data$dArray.catMaybes)(Options$dApplicative$dCommon.mapParser(info => opt => {
    const n = optDesc(pprefs)(style)(info)(opt);
    const $0 = Options$dApplicative$dTypes.optShowDefault(opt);
    const hdef = $0.tag === "Just"
      ? Data$dMaybe.$Maybe(
          "Just",
          Text$dPrettyPrint$dLeijen.$Doc(
            "Cat",
            Text$dPrettyPrint$dLeijen.$Doc("Char", "("),
            Text$dPrettyPrint$dLeijen.$Doc(
              "Cat",
              Text$dPrettyPrint$dLeijen.$Doc(
                "Cat",
                Text$dPrettyPrint$dLeijen.string("default:"),
                Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("Char", " "), Text$dPrettyPrint$dLeijen.string($0._1))
              ),
              Text$dPrettyPrint$dLeijen.$Doc("Char", ")")
            )
          )
        )
      : Data$dMaybe.Nothing;
    const h = Options$dApplicative$dTypes.optHelp(opt);
    if (!Options$dApplicative$dHelp$dChunk.isEmpty(n) && !Options$dApplicative$dHelp$dChunk.isEmpty(h)) {
      return Data$dMaybe.$Maybe(
        "Just",
        Data$dTuple.$Tuple(
          Options$dApplicative$dHelp$dChunk.extractChunk(Text$dPrettyPrint$dLeijen.docMonoid)(n),
          (() => {
            const $1 = extractChunk((() => {
              if (h.tag === "Nothing") { return hdef; }
              if (hdef.tag === "Nothing") { return h; }
              if (h.tag === "Just" && hdef.tag === "Just") {
                return Data$dMaybe.$Maybe(
                  "Just",
                  Text$dPrettyPrint$dLeijen.$Doc("Cat", h._1, Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("Char", " "), hdef._1))
                );
              }
              $runtime.fail();
            })());
            return Text$dPrettyPrint$dLeijen.$Doc("Column", k => Text$dPrettyPrint$dLeijen.$Doc("Nesting", i => Text$dPrettyPrint$dLeijen.$Doc("Nest", k - i | 0, $1)));
          })()
        )
      );
    }
    return Data$dMaybe.Nothing;
  })));
};
const footerHelp = chunk => ({...Options$dApplicative$dHelp$dTypes.parserHelpMonoid.mempty, helpFooter: chunk});
const fold_tree = v => {
  if (v.tag === "Leaf") { return v._1; }
  if (v.tag === "MultNode") {
    return Data$dFoldable.foldrArray(Control$dSemigroupoid.composeImpl(Options$dApplicative$dHelp$dChunk.chunkBesideOrBelow)(fold_tree))(chunkMonoid1.mempty)(v._1);
  }
  if (v.tag === "AltNode") {
    return Control$dSemigroupoid.composeImpl(v1 => {
      if (v1.length === 1) { return v1[0]; }
      return Control$dSemigroupoid.composeImpl(v1$1 => {
        if (v1$1.tag === "Just") {
          return Data$dMaybe.$Maybe(
            "Just",
            Text$dPrettyPrint$dLeijen.$Doc(
              "Cat",
              Text$dPrettyPrint$dLeijen.$Doc("Char", "("),
              Text$dPrettyPrint$dLeijen.$Doc("Cat", v1$1._1, Text$dPrettyPrint$dLeijen.$Doc("Char", ")"))
            )
          );
        }
        return Data$dMaybe.Nothing;
      })(Data$dFoldable.foldrArray(v1$1 => v2 => {
        if (v1$1.tag === "Nothing") { return v2; }
        if (v2.tag === "Nothing") { return v1$1; }
        if (v1$1.tag === "Just" && v2.tag === "Just") {
          return Data$dMaybe.$Maybe(
            "Just",
            Text$dPrettyPrint$dLeijen.$Doc(
              "Cat",
              v1$1._1,
              Text$dPrettyPrint$dLeijen.$Doc(
                "Cat",
                Text$dPrettyPrint$dLeijen.softline,
                Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("Char", "|"), Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.softline, v2._1))
              )
            )
          );
        }
        $runtime.fail();
      })(chunkMonoid1.mempty))(v1);
    })(Control$dSemigroupoid.composeImpl(Data$dArray.filter(Control$dSemigroupoid.composeImpl(Data$dHeytingAlgebra.boolNot)(Options$dApplicative$dHelp$dChunk.isEmpty)))(Data$dFunctor.arrayMap(fold_tree)))(v._1);
  }
  $runtime.fail();
};
const errorHelp = chunk => ({...Options$dApplicative$dHelp$dTypes.parserHelpMonoid.mempty, helpError: chunk});
const cmdDesc = /* #__PURE__ */ Options$dApplicative$dCommon.mapParser(v => opt => {
  if (opt.optMain.tag === "CmdReader") {
    return Data$dTuple.$Tuple(
      opt.optMain._1,
      Options$dApplicative$dHelp$dChunk.tabulate$p(24)(Control$dBind.arrayBind(Data$dArray.reverse(opt.optMain._2))(cmd => Control$dBind.arrayBind(Control$dSemigroupoid.composeImpl(v2 => {
        if (v2.tag === "Nothing") { return []; }
        if (v2.tag === "Just") { return [v2._1]; }
        $runtime.fail();
      })((() => {
        const $0 = Control$dSemigroupoid.composeImpl(v2 => v2.infoProgDesc)(Unsafe$dCoerce.unsafeCoerce);
        return v1 => {
          if (v1.tag === "Just") { return Data$dMaybe.$Maybe("Just", $0(v1._1)); }
          return Data$dMaybe.Nothing;
        };
      })())(opt.optMain._3(cmd)))(d => [
        Data$dTuple.$Tuple(
          Text$dPrettyPrint$dLeijen.string(cmd),
          (() => {
            const $0 = Options$dApplicative$dHelp$dChunk.extractChunk(Text$dPrettyPrint$dLeijen.docMonoid)(d);
            return Text$dPrettyPrint$dLeijen.$Doc("Column", k => Text$dPrettyPrint$dLeijen.$Doc("Nesting", i => Text$dPrettyPrint$dLeijen.$Doc("Nest", k - i | 0, $0)));
          })()
        )
      ])))
    );
  }
  return Data$dTuple.$Tuple(Data$dMaybe.Nothing, chunkMonoid1.mempty);
});
const briefDesc$p = showOptional => pprefs => Control$dSemigroupoid.composeImpl(fold_tree)(Options$dApplicative$dCommon.treeMapParser(optDesc(pprefs)({
  descSep: Text$dPrettyPrint$dLeijen.string("|"),
  descHidden: false,
  descOptional: showOptional,
  descSurround: true
})));
const missingDesc = /* #__PURE__ */ briefDesc$p(false);
const briefDesc = /* #__PURE__ */ briefDesc$p(true);
const parserUsage = pprefs => p => progn => Text$dPrettyPrint$dLeijen.hsep([
  Text$dPrettyPrint$dLeijen.string("Usage:"),
  Text$dPrettyPrint$dLeijen.string(progn),
  (() => {
    const $0 = Options$dApplicative$dHelp$dChunk.extractChunk(Text$dPrettyPrint$dLeijen.docMonoid)(briefDesc$p(true)(pprefs)(p));
    return Text$dPrettyPrint$dLeijen.$Doc("Column", k => Text$dPrettyPrint$dLeijen.$Doc("Nesting", i => Text$dPrettyPrint$dLeijen.$Doc("Nest", k - i | 0, $0)));
  })()
]);
const bodyHelp = chunk => ({...Options$dApplicative$dHelp$dTypes.parserHelpMonoid.mempty, helpBody: chunk});
const parserHelp = pprefs => p => Control$dSemigroupoid.composeImpl(bodyHelp)(Options$dApplicative$dHelp$dChunk.vsepChunks)([
  (() => {
    const $0 = fullDesc(pprefs)(p);
    if ($0.tag === "Just") {
      return Data$dMaybe.$Maybe(
        "Just",
        Text$dPrettyPrint$dLeijen.$Doc(
          "Cat",
          Text$dPrettyPrint$dLeijen.string("Available options:"),
          Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("FlatAlt", Text$dPrettyPrint$dLeijen.Line, Text$dPrettyPrint$dLeijen.$Doc("Char", " ")), $0._1)
        )
      );
    }
    return Data$dMaybe.Nothing;
  })(),
  ...Data$dFunctor.arrayMap(arr => {
    const v = Data$dArray$dNonEmpty.uncons(arr);
    const $0 = (() => {
      if (v.head._1.tag === "Nothing") { return "Available commands:"; }
      if (v.head._1.tag === "Just") { return v.head._1._1; }
      $runtime.fail();
    })();
    const $1 = Options$dApplicative$dHelp$dChunk.vcatChunks([v.head._2, ...Data$dFunctor.arrayMap(Data$dTuple.snd)(v.tail)]);
    if ($1.tag === "Just") {
      return Data$dMaybe.$Maybe(
        "Just",
        Text$dPrettyPrint$dLeijen.$Doc(
          "Cat",
          Text$dPrettyPrint$dLeijen.string($0),
          Text$dPrettyPrint$dLeijen.$Doc("Cat", Text$dPrettyPrint$dLeijen.$Doc("FlatAlt", Text$dPrettyPrint$dLeijen.Line, Text$dPrettyPrint$dLeijen.$Doc("Char", " ")), $1._1)
        )
      );
    }
    return Data$dMaybe.Nothing;
  })(Data$dArray.groupBy(x => y => {
    if (x._1.tag === "Nothing") { return y._1.tag === "Nothing"; }
    return x._1.tag === "Just" && y._1.tag === "Just" && x._1._1 === y._1._1;
  })(cmdDesc(p)))
]);
export {
  bodyHelp,
  briefDesc,
  briefDesc$p,
  chunkMonoid,
  chunkMonoid1,
  cmdDesc,
  errorHelp,
  extractChunk,
  fold,
  fold_tree,
  footerHelp,
  fullDesc,
  headerHelp,
  intersperse,
  missingDesc,
  optDesc,
  parserHelp,
  parserUsage,
  suggestionsHelp,
  usageHelp
};
