const { Array } = require('../../implementations/applicative');
const { identity, double } = require('../utils');

describe('Applicative::of', () => {
  const applyU = [ double ];
  const applyV = [ 1, 2 ];
  const valueX = 5;
  
  it('Given an Apply v and an Applicative A, v.ap(A.of(identity)) should be equal to the v itself', () => {
    expect(
      applyV['fantasy-realm/ap']([]['fantasy-realm/of'](identity))['fantasy-realm/equals'](applyV)
    ).toBe(true)
  });

  it(`If we lift a value x on an Applicative Ax and a function f on an Applicative Af, 
  then Ax.ap(Af) should be equal to an Applicative that receives f(x)`
  , () => {
    expect(
      []['fantasy-realm/of'](valueX)['fantasy-realm/ap']([]['fantasy-realm/of'](double))[
        'fantasy-realm/equals'
      ]([]['fantasy-realm/of'](double(valueX)))
    ).toBe(true)
  });

  it(`Given two Applicatives, Ax that receives a value y and Af that has the function (f) => f(y), and an Apply u,
  then Ax.ap(u) should be equal to u.ap(Af)`
  , () => {
    expect(
      []['fantasy-realm/of'](valueX)['fantasy-realm/ap'](applyU)[
        'fantasy-realm/equals'
      ](applyU['fantasy-realm/ap']([]['fantasy-realm/of']((f) => f(valueX))))
    ).toBe(true)
  })
});
