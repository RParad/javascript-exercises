const reverseString = function(word) {
    let newArray = word.split("");  
    let reversedArray = newArray.reverse();
    let newWord = reversedArray.join('');
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
