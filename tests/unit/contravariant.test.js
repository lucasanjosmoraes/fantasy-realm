const { Comparison } = require('../../implementations/contravariant');
const { identity, double, triple } = require('../utils');

describe('Contravariant::contramap', () => {
  Number.prototype.lte = function (that) {
    return this <= that;
  };

  const isLTE = new Comparison((x, y) => x.lte(y));

  it('A contravariant that contramap with identity function should be equal to itself', () => {
    expect(
      isLTE['fantasy-realm/contramap'](identity).f(2, 6) === isLTE.f(2, 6)
    ).toBe(true);
  });

  it('A contravariant U that contramap with a function f and then contramap with a function g should be equal to U contramap with f(g(u)) where u is U element', () => {
    expect(
      isLTE['fantasy-realm/contramap'](double)['fantasy-realm/contramap'](triple)
      .f(2, 6) === isLTE['fantasy-realm/contramap']((x) => double(triple(x))).f(2, 6)
    ).toBe(true);
  });
});
