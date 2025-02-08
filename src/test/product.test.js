describe('Products API', () => {
    it('Debe obtener todos los productos', (done) => {
        chai.request(app)
            .get('/api/products')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('Debe agregar un nuevo producto', (done) => {
        chai.request(app)
            .post('/api/products')
            .set('Authorization', 'Bearer <TOKEN>')
            .send({ name: 'Producto Test', price: 100, stock: 10 })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('id');
                done();
            });
    });
});