const sumAll = function(startNumber, endNumber) {
    let sum = 0;
    let isNumber = Number.isInteger(startNumber) && Number.isInteger(endNumber);
    if (!isNumber) {
        return "ERROR";
    } else if (startNumber < 0 || endNumber < 0) {
        return "ERROR";
    } else {
        if (startNumber > endNumber) {
            sum = startNumber * (startNumber + 1) / 2;
        } else {
            sum = endNumber * (endNumber + 1) /2;
        }
        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
