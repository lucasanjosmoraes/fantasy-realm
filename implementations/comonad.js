/*
 * We need to import Array definition from extend because the tail
 * of our NonEmptyArray will need to use extend method
 */
// eslint-disable-next-line no-unused-vars
const { Array } = require('./extend');

/**
 * Comonad
 */

class NonEmptyArray {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }
}

// extract :: Comonad w => w a ~> () -> a
NonEmptyArray.prototype['fantasy-land/extract'] = function () {
  return this.head;
};

NonEmptyArray.prototype['fantasy-realm/extract'] = NonEmptyArray.prototype['fantasy-land/extract'];

module.exports = { NonEmptyArray };
