const { Array } = require('./functor');

/**
 * Alt
 */

// alt :: Alt f => f a ~> f a -> f a
Array.prototype['fantasy-land/alt'] = Array.prototype['fantasy-realm/concat'];

Array.prototype['fantasy-realm/alt'] = Array.prototype['fantasy-land/alt'];

/**
 * Plus
 */

// zero :: Plus f => () -> f a
Array.prototype['fantasy-land/zero'] = Array.prototype['fantasy-realm/empty'];

Array.prototype['fantasy-realm/zero'] = Array.prototype['fantasy-land/zero'];

module.exports = { Array };
