const postTodo =  async () => 
{
    try
    {   let taskToAdd = document.getElementById("userInput").value;
        const res = await fetch('http://localhost:5000/todos',
        {
            method: 'POST',
            headers: 
            {
                'Content-type': 'application/json',
            },
            body : JSON.stringify({title : taskToAdd, completed : false})
        });
    
        // Checking response
        if (res.status === 201)
        {
            const data = await res.json();
                const listContainer = document.getElementById('myList');
                const newList = document.createElement('ul');
                const newListItem = document.createElement('li');
                newListItem.innerHTML = data.title;
                newList.appendChild(newListItem);
                listContainer.appendChild(newList);
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


