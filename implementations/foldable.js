/**
 * Foldable
 */

// reduce :: Foldable f => f a ~> ((b, a) -> b, b) -> b
Set.prototype['fantasy-land/reduce'] = function (f, acc) {
  let result = acc;

  this.forEach((element) => {
    result = f(result, element);
  });

  return result;
};

Set.prototype['fantasy-realm/reduce'] = Set.prototype['fantasy-land/reduce'];

module.exports = { Set };
