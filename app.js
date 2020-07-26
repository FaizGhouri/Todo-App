var list = document.getElementById("list");

function addTodo(){
    var todo = document.getElementById("todo-item")

    var li = document.createElement('li')
    var liText = document.createTextNode(todo.value)
    li.appendChild(liText)

    var delBtn = document.createElement("button")
    var delText  = document.createTextNode("")
    delBtn.setAttribute("class","fa fa-trash-o fa-lg")
    delBtn.setAttribute("onclick","deleteItem(this)") 
    delBtn.appendChild(delText)
    

    var editBtn = document.createElement("button");
    var editText =document.createTextNode("");
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","fa fa-pencil-square-o fa-lg")
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)
    
    list.appendChild(li)

    todo.value = ""
    
    
    
}

function deleteItem(e){
    e.parentNode.remove()
}
 

function deleteAll(){
    list.innerHTML = ""
}


function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Your Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}
