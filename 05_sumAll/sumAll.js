const sumAll = function (num1, num2) {
    // check for errors
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }
    // find the larger number
    let lrgNum = num1 > num2 ? num1 : num2;
    let smNum = lrgNum === num1 ? num2 : num1;

    let sum = 0;
    for (let i = smNum; i <= lrgNum; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
