const { Array } = require('./functor');

/**
 * Apply
 */

// ap :: Apply f => f a ~> f (a -> b) -> f b
Array.prototype['fantasy-land/ap'] = function (that) {
  return []['fantasy-realm/concat'](
    that.flatMap(
      (fs) => this['fantasy-realm/map'](fs)
    )
  );
};

Array.prototype['fantasy-realm/ap'] = Array.prototype['fantasy-land/ap'];

module.exports = { Array };
