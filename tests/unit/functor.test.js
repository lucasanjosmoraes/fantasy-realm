const { Array } = require('../../implementations/functor');
const { identity, double, triple } = require('../utils');

describe('Functor::map', () => {
  const ordArrayLenght10 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

  it('Map an array with the identity function should be equal to the array itself', () => {
    expect(
      ordArrayLenght10['fantasy-realm/map'](identity)['fantasy-realm/equals'](ordArrayLenght10)
    ).toBe(true);
  });

  it('Map an array X with a function f and map its result with a function g should be equal to map X with f(g(x)) where x is X element', () => {
    expect(
      ordArrayLenght10['fantasy-realm/map'](double)['fantasy-realm/map'](triple)[
        'fantasy-realm/equals'
      ](ordArrayLenght10['fantasy-realm/map']((el) => triple(double(el))))
    ).toBe(true);
  });
});
