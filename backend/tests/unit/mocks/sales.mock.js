const salesDate = '2023-08-15T21:28:18.000Z';

// mock return da camada Service
const allSales = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: salesDate,
  },
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: salesDate,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: salesDate,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: salesDate,
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: salesDate,
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: salesDate,
  },
];

const sale = [
  {
    date: salesDate,
    productId: 1,
    quantity: 5,
  },
  {
    date: salesDate,
    productId: 2,
    quantity: 10,
  },
];

// mock return da camada Controller
const allSalesSuccessful = { status: 'SUCCESSFUL', data: allSales };
const salesSuccessful = { status: 'SUCCESSFUL', data: sale };
const saleNotFound = { status: 'NOT_FOUND', data: { message: 'Sale not found' } };

// mock return da camada Model
const allSalesFromDB = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: salesDate,
  },
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: salesDate,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: salesDate,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: salesDate,
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: salesDate,
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: salesDate,
  },
];

const saleFromDB = [
  {
    date: salesDate,
    productId: 1,
    quantity: 5,
  },
  {
    date: salesDate,
    productId: 2,
    quantity: 10,
  },
];

// mock para registra nova Sale
const newSale = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const registerNewSale = { status: 'CREATED', data: { id: 5, itemsSold: newSale } };

module.exports = {
  allSales,
  sale,
  allSalesSuccessful,
  salesSuccessful,
  saleNotFound,
  allSalesFromDB,
  saleFromDB,
  registerNewSale,
  newSale,
};