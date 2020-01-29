const { Array } = require('./setoid');

/**
 * Ord
 */

// lte :: Ord a => a ~> a -> Boolean
Array.prototype['fantasy-land/lte'] = function (that) {
  this.forEach((thisElement, index) => {
    if (thisElement !== that[index]) {
      // It doesn't matter if is lte or lt, because we already validate that they are different
      return thisElement <= that[index];
    }
  });

  return this.length <= that.length;
};

Array.prototype['fantasy-realm/lte'] = Array.prototype['fantasy-land/lte'];

module.exports = { Array };
