function binarySearch(array, value) {
    var startIndex = 0,
        stopIndex = array.length - 1,
        middle;
    do {
        middle = Math.floor((startIndex + stopIndex) / 2);
        if (value > array[middle]) {
            startIndex = middle + 1;
        } else {
            stopIndex = middle - 1;
        }
    } while (value != array[middle] && startIndex <= stopIndex);
    return value === array[middle] ? middle : -1;
}
