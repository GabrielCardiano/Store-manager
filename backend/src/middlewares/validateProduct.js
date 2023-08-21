const { productSchema } = require('./schema');

const checkName = (req, res, next) => {
  const product = req.body;
  const { error } = productSchema.validate(product);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  return next();
};

module.exports = { checkName };