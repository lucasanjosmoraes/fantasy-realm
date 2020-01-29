const {
  equals, or,
} = require('sanctuary');

const { Array } = require('../../implementations/ord');

describe('Ord::lte', () => {
  const ordArrayLength2 = [ 1, 2 ];
  const ordArrayLenght3 = [ 1, 2, 3 ];
  const anotherOrdArrayLenght3 = [ 1, 2, 3 ];
  const ordArrayLenght4 = [ 1, 2, 3, 4 ];

  it('Given two arrays, one is lte to the other', () => {
    expect(
      or(
        ordArrayLength2['fantasy-realm/lte'](ordArrayLenght3)
      )(
        ordArrayLenght3['fantasy-realm/lte'](ordArrayLength2)
      )
    ).toBe(true);
  });

  it('If two arrays, Y & Y2, are equal then (Y lte Y2) and (Y2 lte Y) are true', () => {
    expect(
      equals(
        ordArrayLenght3['fantasy-realm/equals'](anotherOrdArrayLenght3)
      )(
        ordArrayLenght3['fantasy-realm/lte'](anotherOrdArrayLenght3) && anotherOrdArrayLenght3['fantasy-realm/lte'](ordArrayLenght3)
      )
    ).toBe(true);
  });

  it('If an array X is lte an array Y and Y is lte an array Z, then X lte Z should be true', () => {
    expect(
      equals(
        ordArrayLength2['fantasy-realm/lte'](ordArrayLenght3) && ordArrayLenght3['fantasy-realm/lte'](ordArrayLenght4)
      )(
        ordArrayLength2['fantasy-realm/lte'](ordArrayLenght4)
      )
    ).toBe(true);
  });
});
