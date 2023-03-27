// Get references to the HTML elements
const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Initialise the counter
let count = 0;

// Function to update the counter display
function updateCounterDisplay() {
  counterDisplay.innerHTML = count;
}

// Add event listeners to the buttons
incrementButton.addEventListener("click", () => {
  count++;
  updateCounterDisplay();
});

decrementButton.addEventListener("click", () => {
  count--;
  updateCounterDisplay();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounterDisplay();
});

