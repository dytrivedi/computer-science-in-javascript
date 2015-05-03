function bubbleSort(array) {
    var length = array.length,
        temp;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
