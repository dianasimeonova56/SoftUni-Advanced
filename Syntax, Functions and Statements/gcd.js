function gcd(n1, n2) {
    let number1 = Number(n1);
    let number2 = Number(n2);

    while (number1 !== number2) {
        if (number1>number2) {
            number1 -= number2;
        } else {
            number2 -= number1
        }
    }
    console.log(number1);
}gcd();