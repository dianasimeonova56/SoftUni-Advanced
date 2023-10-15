function pieceOfPie(arr, start, end) {
    const startIndex = arr.indexOf(start);
    const endIndex = arr.indexOf(end);	

    return arr.slice(startIndex, endIndex + 1);
}