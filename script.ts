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

const userHand: string[] = [];

// Function to handle click on a card
function handleCardClick(cardId: string) {
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

// Function to handle click on the reset hand button
function handleResetHandClick() {
  // Clear the user's hand
  userHand.length = 0;
  // Update the UI
  updateUserHand();
}

// Function to handle click on the reset all button
function handleResetAllClick() {
  // Clear the user's hand
  userHand.length = 0;
  // Reset the card counts and update the count in the UI for each card
  for (const card in cardCounts) {
    if (cardCounts.hasOwnProperty(card)) {
      cardCounts[card] = 4;
      updateCount(card);
    }
  }
  // Update the UI
  updateUserHand();
  updateTotalCount();
  // Force a re-render of the cards
  const cardsElement = document.querySelector('.cards');
  if (cardsElement) {
    cardsElement.innerHTML = cardsElement.innerHTML;
  }
}



// Function to update the user's hand in the UI
function updateUserHand() {
  const handElement = document.getElementById('hand');
  if (handElement) {
    // Clear the current hand
    handElement.innerHTML = '';
    // Add each card in the user's hand to the hand element
    userHand.forEach(cardId => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.textContent = cardId;
      handElement.appendChild(cardElement);
    });
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

// Attach event listener to the reset hand button
const resetHandButton = document.getElementById('resetHand');
if (resetHandButton) {
  resetHandButton.addEventListener('click', handleResetHandClick);
}

// Attach event listener to the reset all button
const resetAllButton = document.getElementById('resetAll');
if (resetAllButton) {
  resetAllButton.addEventListener('click', handleResetAllClick);
}

// Initial UI update
updateTotalCount();
