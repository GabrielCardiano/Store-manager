const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales, sale, saleNotFound } = require('../mocks/sales.mock');

describe('Testes de PRODUCT SERVICE: ', function () {
  it('Lista todos as sales com sucesso', async function () {
    sinon.stub(salesModel, 'findAll').resolves(allSales);

    const responseService = await salesService.getAllSales();
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(allSales);
  });

  it('Lista todos as sales por ID com sucesso', async function () {
    sinon.stub(salesModel, 'findById').resolves(sale);
    const saleId = 1;

    const responseService = await salesService.getSalesById(saleId);
    expect(responseService.status).to.equal('SUCCESSFUL');
    expect(responseService.data).to.deep.equal(sale);
  });

  it('Não encontra sales quando o ID é inexistente', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);
    const saleId = 666;

    const responseService = await salesService.getSalesById(saleId);
    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.deep.equal(saleNotFound.data);
  });

  afterEach(function () {
    sinon.restore();
  });
});