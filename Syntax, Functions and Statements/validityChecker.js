function validityChecker(x1, y1, x2, y2) {
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);
    let firstComparison = Math.sqrt((0-x1)*(0-x1)+(0-y1)*(0-y1));
    if (Number.isInteger(firstComparison)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    let secondComparison = Math.sqrt((0-x2)*(0-x2)+(0-y2)*(0-y2));
    if (Number.isInteger(secondComparison)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    let thirdComparison = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
    if (Number.isInteger(thirdComparison)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}validityChecker(2, 1, 1, 1)