/**
 * Contravariant
 */

// contramap :: Contravariant f => f a ~> (b -> a) -> f b
class Comparison {
  constructor(f) {
    this.f = f;
  }
}

Comparison.prototype['fantasy-realm/contramap'] = function (g) {
  return new Comparison(
    (x, y) => this.f(g(x), g(y))
  );
};

module.exports = { Comparison };
