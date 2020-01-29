const {
  Either, of, equals, Maybe,
} = require('sanctuary');
const { identity } = require('../utils');

const { Array, lift2, append } = require('../../implementations/traversable');

describe('Traversable::traverse', () => {
  const traversableU = [ Either.Right(1), Either.Right(2), Either.Right(3) ];

  const functionT = (applicative) => of(Maybe)(applicative.value);

  it('If we traverse a Traversable u passing an Applicative F and the \'of\' method of F as parameters, the result should be equal to F.of(u)', () => {
    expect(
      equals(traversableU['fantasy-realm/traverse'](Either, Either.Right))(Either.Right(traversableU))
    ).toBe(true);
  });

  it(`Given a function t that takes one Applicative F as parameter and generate another Applicative G with same value of F,
  the result of t passing the result of u.sequence(F) should be equal to traverse u passing G and t`
  , () => {
    expect(
      equals(functionT(traversableU['fantasy-realm/sequence'](Either)))(traversableU['fantasy-realm/traverse'](Maybe, functionT))
    ).toBe(true);
  });

  it(`Given a traversable u and a Compose that's nothing but an applicative inside another applicative.
  (Like Just inside Either for example).
  Traverse u with the Compose and a function (x) => new Compose(x) should be equal to Traverse u 
  with the identity function and the outer applicative inside Compose, 
  and then traverse its result with the inner applicative and the identity function again`
    , () => {
    const traversable = [ Either.Right(of(Maybe)(1)), Either.Right(of(Maybe)(2)) ];

    Array.prototype['fantasy-realm/traverseForSanctuary'] = function (applicative, f) {
      return this.reduce((acc, value) => {
        return lift2(append)(f(value))(acc);
      }, of(applicative)([]));
    };
    
    Number.prototype['fantasy-land/map'] = function (f) {
      return f(1);
    };
    
    function Compose(composedApplicatives) {
      this.composedApplicatives = composedApplicatives;
    }
    
    Compose['fantasy-land/of'] = function (x) {
      return new Compose(of(Either)(of(Maybe)(x)));
    };
    
    Compose.prototype['fantasy-land/map'] = function (f) {
      return new Compose(
        this.composedApplicatives['fantasy-land/map'](
          (inner) => inner['fantasy-land/map'](f)
        )
      );
    };
    
    Compose.prototype['fantasy-land/ap'] = function (f) {
      return new Compose(
        this.composedApplicatives['fantasy-land/ap'](
          f.composedApplicatives['fantasy-land/map'](
            (u) => (y) => y['fantasy-land/ap'](u)
          )
        )
      );
    };
    
    Compose.prototype['fantasy-realm/equals'] = function (anotherCompose) {
      return equals(this.composedApplicatives)(anotherCompose.composedApplicatives);
    };

    expect(
      traversable['fantasy-realm/traverse'](Compose, (x) => new Compose(x))[
        'fantasy-realm/equals'
      ](
        new Compose(
          traversable['fantasy-realm/traverseForSanctuary'](Either, identity)['fantasy-land/map'](
            (x) => x['fantasy-land/traverse'](Maybe, identity)
          )
        )
      )
    ).toBe(true);
  });
});
