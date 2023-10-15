function diagonalSums(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = arr[0].length - 1;
    arr.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}diagonalSums()