/**
 * Setoid
 */

// equals :: Setoid a => a ~> a -> Boolean
Array.prototype['fantasy-land/equals'] = function (that) {
  if (!(this.length === that.length)) {
    return false;
  }

  for (let index in this) {
    if (!(this[index] === that[index])) {
      return false;
    }
  }

  return true;
};

Array.prototype['fantasy-realm/equals'] = Array.prototype['fantasy-land/equals'];

module.exports = { Array };
