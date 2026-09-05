# 🎵 Mabel-86 Saloon Jukebox & FX Rig

A lightweight, retro-styled web audio processing application built using vanilla HTML5, CSS3, and JavaScript. Inspired by classic vintage saloon jukeboxes, this app enables users to load local audio files, perform real-time pitch and low-frequency equalizer adjustments, and view a dynamic audio spectrum visualizer.

![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-amber)
![Platform](https://img.shields.io/badge/Engine-Web%20Audio%20API-green)

---

## ✨ Key Features

* **Custom Web Audio Engine:** Dynamically load and render local `.mp3` and `.wav` audio files using native Web Audio API pipelines.
* **Real-time Signal Processing:**
  * **Master Volume Control:** Smooth gain adjustments with dynamic display readouts.
  * **Playback Rate & Pitch Adjustment:** Granular speed control ranging from `0.5x` to `1.5x`.
  * **Low-Shelf Bass Equalizer:** Dedicated low-frequency EQ filter boosting bass up to `+12dB`.
* **Dynamic LCD Visualizer:** Real-time frequency spectrum analysis rendered on an HTML5 `<canvas>` element using an `AnalyserNode`.
* **Interactive Playlist Management:** Functional playlist rack supporting file queueing, track selection, and automated sequential playback.
* **Skeuomorphic Interface:** Formatted using modular CSS, mimicking a vintage dark-wood physical audio console.

---

## 🛠️ Technology Stack

* **Frontend:** Standard HTML5 structure and custom CSS3 (Flexbox & Grid layout modules).
* **Core Logic:** Vanilla JavaScript (ES6+ standard).
* **Audio Processing:** Native HTML5 `Audio` API and `AudioContext` (`BiquadFilterNode`, `AnalyserNode`, `MediaElementAudioSourceNode`).
* **Typography:** Embedded [VT323](https://fonts.google.com/specimen/VT323) monospace typeface via Google Fonts.

---

## ⚠️ Browser Compatibility & Troubleshooting

### Brave Browser Users
Due to strict default privacy and fingerprinting protections in the Brave Browser, the Web Audio API context may be blocked from processing local audio streams. 

* **Fix:** Click the **Brave Shields icon** (orange lion) in your address bar and toggle **Shields Down** for this site. This allows the audio context and spectrum canvas to function properly.

---

## 🚀 Installation & Local Execution

1. Clone or download this repository to your local directory:
   ```bash
   git clone [https://github.com/your-username/mabel-jukebox.git](https://github.com/your-username/mabel-jukebox.git)
