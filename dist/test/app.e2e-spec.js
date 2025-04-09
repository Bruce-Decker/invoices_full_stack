"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const app_module_1 = require("../src/app.module");
describe('AppController (e2e)', () => {
    let app;
    let jwtToken;
    beforeAll(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
        const loginResponse = await request(app.getHttpServer())
            .post('/auth/login')
            .send({
            email: 'test@example.com',
            password: 'password123',
        });
        jwtToken = loginResponse.body.access_token;
    });
    afterAll(async () => {
        await app.close();
    });
    it('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Invoice API is running!');
    });
    describe('Invoices', () => {
        it('/invoices (GET)', () => {
            return request(app.getHttpServer())
                .get('/invoices')
                .set('Authorization', `Bearer ${jwtToken}`)
                .expect(200)
                .expect((res) => {
                expect(res.body).toHaveProperty('data');
                expect(res.body).toHaveProperty('meta');
                expect(Array.isArray(res.body.data)).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map