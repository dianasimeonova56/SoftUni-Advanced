function store(array) {
    let result = array.sort((a,b)=> a.localeCompare(b));

    let current = [0];
    let firstChar = '';

    for (let i = 0; i < result.length; i++) {
        current = result[i].split(' : ');
        if (result[i][0] !== firstChar) {
            console.log(result[i][0]);
        }
        console.log(`  ${current[0]}: ${current[1]}`)
        firstChar = result[i][0];
    }
}