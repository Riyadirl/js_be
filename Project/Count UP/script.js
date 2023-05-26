var count = 0;
var counterElement = document.getElementById("counter");
var intervalId;

function startCountUp() {
  intervalId = setInterval(incrementCounter, 1000);
}

function incrementCounter() {
  count++;
  counterElement.textContent = count;
}
