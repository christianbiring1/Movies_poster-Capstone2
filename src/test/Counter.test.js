const counter = require('./Counter.js');
const countNumber = require('./Counter.js');

test('The movie test counter', () => {
  expect(counter()).toBe(2);
});

test('The number of the movie in the row', () => {
  expect(countNumber()).toBe(2);
});