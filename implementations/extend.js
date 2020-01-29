const { Array } = require('./functor');

/**
 * Extend
 */

// extend :: Extend w => w a ~> (w a -> b) -> w b
Array.prototype['fantasy-land/extend'] = function (f) {
  if (this.length === 0) return [];

  // eslint-disable-next-line no-unused-vars
  const [ _, ...tail ] = this;

  return [ f(this), ...tail['fantasy-land/extend'](f) ];
};

Array.prototype['fantasy-realm/extend'] = Array.prototype['fantasy-land/extend'];

module.exports = { Array };
