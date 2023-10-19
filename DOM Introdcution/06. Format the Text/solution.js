function solve() {
  let input = document.getElementById('input');
  let textArr = input.value.split('.') //we seperate the sentences
  .filter(s => s !== ''); // with filter уе assure that we wont have any empty strings
  let resultDiv = document.getElementById('output');

  while(textArr.length > 0){
    let text = textArr.splice(0,3).join('. ');
    let p = document.createElement('p'); //creating a paragraph to insert in HTML
    p.textContent = text;
    resultDiv.appendChild(p); //we append the newly created p to resultDiv, its parent element
  }
}