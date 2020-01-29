const { Array } = require('../../implementations/semigroup');

describe('Semigroup::concat', () => {
  const ordArrayLength2 = [ 1, 2 ];
  const ordArrayLenght3 = [ 1, 2, 3 ];
  const ordArrayLenght4 = [ 1, 2, 3, 4 ];

  it(`a.concat(b).concat(c) should be equal to a.concat(b.concat(c)), because it doesn't 
  matter where we put brackets, we just need to keep the left-to-right order`
  , () => {
    expect(
      (
        ordArrayLength2['fantasy-realm/concat'](ordArrayLenght3)['fantasy-realm/concat'](ordArrayLenght4)
      )['fantasy-realm/equals'](
        ordArrayLength2['fantasy-realm/concat'](ordArrayLenght3['fantasy-realm/concat'](ordArrayLenght4))
      )
    ).toBe(true);
  });
});
