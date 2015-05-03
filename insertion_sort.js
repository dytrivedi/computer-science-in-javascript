function insertionSort(array) {
    var length = array.length,
        temp;
    for (var i = 1; i < length; i++) {
        for (var j = i - 1; j >= 0; j--) {
            if (array[j + 1] < array[j]) {
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            } else {
                break;
            }
        }
    }
    return array;
}
