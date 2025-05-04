const { sortTheArr, sortTheName } = require('./app');

test('testing of age', () => {
  const sortedData = sortTheArr();
  expect(sortedData[0].name).toBe('bilva');
});

test('test of name', () => {
  const data = sortTheName();
  expect(data[0].name).toBe('bilva');
});

test('test of name undife', () => {
  const data = sortTheName();
  expect(data).not.toBe(undefined);
});
