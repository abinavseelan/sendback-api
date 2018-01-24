// eslint-global describe

const chai = require('chai');
const { expect } = require('chai');
const http = require('chai-http');

const app = require('../server/index');

chai.use(http);

const testSuccess = (code) => {
  it(`should return ${code}`, (done) => {
    chai.request(app).get(`/status-code/${code}`)
      .then((response) => {
        try {
          expect(response).to.have.status(code);
          done();
        } catch (err) {
          if (err.name === 'AssertionError') {
            done(err);
          } else {
            done();
          }
        }
      });
  });
};

const testSuccessInFailure = (code) => {
  it(`should return ${code}`, (done) => {
    chai.request(app).get(`/status-code/${code}`)
      .then(() => {
        // no-op
      })
      .catch((response) => {
        try {
          expect(response).to.have.status(code);
          done();
        } catch (err) {
          if (err.name === 'AssertionError') {
            done(err);
          } else {
            done();
          }
        }
      });
  });
};

describe('Status Code Endpoints (2xx) /status-code/2xx', function testSuite() {
  this.timeout(5000);

  [200, 201, 202, 203, 204, 205, 206, 207, 208, 226].forEach(testSuccess);
});

describe('Status Code Endpoints (4xx) /status-code/4xx', function testSuite() {
  this.timeout(5000);

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
  ].forEach(testSuccessInFailure);
});

describe('Status Code Endpoints (5xx) /status-code/4xx', function testSuite() {
  this.timeout(5000);

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
  ].forEach(testSuccessInFailure);
});
