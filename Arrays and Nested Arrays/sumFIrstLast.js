function sumFIrstLast(arr) {
    let first = arr.shift();
    let last = arr.pop();
    let sum = Number(first) + Number(last);
    console.log(sum);
} sumFIrstLast(['20', '30', '40'])