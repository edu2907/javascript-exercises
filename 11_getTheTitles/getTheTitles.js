const getTheTitles = function(books) {
    let titleBooks = []
    for (i = 0; i < books.length; i++) {
        titleBooks[i] = books[i].title
    }
    return titleBooks
};

// Do not edit below this line
module.exports = getTheTitles;
