const leapYears = function(year) {
    let dividedBy4 = year % 4;
    let divideBy100 = year % 100;
    let dividedBy400 = year % 400;
    if (divideBy100 === 0 && dividedBy400 === 0) {
        return true;
    } else if ( dividedBy4 === 0 && divideBy100 !== 0) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = leapYears;
