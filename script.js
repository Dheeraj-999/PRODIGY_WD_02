let startTime;
let running = false;
let elapsed = 0;
let timerInterval;

function updateDisplay(time) {
  const date = new Date(time);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('display').textContent = `${minutes}:${seconds}.${milliseconds}`;
}

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsed;
    timerInterval = setInterval(() => {
      elapsed = Date.now() - startTime;
      updateDisplay(elapsed);
    }, 10);
    running = true;
  }
}

function pause() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  running = false;
  elapsed = 0;
  updateDisplay(0);
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (running) {
    const lapTime = document.createElement('li');
    lapTime.textContent = document.getElementById('display').textContent;
    document.getElementById('laps').appendChild(lapTime);
  }
}
