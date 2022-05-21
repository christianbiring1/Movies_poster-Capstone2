import counter from './movieCounter.js';

it('The movie test counter', () => {
  expect(counter().toBe(240));
});
