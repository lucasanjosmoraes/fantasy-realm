class Either {
  constructor(value) {
    this.value = value;
  }
}

class Left extends Either {
  map() {
    return this;
  }

  ap() {
    return this;
  }

  static of(thing) {
    return new Left(thing);
  }
}

class Right extends Either {
  map(f) {
    return new Right(f(this.value));
  }

  ap(applicative) {
    return this.map(applicative.value);
  }

  static of(thing) {
    return new Right(thing);
  }
}

const either = (errorAction) => (successAction) => (result) => {
  if (result instanceof Left) {
    return errorAction(result.value);
  }

  if (result instanceof Right) {
    return successAction(result.value);
  }

  return Left.of('Você não quis utilizar functors então toma um de graça');
};

module.exports = {
  Either,
  either,
  Left,
  Right,
};
