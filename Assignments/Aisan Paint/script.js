const reset = document.getElementById("reset_button")
const change = document.getElementById("change_button")

reset.addEventListener("click",resetgrid)
change.addEventListener("click",changecolor)

function resetgrid(){
    for(let i=1;i<=9;i++){
        const griditem = document.getElementById(i)
        griditem.style.backgroundColor = "transparent"
    }
}

function changecolor(){
    const blockid = document.getElementById("block_id")
    const colourid = document.getElementById("colour_id")

    resetgrid()
    
    const griditem = document.getElementById(blockid.value)
    griditem.style.backgroundColor= colourid.value

    blockid.value= ""
    colourid.value= ""
}