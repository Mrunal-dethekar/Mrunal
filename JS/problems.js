// let arr = [1, 3, 5, 2, 0]

// arr.sort((a,b)=>a-b)

// for(i=0;i<arr.length;i++){
// if(i !=arr[i]){
//   console.log(i)
//   break
// }
// }

// let students =[
//   {
//     name: 'John',
//     batch: 'Batch 11',
//     marks: {
//       english: '38',
//       maths: '72',
//       science: '82',
//       hindi: '21',
//       social: '48',
//     }
//   },
//   {
//     name: 'Sita',
//     batch: 'Batch 12',
//     marks: {
//       english: '74',
//       maths: '82',
//       science: '32',
//       hindi: '42',
//       social: '28',
//     }
//   },
//   {
//     name: 'Shyam',
//     batch: 'Batch 13',
//     marks: {
//       english: '28',
//       maths: '92',
//       science: '63',
//       hindi: '81',
//       social: '61',
//     }
//   }
// ]
// let arr=[]
// students.forEach((e)=>{
//   arr.push(Object.values(e.marks).reduce((total,ele)=> Number(total)+ Number(ele)))
// })
// console.log(arr)

// let arr=[]
// students.forEach((e)=> arr.push(Object.values(e.marks).reduce((total,ele)=> Number(total)+ Number(ele))))
// console.log(arr)

// let arr= students.map((e)=> Object.values(e.marks).reduce((total,ele)=> Number(total)+ Number(ele)))
// console.log(arr)

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
  }, 
  {
    name: 'Lakshman',
    batch: 'Batch 14',
    marks: {
      english: '48',
      maths: '83',
      science: '63',
      hindi: '71',
      social: '63',
    }
  }
]

let arr = []
students.forEach((student)=>{
  if(Object.values(student.marks).every((subject)=> subject>30))
  arr.push(student.name)
})
console.log(arr)