const stringLength = require('./string');

test('count length of how are you to eqal 11', () => {
  expect(stringLength('how are you')).toBe(11);
});
