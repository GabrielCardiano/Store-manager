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

async function insert(product) {
  const { name } = product;
  const query = 'INSERT INTO products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  return insertId;
}

async function update(productId, product) {
  const { name } = product;
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  const updatedProduct = await connection.execute(query, [name, productId]);
  return updatedProduct;
}

async function remove(productId) {
  const query = 'DELETE FROM products WHERE id = ?';
  const [deleteProduct] = await connection.execute(query, [productId]);
  return deleteProduct;
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
};