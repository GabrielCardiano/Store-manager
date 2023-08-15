const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productService } = require('../../../src/services');
const { allProducts, product } = require('../mocks/product.mock');

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

  afterEach(function () {
    sinon.restore();
  });
});