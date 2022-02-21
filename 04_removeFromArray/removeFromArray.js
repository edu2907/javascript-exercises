const removeFromArray = function(arr, ...bannedValues) {
    for (i = 0; i < bannedValues.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] === bannedValues[i]) arr.splice(j,1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
