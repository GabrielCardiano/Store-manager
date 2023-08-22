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

async function updateProduct(productId, product) {
  // validate Id existence
  const existId = await productModel.findById(productId);
    if (!existId) {
        return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }

  await productModel.update(productId, product);
  
  const updatedProduct = await productModel.findById(productId);
  return { status: 'SUCCESSFUL', data: updatedProduct };
}

async function deleteProduct(productId) {
  //  validate product existence in database
  const response = await productModel.remove(productId);
  if (!response.affectedRows) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'NO_CONTENT' };
}
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};