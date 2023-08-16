const { productModel } = require('../models');

async function getAllProducts() {
  const allProducts = await productModel.findAll();
  return { status: 'SUCCESSFUL', data: allProducts };
}

async function getProductById(productId) {
  const product = await productModel.findById(productId);
  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESSFUL', data: product };
}

async function createProduct(product) {
  const productId = await productModel.insert(product);
  const newProduct = { id: productId, ...product };
  return { status: 'CREATED', data: newProduct };
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};