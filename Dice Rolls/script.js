const grideSizeEl = document.getElementById("grideSize")
const playerSizeEl = document.getElementById("playerSize")
const submit = document.getElementById("subt")

submit.addEventListener("click",function(){
  
  const grideSize = grideSize.value
  const playerSize =playerSize.value

  let playerStats=[]
})


function getrandomRoll(){
  return Math.floor(Math.random*6+1)
}