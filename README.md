# Contents of /fish-clicker-game/fish-clicker-game/README.md

# Fish Clicker Game

## Overview
Fish Clicker is a simple browser game built using Three.js where players can click on different types of fish to earn points. Each fish has a unique point value, and the goal is to accumulate as many points as possible.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd fish-clicker-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Game
To start the game, open the `index.html` file in your web browser. You can also set up a local server using a tool like `http-server` or `live-server` for a better experience.

### Game Instructions
- Click on the fish that appear in the ocean to earn points.
- Each type of fish has a different point value.
- Try to achieve the highest score possible!

## File Structure
- `src/index.html`: Main HTML file for the game.
- `src/js/main.js`: Entry point of the game.
- `src/js/Fish.js`: Class representing fish objects.
- `src/js/Ocean.js`: Class for the ocean background.
- `src/js/GameManager.js`: Manages the game state.
- `src/js/ScoreManager.js`: Handles the scoring system.
- `src/styles/style.css`: CSS styles for the game.
- `src/models/fish/data.json`: Data for different types of fish.

## Acknowledgments
- This project uses Three.js for rendering 3D graphics. Visit [Three.js](https://threejs.org/) for more information.