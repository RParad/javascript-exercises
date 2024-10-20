const removeFromArray = function(array, ...remove) {
    let removedReturn = array.filter(function (item) { 
        return item != remove;
    })
    return removedReturn
};
// Failed example please look to the solution to understand why

// Do not edit below this line
module.exports = removeFromArray;
