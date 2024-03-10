// RED SCORE
const redScoreDisplay = document.getElementById("RedScoreVal");
const increaseButton = document.getElementById("RedincreseScore");
const decreaseButton = document.getElementById("RedDecreseScore");
let redScore = 0;
increaseButton.addEventListener("click", () => {
  if (redScore < 5) {
    redScore++;
    redScoreDisplay.textContent = redScore;
  }
});
decreaseButton.addEventListener("click", () => {
  if (redScore > 0) {
    redScore--;
    redScoreDisplay.textContent = redScore;
  }
});
//RED FOUL
const redFoulDisplay = document.getElementById("FoulCountRed");
const IncRedFoulBtn = document.getElementById("RedFoulInc");
const DecRedFoulBtn = document.getElementById("RedFoulDec");
let Redfoul = 0;
IncRedFoulBtn.addEventListener("click", () => {
  if (Redfoul < 3) {
    Redfoul++;
    redFoulDisplay.textContent = Redfoul;
  }
});
DecRedFoulBtn.addEventListener("click", () => {
  if (Redfoul > 0) {
    Redfoul--;
    redFoulDisplay.textContent = Redfoul;
  }
});
//RED DISARM
const redDisarmDisplay = document.getElementById("RedDisarmCount");
const IncRedDisarmBtn = document.getElementById("RedDisarmInc");
const DecRedDisarmBtn = document.getElementById("RedDisarmDec");
let RedDisarm = 0;
IncRedDisarmBtn.addEventListener("click", () => {
  if (RedDisarm < 2) {
    RedDisarm++;
    redDisarmDisplay.textContent = RedDisarm;
  }
});
DecRedDisarmBtn.addEventListener("click", () => {
  if (RedDisarm > 0) {
    RedDisarm--;
    redDisarmDisplay.textContent = RedDisarm;
  }
});
// BLUE SCORE
const BLScoreDisplay = document.getElementById("BlueScoreVal");
const BLincreaseButton = document.getElementById("BlueincreseScore");
const BLdecreaseButton = document.getElementById("BlueDecreseScore");

let BlueScore = 0;

BLincreaseButton.addEventListener("click", () => {
  if (BlueScore < 5) {
    BlueScore++;
    BLScoreDisplay.textContent = BlueScore;
  }
});

BLdecreaseButton.addEventListener("click", () => {
  if (BlueScore > 0) {
    BlueScore--;
    BLScoreDisplay.textContent = BlueScore;
  }
});

//BLUE FOUL
document.addEventListener("DOMContentLoaded", function () {
  const blueFoulDisplay = document.getElementById("FoulCountBlue");
  const IncBlueFoulBtn = document.getElementById("BlueFoulInc");
  const DecBlueFoulBtn = document.getElementById("BlueFoulDec");
  let Bluefoul = 0;
  IncBlueFoulBtn.addEventListener("click", () => {
    if (Bluefoul < 3) {
      Bluefoul++;
      blueFoulDisplay.textContent = Bluefoul;
    }
  });
  DecBlueFoulBtn.addEventListener("click", () => {
    if (Bluefoul > 0) {
      Bluefoul--;
      blueFoulDisplay.textContent = Bluefoul;
    }
  });
  const resetButton = document.getElementById("RESETBTN");

  resetButton.addEventListener("click", () => {
    // RESET BLUE FOUL
    Bluefoul = 0;
    blueFoulDisplay.textContent = Bluefoul;
  });
});
//Blue DISARM
document.addEventListener("DOMContentLoaded", function () {
  // Blue DISARM
  const blueDisarmDisplay = document.getElementById("BlueDisarmCount");
  const IncBlueDisarmBtn = document.getElementById("BlueDisarmInc");
  const DecBlueDisarmBtn = document.getElementById("BlueDisarmDec");
  let BlueDisarm = 0;
  IncBlueDisarmBtn.addEventListener("click", () => {
    if (BlueDisarm < 2) {
      BlueDisarm++;
      blueDisarmDisplay.textContent = BlueDisarm;
    }
  });
  DecBlueDisarmBtn.addEventListener("click", () => {
    if (BlueDisarm > 0) {
      BlueDisarm--;
      blueDisarmDisplay.textContent = BlueDisarm;
    }
  });
  const resetButton = document.getElementById("RESETBTN");

  resetButton.addEventListener("click", () => {
    // RESET BLUE DISARM
    BlueDisarm = 0;
    blueDisarmDisplay.textContent = BlueDisarm;
  });
});

