const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { allProductsFromDB, allProducts, productFromDB, product } = require('../mocks/product.mock');
const { productModel } = require('../../../src/models');

describe('Testes de PRODUCT MODEL: ', function () {
  it('Lista todos os produtos com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsFromDB]);

    const listAllProducts = await productModel.findAll();
    expect(listAllProducts).to.be.an('array');
    expect(listAllProducts).to.have.lengthOf(3);
    expect(listAllProducts).to.be.deep.equal(allProducts);
  });

  it('Lista produto por ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromDB]]);
    const productId = 1;
    const listProductById = await productModel.findById(productId);
    expect(listProductById).to.be.an('object');
    expect(listProductById).to.be.deep.equal(product);
  });

  afterEach(function () {
    sinon.restore();
  });
});