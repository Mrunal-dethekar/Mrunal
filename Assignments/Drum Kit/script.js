const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSounds);

function playSounds(e) {
  const code = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`div[data-key="${code}"]`);

  if (!audio) {
    return;
  }

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
