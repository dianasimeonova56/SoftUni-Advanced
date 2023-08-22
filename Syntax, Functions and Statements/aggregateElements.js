function aggregateElements(arr) {
    let sum1 = 0;
    for(let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }
    let sum2 = 0;
    for(let i = 0; i < arr.length; i++) {
        sum2 += 1/arr[i];
    }
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    console.log(sum1);
    console.log(sum2);
    console.log(str);
}aggregateElements([1, 2, 3]);