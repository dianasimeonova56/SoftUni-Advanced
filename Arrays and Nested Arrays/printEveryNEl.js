function print(arr, step) {
    let arrNew = [];
    for (let i = 0; i < arr.length; i+=step) {
        arrNew.push(arr[i]);
    }
    return arrNew;
} print(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)