function solution(n) {
    let num = n;
    function add(n) {
        return n + num;
    } 
    return add;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));