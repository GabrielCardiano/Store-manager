// rota GET
// mocks retornos da camada Service
const allProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const product = {
  id: 1,
  name: 'Martelo de Thor',
};

// mock retornos da camada Controller
const allProductsSuccessful = {
  status: 'SUCCESSFUL',
  data: allProducts,
};

const productSuccessful = {
  status: 'SUCCESSFUL',
  data: product,
};

// mocks do Database
const allProductsFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const productFromDB = {
  id: 1,
  name: 'Martelo de Thor',
};

// rota POST
// mock return da camada Controller
const newProduct = {
  id: 4,
  name: 'ProdutoX',
};

const newProductSuccessful = {
  status: 'CREATED',
  data: newProduct,
};

const newProductId = { insertId: 4 }; 
const productIdFromModel = 4;

module.exports = {
  allProducts,
  product,
  allProductsSuccessful,
  productSuccessful,
  allProductsFromDB,
  productFromDB,
  newProduct,
  newProductSuccessful,
  newProductId,
  productIdFromModel,
};