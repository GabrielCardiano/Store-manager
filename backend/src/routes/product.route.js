const route = require('express').Router();
const { productController } = require('../controllers');

route.get('/', productController.findAllProducts);
route.get('/:productId', productController.findProductById);

module.exports = route;