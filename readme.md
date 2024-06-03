# Card Counting

This is a simple web application that allows users to simulate a card game. Users can click on cards to add them to their hand, 
and the application will automatically calculate the value of their hand and the likelihood of drawing a card without busting.

## Features

- Interactive card deck: Click on a card to add it to your hand. The count of the card will decrease by 1.
- Hand value calculation: The application automatically calculates the value of your hand.
- Likelihood calculation: The application calculates the likelihood of drawing a card without busting.
- Recommendations: If the likelihood of not busting is higher than 50%, a recommendation to take another card will be displayed.
- Reset functionality: You can reset your hand or reset all cards back to their original counts using the reset buttons.

## Instructions

1. Click on a card to add it to your hand. The count of the card will decrease by 1.
2. The value of your hand and the likelihood of drawing a card without busting will be updated automatically.
3. If the likelihood of not busting is higher than 50%, a recommendation to take another card will be displayed.
4. You can reset your hand or reset all cards back to their original counts using the reset buttons.

## Setup

To run this project, simply open the link https://z23-nimi.github.io/Card-Counting/

## Known Bugs

Aces: Aces will be correctly valued when drawn, but will not change value afterward, resulting in innaccuracies when an ace should be
measured as a one instead of the eleven it was originally.

Stat Discrepancy: Occasionally, for currently unknown factors, a 100% chance of not busting will be displayed when there are still cases
in which another drawn card can bust the hand.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits

Vectorized Playing Cards 3.2 have been used for visuals of the cards per the terms of LGPL 3.0 open source lisence.
Vectorized Playing Cards 3.2
https://totalnonsense.com/open-source-vector-playing-cards/
Copyright 2011,2021 – Chris Aguilar – conjurenation@gmail.com
Licensed under: LGPL 3.0 - https://www.gnu.org/licenses/lgpl-3.0.html

