const request = require('supertest');
const app = require('../server');

describe('GET :theme', () => {
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

describe('POST :theme', () => {
  it('should create a user', async () => {
    const obj = {
      id: '3',
      name: 'Test user',
      username: 'test',
    };

    const response = await request(app).post('/api/users').send(obj);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(obj);
  });

  it('should fail required validation', async () => {
    const obj = {};

    const response = await request(app).post('/api/users').send(obj);

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      id: 'This is a required field',
      username: 'This is a required field',
    });
  });

  it('should fail type validation', async () => {
    const obj = {
      id: 1,
      name: 23,
      username: 'test',
    };

    const response = await request(app).post('/api/users').send(obj);

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      id: 'Expected string',
      name: 'Expected string',
    });
  });

  it('should fail required & type validation', async () => {
    const obj = {
      id: 1,
      name: 23,
    };

    const response = await request(app).post('/api/users').send(obj);

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      id: 'Expected string',
      name: 'Expected string',
      username: 'This is a required field',
    });
  });
});

describe('PUT :theme', () => {
  it('should update a user', async () => {
    const obj = {
      id: '3',
      username: 'test',
    };

    const response = await request(app).put('/api/users/1').send(obj);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      id: '3',
      username: 'test',
      name: 'Tom Hanks',
    });
  });

  it('should return 404 if the user does not exist', async () => {
    const obj = {
      id: '3',
      username: 'test',
    };

    const response = await request(app).put('/api/users/100').send(obj);

    expect(response.statusCode).toBe(404);
  });

  it('should fail type validation', async () => {
    const obj = {
      id: 3,
      username: 'test',
    };

    const response = await request(app).put('/api/users/1').send(obj);

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      id: 'Expected string',
    });
  });
});

describe('DELETE :theme', () => {
  it('should delete a user', async () => {
    const response = await request(app).delete('/api/users/1');

    expect(response.statusCode).toBe(204);
  });

  it('should return 404 if user does not exist', async () => {
    const response = await request(app).delete('/api/users/100');

    expect(response.statusCode).toBe(404);
  });
});
