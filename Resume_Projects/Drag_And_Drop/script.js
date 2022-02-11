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
    })
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