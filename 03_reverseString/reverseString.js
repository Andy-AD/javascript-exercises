const reverseString = function(text) {
    const splitText = text.split('');
    let result = '';
    for (i = splitText.length - 1; i>=0; i--) {
        result += splitText[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
