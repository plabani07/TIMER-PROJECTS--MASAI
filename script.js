let minutes = 0;
let seconds = 0;
let timerInterval = null;

const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");

function updateDisplay() {
    const min = minutes < 10 ? "0" + minutes : minutes;
    const sec = seconds < 10 ? "0" + seconds : seconds;
    timerDisplay.textContent = `${min}:${sec}`;
}

function startTimer() {
    if (timerInterval) return; // Prevents multiple intervals if already running
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();