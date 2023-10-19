function sumTable() {
    //select all data rows (exclude first and last row)
    const rows = Array.from(document.querySelectorAll('tr'));
    let sum = 0;
    //for each row
    //--select last column
    //--add content to sum
    for (let row of rows) {
        const value = Number(row.lastElementChild.textContent);
        sum += value;
    }
    //display sum in total row
    document.getElementById('sum').textContent = sum;
}