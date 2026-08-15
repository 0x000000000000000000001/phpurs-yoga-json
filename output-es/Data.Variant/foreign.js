export function onImpl(reflect) {
  return function (p) {
    var tag = reflect(p);
    return function (f) {
      return function (g) {
        return function (r) {
          if (r.type === tag) return f(r.value);
          return g(r);
        };
      };
    };
  };
}
