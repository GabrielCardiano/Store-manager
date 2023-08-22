const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { checkName } = require('../../../src/middlewares/validateProduct');
const { productSchema } = require('../../../src/middlewares/schema');

const { expect } = chai;
chai.use(sinonChai);

describe('Testa funções middleware de ValidateProduct', function () {
  it('testa se produto é válido', async function () { 
    const product = { id: 5, name: 'ProdutoX' };
    
    sinon.stub(productSchema, 'validate').returns(product);
    const req = { name: 'ProdutoX' };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    await checkName(req, res, next);
    expect(req).to.be.an('Object');
    expect(next.calledOnce);
  });

  // Verificar Middleware inválido
  // it('testa de produto é inválido', async function () {
  //   const invalidReturn = {
  //     status: 400,
  //     data: { message: '"name" length must be at least 5 characters long' },
  //   };

  //   sinon.stub(productSchema, 'validate').returns(invalidReturn);
  //   const req = { name: 'aaa' };
  //   const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
  //   const next = sinon.stub().returns();

  //   console.log('REEEQ>>>', req);
  //   console.log('RESSS>>>', res);
  //   await checkName(req, res, next);
  //   console.log('STATUSSS>>>', res.status);
  //   expect(res.status).to.have.been.calledWith(422);
  //   expect(res.status).to.have.been.calledWith(invalidReturn.data);
  // });

  afterEach(function () {
    sinon.restore();
  });
});