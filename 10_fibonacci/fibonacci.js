const fibonacci = function (number) {
    if (number < 0) return 'OOPS';
    if (number === 0) return 0;

    let arr = [];
    for (let i = 0; i < number; i++) {
        if (arr.length < 2) {
            arr.push(1)
        } else {
            let next = arr[arr.length - 1] + arr[arr.length - 2];
            arr.push(next);
        }
    }
    console.log(arr[arr.length - 1]);
    return arr[arr.length - 1];
};
// fibonacci(-2);
// Do not edit below this line
module.exports = fibonacci;
