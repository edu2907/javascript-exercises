const palindromes = function (str) {
    let reverseString = "";
    for (i = (str.length - 1); i >= 0; i--) {
        reverseString += str[i];
    }
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === reverseString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
