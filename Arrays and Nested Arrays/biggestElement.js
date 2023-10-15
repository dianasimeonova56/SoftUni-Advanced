function biggestElement(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const rowSize = arr[0].length;
    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < rowSize; column++) {
            if (arr[row][column] > biggest) {
                biggest = arr[row][column];
            }
        }
    }
    return biggest;
} biggestElement([[20, 50, 10],

    [8, 33, 145]])