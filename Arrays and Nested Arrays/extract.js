function extract(arr) {
    let biggest = arr[0];
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= biggest) {
            newArr.push(arr[i]);
            biggest = arr[i];
        } else {
            continue;
        }
    }
    return newArr;

}extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )