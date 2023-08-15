const connection = require('./connection');

async function findAll() {
  const query = 'SELECT * FROM products ORDER by id';
  const [allProducts] = await connection.execute(query);
  return allProducts;
}

async function findById(productId) {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [[product]] = await connection.execute(query, [productId]);
  return product;
}

module.exports = {
  findAll,
  findById,
};