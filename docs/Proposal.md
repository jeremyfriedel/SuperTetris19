##  Project Proposal: Tetris

### Background

Tetris is a game created by Alexey Pajitnov. The name derives from the Greek numerical prefix tetra, as the pieces are are all made of four segments. The pieces are called tetrominoes. The rules are:

1) Tetrominoes fall from the top of the screen to the bottom. 
2) A completely filled horizontal line disappears, and adds to the players score. 
3) The player loses when the pieces are stacked up to the top of the screen.

With this Tetris game, users will be able to:

- [ ] Start, and stop the game
- [ ] Move and rotate the pieces
- [ ] Track score, and end the game when the player loses
- [ ] Increase the speed of pieces as the score increases.

In addition, this project will include:

- [ ] A description of the game
- [ ] A production README

### Wireframes

![alt text](/docs/Screen%20Shot%202019-04-10%20at%203.49.12%20PM.png)

This app will consist of a single screen with game board, game controls, and nav links to the Github and my LinkedIn,


This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- Webpack
- Canvas
- Firebase for high schores

Files will include an:

- Entry file
- Board file
- Piece file
- Game Logic file
- Score file
- Start screen file

### Wireframes



### Implementation Timeline / MVPS

**Day 1**

Setup node modules, and webpack.

- Write entry file
- Render the individual pieces on canvas

**Day 2**

- Get pieces moving
- Disappear and create pieces

**Day 3**

- Get pieces falling, moving , and rotate,
- User controls
- Score

**Day 4**
- Polish the game to a working and usable state.
- Hava  a high score page
- Play button

### Bonus features

If possible:

- [ ] Add options for tetris with non-standard pieces( 5 square pieces)
- [ ] Two player mode, wth two boards and scores, and a winner and loser.