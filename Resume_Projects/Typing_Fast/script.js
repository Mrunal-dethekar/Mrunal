const QUOTE_API_URL = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timeElement = document.getElementById("timer");

quoteInput.addEventListener("input", () => {
  const arrayValue = quoteInputElement.value.split("");
  const arrayQuote = document.querySelectorAll("span");

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];

    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct=false
    }
  });
  if (correct)
  getNextQuote()
});


function getRandomQuote() {
  return fetch(QUOTE_API_URL)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function getNextQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerHTML = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
  startTimer();
}

getNextQuote();

let startTime;
function startTimer() {
  timeElement.innerText = "0";
  startTime = new Date();
  setInterval(() => {
    var currTime = getTime(); //use it for calculating word for min
    timeElement.innerText = currTime;
  }, 1000);
}

function getTime() {
  return Math.floor((new Date() - startTime) / 1000);
}
