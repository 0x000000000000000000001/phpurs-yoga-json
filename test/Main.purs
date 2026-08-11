module Test.Main where

import Prelude

import Effect (Effect)
import Effect.Aff (launchAff_)
import Test.Spec.Reporter.Console (consoleReporter)
import Test.Spec.Runner (evalSpecT, defaultConfig)
import Test.Spec.Summary (successful)
import Effect.Exception (error)
import Control.Monad.Error.Class (throwError)
import Data.Newtype (un)
import Data.Identity (Identity(..))
import Test.BasicsSpec as BasicsSpec
import Test.ErrorsSpec as ErrorsSpec
import Test.GenericsSpec as GenericsSpec
import Test.WriteViaSpec as WriteViaSpec

main ∷ Effect Unit
main = launchAff_ do
  results <- un Identity $ evalSpecT (defaultConfig { exit = false }) [ consoleReporter ] do
    BasicsSpec.spec
    ErrorsSpec.spec
    GenericsSpec.spec
    WriteViaSpec.spec
  if successful results then pure unit else throwError (error "Tests failed")
