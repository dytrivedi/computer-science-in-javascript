function bubbleSort(array) {
    var length = array.length,
        sortedArray = array.slice(),
        temp;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }
    return sortedArray;
}
