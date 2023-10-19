function focused() {
    Array.from(document.querySelectorAll('input'))
    .forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    })

    function onFocus(ev) {
        ev.target.parentElement.className = 'focused';
        //target each div, set class 
    }

    function onBlur(ev) {
        ev.target.parentElement.className = '';
         //target each div, set class 
    }
}