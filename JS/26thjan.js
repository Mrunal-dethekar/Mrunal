// let arr = [1, 3, 5, 2, 0]

// arr.sort((a,b)=>a-b)

// for(i=0;i<arr.length;i++){
// if(i !=arr[i]){
//   console.log(i)
//   break
// }
// }

let students = [
  {
    name: 'John',
    batch: 'Batch 11',
    marks: {
      english: '38',
      maths: '72',
      science: '82',
      hindi: '21',
      social: '48',
    }
  },
  {
    name: 'Sita',
    batch: 'Batch 12',
    marks: {
      english: '74',
      maths: '82',
      science: '32',
      hindi: '42',
      social: '28',
    }
  },
  {
    name: 'Shyam',
    batch: 'Batch 13',
    marks: {
      english: '28',
      maths: '92',
      science: '63',
      hindi: '81',
      social: '61',
    }
  }
]
let arr=[]
students.forEach((e)=>{
  arr.push(Object.values(e.marks).reduce((total,ele)=> Number(total)+ Number(ele)))
})
console.log(arr)
