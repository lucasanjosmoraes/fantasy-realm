/*
 * A semigroup doesn't need to be an Ord.
 * We are importing it because we want to use equals method
 */
const { Array } = require('./ord');

/**
 * Semigroup
 */

// concat :: Semigroup a => a ~> a -> a
Array.prototype['fantasy-land/concat'] = function (that) {
  return this.concat(that);
};

Array.prototype['fantasy-realm/concat'] = Array.prototype['fantasy-land/concat'];

module.exports = { Array };
