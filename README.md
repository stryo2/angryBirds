# 🐦 Angry Birds (HTML5 + p5.js + Matter.js)

A web-based Angry Birds clone built using **p5.js** for rendering and **Matter.js** for physics. This project recreates the slingshot mechanic and includes birds with special powerups like the BlueBird's split shot.


## 🚀 Features

- Fully functional slingshot using Matter.js constraints
- RedBird, BlueBird, and YellowBird with different behaviors
- BlueBird splits into 3 mini birds when spacebar is pressed
- Collision-based block destruction with realistic physics
- Basic level structure with obstacles

## 🎮 Controls

- **Mouse drag & release** to launch the bird
- **Spacebar** to activate the bird’s powerup
- **R** to restart the current level (if implemented)
- **N** to go to the next level (in future updates)

## 🐛 Known Bugs

- 🟦 **BlueBird bug**: When the BlueBird splits into 3, the original BlueBird is removed, which can interfere with level/bird management (e.g., slingshot switching).
- Minor overlap issues when birds or objects collide at high speeds.
- Canvas may misalign on very small screens or high DPI devices.

## 🔮 Future Updates

- ✅ **Multiple Levels**: Each with different layouts, bird sets, and obstacles.
- 🎯 Level select screen and win/lose conditions
- 🛠 Bug fixes for BlueBird and improved object management
- 📱 Responsive layout for mobile/touchscreen devices
- 💥 More bird types (e.g. BombBird, BoomerangBird) and smarter pig enemies

## 🧠 Built With

- [p5.js](https://p5js.org/) – Rendering and canvas management
- [Matter.js](https://brm.io/matter-js/) – Physics engine
- Vanilla JS & HTML/CSS

## 📂 Project Structure
```
angryBirds/
├── index.html
├── sketch.js
├── levels.js
├── objects/
│ ├── birds/
│ ├── obstacles/
│ ├── ground.js
│ └── slingshot.js
└── style.css
```

## 🧑‍💻 Author

[Pranshi Singh](https://github.com/stryo2)

## 🛠 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/stryo2/angryBirds.git
   cd angryBirds

2. Open index.html in your browser:

    You can double-click it, or Use Live Server in VS Code for best results

3. Play the game and start slinging birds! 🐦

---




