const { Array } = require('../../implementations/functor');
const { Costar } = require('../../implementations/profunctor');
const { identity, double, triple, half, tenTimes } = require('../utils');

describe('Profunctor::promap', () => {
  const data = [ 1, 3, 5, 7, 8, 1 ];
  const profunctor = new Costar((foldable) => foldable.reduce((x, y) => x + y, 0));

  it('Promap a profunctor with identity on both sides should be equal to the profunctor itself', () => {
    expect(
      profunctor['fantasy-realm/promap'](identity, identity).run(data) === profunctor.run(data)
    ).toBe(true);
  });

  it(`Promap a profunctor p with functions f and i and promap again with functions g and h should be equal to promap p at once with functions
  (a) => f(g(a)) and (b) => h(i(b))`, () => {
    expect(
      profunctor['fantasy-realm/promap'](triple, half)['fantasy-realm/promap'](tenTimes, double)
        .run(data) === profunctor['fantasy-realm/promap']((a) => triple(tenTimes(a)), (b) => double(half(b)))
        .run(data)
    ).toBe(true);
  });
});
