function cooking(num, op1, op2, op3, op4, op5) {
    let inputNum = Number(num);
    let arrOfOps = [op1, op2, op3, op4, op5];

    for (let i = 0; i < 5; i++) {
        let currOp = arrOfOps[i];
        switch (currOp) {
            case 'chop': 
                inputNum /= 2;
                console.log(inputNum);
                break;
            case 'dice': 
                inputNum = Math.sqrt(inputNum);
                console.log(inputNum);
            break;
            case 'spice':
                inputNum++;
                console.log(inputNum);
                break;
            case 'bake':
                inputNum *= 3;
                console.log(inputNum);
                break;
            case 'fillet':
                inputNum -= inputNum * 0.2;
                console.log(inputNum);
                break;
        }
    }
} cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet'
)