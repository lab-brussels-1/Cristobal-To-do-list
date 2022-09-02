const postTodo =  async () => 
{
    try
    {   
        const taskToAdd = document.getElementById("userInput").value;
        const listContainer = document.getElementById('myList');
        const newList = document.createElement('ul');
        const newListItem = document.createElement('li');
        newListItem.contentEditable = "true";
        if (taskToAdd === ""){
            alert("Please write a note");
            return;
        }
        const res = await fetch('https://my-json-server.typicode.com/lab-brussels-1/Cristobal-To-do-list/todos',
        
        
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body : JSON.stringify({title : taskToAdd, completed : false})
            
        }
        );
        
        // Checking response
        if (res.status === 201)
        {

        const data = await res.json();
        // Displaying the data in the browser
        newListItem.innerHTML = data.title;
        newList.appendChild(newListItem);
        listContainer.appendChild(newList);  
           
        // Creating a delete button
       const myNodelist = newListItem;
       let div = document.createElement("div");
       let button = document.createElement("button");
       let txt = document.createTextNode("Delete item");
       div.className = "delete";
       div.id = "delete";
       button.className = "delete-button";
       button.contentEditable = "false";
       button.appendChild(txt);
       div.appendChild(button);
       myNodelist.appendChild(div);

       // creating a edit button
       let div2 = document.createElement("div");
       let button2 = document.createElement("button");
       let txt2 = document.createTextNode("Modify task");
       div2.className = "change";
       div2.id = "change";
       button2.className = "change-button";
       button2.contentEditable = "false";
       button2.id = "change-button";
      // button2.addEventListener('click', modifyIt)//
       button2.appendChild(txt2);
       div2.appendChild(button2);
       myNodelist.appendChild(div2);

       // deleting the list items
       let deleteIt = document.getElementsByClassName("delete");
       for (i = 0; i < deleteIt.length; i++) {
       deleteIt[i].onclick = function() {
       let div = this.parentElement;
       div.style.display = "none";
   }   
}
}  else
        {
            console.log('Error while posting todo with status : ${res.status}');
            return false;
        }
    }
    catch(err)
    {
        console.error(err);
    }
}

const disableButton = document.getElementById("add-item");
disableButton.addEventListener("click", (e) => {
    e.preventDefault();
    postTodo();
    document.getElementById("userInput").value = "";
});
