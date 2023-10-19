function colorize() {
    const rows = document.querySelectorAll('tr'); //all table rows
    // const rows = document.querySelectorAll('tr:n-th child(2n'); -> gets every 2nd/even element with tr tag

    for (let i = 1; i < rows.length; i+2) { //all even rows, starting from 2nd row to avoid header <th>
  //      for (let i = 0; i < rows.length; i++) -> if we use the 2nd option
        rows[i].style.background = 'teal';
    }
    //3rd option ->
    //let elements = Array.from(document.querySelectorAll('tr:n-th child(even))).forEach((el=>el.style.background-color='teal'))
}