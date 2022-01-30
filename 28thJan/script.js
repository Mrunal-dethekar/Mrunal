const container = document.querySelector(".balloon-container")
const zero = document.querySelector(".zero-balloon")

const numballoon =25
let popped=0

for(let i=0;i<numballoon;i++){
  const divEl = document.createElement("div")
  divEl.classList.add("balloon")
  divEl.innerText =`POP!`
  let randcolor = getColor()
  divEl.style.color = randcolor
  divEl.style.backgroundColor = randcolor

  divEl.addEventListener("mouseenter",function(){
    if(divEl.style.backgroundColor !== "transparent"){
      popped++
      divEl.style.backgroundColor = "transparent"
    }
    checkAllPopped()
  })
  container.appendChild(divEl)
}

function checkAllPopped(){
  if(popped==25){
    zero.style.display='block'
    container.style.display='none'
  }
}

function getColor(){
  return `rgb(${randomColor()},${randomColor()},${randomColor()})`
}

function randomColor(){
  let vari = Math.floor(Math.random()*255+1)
  return vari
}