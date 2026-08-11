module Scratch where
import Prelude
import Yoga.JSON as JSON
import Effect (Effect)
import Effect.Console (logShow)

main :: Effect Unit
main = do
  let res = JSON.readJSON """{ "a": { "b": { "c": { }}}}""" :: JSON.E { a :: { b :: { c :: { d :: String } } } }
  logShow res
