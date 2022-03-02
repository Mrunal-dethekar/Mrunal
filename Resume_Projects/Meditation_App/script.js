const startPage = document.querySelector(".start-page");
const startBtn = document.getElementById("btnstart");

const questionPage = document.querySelector(".question-page");
const answerBtn = Array.from(document.querySelectorAll(".answer button"));
let time;

const breathContainer = document.querySelector(".breath-container");
const breathText = document.querySelector(".text");
const breath = document.querySelector(".breath");
const topText = document.querySelector(".top");
const line = document.querySelector(".line");
const bottomText = document.querySelector(".bottom");
let count = 0;

const playerContainer = document.querySelector(".player");

startBtn.addEventListener("click", () => {
  startPage.style.display = "none";
  questionPage.style.display = "flex";
});

answerBtn.forEach((button) => {
  button.addEventListener("click", () => {
    time = button.dataset.time;
    questionPage.style.display = "none";
    breathContainer.style.display = "flex";
    setTimeout(() => {
      breathText.style.display = "none";
      breath.style.display = "block";
      expandContract();
    }, 2000);
  });
});

// Breath function..................................

function expandContract() {
  work()
  bottomTextFun()

  const inter = setInterval(() => {
    work();

    count++;
    if (count > 2) {
      clearInterval(inter);
      setTimeout(()=>{
        breathContainer.style.display = "none";
        playerContainer.style.display = "flex";
      },2000)
    }
  }, 10000);
}

function work() {
  setTimeout(() => {
    expand();
  }, 2000);

  setTimeout(() => {
    contract();
  }, 7000);
}

function expand() {
  topText.innerText = "Breath in";
  line.classList.remove("hold");
  line.classList.add("expand");
  setTimeout(() => {
    topText.innerText = "Hold";
    line.classList.remove("expand");
    line.classList.add("hold");
  }, 2900);
}

function contract() {
  topText.innerText = "Breath out";
  line.classList.remove("hold");
  line.classList.add("contract");
  setTimeout(() => {
    line.classList.remove("contract");
    topText.innerText = "Hold";
  }, 3000);
}

function bottomTextFun() {
  bottomText.innerText = "2 breath left"
  setTimeout(()=>{
  bottomText.innerText = "1 breath left"
  },10000)
  setTimeout(()=>{
  bottomText.innerText = "Last breath"
  },20000)
}
