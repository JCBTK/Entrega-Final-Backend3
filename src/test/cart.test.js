import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Carrito API', () => {
  let token;

  before(async () => {
    const loginRes = await chai.request(app)
      .post('/api/users/login')
      .send({ email: 'test@example.com', password: 'password' });
    token = loginRes.body.token;
  });

  it('Debería agregar un producto al carrito', async () => {
    const res = await chai.request(app)
      .post('/api/carts/cid/products/pid')
      .set('Authorization', `Bearer ${token}`)
      .send({ quantity: 2 });
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('message', 'Producto agregado al carrito');
  });

  it('Debería procesar una compra', async () => {
    const res = await chai.request(app)
      .post('/api/carts/cid/purchase')
      .set('Authorization', `Bearer ${token}`);
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('ticket');
  });
});