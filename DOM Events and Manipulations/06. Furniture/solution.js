//use closures to optimize this solution


function solve() {
  let table = document.querySelector('table');
  const generateBttn = document.querySelectorAll("#exercise button")[0]
  .addEventListener('click', generate);

  function generate() {
    let input = document.querySelectorAll("#exercise textarea")[0].value;
    let objs = JSON.parse(input);
    for (let i = 0; i < objs.length; i++) {
      let entries = Object.entries(objs[i]);
      let row = table.insertRow();

      //insert image
      let imageColumn = document.createElement("td");
      let imgNew = document.createElement("img");
      imgNew.src = entries[1][1];
      imageColumn.appendChild(imgNew);
      row.appendChild(imageColumn);

      //insert name
      let nameColumn = document.createElement("td");
      nameColumn.textContent = entries[0][1];
      row.appendChild(nameColumn);

      //insert price
      let priceColumn = document.createElement("td");
      priceColumn.textContent = entries[2][1];
      row.appendChild(priceColumn);

      //insert decoration factor
      let decFColumn = document.createElement("td");
      decFColumn.textContent = entries[3][1];
      row.appendChild(decFColumn);

      //insert colum for checkbox
      let checkboxColumn = document.createElement("td");
      //make a checkbox
      let newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox";
      checkboxColumn.appendChild(newCheckbox);
      row.appendChild(checkboxColumn);
    }
  }

  const buyBttn = document.querySelectorAll("#exercise button")[1]
  .addEventListener('click', buy);

  function buy(){
    let output = document.querySelectorAll("#exercise textarea")[1];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let toPrintNames = [];
    let totalPrice = 0;
    let decFacPoints = 0;
      for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
          const parent = checkboxes[i].parentNode.parentNode;
          let name = parent.querySelectorAll('td')[1];
          toPrintNames.push(name.textContent);
          let price = parent.querySelectorAll('td')[2].textContent;
          totalPrice += Number(price);
          let currDecFactor = parent.querySelectorAll('td')[3].textContent;
          decFacPoints += Number(currDecFactor);
        }
      }
      let avgDFP = decFacPoints / toPrintNames.length;
    let text = `Bought furniture: ${toPrintNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDFP}`;
    output.textContent += text;
  }
}