const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required().min(5).messages({
    'any.required': '400|"name" is required',
    'string.empty': '422|"name" length must be at least 5 characters long',
    'string.min': '422|"name" length must be at least 5 characters long',
  }),
});

module.exports = {
  productSchema,
};