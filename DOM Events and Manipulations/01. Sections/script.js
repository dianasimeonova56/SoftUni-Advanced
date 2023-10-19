function create(input) {
   let parentElement = document.getElementById('content');
   let elements = input;
   //input -> arr with text for new divs

   for (let i = 0; i < elements.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(elements[i]);
      //index -> text for the div

      p.appendChild(text);
      //create the style
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', showParagrahps)
      //append the new div to its parent
      parentElement.appendChild(div);
   }
   function showParagrahps(event) {
      //change the style to show text
      event.target.children[0].style.display = 'inline';
   }

}