console.clear
let todoInput=document.getElementById("todo-input")
let addBtn=document.getElementById("add-btn")
let todoItemList=document.getElementById("todo-items-list")
let todoItemArray=[]
let todoInputData;


function setLocalStorage()
{
    localStorage.setItem("todoItem",JSON.stringify(todoItemArray))
}

function getLocalStorage()
{
    if(localStorage.getItem("todoItem"))
    {
        todoItemArray =JSON.parse(localStorage.getItem("todoItem"))
        buildUi()    
    }
}
function buildUi(){
    todoItemList.textContent="";
    todoItemArray.forEach((item)=>{
        //console.log(item)
        
        let li =document.createElement('li')
        let spanEl=document.createElement('span')
        li.appendChild(spanEl)
        spanEl.innerText=item

        //li.innerText=kitchenInputData
        li.style.cssText="animation-name:slideIn;"
        todoItemList.appendChild(li)
        
        todoInput.value=''
        todoInput.focus()
        
        //create a trash button
        let trashBtn=document.createElement("i")
        trashBtn.classList.add('fas','fa-trash')
        li.appendChild(trashBtn)

        // create edit button
        let editBtn=document.createElement("i")
        editBtn.classList.add('fas','fa-edit')
        li.appendChild(editBtn)
    })
}
function addTodoItem(){

    todoInputData=todoInput.value;
    todoItemArray.push(todoInputData)
    //console.log(todoItemArray)
    //set to local storage 
    setLocalStorage()

    //getLocalStorage()

    buildUi()
    
}

//Add a item
addBtn.addEventListener("click",addTodoItem)

getLocalStorage()


//Add item when enter key press 
todoInput.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        addTodoItem();
        
    }
})

//Slide out
todoItemList.addEventListener("click",function(event){
    if (event.target.classList[1]==="fa-trash"){
        let delItem=event.target.parentElement
        delItem.classList.add("slideOut")
        delItem.addEventListener('transitionend',function(){
            delItem.remove()
        })
        
    }
})

//Edit the value
todoItemList.addEventListener("click",function(event){
    if(event.target.classList[1]==="fa-edit")
    {
        let editedValue=prompt("Enter a new value")
        let item=event.target.parentElement
        let spanEl=item.querySelector('span')
        spanEl.innerText=editedValue

    }
})
