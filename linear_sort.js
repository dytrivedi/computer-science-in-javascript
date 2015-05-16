function linearSort(array) {
    var length = array.length,
        sortedArray = array.slice(),
        temp;
    for (var i = 0; i < length - 1; i++) {
        for (var j = i + 1; j < length; j++) {
            if (sortedArray[i] > sortedArray[j]) {
                temp = sortedArray[i];
                sortedArray[i] = sortedArray[j];
                sortedArray[j] = temp;
            }
        }
    }
    return sortedArray;
}
