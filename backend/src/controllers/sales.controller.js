const { salesService } = require('../services');

const statusHTTP = require('../utils/statusHttp');

async function findAllSales(_req, res) {
  const allSales = await salesService.getAllSales(); // criar getAllProducts na camada 
  return res.status(statusHTTP(allSales.status)).json(allSales.data);
}

async function findSalesById(req, res) {
  const { id } = req.params;
  const sales = await salesService.getSalesById(id); // criar getSalesById na camada Sevices
  return res.status(statusHTTP(sales.status)).json(sales.data);
}

module.exports = {
  findAllSales,
  findSalesById,
};