function argInfo() {
    //Ivailo Dimitrov solution
    /*let data = {};

    Array.from(arguments).forEach((line) => {
        let type = typeof line;
        console.log(`${type}: ${line}`);

        if(!data[type]) {
            data[type] = 0;
        }
        data[type]++;
    })

    Object.keys(data)
    .sort((a,b)=> data[b] - data[a])
    .forEach((key)=> console.log(`${key} = ${data[key]}`));*/

    //Viktor Kostadinov solution
    const params = Array.from(arguments);
    const types = {};
    for(let i of params) {
        const type = typeof i;
        console.log(`${type}: ${arg}`);

        if(types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }
    const result = Object.entries(types).sort((a, b) => return b[1] - a[1]);

    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}