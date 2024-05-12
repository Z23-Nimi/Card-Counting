var count = 0; // Initialize count
// Function to handle button click representing a dealt card
function handleCardClick(value) {
    // Update count based on the value of the card
    count += value;
    updateUI(); // Update the UI with the new count
}
// Function to update the UI with the current count
function updateUI() {
    var countDisplay = document.getElementById('count');
    if (countDisplay) {
        countDisplay.textContent = "Count: ".concat(count);
    }
}
// Attach event listener to the card button
var cardButton = document.getElementById('cardButton');
if (cardButton) {
    cardButton.addEventListener('click', function () {
        var value = parseInt(cardButton.dataset.value || '0', 10);
        handleCardClick(value);
    });
}
// Initial UI update
updateUI();

