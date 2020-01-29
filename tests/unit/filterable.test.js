const { Array } = require('../../implementations/apply');

describe('Filterable::filter', () => {
  const ordArrayLenght10 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const arrayA = [ 1, 2, 3 ];
  const filterP = (element) => element % 2 === 0;
  const filterQ = (element) => element < 5;
  const filterAlwaysTrue = () => true;
  const filterAlwaysFalse = () => false;

  it('Filter an array with filters P and Q applied at once should be equal to apply each filter in sequence', () => {
    expect(
      ordArrayLenght10['fantasy-realm/filter']((el) => filterP(el) && filterQ(el))['fantasy-realm/equals'](
        ordArrayLenght10['fantasy-realm/filter'](filterP)['fantasy-realm/filter'](filterQ)
      )
    ).toBe(true);
  });

  it('Filter an array with a filter that always return true should return the same array', () => {
    expect(
      ordArrayLenght10['fantasy-realm/equals'](ordArrayLenght10['fantasy-realm/filter'](filterAlwaysTrue))
    ).toBe(true);
  });

  it('Filter an array with a filter f that always return false should be equal to any other array filtered with f', () => {
    expect(
      ordArrayLenght10['fantasy-realm/filter'](filterAlwaysFalse)['fantasy-realm/equals'](arrayA['fantasy-realm/filter'](filterAlwaysFalse))
    ).toBe(true);
  });
});
