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
    if (cardCounts.hasOwnProperty(cardId) && cardCounts[cardId] > 0) {
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
        updateStatistics();
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
// Function to handle click on the reset hand button
function handleResetHandClick() {
    // Clear the user's hand
    userHand.length = 0;
    // Update the UI
    updateUserHand();
    updateStatistics();
}
// Function to handle click on the reset all button
function handleResetAllClick() {
    // Clear the user's hand
    userHand.length = 0;
    // Reset the card counts and update the count in the UI for each card
    for (var card in cardCounts) {
        if (cardCounts.hasOwnProperty(card)) {
            cardCounts[card] = 4;
            updateCount(card);
        }
    }
    // Update the UI
    updateUserHand();
    updateTotalCount();
    // Force a re-render of the cards
    var cardsElement = document.querySelector('.cards');
    if (cardsElement) {
        cardsElement.innerHTML = cardsElement.innerHTML;
    }
    updateStatistics();
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
// Attach event listener to the reset hand button
var resetHandButton = document.getElementById('resetHand');
if (resetHandButton) {
    resetHandButton.addEventListener('click', handleResetHandClick);
}
// Attach event listener to the reset all button
var resetAllButton = document.getElementById('resetAll');
if (resetAllButton) {
    resetAllButton.addEventListener('click', handleResetAllClick);
}
// Function to calculate the value of the user's hand
function calculateHandValue() {
    var handValue = 0;
    userHand.forEach(function (cardId) {
        if (cardId === 'ace') {
            // Ace can be 1 or 11, choose the value that won't bust the hand
            handValue += (handValue + 11 <= 21) ? 11 : 1;
        }
        else if (cardId === 'king' || cardId === 'queen' || cardId === 'jack') {
            // Face cards are worth 10
            handValue += 10;
        }
        else {
            // Number cards are worth their number
            handValue += parseInt(cardId);
        }
    });
    return handValue;
}
// Function to calculate the likelihood of pulling a card without busting
function calculateLikelihood() {
    var handValue = calculateHandValue();
    var safeCards = 0;
    for (var card in cardCounts) {
        if (cardCounts.hasOwnProperty(card)) {
            var cardValue = (card === 'ace') ? 1 : (card === 'king' || card === 'queen' || card === 'jack' ? 10 : parseInt(card));
            if (handValue + cardValue <= 21) {
                safeCards += cardCounts[card];
            }
        }
    }
    return safeCards / 52 * 100; // Convert to percentage
}
// Function to update the statistics in the UI
function updateStatistics() {
    var handValueElement = document.getElementById('handValue');
    var likelihoodElement = document.getElementById('likelihood');
    var recommendationElement = document.getElementById('recommendation');
    var handValue = calculateHandValue();
    var likelihood = calculateLikelihood();
    if (handValueElement) {
        handValueElement.textContent = "Hand Value: ".concat(handValue);
    }
    if (likelihoodElement) {
        likelihoodElement.textContent = "Likelihood of Not Busting: ".concat(likelihood.toFixed(2), "%");
    }
    if (recommendationElement) {
        recommendationElement.textContent = likelihood > 50 ? 'Recommendation: Take another card' : '';
    }
    // Force a re-render of the statistics
    var statisticsElement = document.getElementById('statistics');
    if (statisticsElement) {
        statisticsElement.innerHTML = statisticsElement.innerHTML;
    }
}
// Initial UI update
updateTotalCount();
