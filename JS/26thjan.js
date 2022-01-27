let arr = [1, 3, 5, 2, 0]


arr=arr.sort((a,b)=>a-b)
let a=0
for(i=0;i<arr.length;i++){
if(a!==arr[i]){
  console.log(a)
  break
}else{
  a++
}
}


