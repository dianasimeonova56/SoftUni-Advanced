function addItem() {
   let newElement = document.getElementById("newItemText").value;
   let list = document.getElementById("items");
   if(newElement.length === 0) return; 
   //if input is empty, return
   let listItem = document.createElement("li");
   //make new li for new input
   listItem.text = newElement;
   
   let remove = document.createElement("a");
   let linkText = document.createTextNode("[Delete]")
   //make a hyperlink with text [Delete]
    remove.appendChild(linkText);
    //append the text to the element a
    remove.href="#";
    //assign link to a
    remove.addEventListener("click", deleteItem);
    //attach an even listener to a, with click on a activate event deleteItem
    listItem.appendChild(document.createTextNode(newElement));
    listItem.appendChild(remove);
    //to newly created listItem append remove element
    
    list.appendChild(listItem);
    //to existing list append new listItem

    document.getElementById('newItemText').value = "";
    function deleteItem(){
        listItem.remove();
        //remove node listItem event
    }

}
