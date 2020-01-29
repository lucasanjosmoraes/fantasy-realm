/**
 * Bifunctor
 */

class Either {
  constructor(val) {
    this.val = val;
  }

  equal(val) {
    return this.val === val;
  }
}

Either.prototype['fantasy-realm/equal'] = function (val) {
  return this.val === val;
};

class Right extends Either {
  map(f) {
    return new Right(f(this.val));
  }

  ['fantasy-realm/equal'](functor) {
    if (functor instanceof Right) {
      return super.equal(functor.val);
    }

    return false;
  }
}

class Left extends Either {
  map() {
    return this;
  }

  ['fantasy-realm/equal'](functor) {
    if (functor instanceof Left) {
      return super.equal(functor.val);
    }

    return false;
  }
}

// bimap :: Bifunctor f => f a c ~> (a -> b, c -> d) -> f b d
Right.prototype['fantasy-land/bimap'] = function (f, g) {
  return this.map(g);
};

Right.prototype['fantasy-realm/bimap'] = Right.prototype['fantasy-land/bimap'];

Left.prototype['fantasy-realm/bimap'] = function (f) {
  return new Left(f(this.val));
};

module.exports = {
  Left, Right,
};
