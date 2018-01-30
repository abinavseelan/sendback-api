const request = require('supertest');
const app = require('../server');

describe('Maintenance Routes', () => {
  it('should respond on /ping', async () => {
    const response = await request(app).get('/ping');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Pong!🏓');
  });
});
