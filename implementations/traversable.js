const { identity } = require('../tests/utils');

const { Array } = require('./apply');

/**
 * Traversable
 */

const append = (element) => (array) => [ ...array, element ];

const lift2 = (f) => (a) => (b) => b['fantasy-land/ap'](a['fantasy-land/map'](f));

// traverse :: Applicative f, Traversable t => t a ~> (TypeRep f, a -> f b) -> f (t b)
Array.prototype['fantasy-land/traverse'] = function (applicative, f) {
  return this.reduce((acc, value) => {
    return lift2(append)(f(value))(acc);
  }, applicative['fantasy-land/of']([]));
};

Array.prototype['fantasy-realm/traverse'] = Array.prototype['fantasy-land/traverse'];

Array.prototype['fantasy-realm/sequence'] = function (applicative) {
  return this['fantasy-realm/traverse'](applicative, identity);
};

module.exports = { Array, lift2, append };
