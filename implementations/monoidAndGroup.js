const { Array } = require('./semigroup');

/**
 * Monoid
 */

// empty :: Monoid m => () -> m
Array.prototype['fantasy-land/empty'] = () => [];

Array.prototype['fantasy-realm/empty'] = Array.prototype['fantasy-land/empty'];

/**
 * Group
 */

// invert :: Group g => g ~> () -> g

module.exports = { Array };
