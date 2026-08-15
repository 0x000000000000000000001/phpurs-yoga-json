import {_debugger, _spy, _trace, _traceTime} from "./foreign.js";
const warn = () => ({});
const traceTime = () => $0 => $1 => _traceTime($0, $1);
const trace = () => a => k => _trace(a, k);
const traceM = () => dictMonad => {
  const Bind1 = dictMonad.Bind1();
  const Applicative0 = dictMonad.Applicative0();
  return s => Bind1.bind(Applicative0.pure())(() => _trace(s, v => Applicative0.pure()));
};
const spy = () => tag => a => _spy(tag, a);
const spyWith = () => msg => f => a => a;
const $$debugger = () => f => _debugger(f);
export {$$debugger as debugger, spy, spyWith, trace, traceM, traceTime, warn};
export * from "./foreign.js";
