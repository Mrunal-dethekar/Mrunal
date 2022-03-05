const startPage = document.querySelector(".start-page");
const startBtn = document.getElementById("btnstart");
const quoteTag = document.querySelector(".quote-tag")

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

const quotes = {
  1 : "Brilliant things happen in calm minds. Be calm. You're brilliant.",
  2 : "To know yourself is to be confident. To be confident is to fearlessly express your potential.",
  3 : "A day thinking about what could happen, should happen, or what might have been is a day missed.",
  4 : "Creativity is as boundless, spacious and limitless as the sky. We are born with it. It cannot be lost and it cannot be destroyed. It can only be forgotten.",
  5 : "Distractions are everywhere. Notice what takes your attention, acknowledge it, and then let it go.",
  6 : "Remember the blue sky. It may at times be obscured by clouds, but it is always there.",
  7 : "Look up and smile. But only if you feel like it.",
  8 : "So much time and effort is spent on wanting to change, trying to change, to be somebody different, better, or new. Why not use this time to get comfortable with yourself as you are instead?",
  9 : "To know one's own mind is nothing short of life-changing.",
  10 : "We can’t always change what’s happening around us, but we can change what happens within us.",
  11 : "Meditation nourishes the mind in the same way that food nourishes the body.",
  12 : "In the midst of movement and chaos, keep stillness inside of you.",
  13 : "Life is short. We can live it lost in thought or we can choose to be present as life unfolds around us.",
  14 : "Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we’ve grown so attached to.",
  15 : "Mindfulness allows us to live life fully. Fully aware, fully awake, fully alive.",
  16 : "We can't control the sea, but we can learn how to surf the waves.",
  17 : "Everyone has a little madness on the inside. The skill is in understanding the madness, and then being at ease with it.",
  18 : "Meditation is not about having yet another new strategy of self-help plan, but rather providing a framework in which to see yourself more clearly.",
  19 : "The quieter you become, the more you can hear.",
  20 : "Clarity dictates our perspective, and our perspective dictates our experience. Get more clarity in your life.",
  21 : "Now is a great time to be present. Now is good, too. And now.",
  22 : "The heart of meditation is taking ourselves a little less seriously.",
  23 : "No matter how fast life is moving around us, there is always a place of stillness inside.",
  24 : "There is no room for anger when the mind is calm.",
  25 : "Meditation means letting go of our baggage, letting go of all the pre-rehearsed stories and inner-dialogue that we’ve grown so attached to.",
  26 : "The mind is our most precious resource, through which we experience every single moment of life. Are you looking after yours?",
  27 : "Meditation is less about knowing what to do and more about knowing what not to do.",
  28 : "Best advice ever received was from one of my meditation teachers at the monastery: ‘Be present, be patient, be gentle, be kind…everything else will take care of itself.",
  29 : "Meditation and life are not separate. Meditation simply helps us to see and understand life more clearly.",
}


quoteTag.innerHTML=  `${quotes[Math.floor(Math.random()*29+1)]}`
