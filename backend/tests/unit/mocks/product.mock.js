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

// mock returns do middleware que valida name  
const returnProductWithouName = { message: 'name is required' };
const returnProductInvalidName = { message: 'name length must be at least 5 characters long' };

// mock update products
const updatedProductMock = { id: 1, name: 'Martetelo do Batman' };
const seviceReturn = { status: 'SUCCESSFUL', data: updatedProductMock };

const modelReturn = { id: 1, name: 'Martetelo do Batman' };

const mockDBReturn = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: 'Rows matched: 1  Changed: 0  Warnings: 0',
    serverStatus: 2,
    warningStatus: 0,
    changedRows: 0,
  },
  undefined,
];

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
  returnProductWithouName,
  returnProductInvalidName,
  seviceReturn,
  updatedProductMock,
  modelReturn,
  mockDBReturn,
};