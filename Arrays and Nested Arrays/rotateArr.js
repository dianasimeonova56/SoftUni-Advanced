function rotateArr(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let toAdd = arr.pop();
        arr.unshift(toAdd);
    }
    console.log(arr.join(' '));
} rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)