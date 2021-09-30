const stringLength = (string) => {
    if (string.length < 1 || string.length >= 10) {
        throw new Error('This is an invalid string')
    };
return string.length
};


const reverseString = (string) => {
    let reversedString = string.toLowerCase().split('').reverse().join('');
    return reversedString;
};



class integerCalculator {
    constructor(firstNumber, secondNumber) {
      this.firstNumber = firstNumber;
      this.secondNumber = secondNumber;
    }
  
    addNumbers() {
      return this.firstNumber + this.secondNumber;
    }
  
    subtractNumbers() {
      return this.firstNumber - this.secondNumber;
    }
  
    multiplyNumbers() {
      return this.firstNumber * this.secondNumber;
    }
  
    divideNumbers() {
      const quotient = (this.firstNumber / this.secondNumber).toFixed(2);
      return parseFloat(quotient, 10);
    }
  }

  const capitalize = (string) => {
    if (!typeof string) {
      throw new Error(`string should be a 'word'`);
    } else {
      let firstCharacter = string.slice(0, 1).toUpperCase();
      let restOfCharacter = string.slice(1).toLowerCase();
    return firstCharacter + restOfCharacter;
    }
  }






module.exports = { stringLength, reverseString, integerCalculator, capitalize };