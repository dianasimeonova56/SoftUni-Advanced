function encodeAndDecodeMessages() {
    let encodeButton = document.querySelectorAll('div button')[0]
    .addEventListener('click', encode);
    let decodeButton = document.querySelectorAll('div button')[1]
    .addEventListener('click', decode);
    let inputS = document.querySelectorAll('div textarea')[0];
    let inputR = document.querySelectorAll('div textarea')[1];

    //first func -> encode message and send it to the reciever
    function encode() {
        inputR.value = '';
        //read input from textarea
        let chars = Array.from(inputS.value);
        let encodedStr = "";
        //encode -> change ASCII code on every char by + 1 to the curr ASCII number
        for (let i = 0; i < chars.length; i++) {
            chars[i] = chars[i].charCodeAt() + 1;
            encodedStr += String.fromCharCode(chars[i]);
        }
        //clear the sender textarea and add to the reciever textarea
        inputS.value = '';
        inputR.value += encodedStr;
    }
    //second func  -> decode the message and read it(display)
    function decode() {
        //opposite of encode
        //read from reciever area
        let chars = Array.from(inputR.value);
        let decodedStr = "";
         //subtract 1 from the currASCII num 
         for (let i = 0; i < chars.length; i++) {
            chars[i] = chars[i].charCodeAt() - 1;
            decodedStr += String.fromCharCode(chars[i]);
        }
        //replace the encoded message w/ the decoded one in the sender area
        inputR.value = '';
        inputR.value += decodedStr;
    }
}