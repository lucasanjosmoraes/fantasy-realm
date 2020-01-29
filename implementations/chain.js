const { Array } = require('./apply');

Array.prototype['fantasy-realm/join'] = function () {
  const result = [];

  this.forEach((el) => {
    const firstFromEl = el[0];

    if (firstFromEl) {
      result.push(firstFromEl);
    }
  });

  return result;
};

Array.prototype['fantasy-land/chain'] = function (f) {
  return this['fantasy-realm/map'](f)['fantasy-realm/join']();
};

Array.prototype['fantasy-realm/chain'] = Array.prototype['fantasy-land/chain'];

module.exports = { Array };
