reframe('iframe');

const loadingText = document.getElementById("loading-text");
let dotsCount = 1;

function updateDots() {
  const dots = ".".repeat(dotsCount);
  loadingText.innerHTML = `Calculating${dots}`;
  dotsCount = (dotsCount + 1) % 4 || 1;
}

setInterval(updateDots, 500);