function listProcessor(strArr) {
    //closure -> we retain info/reference of the list while looping through the input array
    let list = [];
    //closure -> in the new instance? we get a new scope with the object 
    let commands = {
        add: string => list.push(string),
        remove: string =>  (list = list.filter(x => x !== string)),
        print: () => console.log(list.join(','))
        }
        
    strArr.forEach(x => {
        const [command, string] = x.split(' ');
        commands[command](string) //от обект commands според command който търсим подаваме аргумент string
    });
}
    listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])