/*
 * A filterable doesn't need to be a Monoid or Group.
 * We are importing it because we want to use equals method
 */
const { Array } = require('./monoidAndGroup');

/**
 * Filterable
 */

// filter :: Filterable f => f a ~> (a -> Boolean) -> f a
Array.prototype['fantasy-land/filter'] = function (filter) {
  const thisFiltered = [];
  this.forEach((thisElement) => {
    if (filter(thisElement)) {
      thisFiltered.push(thisElement);
    }
  });

  return thisFiltered;
};

Array.prototype['fantasy-realm/filter'] = Array.prototype['fantasy-land/filter'];

module.exports = { Array };
