function magicMatrices(arr) {
    let sum = arr[0].reduce((a, b) => a + b);
    for (let i = 0; i < arr[0].length; i++) {
        let curColSum = 0;
        for (let j = 0; j < arr.length; j++) {
            curColSum += arr[j][i];
        }
        if (curColSum !== sum) {
            return false;
        }
    }
    return true;
}