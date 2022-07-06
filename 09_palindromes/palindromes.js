const palindromes = function (string) { 
     let newString = string.toLowerCase().replace(/[,.\s!?]/g, '');
     let reverseString = newString.split('').reverse().join('');
    return newString === reverseString;
     
};

// Do not edit below this line
module.exports = palindromes;
