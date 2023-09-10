function roadRadar(speedStr, area) {
    let speed = Number(speedStr);
    let limit = 0;
    let difference = 0;
    let status = '';
    switch(area) {
        case 'motorway':
            limit = 130;
            if (speed > limit) {
                difference = speed - limit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
            }
        break;
        case 'interstate':
            limit = 90;
            if (speed > limit) {
                difference = speed - limit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
            }

        break;
        case 'city':
            limit = 50;
            if (speed > limit) {
                difference = speed - limit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
            }
        break;
        case 'residential':
            limit = 20;
            if (speed > limit) {
                difference = speed - limit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
            } else {
                console.log(`Driving ${speed} km/h in a ${limit} zone`)
            }
        break;
    }
} roadRadar(200, 'motorway');