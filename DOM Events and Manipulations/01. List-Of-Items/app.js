function addItem() {
    let input = document.getElementById('newItemText').value;
    let li = document.createElement("li"); 
    //we make a new li element with the same css as the other li elements
    li.appendChild(document.createTextNode(input));
    //make new text node out of the input and append the new li element to it
    document.getElementById("items").appendChild(li);
    //in the tag with id 'items' we append the new li child that is a text node
    document.getElementById('newItemText').value = '';
    //we clear the input

}