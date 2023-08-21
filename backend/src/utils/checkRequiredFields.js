const checkRequiredFields = (bodyRequest, requiredFields) => { // Array, ArrayObj]
  for (let i = 0; i < requiredFields.length; i += 1) {
    const currentFields = requiredFields[i];
    if (!(currentFields in bodyRequest)) {
      return `${currentFields} is missing`;
    }
  }
};

module.exports = checkRequiredFields;