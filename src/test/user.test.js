import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../app.js';
import userRepository from '../repositories/userRepository.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Users API', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('Debe obtener todos los usuarios', async () => {
        const mockUsers = [{ id: 1, name: 'Test User', email: 'test@example.com' }];
        sinon.stub(userRepository, 'getAllUsers').resolves(mockUsers);

        const res = await chai.request(app).get('/api/users');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockUsers);
    });

    it('Debe manejar errores al obtener usuarios', async () => {
        sinon.stub(userRepository, 'getAllUsers').throws(new Error('Error de base de datos'));

        const res = await chai.request(app).get('/api/users');
        expect(res).to.have.status(500);
        expect(res.body).to.have.property('message', 'Error de base de datos');
    });
});