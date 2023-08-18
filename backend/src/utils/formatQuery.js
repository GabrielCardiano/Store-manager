const snakeize = require('snakeize');

const testParam = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const formatColumns = (object) => Object.keys(snakeize(object)).join(',');
const formatPlaceHolders = (object) => Object.keys(object).map((_key) => '?').join(',');

const formatColumnsToCreateSale = (arrayObj) => {
  let keys;
   arrayObj.forEach((object) => {
   keys = Object.keys(snakeize(object)).join(', ');  
  });
  return keys;
};

formatColumnsToCreateSale(testParam);

const formatPlaceholdersToCreateSales = (arrayObj) => {
  let placeHolders;
  arrayObj.forEach((object) => {
    placeHolders = Object.keys(object).map((_key) => '?').join(', ');
  });
  return placeHolders;
};

module.exports = {
  formatColumns,
  formatPlaceHolders,
  formatColumnsToCreateSale,
  formatPlaceholdersToCreateSales,
};