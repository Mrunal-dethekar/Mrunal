// 1) BubbleSort


// 2) InsertionSort

function insertionSort(arr){

    for(let i =1;i<arr.length;i++){

        // Go through the elements behind the current element and 
        // place the current element in its correct place

        for(let j=i-1;j>=0;j--){
            
            if(arr[j+1]<arr[j]){
                // Swap them
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }else
            break
            }
    }
    return arr
}
let arr = [23,1,10,5,2]

console.log(insertionSort(arr))