// TIME Controls
document.addEventListener("DOMContentLoaded", function () {
  const timerDisplay = document.getElementById("timerDisplay");
  const timePlayBtn = document.getElementById("TimePlay");
  const timePauseBtn = document.getElementById("TimePause");
  const timeResetBtn = document.getElementById("TimeReset");

  let countdownInterval;
  let timeLeft = 60;
  let isTimerRunning = false; // Track whether the timer is running or not

  function startCountdown() {
    countdownInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft >= 0) {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  timePlayBtn.addEventListener("click", () => {
    // Check if the timer is not running before starting it
    if (!isTimerRunning) {
      startCountdown();
      isTimerRunning = true; // Update the flag
      timePlayBtn.disabled = true; // Disable the button
    }
  });

  timePauseBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    isTimerRunning = false; // Update the flag
    timePlayBtn.disabled = false; // Re-enable the button
  });

  timeResetBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    timeLeft = 60;
    timerDisplay.textContent = "1:00";
    isTimerRunning = false; // Update the flag
    timePlayBtn.disabled = false; // Re-enable the button
  });
  // RESET ALL
  const resetButton = document.getElementById("RESETBTN");
  resetButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    timeLeft = 60;
    timerDisplay.textContent = "1:00";
    isTimerRunning = false; // Update the flag
    timePlayBtn.disabled = false; // Re-enable the button
  });
  // NEW GAME
  const newgamebtn = document.getElementById("NEWGAME");
  newgamebtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    timeLeft = 60;
    timerDisplay.textContent = "1:00";
    isTimerRunning = false; // Update the flag
    timePlayBtn.disabled = false; // Re-enable the button
  });
});
// ADVANTAGE POINT
document.getElementById("AdvantageRED").addEventListener("click", function () {
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid red";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid red";
});

document.getElementById("AdvantageBLUE").addEventListener("click", function () {
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid blue";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid blue";
});

document.getElementById("AdvantageCLR").addEventListener("click", function () {
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid #131313";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid #131313";
});

// ROUND COUNT
const roundIncButton = document.getElementById("RoundInc");
const roundDecButton = document.getElementById("RoundDec");
const roundClearButton = document.getElementById("RoundClear");
const roundCountElement = document.getElementById("RoundCount");

// Initial round count
let roundCount = 1;

// Function to update round count and display
function updateRoundCount() {
  roundCountElement.textContent = roundCount;
}

// Event listener for the increment button
roundIncButton.addEventListener("click", function () {
  if (roundCount < 3) {
    roundCount++;
    updateRoundCount();
  }
});

// Event listener for the decrement button
roundDecButton.addEventListener("click", function () {
  if (roundCount > 1) {
    roundCount--;
    updateRoundCount();
  }
});
roundClearButton.addEventListener("click", function () {
  roundCount = 1;
  roundCountElement.textContent = roundCount;
});

// RED WINNER INDICATOR
let RWinRed1Clicked = false;
let RWinRed2Clicked = false;

document
  .getElementById("RoundWinnerIncRED")
  .addEventListener("click", function () {
    if (!RWinRed1Clicked) {
      document.getElementById("RWinRed1").style.backgroundColor = "red";
      document.getElementById("RWinRed1").style.boxShadow = "0 0 20px red";
      RWinRed1Clicked = true;
    } else if (!RWinRed2Clicked) {
      document.getElementById("RWinRed2").style.backgroundColor = "red";
      document.getElementById("RWinRed2").style.boxShadow = "0 0 20px red";
      RWinRed2Clicked = true;
    }
  });

