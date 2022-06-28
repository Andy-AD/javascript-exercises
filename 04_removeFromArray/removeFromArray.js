const removeFromArray = function(array, ...argumentsToRemove) {
    const result = [];
    for (const item of array) {
        let counter = 0;
        for (const argumentToRemove of argumentsToRemove) {
            if (item === argumentToRemove) counter++;            
        }
        if (!counter) result.push(item);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
