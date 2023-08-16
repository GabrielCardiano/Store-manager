const camelize = require('camelize');
const connection = require('./connection');

async function findAll() {
  const query = `SELECT sp.sale_id, sp.product_id, sp.quantity, s.date
  FROM sales s 
  INNER JOIN sales_products sp
  ON s.id = sp.sale_id
  ORDER BY sale_id, product_id;`;
  const [allSales] = await connection.execute(query);
  return camelize(allSales);
}

async function findById(salesId) {
  const query = `SELECT sp.product_id, sp.quantity, s.date 
  FROM sales s
  INNER JOIN sales_products sp
  ON s.id = sp.sale_id
  WHERE sp.sale_id = ?
  ORDER BY sale_id, product_id;`;
  const [sales] = await connection.execute(query, [salesId]);
  return camelize(sales);
}

module.exports = {
  findAll,
  findById,
};