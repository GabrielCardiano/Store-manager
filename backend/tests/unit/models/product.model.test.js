const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { allProductsFromDB, allProducts, productFromDB, product, newProductId, productIdFromModel, mockDBReturn, mockDeleteDBReturn } = require('../mocks/product.mock');
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

  it('Cria novo produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([newProductId]);
    const inputProduct = { name: 'ProdutoX' };
    const productId = await productModel.insert(inputProduct);
    expect(productId).to.be.a('number');
    expect(productId).to.equal(productIdFromModel);
  });

  it('Atualiza informações de um produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves(mockDBReturn);

    const productId = 1;
    const updateProduct = { name: 'Martetelo do Batman' };

    const responseDB = await productModel.update(productId, updateProduct);
    expect(responseDB[0].affectedRows).to.be.equal(1);
    expect(responseDB).to.deep.equal(mockDBReturn); 
  });

  it('Deleta produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([mockDeleteDBReturn]);
    const productId = 1;
    const responseDB = await productModel.remove(productId);
    expect(responseDB.affectedRows).to.be.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});