const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const { 
  allProductsSuccessful,
  allProducts,
  product,
  productSuccessful,
  newProduct,
  newProductSuccessful,
  seviceReturn,
  updatedProductMock,
  mockServiceStatus,
  mockServiceStatusWithMessage,
 } = require('../mocks/product.mock');

const { expect } = chai;
chai.use(sinonChai);

describe('Testes de PRODUCT CONTROLLER: ', function () {
  it('Lista todos os produtos com sucesso', async function () {
    // Arrange
    sinon.stub(productService, 'getAllProducts').resolves(allProductsSuccessful);

    const req = { params: {}, body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    // Act
    await productController.findAllProducts(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });

  it('Lista todos os produto por ID com sucesso', async function () {
    sinon.stub(productService, 'getProductById').resolves(productSuccessful);

    const req = { params: { productId: 1 }, body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await productController.findProductById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(product);    
  });

  it('Cria novo produto com sucesso', async function () {
    sinon.stub(productService, 'createProduct').resolves(newProductSuccessful);

    const req = { params: {}, body: { name: 'ProdutoX' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await productController.newProduct(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  it('Atualiza informações de um produto com sucesso', async function () {
    sinon.stub(productService, 'updateProduct').resolves(seviceReturn);

    const req = { params: {}, body: { name: 'Martetelo do Batman' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await productController.updateProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updatedProductMock);
  });
  
  it('Deleta produto com sucesso', async function () {
    sinon.stub(productService, 'deleteProduct').resolves(mockServiceStatus);

    const req = { params: { id: 1 } };
    const res = { status: sinon.stub().returnsThis(), end: sinon.stub() };

    await productController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(204);
    expect(res.end).to.have.been.calledWith();
  });

  it('Não deleta produto quando o id é inexistente', async function () {
    sinon.stub(productService, 'deleteProduct').resolves(mockServiceStatusWithMessage);

    const req = { params: { id: 1 }, body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await productController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  afterEach(function () {
    sinon.restore();
  });
});