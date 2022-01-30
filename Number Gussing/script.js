const userInput = document.getElementById("guessField")
const submit = document.getElementById("subt")
const previousGuesses = document.getElementById("guesses")
const remainingGuess = document.getElementById("guessRemaining")
const output = document.getElementById("lowOrHigh")
const startOver = document.querySelector(".resultParse")

const pEl = document.createElement("p")                      
pEl.classList.add("button")                                  

let randomNo= parseInt(Math.random()*100+1)

let previousGuessArray =[]
const maxGuesses = 10
let numGuess=0

submit.addEventListener("click", (e)=>{
    e.preventDefault();

    let guess = parseInt(userInput.value)
    validateGuess(guess)
  })

function validateGuess(guess){
  previousGuessArray.push(guess)

  if(previousGuessArray.length===maxGuesses){
    //Game Over
    displayGuess(guess)
    displayMsg(`Game Over! Number Was ${randomNo}`)
    endGame()    
  }else{
    displayGuess(guess);
    checkGuess(guess);
  }
}
function displayGuess(guess){
  
  previousGuesses.innerHTML += ` ${guess} `
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
    displayMsg("You Guessed Correctly")
    endGame()
  }else if(guess>randomNo){
    displayMsg("Too high! Try Lower Number")
  }else{
    displayMsg("Too Low! Try Higher Number")
  }
}

function displayMsg(message){
  output.innerHTML=`${message}`
}

function endGame(){
  userInput.disabled=true
  submit.disabled=true
  pEl.innerHTML = `<span onclick="location.reload()">Start New Game</span>`;
  startOver.append(pEl)
}