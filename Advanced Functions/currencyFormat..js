function createFormatter(separator, symbol, symbolFirst, formatter) {
    return formatter.bind(undefined, separator, symbol, symbolFirst);
    //bind-опакова функцията formatter, която приемаме като параметър
    //undefined -> не сме подали this
    //return-ваме само функциятa
}