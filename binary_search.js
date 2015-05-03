function binarySearch(array, value) {
    var startIndex = 0;
        stopIndex = array.length - 1,
        middle = Math.floor((startIndex + stopIndex) / 2);
    while (value != array[middle] && startIndex < stopIndex) {
        if (value > array[middle]) {
            startIndex = middle + 1;
        } else {
            stopIndex = middle - 1;
        }
        middle = Math.floor((startIndex + stopIndex) / 2);
    }
    return value === array[middle] ? middle : -1;
}
