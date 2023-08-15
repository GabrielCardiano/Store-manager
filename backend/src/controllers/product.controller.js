const { productService } = require('../services');

const statusHTTP = require('../utils/statusHttp');

async function findAllProducts(_req, res) {
  const allProducts = await productService.getAllProducts(); // getProducts ainda será criada na camada Services
  return res.status(statusHTTP(allProducts.status)).json(allProducts);
}

async function findProductById(req, res) {
  const { id } = req.params;
  const product = await productService.getProductById(id); // getProductById ainda será criada na camada Services
  return res.status(statusHTTP(product.status)).json(product.data);
}

module.exports = {
  findAllProducts,
  findProductById,
};