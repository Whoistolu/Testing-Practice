const stringLength = require('./task');

describe('All tests for string length', () => {
    test('return length of string', () => {
        // Arrange
        const string = 'Samson';

        // Act
        const lengthofString = stringLength(string);

        //Assert
        expect(lengthofString).toBe(6);
    })
})