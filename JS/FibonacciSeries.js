let arr= [2, 6, 3, 1, 4, 9]
let fibo=[]
let num=1
let n1=0, n2=1, nt=0
for(let i=0;i<num;i++){
    fibo.push(n1)
    nt=n1+n2
    n1=n2
    n2=nt
}
let newArr=arr.map((e)=> fibo[e])
console.log(newArr)