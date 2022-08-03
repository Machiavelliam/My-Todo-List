let input = document.querySelector("input");
let button = document.querySelector(".addBtn");
let todoUL = document.querySelector(".todoItem");
let list = document.querySelector("listedItem");
// let removeTask = document.querySelector(".fa-trash")
let removeAllBTN = document.querySelector(".removeAll")









button.addEventListener("click", addTask);
todoUL.addEventListener("click", removeTask);
removeAllBTN.addEventListener("click", removeAllTask);
console.log(removeAllBTN)


function addTask (e){
     e.preventDefault();
     let listDiv = document.createElement("div")
     listDiv.classList.add("listDiv")

   
     let button = document.createElement("button");
     button.innerHTML =  "<i class = 'fa-solid fa-check '></i>"
     let todoItem = document.createElement("li")
          todoItem.classList = "task"
            todoItem.innerHTML = input.value;

            listDiv.appendChild(todoItem)
     listDiv.append(button)
    todoUL.append(listDiv)
     console.log(listDiv)
      input.value = " ";
  

}
function removeTask (e){
  let item = e.target;
 console.log( item);
 if (item.classList.contains("fa-check") ){ 
  
  if (confirm("are you sure you want to remove it?")){
  
  
  item.parentElement.parentElement.remove()
  console.log("yes")}
 }

else 
 console.log("no")


}


function removeAllTask(){
  // todoUL.innerHTML = " "
  while(todoUL.firstChild){
    todoUL.removeChild(todoUL.firstChild)
  }

}