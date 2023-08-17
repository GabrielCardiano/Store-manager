const route = require('express').Router();
const { productController } = require('../controllers');
const { checkName } = require('../middlewares/validateProduct');

route.get('/', productController.findAllProducts);
route.get('/:id', productController.findProductById);
route.post('/', checkName, productController.newProduct);

module.exports = route;