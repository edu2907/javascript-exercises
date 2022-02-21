const sumAll = function (...num) {
    function testValues(element) {
        return element >= 0 && typeof element === "number"
    }
    
    if (!testValues(num[0]) || !testValues(num[1])) {
        return "ERROR";
    }
    num.sort((num0, num1) => num0 - num1)
    let sum = 0;
    for (i = num[0]; i <= num[1]; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
