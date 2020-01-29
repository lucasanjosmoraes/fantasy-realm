const { NonEmptyArray } = require('../../implementations/comonad');

describe('Comonad::extract', () => {
  NonEmptyArray.prototype['fantasy-realm/extend'] = function (f) {
    return new NonEmptyArray(f(this.head), this.tail['fantasy-realm/extend'](f));
  };
  
  NonEmptyArray.prototype['fantasy-realm/equals'] = function (nonEmptyArray) {
    return this.head === nonEmptyArray.head && this.tail['fantasy-realm/equals'](nonEmptyArray.tail);
  };
  
  /*
   * Don't know if number is a comonad, i'm creating its extract method just to test laws bellow without
   * the need to create comonads inside the head of the NonEmptyArray
   */
  Number.prototype['fantasy-realm/extract'] = function () {
    return parseInt(this, 10);
  };
  
  /*
   * Array isn't a comonad but we are faking its extract method just to avoid
   * the need to create comonads inside the tail of the NonEmptyArray
   */
  Array.prototype['fantasy-realm/extract'] = function () {
    return this[0];
  };

  const comonad = new NonEmptyArray(1, [ 2, 3, 4 ]);
  
  it('Extend a comonad with a function that just extract its elements ((el) => el.extract()) should be equal to the monad itself', () => {
    expect(
      comonad['fantasy-realm/equals'](
        comonad['fantasy-realm/extend']((comonad_) => comonad_['fantasy-realm/extract']())
      )
    ).toBe(true)
  });

  it('Apply a comonad w to a function f that can be used on extend should be equal to w.extend(f).extract()', () => {
    const functionToUseOnExtend = (nonEmptyArray) => nonEmptyArray.head || nonEmptyArray[0] || nonEmptyArray;

    expect(
      functionToUseOnExtend(comonad) === comonad['fantasy-realm/extend'](functionToUseOnExtend)['fantasy-realm/extract']()
    ).toBe(true)
  });
});