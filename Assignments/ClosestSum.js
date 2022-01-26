
function threeSum(arr, target) {
    //your code here
  let len = arr.length
  let closestSum = 100000
  let currSum=0
  for(let i=0;i<len-2;i++){
    for(let j=i+1;j<len-1;j++){
      for(let k=j+1;k<len;k++){
          currSum=arr[i]+arr[j]+arr[k];
            if(Math.abs(currSum-target)<Math.abs(closestSum-target)){
              closestSum=currSum
            }
      }
    }
  }
  return closestSum
  }
  console.log(threeSum([-1,2,1,-4],1))