function addRemove(arr) {
    let initial = 1;
    let arrNums = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            arrNums.push(initial);
        } else if(arr[i] === "remove") {
            arrNums.pop();
        }
        initial++;
    }
    if (arrNums.length === 0) {
        console.log('Empty');
    } else {
        console.log(arrNums.join('\n'));
    }
} addRemove(['remove', 
'remove', 
'remove']

)