document
  .getElementById("RoundWinnerDecRED")
  .addEventListener("click", function () {
    if (RWinRed2Clicked) {
      document.getElementById("RWinRed2").style.backgroundColor = "white";
      document.getElementById("RWinRed2").style.boxShadow = "none";
      RWinRed2Clicked = false;
    } else if (RWinRed1Clicked) {
      document.getElementById("RWinRed1").style.backgroundColor = "white";
      document.getElementById("RWinRed1").style.boxShadow = "none";
      RWinRed1Clicked = false;
    }
  });
// BLUE WINNER INDICATOR
let RWinBlue1Clicked = false;
let RWinBlue2Clicked = false;

document
  .getElementById("RoundWinnerIncBLUE")
  .addEventListener("click", function () {
    if (!RWinBlue1Clicked) {
      document.getElementById("RWinBlue1").style.backgroundColor = "red";
      document.getElementById("RWinBlue1").style.boxShadow = "0 0 20px red";
      RWinBlue1Clicked = true;
    } else if (!RWinBlue2Clicked) {
      document.getElementById("RWinBlue2").style.backgroundColor = "red";
      document.getElementById("RWinBlue2").style.boxShadow = "0 0 20px red";
      RWinBlue2Clicked = true;
    }
  });

document
  .getElementById("RoundWinnerDecBLUE")
  .addEventListener("click", function () {
    if (RWinBlue2Clicked) {
      document.getElementById("RWinBlue2").style.backgroundColor = "white";
      document.getElementById("RWinBlue2").style.boxShadow = "none";
      RWinBlue2Clicked = false;
    } else if (RWinBlue1Clicked) {
      document.getElementById("RWinBlue1").style.backgroundColor = "white";
      document.getElementById("RWinBlue1").style.boxShadow = "none";
      RWinBlue1Clicked = false;
    }
  });

// RESET SCORE
const resetButton = document.getElementById("RESETBTN");
resetButton.addEventListener("click", () => {
  // RESET RED SCORE
  redScore = 0;
  redScoreDisplay.textContent = redScore;
  // RESET RED FOUL
  Redfoul = 0;
  redFoulDisplay.textContent = Redfoul;
  // RESET RED DISARM
  RedDisarm = 0;
  redDisarmDisplay.textContent = RedDisarm;
  // RESET BLUE SCORE
  BlueScore = 0;
  BLScoreDisplay.textContent = BlueScore;
  // RESET STYLE
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid #131313";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid #131313";
});

// NEW GAME
const newgamebtn = document.getElementById("NEWGAME");

newgamebtn.addEventListener("click", () => {
  // RESET RED SCORE
  redScore = 0;
  redScoreDisplay.textContent = redScore;
  // RESET RED FOUL
  Redfoul = 0;
  redFoulDisplay.textContent = Redfoul;
  // RESET RED DISARM
  RedDisarm = 0;
  redDisarmDisplay.textContent = RedDisarm;
  // RESET BLUE SCORE
  BlueScore = 0;
  BLScoreDisplay.textContent = BlueScore;
  // RESET STYLE
  document.getElementsByClassName("AvantageIndupper")[0].style.borderTop =
    "70px solid #131313";
  document.getElementsByClassName("AvantageIndlower")[0].style.borderBottom =
    "70px solid #131313";
  //RESET ROUND COUNT
  roundCount = 1;
  roundCountElement.textContent = roundCount;
  //RESET ROUND WINNER INDICATOR
  // RED
  RWinRed1Clicked = false;
  document.getElementById("RWinRed1").style.backgroundColor = "white";
  document.getElementById("RWinRed1").style.boxShadow = "none";
  RWinRed2Clicked = false;
  document.getElementById("RWinRed2").style.backgroundColor = "white";
  document.getElementById("RWinRed2").style.boxShadow = "none";
  // BLUE
  RWinBlue1Clicked = false;
  document.getElementById("RWinBlue1").style.backgroundColor = "white";
  document.getElementById("RWinBlue1").style.boxShadow = "none";
  RWinBlue2Clicked = false;
  document.getElementById("RWinBlue2").style.backgroundColor = "white";
  document.getElementById("RWinBlue2").style.boxShadow = "none";
});
