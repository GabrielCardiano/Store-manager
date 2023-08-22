const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const { salesService } = require('../../src/services');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testes rota SALES', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Cria uma Sale com sucesso', async function () {
    const registerSale = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];

    sinon.stub(salesService, 'createSales').resolves({
      status: 'CREATED',
      data: { id: 4, itemsSold: registerSale },
    });

    const response = await chai.request(app).post('/sales').send(registerSale);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ id: 4, itemsSold: registerSale });
  });
});