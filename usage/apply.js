/* eslint no-unused-vars:0 */
const { Array } = require('../implementations/apply');

const cards = [
  {
    id: 1,
    type: 1,
    balance: 500,
    number: 49382492834923,
    cvc: 444,
    dueDate: '15/01/2021',
    name: 'LUCAS',
  },
  {
    id: 2,
    type: 2,
    balance: 147.67,
    number: 874364734378682,
    cvc: 872,
    dueDate: '19/02/2029',
    name: 'MORAES',
  },
  {
    id: 3,
    type: 1,
    balance: 10000.54,
    number: 4782428481742141,
    cvc: 910,
    dueDate: '03/12/2022',
    name: 'MORAES',
  },
];

const sum100 = (card) => (
  { ...card, balance: card.balance + 1000 }
);

const isACreditCard = (card) => (
  { ...card, isCreditCard: card.type === 1 }
);

const getBalanceNotificationMessage = (card) => (
  `${card.name} has ${card.balance} available`
);

console.log('Cards:', cards);
console.log(
  'Adding 1000 to their balance:',
  cards['fantasy-realm/ap']([ sum100 ])
);
console.log(
  'Adding flag indicating who is a credit card:',
  cards['fantasy-realm/ap']([ isACreditCard ])
);
console.log(
  'Preparing message that will be sent on a notification to the user :',
  cards['fantasy-realm/ap']([ getBalanceNotificationMessage ])
);
