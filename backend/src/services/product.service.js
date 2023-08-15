const { productModel } = require('../models');

async function getAllProducts() {
  // Validar que é possível listas todos os produtos
  const allProducts = await productModel.findAll();
  return { status: 'SUCCESSFUL', data: allProducts };
}

async function getProductById(productId) {
  const product = await productModel.findById(productId);
  // Validar que NÃO é possível listar um produto que não existe
  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  // Validar que é possível listar um produto específico com sucesso
  return { status: 'SUCCESSFUL', data: product };
}

// Validar que os testes estão cobrindo: mín 30% das linhas e mín de 6 funções do código

module.exports = {
  getAllProducts,
  getProductById,
};