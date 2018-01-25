const request = require('supertest');
const app = require('../server');

const testStatusCode = (code) => {
  it(`should return ${code}`, async () => {
    const response = await request(app).get(`/status-code/${code}`);
    expect(response.statusCode).toBe(code);
  });
};

describe('Status Code Endpoints (2xx) /status-code/2xx', () => {
  [200, 201, 202, 203, 204, 205, 206, 207, 208, 226].forEach(testStatusCode);
});

describe('Status Code Endpoints (4xx) /status-code/4xx', () => {
  [
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    408,
    409,
    410,
    411,
    412,
    413,
    414,
    415,
    416,
    417,
    418,
    421,
    422,
    423,
    424,
    426,
    428,
    429,
    431,
    451,
  ].forEach(testStatusCode);
});

describe('Status Code Endpoints (5xx) /status-code/4xx', () => {
  [
    500,
    501,
    502,
    503,
    504,
    505,
    506,
    507,
    508,
    510,
    511,
  ].forEach(testStatusCode);
});
