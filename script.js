var cardCounts = {
    ace: 4,
    two: 4,
    three: 4,
    four: 4,
    five: 4,
    six: 4,
    seven: 4,
    eight: 4,
    nine: 4,
    ten: 4,
    jack: 4,
    queen: 4,
    king: 4,
};
var userHand = [];
// Function to handle click on a card
function handleCardClick(cardId) {
    if (cardCounts.hasOwnProperty(cardId)) {
        // Decrement count for the clicked card
        cardCounts[cardId]--;
        // Add the card to the user's hand
        userHand.push(cardId);
        // Update the UI with the new count for the clicked card
        updateCount(cardId);
        // Update the user's hand in the UI
        updateUserHand();
        // Update the total count
        updateTotalCount();
    }
}
// Function to update the count for a specific card
function updateCount(cardId) {
    var countElement = document.querySelector("#".concat(cardId, " .count"));
    if (countElement) {
        countElement.textContent = "Count: ".concat(cardCounts[cardId]);
    }
}
// Function to update the total count
function updateTotalCount() {
    var totalCountElement = document.getElementById('total');
    if (totalCountElement) {
        var totalCount = 0;
        for (var card in cardCounts) {
            if (cardCounts.hasOwnProperty(card)) {
                totalCount += cardCounts[card];
            }
        }
        totalCountElement.textContent = "Total: ".concat(totalCount);
    }
}
// Function to handle click on the reset button
function handleResetClick() {
    // Clear the user's hand
    userHand.length = 0;
    // Reset the card counts
    for (var card in cardCounts) {
        if (cardCounts.hasOwnProperty(card)) {
            cardCounts[card] = 4;
        }
    }
    // Update the UI
    updateUserHand();
    updateTotalCount();
}
// Function to update the user's hand in the UI
function updateUserHand() {
    var handElement = document.getElementById('hand');
    if (handElement) {
        // Clear the current hand
        handElement.innerHTML = '';
        // Add each card in the user's hand to the hand element
        userHand.forEach(function (cardId) {
            var cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.textContent = cardId;
            handElement.appendChild(cardElement);
        });
    }
}
// Attach event listeners to each card
var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function () {
        var cardId = card.id;
        handleCardClick(cardId);
    });
});
// Attach event listener to the reset button
var resetButton = document.getElementById('reset');
if (resetButton) {
    resetButton.addEventListener('click', handleResetClick);
}
// Initial UI update
updateTotalCount();

