// 1) .foreach()

  //  let arr=[2,4,1,5,2,6,7]
  //  arr.forEach((element,value) => console.log(element+"="+value))

// 2) .filter()

  //  let arr = [2, 4, 1, 5, 2, 6, 7, 7]  // Expected O/P: 4, 1, 5, 6, 7 !Important Topic can be ask while interview
  //  let newArr = arr.filter((e,v)=>{
  //  return arr.indexOf(e)===arr.lastIndexOf(e)
  //  })
  //  console.log(newArr)

// 3) .map

    // arr = [20000, 30000, 10000, 50000, 40000]
    // arr = arr.map(function (value) {
    //   if(value !== 50000)
    //     value = value + 2000
    //   return value
    // })  

// 4) .every

    // let areAllElementsEven = arr.every(function (element) {
    // return element % 2 === 0
    // })

// 5) .some

    // let ifThereExistsEvenOneElementWhichIsEven = x.some(function (element) {
    //   return element % 2 === 0
    // })

// 6) .reduce

    arr=[10,2,30,4,5]
    let sum=arr.reduce((total,element,index)=>{
        if(total<element)
        return element
        else
        return total
    })
    console.log(sum)


