function linearSort(array) {
    var length = array.length,
        temp;
    for (var i = 0; i < length - 1; i++) {
        for (var j = i + 1; j < length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
