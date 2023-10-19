function createProcessor() {
    let state = '';
    function append(str) {
        state += str; //add a str to state
    }
    function removeStart(n) {
        state = state.slice(n); //remove n symbols from start
    }
    function removeEnd(n) {
        state = state.slice(0, -n); //remove n symbols from end
    }
    function print() {
        console.log(state); //print state
    }

    return {
        append,
        removeEnd,
        removeStart,
        print
    }
    //return an object with the functions for easier access
    //this is a CLOSURE - we retain info of the reference to a variable, in this case 'state'
    //so that when we call each function we still have its value which we have modified

}