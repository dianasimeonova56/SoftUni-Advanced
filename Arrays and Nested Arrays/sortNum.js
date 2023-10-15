function sortNum(arr) {
    arr.sort((a, b) => a - b)
    let newArr = [];
    while (arr.length != 0) {
        newArr.push(arr.shift());
        newArr.push(arr.pop())
    }
    console.log(newArr);
    return newArr;
}sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])