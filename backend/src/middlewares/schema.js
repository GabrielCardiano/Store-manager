const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(5).required().messages({
    'any.required': '400|"name" is required',
    'string.base': '422|"quantity must be a string',
    'string.empty': '422|"name" length must be at least 5 characters long',
    'string.min': '422|"name" length must be at least 5 characters long',
  }),
});

const salesSchema = Joi.array().items(
  Joi.object({
    productId: Joi.number().integer().min(1).required()
.messages({
      'any.required': '400|"productId" is required',
      'number.base': '422|"productId" must be a number',
      'number.empty': '422|"quantity" must be greater than or equal to 1',
      'number.min': '422|"quantity" must be greater than or equal to 1',
    }),
    quantity: Joi.number().integer().min(1).required()
.messages({
      'any.required': '400|"quantity" is required',
      'number.base': '422|"quantity must be a number',
      'number.empty': '422|"quantity" must be greater than or equal to 1',
      'number.min': '422|"quantity" must be greater than or equal to 1',
    }),
  }),
);  

module.exports = {
  productSchema,
  salesSchema,
};