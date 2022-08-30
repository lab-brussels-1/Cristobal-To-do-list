const postTodo =  async () => 
{
    try
    {   
        const taskToAdd = document.getElementById("userInput").value;
        const listContainer = document.getElementById('myList');
        const newList = document.createElement('ul');
        const newListItem = document.createElement('li');
        const res = await fetch('http://localhost:5000/todos',
        
        
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
       const span = document.createElement("span");
       const button = document.createElement("button");
       const txt = document.createTextNode("Delete item");
       span.className = "close";
       button.className = "dynamic-buttons";
       button.appendChild(txt);
       span.appendChild(button);
       myNodelist.appendChild(span);

       // Creating a edit button
       const span2 = document.createElement("span");
       const button2 = document.createElement("button");
       const txt2 = document.createTextNode("Modify task");
       span2.className = "change";
       button2.className = "dynamic-buttons";
       button2.appendChild(txt2);
       span2.appendChild(button2);
       myNodelist.appendChild(span2);

        return data;

        }
        
        else
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
});





