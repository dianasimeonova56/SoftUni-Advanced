function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseOver);
    const result = document.getElementById('result');

    function onMouseOver(ev) {
        result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    }
    //offsetX => relative horizontal coordinate of the mouse pointer when a mouse event occurs
    //clientWidth => inner content area of the element plus paddings -> in this case the gradient
}