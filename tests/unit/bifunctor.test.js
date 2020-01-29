const { Right } = require('../../implementations/bifunctor');
const { identity, double, triple, half, tenTimes } = require('../utils');

describe('Bifunctor::bimap', () => {
  const bifunctor = new Right(1);

  it('Bimap a bifunctor with identity on both sides should be equal to the bifunctor itself',() => {
    expect(
      bifunctor['fantasy-realm/bimap'](identity, identity)['fantasy-realm/equal'](bifunctor)
    ).toBe(true);
  });

  it(`Bimap a bifunctor b with functions f and g and bimap again with functions h and i should be equal to bimap b at once with functions
  (l) => h(f(l)) and (r) => i(g(r))`, () => {
    expect(
      bifunctor['fantasy-realm/bimap'](triple, double)['fantasy-realm/bimap'](half, tenTimes)[
        'fantasy-realm/equal'
        ](
        bifunctor['fantasy-realm/bimap']((l) => half(triple(l)), (r) => tenTimes(double(r)))
      )
    ).toBe(true);
  });
});
