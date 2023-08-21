const { productModel } = require('../../models');

const validadeProductIdField = async (sales) => {
    const promisesProductId = await Promise.all(
        sales.map(({ productId }) => productModel.findById(productId)),
    );
      const result = await Promise.all(promisesProductId);
      const isProductIdValid = result.some((key) => key === undefined);
      return isProductIdValid;
};

module.exports = validadeProductIdField;