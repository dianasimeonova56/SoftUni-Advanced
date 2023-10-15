function calorieObject(input) {
    let obj = {};
    for (let i = 0; i < input.length; i += 2) {
        let productName = input[i];
        let calories = input[i + 1];
        obj[productName] = Number(calories);
    }
    console.log(obj);
} 