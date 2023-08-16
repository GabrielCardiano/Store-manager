const { salesModel } = require('../models');

async function getAllSales() {
  const allSales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: allSales };
}

async function getSalesById(salesId) {
  const sales = await salesModel.findById(salesId);
  console.log(sales);
  if (sales.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESSFUL', data: sales };
}

module.exports = {
  getAllSales,
  getSalesById,
};