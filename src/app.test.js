const app = require('./app');
const request = require('supertest');

test('GET / returns Hello CI/CD!', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello CI/CD!');
});
