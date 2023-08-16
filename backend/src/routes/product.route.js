const route = require('express').Router();
const { productController } = require('../controllers');

route.get('/', productController.findAllProducts);
route.get('/:id', productController.findProductById);
route.post('/', productController.newProduct);

module.exports = route;