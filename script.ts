const cardCounts: { [key: string]: number } = {
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
function handleCardClick(cardId: string) {
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
function updateCount(cardId: string) {
  const countElement = document.querySelector(`#${cardId} .count`);
  if (countElement) {
    countElement.textContent = `Count: ${cardCounts[cardId]}`;
  }
}

// Function to update the total count
function updateTotalCount() {
  const totalCountElement = document.getElementById('total');
  if (totalCountElement) {
    let totalCount = 0;
    for (const card in cardCounts) {
      if (cardCounts.hasOwnProperty(card)) {
        totalCount += cardCounts[card];
      }
    }
    totalCountElement.textContent = `Total: ${totalCount}`;
  }
}

// Attach event listeners to each card
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.id;
    handleCardClick(cardId);
  });
});

// Initial UI update
updateTotalCount();

