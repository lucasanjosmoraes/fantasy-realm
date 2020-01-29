const { Array } = require('../../implementations/chain');

describe('Chain::chain', () => {
  it(`a.chain(b).chain(c) should be equal to a.chain(b.chain(c)), because it doesn't 
  matter where we put brackets, we just need to keep the left-to-right order`,
  () => {
    const chainable = [ 1, 2, 3 ];
    const functionFThatResultsInChainable = (x) => [ x ];
    const functionGThatResultsInChainable = (x) => [ x * 2 ];

    expect(
      (
        chainable['fantasy-realm/chain'](functionFThatResultsInChainable)['fantasy-realm/chain'](functionGThatResultsInChainable)
      )['fantasy-realm/equals'](
        chainable['fantasy-realm/chain']((x) => functionFThatResultsInChainable(x)['fantasy-realm/chain'](functionGThatResultsInChainable))
      )
    ).toBe(true);
  });
});