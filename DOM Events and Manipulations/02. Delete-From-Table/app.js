function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    //we extract the input from label with id/name 'email'
    let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
    //we get the 2nd column data
    for (let td of secondColumn) { //we checl each data of the 2nd column
        if(td.textContent == email) { 
            let row = td.parentNode; //we have the parent of td ->tr
            row.parentNode.removeChild(row); 
            //through row's parent -> tbody, we remove child row that contains element
            document.getElementById('result').textContent = "Deleted"; 
            //in the div 'result'we display a message 
            return;
        }
        document.getElementById('result').textContent = "Not found.";
        //a message in the div in case of no occurance
    }
}