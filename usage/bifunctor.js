const { Right, Left } = require('../implementations/bifunctor');

Function.prototype.map = function (f) {
  return (x) => f(this(x));
};

const isValid = (user) => !!user.name;

const login = (user) => isValid(user)
  ? new Right(user)
  : new Left('Boo');

const failureStream = ((x) => x.toUpperCase())
  .map((x) => `${x}!`)
  .map((x) => `<em>${x}</em>`);

const successStream = ((x) => x.name)
  .map((x) => `Hey, ${x}!`)
  .map((x) => `<h1>${x}</h1>`);

console.log('valid result', login({ name: 'Lucas' })['fantasy-realm/bimap'](
  failureStream,
  successStream
));

console.log('false result', login({})['fantasy-realm/bimap'](
  failureStream,
  successStream
));
