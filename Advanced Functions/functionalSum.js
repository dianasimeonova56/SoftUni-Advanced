function functionalSum(num) {
    //Ivailo sol.
    /*let sum = 0;

    function inner(number) {
        sum += number;
        return inner;
    }
    inner.toString=()=>{
        return sum;
    }
    return inner(num);*/

    //Viktor sol.

    const inner = function (a) {
        num += a;
        return inner;
    };
    inner.toString = function { //overwrite to return n and not string
        return n;
    }

    return inner;
}