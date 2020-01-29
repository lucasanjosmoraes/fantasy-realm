const { Array } = require('../../implementations/apply');

describe('Apply::ap', () => {
  const lift3 = (f) => (a) => (b) => (c) => c['fantasy-realm/ap'](b['fantasy-realm/ap'](a['fantasy-realm/map'](f)));

  const compose = (f) => (g) => (x) => f(g(x));
  const applyA = [ 4, 5, 6 ];
  const applyB = [ (x) => x + 1 ];
  const applyC = [ (x) => x * 2 ];
  
  it('Given three Applys, f, g and h, f.ap(g.ap(h.map(compose))) should be equal to f.ap(g).ap(h)', () => {
    expect(
      applyA['fantasy-realm/ap'](applyB['fantasy-realm/ap'](applyC['fantasy-realm/map'](compose)))['fantasy-realm/equals'](
        applyA['fantasy-realm/ap'](applyB)['fantasy-realm/ap'](applyC)
      )
    ).toBe(true)
  });
  it(`Given a function called lift3: ${lift3.toString()}
  We can also ensure that: lift3(compose)(h)(g)(f) should be equal to f.ap(g).ap(h)`
  , () => {
    expect(
      lift3(compose)(applyC)(applyB)(applyA)['fantasy-realm/equals'](
        applyA['fantasy-realm/ap'](applyB)['fantasy-realm/ap'](applyC)
      )
    ).toBe(true)
  });
});
