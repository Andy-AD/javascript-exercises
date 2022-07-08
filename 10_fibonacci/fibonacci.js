const fibonacci = function(number) {
    let fib = [1,1];
    if (number < 0) {
        return "OOPS";
    } else if (number <= fib.length) {
        return fib[number-1];
    }
    for (let i = 1; i < number; i++) {
        nextFibNumber = fib[i] + fib[i-1];
        fib.push(nextFibNumber);
    }
    return fib[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
