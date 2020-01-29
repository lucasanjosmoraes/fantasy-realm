const { Set } = require('../../implementations/foldable');

describe('Foldable::reduce', () => {
  const foldableU = new Set([ 1, 2, 3, 4 ]);
  const functionToReduce = (x, y) => y + x;

  it('Reduce a foldable with a function should be equal to move the foldable elements to an array and then reduce with the same function', () => {
    expect(
      foldableU['fantasy-realm/reduce'](functionToReduce, 0) === Array.from(foldableU).reduce(functionToReduce, 0)
    ).toBe(true);
  });
});
