let minutes = 0, seconds = 0, milliseconds = 0;
let timer = null;
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;
    display.textContent = `${m} : ${s} : ${ms}`;
}

function startStopwatch() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            milliseconds += 10;
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
            }
            updateDisplay();
        }, 10);

        startBtn.disabled = true;
        pauseBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    running = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetStopwatch() {
    clearInterval(timer);
    running = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
}

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
