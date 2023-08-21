const { productService } = require('../services');

const statusHTTP = require('../utils/statusHttp');

async function findAllProducts(_req, res) {
  const allProducts = await productService.getAllProducts(); // getProducts ainda será criada na camada Services
  return res.status(statusHTTP(allProducts.status)).json(allProducts.data);
}

async function findProductById(req, res) {
  const { id } = req.params;
  const product = await productService.getProductById(id); // getProductById ainda será criada na camada Services
  return res.status(statusHTTP(product.status)).json(product.data);
}

async function newProduct(req, res) {
  const { body } = req; 
  const product = await productService.createProduct(body); // criar na camada Service
  return res.status(statusHTTP(product.status)).json(product.data);
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { body } = req;
  const product = await productService.updateProduct(id, body);
  return res.status(statusHTTP(product.status)).json(product.data);
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  const product = await productService.deleteProduct(id);
  if (product.data) {
  return res.status(statusHTTP(product.status)).json(product.data);
  }
  return res.status(statusHTTP(product.status)).end();
}

module.exports = {
  findAllProducts,
  findProductById,
  newProduct,
  updateProduct,
  deleteProduct,
};