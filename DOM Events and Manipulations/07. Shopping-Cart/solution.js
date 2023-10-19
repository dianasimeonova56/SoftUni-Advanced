function solve() {

   //75/100 ????

   //we get the buttons to add an event to
   const addButtons = Array.from(document.getElementsByClassName('add-product'))
      .forEach(b => b.addEventListener('click', add));

   //we add the name, price to an arr
   let arrProducts = [];
   let arrPrices = [];
   
   let textarea = document.querySelector('body > div > textarea')

   function add(ev) {
      //we find the particular button that is clicked
      let product = ev.target.parentNode.parentNode;
      //we access its area's name and price
      let name = product.querySelector('.product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent);

      //we filter the products to remove duplicates
         if (!arrProducts.includes(name)) {
            arrProducts.push(name);
         }
      arrPrices.push(price);
      
      //after every click, print what is added, name, price
      let text = document.createTextNode(`Added ${name} for ${(price).toFixed(2)} to the cart.\n`);
      textarea.appendChild(text);
   }
//click checkout -> message with all products and total price
const checkoutButton = document.querySelector('body > div > button').addEventListener('click', checkout)
   function checkout() {
      const total = arrPrices.reduce((a, b) => a+b);
      
      let text = document.createTextNode(`You bought ${arrProducts.join(', ')} for ${total.toFixed(2)}.\n`);
      textarea.appendChild(text);
         //after checkout, disable all buttons
         disable();
   }
   function disable() {
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(b => b.disabled = true)
   }
}