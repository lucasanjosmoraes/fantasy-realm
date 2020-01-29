/*
 * A Functor doesn't need to be a Filterable.
 * We are importing it because we want to use equals method
 */
const { Array } = require('./filterable');

/**
 * Functor
 */

// map :: Functor f => f a ~> (a -> b) -> f b
Array.prototype['fantasy-land/map'] = function (mapper) {
  const thisMapped = [];

  this.forEach((thisElement) => {
    thisMapped.push(mapper(thisElement));
  });

  return thisMapped;
};

Array.prototype['fantasy-realm/map'] = Array.prototype['fantasy-land/map'];

module.exports = { Array };
