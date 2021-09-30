const { test, expect, describe } = require('@jest/globals');
const { stringLength, reverseString, integerCalculator, capitalize } = require('./task');

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
    });
});

describe('Basic mathematical Operations', () => {
    describe('Addition of integers', () => {
      test('Add two numbers (1, 2) to get a sum (3)', () => {
        // Arrange and Act
        const addition = new integerCalculator(1, 2);
        
        // Assert
        expect(addition.addNumbers()).toEqual(3);
      })
      test('Add two numbers(2, 2) to get a sum(4)', () => {
        // Arrange and Act
        const addition = new integerCalculator(2, 2);
        
        // Assert
        expect(addition.addNumbers()).toEqual(4);
      })
      test('Add two numbers(100, 100) to get a sum(200)', () => {
        // Arrange and Act
        const addition = new integerCalculator(100, 100);
        
        // Assert
        expect(addition.addNumbers()).toEqual(200);
      })
    })
  
    describe('Subtraction of integers', () => {
      test('Subtract a number(1) from (6) to get difference (-1)', () => {
        // Arrange and Act
        const subtraction = new integerCalculator(1, 6);
        
        // Assert
        expect(subtraction.subtractNumbers()).toEqual(-5);
      })
      test('Subtract a number(6) from (6) to get a difference (0)', () => {
        // Arrange and Act
        const subtraction = new integerCalculator(6, 6);
        
        // Assert
        expect(subtraction.subtractNumbers()).toEqual(0);
      })
      test('Subtract a number(8) from (6) to get a difference (2)', () => {
        // Arrange and Act
        const subtraction = new integerCalculator(8, 6);
        
        // Assert
        expect(subtraction.subtractNumbers()).toEqual(2);
      })
    })
  
    describe('Multiplication of integers', () => {
      test('Multiply a number(4) by (6) to get a product (24)', () => {
        // Arrange and Act
        const multiplication = new integerCalculator(4, 6);
        
        // Assert
        expect(multiplication.multiplyNumbers()).toEqual(24);
      })
      test('Multiply a number(7) by (100) to get a product (700)', () => {
        // Arrange and Act
        const multiplication = new integerCalculator(7, 100);
        
        // Assert
        expect(multiplication.multiplyNumbers()).toEqual(700);
      })
      test('Multiply a number(10) by (1) to get a product (10)', () => {
        // Arrange and Act
        const multiplication = new integerCalculator(10, 1);
        
        // Assert
        expect(multiplication.multiplyNumbers()).toEqual(10);
      })
    })
  
    describe('Division of integers', () => {
      test('Divide a number(5) by (6) to get a quotient (0.83)', () => {
        // Arrange and Act
        const division = new integerCalculator(5, 6);
        
        // Assert
        expect(division.divideNumbers()).toEqual(0.83);
      })
      test('Divide a number(10) by (2) to get a quotient (5)', () => {
        // Arrange and Act
        const division = new integerCalculator(10, 2);
        
        // Assert
        expect(division.divideNumbers()).toEqual(5);
      })
      test('Divide a number(100) by (10) to get a quotient (10)', () => {
        // Arrange and Act
        const division = new integerCalculator(100, 10);
        
        // Assert
        expect(division.divideNumbers()).toEqual(10);
      });
    });
  });

  describe('Return a Capitalized String', () => {
    test(`String's first character should be capitalized`, () => {
      // Arrange
      const stringName = 'hello';
  
      //Act
      let stringisCapitalized = capitalize(stringName);
  
      // Assert
      expect(stringisCapitalized).toBe('Hello');
    });
    test('Inputted invalid string', () => {
      // Arrange
      const string = 0;
      
      // Act and Assert
      expect(() => capitalize(string)).toThrow(Error);
    });
  });

