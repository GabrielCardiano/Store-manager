// const checkRequiredFields = require('../utils/checkRequiredFields');
const { salesSchema } = require('./schema');

const checkSales = (req, res, next) => {
  const salesRequest = req.body;

  const { error } = salesSchema.validate(salesRequest);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

// const checkSalesFields = (sales) => {
//   const requiredFields = ['productId', 'quantity'];

//   const fields = sales.map((key) => checkRequiredFields(key, requiredFields));
//   const error = fields.some((e) => e !== undefined);
//   console.log('ERRRORR >>>', error);
//   return error;
// };

module.exports = {
  checkSales,
  // checkSalesFields,
};