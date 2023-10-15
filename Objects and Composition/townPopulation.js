function townPopulation(list) {
    const result = {};

    for (const town of list) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        let pop = Number(tokens[1]);

        if (result[name] != undefined) {
            pop += result[name];
        }
        result[name] = pop;
    }
    for (let [name, pop] of Object.entries(result)) {
        console.log(`${name} : ${pop}`);
    }
}