function insertionSort(array) {
    var length = array.length,
        sortedArray = array.slice(),
        temp;
    for (var i = 1; i < length; i++) {
        for (var j = i - 1; j >= 0; j--) {
            if (sortedArray[j + 1] < sortedArray[j]) {
                temp = sortedArray[j + 1];
                sortedArray[j + 1] = sortedArray[j];
                sortedArray[j] = temp;
            } else {
                break;
            }
        }
    }
    return sortedArray;
}
