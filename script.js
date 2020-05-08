const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0, 0, 0, 0];

// Add leading zero to numbers 9 or below (purely for aesthetics):

// Run a standard minute/second/hundredths timer:
function runTimer() {
  theTimer.innerHTML = timer;
  timer++;
}
// Match the text entered with the provided text on the page:
function spellCheck() {
  let textEntered = testArea.value;

  if (textEntered === originText) {
    testWrapper.style.borderColor = "blue";
  } else {
    testWrapper.style.borderColor = "red";
  }
  console.log(textEntered);
}

// Start the timer:
function start() {
  let textEnteredLength = testArea.value.length;

  if (textEnteredLength === 0) {
    setInterval(runTimer, 10);
  }

  console.log(textEnteredLength);
}

// Reset everything:
function reset() {
  console.log("clicked");
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start);
testArea.addEventListener("keyup", spellCheck);

resetButton.addEventListener("click", reset);
