function mathOperations(n1, n2, operation) {
    if (operation === '+') {
        console.log(n1 + n2);
    } else if (operation === '-') {
        console.log(n1 - n2);
    } else if (operation === '*') {
        console.log(n1 * n2);
    } else if (operation === '/') {
        console.log(n1 / n2);
    } else if (operation === '%') {
        console.log(n1 % n2);
    } else if (operation === '**') {
        console.log(n1 ** n2);
    }
} mathOperations(5, 6, '+');