const { stringLength, reverseString } = require('./task');

describe('All tests for string length', () => {
    test('return length of string', () => {
        // Arrange
        const string = 'Samson';

        // Act
        const lengthofString = stringLength(string);

        //Assert
        expect(lengthofString).toBe(6);
    });

    test('An invalid string',() => {
        // Arrange
        const string = 'Hippopotemous Animal';

        // Act && Assert
        expect(() => stringLength(string)).toThrow(Error);
    });
});


describe('Return a reversed string', () => {
    test('String should be reversed', () => {
      // Arrange
      const string = 'sam';
  
      //Act
      let stringisReversed = reverseString(string);
  
      // Assert
      expect(stringisReversed).toBe('mas');
    })
  })