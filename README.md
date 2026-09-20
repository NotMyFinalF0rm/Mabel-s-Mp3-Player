# Pixel RPG Engine

A lightweight, top-down 2D action RPG engine built completely from scratch using plain JavaScript and HTML5 Canvas. No heavy frameworks, no external libraries, and zero build steps required—just pure web fundamentals.

I built this project to experiment with core game development concepts like tilemaps, custom collision detection, state switching, and audio synthesis right inside the browser.

---

## 🎮 Features

* **Multi-Tilemap System:** Smooth transitions between an Overworld map and a Dungeon level via interactive portals.
* **Custom Combat Mechanics:** Real-time sword slashes alongside mana-based ranged spells (Fireballs).
* **Multi-Phase Boss Battles:**
  * **Shadow Demon:** Features a 3-way spread shot in Phase 1 and transitions into an enraged, high-speed 8-direction ring blast in Phase 2.
  * **Fire Drake:** Tracks the player and launches heavy targeted fireballs.
* **Procedural Sound Engine:** Uses the Web Audio API to synthesize retro retro-style sound effects on the fly for hits, swings, spell casts, item pickups, and coins—no audio files needed.
* **NPCs & Dialogue System:** Built-in interactive NPC dialogue box with step-through text functionality.
* **Player Progression:** Full HP/MP management, XP leveling system, gold collection, and an interactive inventory bar.

---

## 🚀 Getting Started

Since this is built with standard Web technology, there are no dependencies or build steps (`npm install`, Webpack, Vite, etc.). You just need a modern web browser.

### Option 1: VS Code Live Server (Recommended)

1. Clone or download this repository to your machine.
2. Open the project folder in **VS Code**.
3. Install the **Live Server** extension if you haven't already.
4. Right-click `index.html` and select **Open with Live Server**.

### Option 2: Direct File Launch

1. Download the project files into a single directory.
2. Double-click `index.html` to open it in Chrome, Firefox, Safari, or Edge.

> **Note:** Modern browsers require a user interaction (like a key press or screen click) before audio can play. If you don't hear sound effects right away, just press any control key or click inside the window.

---

## 🕹️ Controls

| Action | Key / Input |
| :--- | :--- |
| **Move** | `W`, `A`, `S`, `D` or `Arrow Keys` |
| **Melee Attack** | `Spacebar` or `J` |
| **Cast Fireball** | `Q` or `1` |
| **Use HP Potion** | `H` |
| **Use MP Potion** | `M` |
| **Interact / Talk** | `E` |

---

## 📁 Project Structure

Keep all files in the same root folder so the references work seamlessly:

```text
├── index.html       # Canvas setup, HUD markup, and dialogue UI
├── style.css        # Pixelated UI styling and layout overlays
└── main.js          # Audio synth, input handler, engine loop, and game logic
