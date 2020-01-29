const { equals } = require('sanctuary');

const { Array } = require('../../implementations/setoid');

describe('Setoid::equals', () => {
  const arrayA = [ 1, 2, 3 ];
  const arrayB = [ 1, 2, 3 ];
  const arrayC = [ 1, 2, 3 ];

  it('Given two Arrays, A and B, A equals B should be equal to B equals A', () => {
    expect(
      equals(arrayA['fantasy-realm/equals'](arrayB))(arrayB['fantasy-realm/equals'](arrayA))
    ).toBe(true);
  });

  it('Given three arrays, A, B and C, if A equals B and B equals C, then A equals C', () => {
    expect(
      arrayA['fantasy-realm/equals'](arrayB) && arrayB['fantasy-realm/equals'](arrayC) && arrayA['fantasy-realm/equals'](arrayC)
    ).toBe(true);
  });
});
