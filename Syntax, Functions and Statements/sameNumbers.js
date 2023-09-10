function sameNumbers(number) {
    let numberStr = number.toString();
    let isSame = true;
    let sumOfDigits = 0;
    let digitToCompare = numberStr[0];
    const numberL = numberStr.length;

    for (let i = 0; i < numberL; i++) {
        sumOfDigits += +numberStr[i];
        if (numberStr[i] !== digitToCompare) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumOfDigits);

} sameNumbers();