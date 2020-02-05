/* eslint no-unused-vars:0 */
const { Array } = require('../implementations/applicative');
const { Left, Right, either } = require('./utils');

const lift2 = (functionThatNeedsTwoParameters) => (applyA) => (applyB) => (
  applyB.ap(applyA.map(functionThatNeedsTwoParameters))
);

const users = [
  Right.of({ limitUsed: 50000, lastTransactionsAmount: 250 }),
  Right.of({ limitUsed: 800, lastTransactionsAmount: 80 }),
  Right.of({ limitUsed: 100, lastTransactionsAmount: 10 }),
  Right.of({ limitUsed: 0, lastTransactionsAmount: 1 }),
];

const sum = (x) => (y) => (
  x + y
);

const divide = (x) => (y) => (
  (y === 0)
    ? Left.of('Você ta de brincadeira querendo fazer divisão por 0')
    : Right.of(x / y)
);

const rateOfUserTransactions = (user) => {
  if (user instanceof Left) {
    return user;
  }

  const userData = user.value;

  return divide(userData.limitUsed)(userData.lastTransactionsAmount);
};

const sumOfTransactionsRates = (Applicative, array) => (
  array.reduce(
    (accumulated, currentValue) => (
      lift2(sum)(accumulated)(rateOfUserTransactions(currentValue))
    ),
    Applicative.of(0)
  )
);

const handleCalculationError = (errorMessage) => (
  Left.of(`Erro interno: ${errorMessage}`)
);

const calculateGlobalRate = (globalAmount) => (rate) => (
  divide(rate)(globalAmount)
);

const getGlobalRate = (fromUsers) => (
  either(handleCalculationError)(calculateGlobalRate(fromUsers.length))(sumOfTransactionsRates(Right, fromUsers))
);

console.log('Global rates:', getGlobalRate(users));
