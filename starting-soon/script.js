reframe('iframe');

const countdownElement = document.getElementById('countdown');
let timeLeft = 21 * 60;

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  if (timeLeft === 0) {
    countdownElement.textContent = 'Time\'s up!';
    clearInterval(interval);
  }
  timeLeft--;
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);

const loadingText = document.getElementById("loading-text");
let dotsCount = 1;

function updateDots() {
  const dots = ".".repeat(dotsCount);
  loadingText.innerHTML = `Stream<br>Starting<br>Soon${dots}`;
  dotsCount = (dotsCount + 1) % 4 || 1;
}

setInterval(updateDots, 500);