function areaVolume(areaIn, volIn, input) {
    const data = JSON.parse(input); //parse the input

    const result = []; //new arr for the result to return

    for(let cube of data) {
        const currCube = {
            area: areaIn.call(cube), //we call each function on the currCube with the data that we parsed
            volume: volIn.call(cube) //^^
        };
        result.push(currCube);
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
}

function volume() {
    return Math.abs(this.x * this.y * this.z)
}