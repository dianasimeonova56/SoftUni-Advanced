function fibonacci() {
    //Ivailo solution
   /* let [a,b]=[0,1];
    return ()=>{
        let c = a + b;
        a = b;
        b = c;
        return a;
    }*/

    //Viktor solution
    const result = function () {
        const next = result.prev + result.curr;
        result.prev = result.curr;
        result.curr = next;

        return result.prev;
    };
    result.prev = 0;
    result.curr = 1;

    return result;
} 