const { Array } = require('./apply');

/**
 * Applicative
 */

// of :: Applicative f => a -> f a
Array.prototype['fantasy-land/of'] = (x) => [ x ];

Array.prototype['fantasy-realm/of'] = Array.prototype['fantasy-land/of'];

module.exports = { Array };
