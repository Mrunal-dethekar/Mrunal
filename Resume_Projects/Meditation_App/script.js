const startPage = document.querySelector(".start-page");
const startBtn = document.getElementById("btnstart");

const questionPage = document.querySelector(".question-page");
const answerBtn = Array.from(document.querySelectorAll(".answer button"));
let meditationTime;

const breathContainer = document.querySelector(".breath-container");
const breathText = document.querySelector(".text");
const breath = document.querySelector(".breath");
const topText = document.querySelector(".top");
const line = document.querySelector(".line");
const bottomText = document.querySelector(".bottom");
let count = 0;

const playerContainer = document.querySelector(".player");

const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");

const timeDisplay = document.querySelector(".time-display");

// Start Page..................................

startBtn.addEventListener("click", () => {
  startPage.style.display = "none";
  questionPage.style.display = "flex";
});

answerBtn.forEach((button) => {
  button.addEventListener("click", () => {
    meditationTime = button.dataset.time;
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
  work();
  bottomTextFun();

  const inter = setInterval(() => {
    work();

    count++;
    if (count > 2) {
      clearInterval(inter);
      setTimeout(() => {
        breathContainer.style.display = "none";
        playerContainer.style.display = "flex";
        meditation();
      }, 2000);
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
  bottomText.innerText = "2 breath left";
  setTimeout(() => {
    bottomText.innerText = "1 breath left";
  }, 10000);
  setTimeout(() => {
    bottomText.innerText = "Last breath";
  }, 20000);
}

// Player function.............................

function meditation() {
  song.play();
  const outlineLength = outline.getTotalLength();

  const timeSelect = document.querySelectorAll(".time-select button");

  outline.style.strokeDashoffset = outlineLength;
  outline.style.strokeDasharray = outlineLength;
  timeDisplay.textContent = `${Math.floor(meditationTime / 60).toString().padStart(2, "0")}:${Math.floor(meditationTime % 60).toString().padStart(2, "0")}`;

  play.addEventListener("click", function () {
    checkPlaying(song);
  });

  replay.addEventListener("click", function () {
    song.currentTime = 0;
    song.play();
  });

  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      play.src = "./images/pause.svg";
    } else {
      song.pause();
      play.src = "./images/play.svg";
    }
  };

  song.ontimeupdate = function () {
    let currentTime = song.currentTime;
    let elapsed = meditationTime - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    let se = seconds.toString().padStart(2, "0");
    let mi = minutes.toString().padStart(2, "0");
    timeDisplay.textContent = `${mi}:${se}`;
    let progress =
      outlineLength - (currentTime / meditationTime) * outlineLength;
    outline.style.strokeDashoffset = progress;

    if (currentTime >= meditationTime) {
      song.pause();
      song.currentTime = 0;
      play.src = "./images/play.svg";
    }
  };
}
