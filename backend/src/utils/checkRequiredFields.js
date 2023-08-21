const checkRequiredFields = (bodyRequest, requiredFields) => { // Array, ArrayObj]
  console.log('AAA >>>>', bodyRequest);
  console.log('BBB >>>', requiredFields);
  for (let i = 0; i < requiredFields.length; i += 1) {
    const currentFields = requiredFields[i];
    if (!(currentFields in bodyRequest)) {
      console.log(`${currentFields} is missing`);
      return `${currentFields} is missing`;
    }
  }
};

module.exports = checkRequiredFields;