const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { allSalesFromDB, saleFromDB } = require('../mocks/sales.mock');
const { salesModel } = require('../../../src/models');

describe('Testes de SALES MODEL: ', function () {
  it('Lista todas as sales com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesFromDB]);

    const listAllSales = await salesModel.findAll();
    expect(listAllSales).to.be.an('array');
    expect(listAllSales).to.have.lengthOf(6);
    expect(listAllSales).to.be.deep.equal(allSalesFromDB);
  });

  it('Lista todas as sales por ID com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([saleFromDB]);

    const listSalesById = await salesModel.findAll();
    expect(listSalesById).to.be.an('array');
    expect(listSalesById).to.have.lengthOf(2);
    expect(listSalesById).to.be.deep.equal(saleFromDB);
  });

  afterEach(function () {
    sinon.restore();
  });
});