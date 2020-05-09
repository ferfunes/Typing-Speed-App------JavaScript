const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0, 0, 0, 0];
let interval;
let timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
  let currentTime = `${leadingZero(timer[0])}:${leadingZero(
    timer[1]
  )}:${leadingZero(timer[2])}`;
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

// Match the text entered with the provided text on the page
function spellCheck() {
  let textEntered = testArea.value;
  let originTextMatch = originText.substring(0, textEntered.length);

  if (originTextMatch === textEntered) {
    testWrapper.style.borderColor = "blue";
  }
  if (originTextMatch !== textEntered) {
    testWrapper.style.borderColor = "red";
  }
  if (originText === textEntered) {
    testWrapper.style.borderColor = "green";

    clearInterval(interval);
  }
}

// Start the timer:
function start() {
  let textEnteredLength = testArea.value.length;

  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}

// Reset everything:
function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0, 0, 0, 0];
  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  timerRunning = false;
  testWrapper.style.borderColor = "gray";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start);
testArea.addEventListener("keyup", spellCheck);

resetButton.addEventListener("click", reset);
