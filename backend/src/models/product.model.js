const camelize = require('camelize');
const connection = require('./connection');

async function findAll() {
  const query = 'SELECT * FROM products ORDER BY id';
  const [allProducts] = await connection.execute(query);
  return camelize(allProducts);
}

async function findById(productId) {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [[product]] = await connection.execute(query, [productId]);
  return camelize(product);
}

module.exports = {
  findAll,
  findById,
};