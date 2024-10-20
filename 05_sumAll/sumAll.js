const sumAll = function(num, num2) {
    if (!Number.isInteger(num) || !Number.isInteger(num2)) return "ERROR";
    if (num < 0 || num2 < 0) return "ERROR";
    if (num > num2) {
      const temp = num;
      num = num2;
      num2 = temp;
    }
    
    var sum = 0;
    // Set a temporary variable i to start at value x.
    // As long as the value of i is less than the value y, increment it.
    // The loop will end when i is equal to y.
    for (var i = num; i <= num2; i++) {
      sum += i
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
