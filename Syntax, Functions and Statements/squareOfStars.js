function squareOfStars(num) {
    if (num == 0) {
        num = 5;
    }
    let print = '';
    for (let row = 1; row <= num; row++) {
        for (let column = 1; column <= num; column++) {
            if (column == num) {
                print += '*';
            } else {
                print += '* ';
            }
            
        }
        print += '\n';
    }
    console.log(print)
} squareOfStars(2);
