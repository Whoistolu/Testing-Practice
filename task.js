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






module.exports = { stringLength, reverseString, integerCalculator };