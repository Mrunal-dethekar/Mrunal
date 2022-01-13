function mincost(arr) {
   arr.sort((a,b)=>a-b)
   let cost=0
   while(arr.length>1){
       let first=arr.shift()
       let second=arr.shift()
       cost+=first+second
       arr.push(first+second)
       arr.sort((a,b)=>a-b)
   }
    return cost
}
console.log(mincost([4,3,2,6]))