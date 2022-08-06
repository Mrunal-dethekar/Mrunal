let arr = [1,2,3,4,5,6,7]
let arr2=[9,8,7]


Array.prototype.eachFor = function(cb){
    for(var i=0; i<this.length; i++){
      cb(arr[i], i)
    }
}


arr2.eachFor((ele)=>console.log(ele))