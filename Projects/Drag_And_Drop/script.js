const submitBtn = document.getElementById("submitbtn")
const addTaskList =document.getElementById("addTaskList")
const inputTask = document.getElementById("addTask")


function updateElements(){
  const listItems = document.querySelectorAll(".list-item")
  const lists = document.querySelectorAll(".list")
  
  let draggedItem
  
  listItems.forEach((item)=>{
    item.addEventListener("dragstart", ()=>{
      draggedItem=item
      setTimeout(()=>{
        item.style.display= 'none'
      },0)
    })
  
    item.addEventListener("dragend", ()=>{
      setTimeout(()=>{
        draggedItem.style.display = 'block'
        draggedItem=null
      },0)
    })
  
    item.addEventListener("contextmenu",(e)=>{
      e.preventDefault()
      item.remove()
    })
  
    lists.forEach((list)=>{
  
      list.addEventListener("dragover", (e)=>{
        e.preventDefault()
      })
  
      list.addEventListener("dragenter", function (e){
        e.preventDefault()
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
      })
  
      list.addEventListener("dragleave", function(){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
      })
  
      list.addEventListener("drop", function (){
        list.append(draggedItem)
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
      })
  
    })
  
  })
  
}

updateElements()

submitBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  const task = inputTask.value
  inputTask.value = ''
  if(task){
    const newDiv = document.createElement('div')
    newDiv.classList.add("list-item")
    newDiv.setAttribute("draggable","true")
    newDiv.innerText=task
    addTaskList.appendChild(newDiv)
    updateElements()
  }else{
    alert("Please Type A Task")
  }
})