const stringLength = (string) => {
    if (string.length < 1 || string.length >= 10) {
        throw new Error('This is an invalid string')
    };
return string.length
};


const reverseString = (string) => {
    let reversedString = string.toLowerCase().split('').reverse().join('');
    return reversedString;
}







module.exports = { stringLength, reverseString };