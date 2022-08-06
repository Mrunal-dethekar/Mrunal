const array = [4, 5 ,6, 8]
// var str ="";

// for(let i=0;i<array.length;i++){
//   let count = 0;
//   let tempI = i;
//   while((tempI+1)<array.length && (array[tempI]+1) ==array[tempI+1]){
//     count++;
//     tempI++;
//   }

//   if(count>1){
//     str += array[i];
//     str += "-"
//     str += array[count+i];
//     i += count
//   }else{
//     str += array[i];
//   }

//   str += " ,";
// }
// console.log(str)


let result = ""

let val=array[0]
let ind=0

for(let i=0; i<array.length; i++){
   if((array[i+1]-array[i]) === 1)
        continue
    else{
        if((i-ind) >1)
            result+= val +"-"+ array[i]+", "
        else{
            if(val==array[i])
                result+= val
            else
                result+= val+", "
        }
        val=array[i+1]
        ind = i+1
        
    }
   
}

console.log(result.slice(0, result.length-2))