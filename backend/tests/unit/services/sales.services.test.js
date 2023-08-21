const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales, sale, saleNotFound, registerNewSale, newSale } = require('../mocks/sales.mock');
const { salesController } = require('../../../src/controllers');

const { expect } = chai;
chai.use(sinonChai);

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

  it('Cria sales com sucesso', async function () {
    sinon.stub(salesService, 'createSales').resolves(registerNewSale);

    const req = { params: {}, body: newSale };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await salesController.newSales(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(registerNewSale.data);
  });

  it('Não cria uma sale se o campo [productId] for inválido', async function () {
    sinon.stub(salesModel, 'findById').resolves(undefined);

    const registerSale = [{ productId: 9000, quantity: 1 }];
    const responseService = await salesService.createSales(registerSale);

    expect(responseService.status).to.equal('NOT_FOUND');
    expect(responseService.data).to.deep.equal({ message: 'Product not found' });
  });

  // it('Não cria sale se o campo [quantity] for menor que 1', async function () {
  //   const registerSale = [{ productId: 1, quantity: 0 }];
  //   const responseService = await salesService.createSales(registerSale);
  //   console.log('RES>>>>', responseService);
  //   expect(responseService.status).to.equal('INVALID_VALUE');
  //   expect(responseService.data).to.deep.equal({ message: '"quantity" must be greater than or equal to 1' });
  // });

  afterEach(function () {
    sinon.restore();
  });
});