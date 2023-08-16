const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesController } = require('../../../src/controllers');
const { allSalesSuccessful, salesSuccessful, allSales, sale, saleNotFound } = require('../mocks/sales.mock');
const { salesService } = require('../../../src/services');

const { expect } = chai;
chai.use(sinonChai);

describe('Testes de SALES CONTROLLER: ', function () {
  it('Lista todos as sales com sucesso', async function () {
    sinon.stub(salesService, 'getAllSales').resolves(allSalesSuccessful);

    const req = { params: {}, body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await salesController.findAllSales(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });

  it('Lista todos as sales por ID com sucesso', async function () {
    sinon.stub(salesService, 'getSalesById').resolves(salesSuccessful);

    const req = { params: { id: 1 }, body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await salesController.findSalesById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(sale);
  });

  it('Não encontra sales quando o ID é inexistente', async function () {
    sinon.stub(salesService, 'getSalesById').resolves(saleNotFound);

    const req = { params: { id: 1 }, body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await salesController.findSalesById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(saleNotFound.data);
  });

  afterEach(function () {
    sinon.restore();
  });
});