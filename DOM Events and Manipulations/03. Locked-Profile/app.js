function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
    .forEach(button => button.addEventListener('click', onClick));

    function onClick(ev) {
        let profile = ev.target.parentElement;
        let isActive = profile.querySelector('input[value="unlock"]').checked;
        if(isActive) {
            let info = Array.from(profile.querySelectorAll('div')) //get all divs
            .find(p => p.id.includes('HiddenFields')); //find the hidden fields to display

            if (ev.target.textContent === 'Show more') {
                ev.target.textContent = 'Hide it'; //change text in button
                info.style.display = 'block';//show info
            } else {
                ev.target.textContent = 'Show more';
                info.style.display = 'none';//hide info
            }
        }
    }
}