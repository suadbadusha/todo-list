// let list_item=document.getElementById("kitchen-items-list")
// function addItem(){
//     let item=document.getElementById("kitchen-input").value
//     let list=document.createElement("li");
//     list.innerText=item;
//     list_item.appendChild(list)
//     console.log(list)
// }

let kitchenInput=document.getElementById("kitchen-input");
let addBtn=document.getElementById("add-btn");
let kitchenItemList=document.getElementById("kitchen-items-list")
let array=[];

function addKitchenItems(){
    let kitchenInputData=kitchenInput.value
    let list=document.createElement("li")
    list.innerText=kitchenInputData
    list.style.cssText="animation-name:slideIn;";
    kitchenItemList.appendChild(list)
    array.push(kitchenInputData)
    kitchenInput.value='';
    kitchenInput.focus()
    let trashBtn=document.createElement("i")
    console.log(trashBtn)
    trashBtn.classList.add('fas','fa-trash');
    list.appendChild(trashBtn)
    
}
function deleteKitchenItem(event){
    if(event.target.classList[0]==="fas")
    {
        let item=event.target.parentElement;
        alert("conform to delete")
        item.classList.add("slideOut")
        item.addEventListener('transitionend',function(){
            item.remove();
        })
       
        
    }
}

addBtn.addEventListener("click",addKitchenItems)
kitchenItemList.addEventListener("click",deleteKitchenItem)
kitchenInput.addEventListener("keypress",function(event){
    if(event.key==='Enter')
    {
        addKitchenItems();
    }
})


console.log(array)