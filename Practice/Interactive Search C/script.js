const searchxyz = document.querySelector(".search")
const inputxyz  = document.querySelector(".input")
const btnxyz    = document.querySelector(".btn")

btnxyz.addEventListener("click",function(){
    searchxyz.classList.toggle("active")
    inputxyz.focus()
})