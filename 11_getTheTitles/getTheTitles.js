const getTheTitles = function(arrayOfBooks) {
    let titleArray = arrayOfBooks.map(book => book.title);
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
