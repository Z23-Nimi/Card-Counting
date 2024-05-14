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

// Function to reset the hand
function resetHand() {
  // Reset counts for all standard cards
  for (const card in cardCounts) {
    if (cardCounts.hasOwnProperty(card)) {
      cardCounts[card] = 4; // Reset count to 4 for each card
      updateCount(card); // Update UI with reset count
    }
  }
  // Update total count
  updateTotalCount();
  // Clear user hand UI
  const userHandElement = document.getElementById('userHand');
  if (userHandElement) {
    userHandElement.innerHTML = ''; // Clear inner HTML to remove user hand cards
  }
}

// Function to add a card to the user's hand
function addUserCard(cardId: string) {
  // Check if the card count is greater than zero
  if (cardCounts.hasOwnProperty(cardId) && cardCounts[cardId] > 0) {
    // Decrement count for the clicked card
    cardCounts[cardId]--;
    // Update the UI with the new count for the clicked card
    updateCount(cardId);
    // Update the total count
    updateTotalCount();
    // Add the card to the user's hand UI
    const userHandElement = document.getElementById('userHand');
    if (userHandElement) {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.id = `${cardId}-user`;
      cardElement.innerHTML = `
        <p>${cardId.charAt(0).toUpperCase() + cardId.slice(1)}</p>
        <p class="count">Count: 1</p>
      `;
      userHandElement.appendChild(cardElement);
    }
  }
}

// Attach event listeners to each standard card
const standardCards = document.querySelectorAll('#standardCards .card');
standardCards.forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.id;
    handleCardClick(cardId);
    addUserCard(cardId); // Add the clicked card to the user's hand
  });
});

// Function to reset the user's hand
function resetUserHand() {
  // Clear the user's hand UI
  const userHandElement = document.getElementById('userHand');
  if (userHandElement) {
    userHandElement.innerHTML = ''; // Clear inner HTML to remove all user hand cards
  }
}

// Attach event listener to the reset button
const resetButton = document.getElementById('resetButton');
if (resetButton) {
  resetButton.addEventListener('click', () => {
    resetHand(); // Reset standard cards
    resetUserHand(); // Reset user's hand
  });
}


// Initial UI update
updateTotalCount();

