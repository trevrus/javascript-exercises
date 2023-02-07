const palindromes = function (str) {
    // remove non-alphabetic characters and convert to lowercase
    str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // convert to array, reverse, join back to string
    const reverseString = str.split('').reverse().join('');
    return reverseString === str;
};

// Do not edit below this line
module.exports = palindromes;
