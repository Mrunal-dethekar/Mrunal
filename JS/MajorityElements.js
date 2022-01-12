function major(arr,n)
{
//   let reqFre=Math.floor(n/2)
//   let store={}
//   for(let i=0;i<n;i++){
//       if(store[arr[i]]!==undefined){
//           store[arr[i]]++
//       }
//       else{
//           store[arr[i]]=1
//       }
//       if(store[arr[i]]>reqFre){
//           return arr[i]
//       }
//   }

arr.sort((a,b)=>a-b)
return arr[Math.floor(n/2 )]
}
let a=[2,3,2,3,2]
console.log(major(a,a.length))