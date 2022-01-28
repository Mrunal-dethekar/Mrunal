const userInput = document.getElementById("guessField")
const submit = document.getElementById("subt")
const previousGuesses = document.getElementsByClassName("guesses")
const remainingGuess = document.getElementsByClassName("guessRemaining")
const output = document.getElementsByClassName("lowOrHigh")
const startOver = document.querySelector(".resultParse")

const pEl = document.createElement("p")
pEl.classList.add("button")

let randomNo= parseInt(Math.random()*100+1)

let previousGuessArray =[]
const maxGuesses = 10
let numGuess=0

let playGame = true

if(playGame){
  submit.addEventListener("click", (e)=>{
    e.preventDefault();

    let guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  previousGuessArray.push(guess)

  if(previousGuessArray.length===maxGuesses){
    console.log("123")
    //Game Over
    displayGuess(guess)
    displayMsg(`Game Over! Nuber Was ${randomNo}`)
    endGame()    
  }else{
    console.log("456")
    displayGuess(guess)
    checkGuess(guess)
  }
}
function displayGuess(guess){
  console.log(guess)
  previousGuesses.innerHTML += `${guess}`
  userInput.value=''
  numGuess++

  let remaining =  maxGuesses - numGuess
  
  if(remaining<0){
    remaining=0
  }
  remainingGuess.innerHTML= remaining
}

function checkGuess(guess){
  if(guess==randomNo){
    displayGuess("You Guessed Correctly")
    endGame()
  }else if(guess>randomNo){
    displayGuess("Too high! Try Lower Number")
  }else{
    displayGuess("Too Low! Try Higher Number")
  }
}

function displayMsg(message){
  output.innerHTML=`<h>${message}</h1>`
}

function endGame(){
  pEl.addEventListener("click", location.reload())
  playGame=false
  userInput.disabled=true
  submit.disabled=true
  pEl.innerHTML=`Start New Game`
  startOver.append(pEl)
}