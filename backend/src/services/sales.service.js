const { salesModel } = require('../models');
const validadeProductIdField = require('./validations/validadeProducIdField');

async function getAllSales() {
  const allSales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: allSales };
}

async function getSalesById(salesId) {
  const sales = await salesModel.findById(salesId);
  if (sales.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESSFUL', data: sales };
}

async function createSales(sales) {
  // Valida existência dos campos da requisição
  // const fields = await checkSalesFields(sales);
  // if (fields) {
  //   return { status: 'INVALID_VALUE', data: { message: '"quantity" must be greater than or equal to 1' } };
  // }

  //  valida existencia do campo ProductId no Banco de Dados
  const isProductIdValid = await validadeProductIdField(sales);
  if (isProductIdValid) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  const saleId = await salesModel.insert(sales);
  const sale = await salesModel.findById(saleId);

  const itemsSold = sale.map((e) => {
    delete e.date;
    return e;
  });
  const newSale = { id: saleId, itemsSold };  
  return { status: 'CREATED', data: newSale };
}

module.exports = {
  getAllSales,
  getSalesById,
  createSales,
};