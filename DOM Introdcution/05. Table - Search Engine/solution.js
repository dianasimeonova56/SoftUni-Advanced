function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let input = document.getElementById('searchField');
   let tableRows = document.querySelectorAll('tbody tr');

   function onClick() {
      for (let row of tableRows) {
         row.classList.remove('select'); //at the beginning of the new cycle we remove the class from all rows
         if(input.value != '' && row.innerHTML.includes(input.value)) { //bc we have <td> in the tableRow, we use innerHTML to extract data
            row.className = 'select'; //assign the css class to the row to highlight it
         }
      }
      input.value = '';
   }
}