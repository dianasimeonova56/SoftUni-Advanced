function cars(input) {
    let carsArr = {};

    let instructions = {
        create: (n, inherits, n2) => (carsArr[n] = inherits ? Object.create(carsArr[n2]): {}),
        set: (n, k, v) => (carsArr[n][k] = v),
        print: n => {
            const entry = [];
            for(const key in carsArr[n]) {
                entry.push(`${key}:${carsArr[n][key]}`)
            }
            console.log(entry.join(","));
        }
    }

    input.forEach(el => {
        const [c, n, k, v] = el.split(' ');

        instructions[c](n, k, v)
    });
} cars(['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2']);