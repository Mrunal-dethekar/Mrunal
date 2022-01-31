const prev=document.getElementById("prev")
const next=document.getElementById("next")
const circle=document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", ()=>{
    currentActive++
    // console.log(currentActive)
    enabledisable()
})

prev.addEventListener("click", ()=>{
    currentActive--
    // console.log(currentActive)
    enabledisable()
})

function enabledisable(){
    if(currentActive===1)
    prev.disabled = true
    else if(currentActive===circle.length)
    next.disabled = true
    else{
    prev.disabled = false
    next.disabled = false
    }
}