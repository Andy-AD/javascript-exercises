const repeatString = function(text, quantity) {
    let result = '';
    if (quantity < 0) return "ERROR";
    for (i=0; i < quantity; i++) {
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
