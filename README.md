# Doodle Jump

## Game Overview and Logic
Doodle Jump is a clone of the classic game, in which the character attempts hops up to earn points for each hop . He will be interrupted by enemies and collision with the enemies or falling down will result in losing the game .
![login page](https://raw.githubusercontent.com/Meenakshi-Anand/Facebook-Clone/master/design_docs/LoginPage.jpg)

## Functionality & MVP
In Doodle Jump users will be able to
- [ ] There will be a control modal describing the rules.
- [ ] Randomly seed initial data(bases) for play.
- [ ] User will be able to hop up on bases in left and right.
- [ ] User's core will be the no of bases he has crossed over hopping.
- [ ] Score will be visible while on play .

## Wireframes
Doodle Jump will be a single-window game. The user will be able to move up ,left and right with the keyboard's arrows.

![Design Documentation](https://raw.githubusercontent.com/Meenakshi-Anand/Doodle-Jump/master/Doodle_jump_wireframe..jpg)

## This project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure and game logic,
* HTML5 Canvas for DOM manipulation and rendering,
* PS5 for sound generation, processing and control.
* Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be four scripts involved in this project:

gameScreen.js: this script will handle the gaming logic .

sprite.js: this script will house the physics logic for the sprite.

audio.js: this script will handle the audio logic and the creation of AudioEvents based on the input parameters outlined above.

## Timeline

### Weekend:

Setup the foundational framework . Ran through the basic logic to implement the game. Completed the design documentation .

### Day 1:

- [ ] Implement the basic logic of the game .
- [ ] User moves up on jump to reach the next base failing will result in loosing the game.

### Day 2:

- [ ] Handle collision with enemies and displaying score .
- [ ] Design the character and the backdrop .

### Day 3:

- [ ] Allow the user to acquire points based on the number of bases he has crossed.
- [ ] Complete design and functionality.

### Day 4:

- [ ] Style the display and make sure that the everything is running smoothly.
- [ ] A day to make sure the code, interface, and functionality is clean.

### Bonus Features

- [ ] Controls on the bottom of the game's window will allow the user to quit the game.
- [ ] Add sound effects while the character falls down and sound effects for his jump .
