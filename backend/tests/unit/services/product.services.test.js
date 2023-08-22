const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { allProducts, product, newProduct, productIdFromModel, modelReturn, updatedProductMock, productBeforeUpdateMock, mockDeleteDBReturn, mockDeleteFail } = require('../mocks/product.mock');

describe('Testes de PRODUCT SERVICE: ', function () {
  it('Lista todos os produtos com sucesso', async function () {
    sinon.stub(productModel, 'findAll').resolves(allProducts);

    const responseService = await productService.getAllProducts();
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(allProducts);
  });

  it('Lista produto por ID com sucesso', async function () {
    sinon.stub(productModel, 'findById').resolves(product);
    const productId = 1;

    const responseService = await productService.getProductById(productId);
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(product);
  });

  it('Cria novo produto com sucesso', async function () {
    sinon.stub(productModel, 'insert').resolves(productIdFromModel);
    const inputProduct = { name: 'ProdutoX' };

    const responseService = await productService.createProduct(inputProduct);
    expect(responseService.status).to.equal('CREATED');
    expect(responseService.data).to.deep.equal(newProduct);
  });

  it('Atualiza informações de um produto com sucesso', async function () {
    sinon.stub(productModel, 'findById')
      .onFirstCall()
      .resolves(productBeforeUpdateMock)
      .onSecondCall()
      .resolves(updatedProductMock);
    sinon.stub(productModel, 'update').resolves(modelReturn);

    const productId = 1;
    const productUpdate = { name: 'Martelo do Batman' };

    const responseService = await productService.updateProduct(productId, productUpdate);
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(updatedProductMock);
  });

  it('Deleta produto com sucesso', async function () {
    sinon.stub(productModel, 'remove').resolves(mockDeleteDBReturn);

    const productId = 1;
    const responseService = await productService.deleteProduct(productId);
    expect(responseService.status).to.equal('NO_CONTENT');
  });

  it('Não deleta produto quando o id é inexistente', async function () {
    sinon.stub(productModel, 'remove').resolves(mockDeleteFail);

    const productId = 99;
    const responseService = await productService.deleteProduct(productId);
    console.log('RESPONSE>>>', responseService);
    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.be.deep.equal({ message: 'Product not found' });
  });

  afterEach(function () {
    sinon.restore();
  });
});