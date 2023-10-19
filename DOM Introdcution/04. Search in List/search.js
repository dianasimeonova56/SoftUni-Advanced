function search() {
   let text = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let matches = 0;

   for (let town of towns) {
      if (town.textContent.includes(text)) {
         matches++;
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
      } else {
         town.style.textDecoration = "normal";
         town.style.fontWeight = "none";
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`;
}
