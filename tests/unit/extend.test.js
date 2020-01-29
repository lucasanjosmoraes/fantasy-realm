const { Array } = require('../../implementations/extend');

describe('Extend::extend', () => {
  it(`w.extend(f).extend(g) should be equal to w.extend(w_ => g(w_.extend(f))), because it doesn't 
  matter where we put brackets, we just need to keep the left-to-right order`,
  () => {
    // ['GREATER OR EQUAL THAN RATE', 'LOWER', 'GREATER OR EQUAL THAN RATE', , 'GREATER OR EQUAL THAN RATE']
    const extendable = [ 8, 2, 7, 6 ];
    const rate = (values) => {
      // Isn't check if values has length > 0 because extend realm implementation already do this validation
      return values.reduce((acc, value) => acc + value, 0) / values.length;
    };
    const isGteRate = (extendableW) => {
      return extendableW[0] >= rate(extendableW);
    };
    const descriptValue = (extendableW) => {
      return extendableW[0] ? 'GREATER OR EQUAL THAN RATE' : 'LOWER';
    };

    expect(
      (
        extendable['fantasy-realm/extend'](isGteRate)['fantasy-realm/extend'](descriptValue)
      )['fantasy-realm/equals'](
        extendable['fantasy-realm/extend']((extendable_) => 
          descriptValue(
            extendable_['fantasy-realm/extend'](isGteRate)
          )
        )
      )
    ).toBe(true);
  });
});