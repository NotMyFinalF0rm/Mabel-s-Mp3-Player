# Mabel's MP3 Player

A retro, customized web-based audio player inspired by Mabel Pines' bright, playful style. Built with pure HTML, CSS, and vanilla JavaScript, this project lets you load, play, and organize local audio tracks directly inside your browser with zero bloat or third-party dependencies.

I built this project to learn how to manipulate audio streams with the HTML5 Web Audio API, manage dynamic playlists, and practice crafting pixel-perfect custom interfaces without rely on UI frameworks.

---

## Features

* **Custom Audio Engine:** Play, pause, skip, seek, and adjust volume in real time using native HTML5 Audio methods.
* **Dynamic Playlist Management:** Add audio files from your local storage, organize tracks, and auto-advance to the next song when one ends.
* **Visual Progress & Track Tracking:** Interactive playback scrubber bar with real-time timestamps (current time / duration) and current track info display.
* **Play Modes:** Shuffle track order and loop modes (repeat single track or repeat entire playlist).
* **Mabel-Inspired Theme:** Retro aesthetic with colorful accents, soft drop shadows, and responsive controls designed for desktop and mobile screens.

---

## Getting Started

Since this is built using standard Web technology, there are no dependencies, node modules, or build steps required.

### Option 1: VS Code Live Server (Recommended)

1. Clone or download this repository to your machine.
2. Open the project folder in **VS Code**.
3. Install the **Live Server** extension if you haven't already.
4. Right-click `index.html` and select **Open with Live Server**.

### Option 2: Direct File Launch

1. Download the project files into a single directory.
2. Double-click `index.html` to open it directly in Google Chrome, Firefox, Safari, or Edge.

---

## How to Use

1. Click **Add Track** or use the file upload button to load `.mp3`, `.wav`, or `.ogg` files from your computer.
2. Click any song in your playlist to select and play it.
3. Use the playback controls to switch tracks, adjust volume, or drag the progress bar to skip around in a song.
4. Toggle the **Loop** or **Shuffle** buttons to customize playback logic.

---

## Project Structure

Keep all three core files in the same directory:

```text
mabels-mp3-player/
├── index.html       # Player layout, playlist markup, and UI controls
├── style.css        # Mabel-themed styles, custom audio controls, and layout
└── main.js          # Audio controller logic, playlist state, and event listeners
