document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const fileInput = document.getElementById('audio-file-input');
  const playlistUl = document.getElementById('playlist-items');
  const trackTitle = document.getElementById('track-title');
  const timeDisplay = document.getElementById('time-display');
  const canvas = document.getElementById('canvas-visualizer');
  const canvasCtx = canvas.getContext('2d');
  
  const btnPlay = document.getElementById('btn-play');
  const btnPause = document.getElementById('btn-pause');
  const btnNext = document.getElementById('btn-next');
  const btnVinyl = document.getElementById('btn-vinyl');
  const btnSaloon = document.getElementById('btn-saloon');
  
  const tagVinyl = document.getElementById('tag-vinyl');
  const tagSaloon = document.getElementById('tag-saloon');
  const powerLamp = document.getElementById('power-lamp');
  
  const faderVolume = document.getElementById('fader-volume');
  const faderSpeed = document.getElementById('fader-speed');
  const faderBass = document.getElementById('fader-bass');
  
  const volVal = document.getElementById('vol-val');
  const speedVal = document.getElementById('speed-val');
  const bassVal = document.getElementById('bass-val');

  // Audio & State
  let playlist = [];
  let currentIndex = -1;
  let audio = new Audio();
  
  let audioCtx = null;
  let analyser = null;
  let source = null;
  let bassFilter = null;
  let isContextInit = false;

  // Set canvas dimension fix
  canvas.width = canvas.clientWidth || 300;
  canvas.height = canvas.clientHeight || 85;

  function initAudioNodes() {
    if (isContextInit) return;
    
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();

    source = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 64;

    bassFilter = audioCtx.createBiquadFilter();
    bassFilter.type = 'lowshelf';
    bassFilter.frequency.value = 200;
    bassFilter.gain.value = parseFloat(faderBass.value);

    // Chain: Source -> Bass -> Analyser -> Output
    source.connect(bassFilter);
    bassFilter.connect(analyser);
    analyser.connect(audioCtx.destination);

    isContextInit = true;
    powerLamp.classList.add('active');
    drawVisualizer();
  }

  // File Selection
  fileInput.addEventListener('change', (e) => {
    playlist = Array.from(e.target.files);
    if (playlist.length === 0) return;
    renderPlaylist();
    loadTrack(0);
  });

  function renderPlaylist() {
    playlistUl.innerHTML = '';
    playlist.forEach((file, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${file.name}`;
      if (index === currentIndex) li.classList.add('active');
      li.addEventListener('click', () => loadTrack(index));
      playlistUl.appendChild(li);
    });
  }

  function loadTrack(index) {
    if (index < 0 || index >= playlist.length) return;
    currentIndex = index;
    renderPlaylist();
    
    const file = playlist[currentIndex];
    audio.src = URL.createObjectURL(file);
    trackTitle.textContent = file.name.substring(0, 22).toUpperCase();
    playTrack();
  }

  async function playTrack() {
    if (!audio.src) return;

    initAudioNodes();
    if (audioCtx && audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    audio.play();
  }

  // Controls
  btnPlay.addEventListener('click', playTrack);
  btnPause.addEventListener('click', () => audio.pause());

  btnNext.addEventListener('click', () => {
    if (playlist.length > 0) {
      loadTrack((currentIndex + 1) % playlist.length);
    }
  });

  // Faders
  faderVolume.addEventListener('input', (e) => {
    audio.volume = e.target.value;
    volVal.textContent = `${Math.round(e.target.value * 100)}%`;
  });

  faderSpeed.addEventListener('input', (e) => {
    audio.playbackRate = e.target.value;
    speedVal.textContent = `${parseFloat(e.target.value).toFixed(1)}x`;
  });

  faderBass.addEventListener('input', (e) => {
    const val = e.target.value;
    bassVal.textContent = `${val}dB`;
    if (bassFilter) bassFilter.gain.value = parseFloat(val);
  });

  // Toggles
  btnVinyl.addEventListener('click', () => {
    btnVinyl.classList.toggle('active');
    const isActive = btnVinyl.classList.contains('active');
    tagVinyl.textContent = `VINYL: ${isActive ? 'ON' : 'OFF'}`;
    tagVinyl.classList.toggle('active', isActive);
  });

  btnSaloon.addEventListener('click', () => {
    btnSaloon.classList.toggle('active');
    const isActive = btnSaloon.classList.contains('active');
    tagSaloon.textContent = `SALOON: ${isActive ? 'ON' : 'OFF'}`;
    tagSaloon.classList.toggle('active', isActive);
  });

  // Display Updates
  audio.addEventListener('timeupdate', () => {
    const cur = Math.floor(audio.currentTime);
    const dur = Math.floor(audio.duration || 0);
    timeDisplay.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
  });

  audio.addEventListener('ended', () => {
    if (playlist.length > 0) {
      loadTrack((currentIndex + 1) % playlist.length);
    }
  });

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // Green LCD Visualizer Render Loop
  function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    if (!analyser) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = '#000000';
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 1.8;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height;
      
      canvasCtx.fillStyle = '#22c55e';
      canvasCtx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);

      x += barWidth + 1;
    }
  }
});