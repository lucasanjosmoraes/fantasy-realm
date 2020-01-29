/**
 * Profunctor
 */

class Costar {
  constructor(run) {
    this.run = run;
  }
}

// promap :: Profunctor p => p b c ~> (a -> b, c -> d) -> p a d
Costar.prototype['fantasy-land/promap'] = function (preHook, posHook) {
  return new Costar((functor) => posHook(this.run(functor['fantasy-realm/map'](preHook))));
};

Costar.prototype['fantasy-realm/promap'] = Costar.prototype['fantasy-land/promap'];

module.exports = { Costar };
