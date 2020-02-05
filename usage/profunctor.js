/* eslint no-unused-vars:0 */
const { Array } = require('../implementations/functor');
const { Costar } = require('../implementations/profunctor');

const data = [ 1, 3, 5, 7, 8, 1 ];
const sum = new Costar((foldable) => foldable.reduce((x, y) => x + y, 0));

const length = sum['fantasy-realm/promap']((_) => 1, (x) => x);
const isGt5 = sum['fantasy-realm/promap']((x) => x, (x) => x > 5);
const longEnough = sum['fantasy-realm/promap']((_) => 1, (x) => x > 5);

console.log('length', length.run(data));
console.log('Is the result over 5?', isGt5.run(data));
console.log('longEnough', longEnough.run(data));
