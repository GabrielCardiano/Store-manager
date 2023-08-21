const route = require('express').Router();
const { salesController } = require('../controllers');
const { checkSales } = require('../middlewares/validateSales');

route.get('/', salesController.findAllSales);
route.get('/:id', salesController.findSalesById);
route.post('/', checkSales, salesController.newSales);

module.exports = route;