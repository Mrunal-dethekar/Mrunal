let kbdlist = Array.from(document.getElementsByTagName("kbd"))
let kbdArray = kbdlist.map((e)=>e.innerText)

kbdArray.forEach((kbd)=>{
  kbd.addEventListner("onKeyPress", (e)=>{
    let x = e.which;
    x.play()
  })
})