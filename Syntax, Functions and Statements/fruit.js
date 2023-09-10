function fruit(fruit, weight, pricePerKilo) {
    let weightInGrams = weight / 1000;
    console.log(`I need $${(weightInGrams*pricePerKilo).toFixed(2)} to buy ${weightInGrams.toFixed(2)} kilograms ${fruit}.`)
} fruit('orange', 2500, 1.80)