![logo](https://i.imgur.com/YjIiOM5.png)

# 2-Player Head to Head, turn-based game
First player to have 4 tokens in a row horizontally, vertically, and/or diagonally wins the game. 

![gameboard](https://i.imgur.com/E5r9ZeD.png)

Play game [here](https://andrewavina.github.io/project1-game-connect4/)

## How to Play:
Player 1 plays with Yellow tokens and Player 2 plays with Red tokens.

Choose which column to place your token in by clicking on it with your mouse. 

Once you click on the column you wish to drop your token into, the token will go to the bottom most available slot. 

The game ends when either a player has at least 4 tokens in a row a.k.a. "connects 4", or if every circle slot is taken up without any connect 4's - in which case the game is a draw. 


## Development & Technologies

This Connect 4 game is being built using HTML, CSS, JavaScript, and the jQuery library.

Resources:
- Fonts used: "Baloo Tammudu" from Google Fonts (<link href="https://fonts.googleapis.com/css?family=Baloo+Tammudu" rel="stylesheet">)
- W3schools.com for many of the styling and animation features.
- Background from: http://background.noemafranquicias.com/best-web-page-backgrounds/
- For ideas on logic:
  - https://github.com/kenrick95/c4 (this one is more complex and has AI. This one uses Canvas.)
  - https://github.com/borderpointer/connect-four (this one is more simple)
  - https://www.youtube.com/watch?v=ra2_rKV0mDE (this is for tic tac toe, but same can be used for Connect 4.)


## Approach Taken
- Trello board with user stories: https://trello.com/b/iuHne1Pt/project-1-connect-4
- Began with user stories, wireframing on piece of paper, and looking at examples online
  - ![drawing](https://i.imgur.com/nE9038Y.jpg?2)
- Wrote out/psuedocoded the needed objects and JavaScript functionality that would be needed to make the game work and meet user stories.
- I started by quickly creating the HTML layout and elements for where the game board would be.
- Shortly after, moved to creating the game board and having the tokens appear on click.
- Then, focused on the hardest and most time-consuming aspect of this game which was the logic for figuring out who wins the game. 
- After getting that logic, set up the pop up to show who won and reset/play again button.
- Finishing up on keeping an ongoing track of the score and styling the game to make it look better than plain.


## Installation Instructions
This version of Connect 4 is playable on any web browser. 

## Things to add
- Game win tracker. Will need to figure out how to reset game board without reloading page. 
- Reset button that resets game board without reloading page/game win tracker.
- How to play info.

## Unsolved Problems
1. Random, unknown combos of less than 4 tokens in a row trigger a win when it shouldn't.
2. Sometimes, when all the circles are full of tokens and it should be a draw, the draw function doesn't trigger. 



