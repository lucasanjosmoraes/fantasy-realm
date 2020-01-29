const { Array } = require('./chain');

Array.prototype['fantasy-land/chainRec'] = function () {
  return [];
};

Array.prototype['fantasy-realm/chainRec'] = Array.prototype['fantasy-land/chainRec'];
