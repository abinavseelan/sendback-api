const request = require('supertest');
const app = require('../server');

describe('GET theme', () => {
  it('should fetch all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toEqual({
      id: '1',
      username: 'thanks',
      name: 'Tom Hanks',
    });
  });

  it('should fetch a single user with id = 1', async () => {
    const response = await request(app).get('/api/users/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      id: '1',
      username: 'thanks',
      name: 'Tom Hanks',
    });
  });

  it('should send 404 if user does not exist', async () => {
    const response = await request(app).get('/api/users/100');
    expect(response.statusCode).toBe(404);
  });
});
