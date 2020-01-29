const { Array } = require('../../implementations/monoidAndGroup');

describe('Monoid::empty', () => {
  const arrayA = [ 1, 2, 3 ];

  it('An array X concatenated with an empty array should be equal to itself', () => {
    expect(
      arrayA['fantasy-realm/equals'](
        arrayA['fantasy-realm/concat'](arrayA['fantasy-realm/empty']())
      )
    ).toBe(true);
  });

  it('An empty array concatenated with an array X shoud be equal to the array X itself', () => {
    expect(
      arrayA['fantasy-realm/empty']()['fantasy-realm/concat'](arrayA)[
        'fantasy-realm/equals'
      ](arrayA)
    ).toBe(true);
  });
});
