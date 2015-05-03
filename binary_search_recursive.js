function binarySearch(array, value) {
    function search(startIndex, stopIndex) {
        if (startIndex > stopIndex) return -1;
        var middle = Math.floor((startIndex + stopIndex) / 2);
        if (value === array[middle]) {
            return middle;
        } else if (value > array[middle]) {
            startIndex = middle + 1;
            return search(startIndex, stopIndex);
        } else {
            stopIndex = middle - 1;
            return search(startIndex, stopIndex);
        }
    }
    return search(0, array.length - 1);
}
