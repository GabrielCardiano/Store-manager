const { salesModel } = require('../models');

async function getAllSales() {
  const allSales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: allSales };
}

async function getSalesById(salesId) {
  const sales = await salesModel.findById(salesId);
  if (!sales) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { satus: 'SUCCESSFUL', data: sales };
}

module.exports = {
  getAllSales,
  getSalesById,
};