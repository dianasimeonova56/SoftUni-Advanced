function sort(arr, type) {
    if (type == 'asc') {
        arr.sort((a,b) => a - b)
    } else {
        arr.sort((a,b) => b - a)
    }
    return arr; //sort the same arr, not a copy
}