const { salesModel } = require('../models');

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