const fibonacci = function(position) {
    if (position<1) return "OOPS"
    Number(position)
    let fibonacciSequence = [1 ,1, 2];
    for (i = 3; i < position; i++) {
        fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i-2]);
    }
    return fibonacciSequence[position - 1]
};

// Do not edit below this line
module.exports = fibonacci;
