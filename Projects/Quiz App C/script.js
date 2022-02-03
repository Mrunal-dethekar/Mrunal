const quizData = [
  {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
  },
  {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
  },
  {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
  },
  {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
];

const quiz= document.getElementById("quiz")
const answerEls= document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")

const submitbtn= document.getElementById("button")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

let score = 0

let currentquestion= 0

function loadQuize(){
    deselectall()
    
    let currentQuizData = quizData[currentquestion]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectall(){
    answerEls.forEach((e)=>{
        e.checked = false
    })
}

loadQuize()

function selectedAns(){
    let ans;
    answerEls.forEach((e)=>{
        if(e.checked)
        ans = e.id
    })
    return ans
}

submitbtn.addEventListener("click",()=>{
    let answer=selectedAns()
    if(answer){
        if(answer===quizData[currentquestion].correct){
            score++
        }
    currentquestion++
    
    if(currentquestion<quizData.length){
        loadQuize()
    }else{
        quiz.innerHTML=`
        <h2>
            Your Answerd ${score}/${quizData.length} Questions are Correct
        </h2>
        <button onclick="location.reload()">Reload</button>
        `
    }
  }
})