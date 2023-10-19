function validate() {
    let email = document.getElementById("email");
    email.addEventListener("change", change);
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    function change(ev, ) {
        if (pattern.test(ev.target.value) == false) { 
            // подаваме value!!!!!!!!! за да провери вътре текста, а не цялото поле
            ev.target.className = 'error';
        } else {
            ev.target.className = '';
        }
    }
}
