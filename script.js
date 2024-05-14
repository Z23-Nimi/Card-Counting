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
// Function to handle click on a card
function handleCardClick(cardId) {
    if (cardCounts.hasOwnProperty(cardId)) {
        // Decrement count for the clicked card
        cardCounts[cardId]--;
        // Update the UI with the new count for the clicked card
        updateCount(cardId);
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
// Attach event listeners to each standard card
var standardCards = document.querySelectorAll('#standardCards .card');
standardCards.forEach(function (card) {
    card.addEventListener('click', function () {
        var cardId = card.id;
        handleCardClick(cardId);
    });
});
// Initial UI update
updateTotalCount();
