export function initAudioPlayer(source: string): () => void {
  const button = document.getElementById('audio-toggle') as HTMLButtonElement | null;
  const audio = document.getElementById('background-audio') as HTMLAudioElement | null;
  const status = document.getElementById('audio-status');
  if (!button || !audio) return () => {};

  audio.src = source;
  audio.volume = 0.35;
  let userPaused = false;
  let hasError = false;
  let resumeTime = 0;
  try {
    const saved = JSON.parse(sessionStorage.getItem('wedding_abdan_audio_state') ?? 'null');
    userPaused = saved?.paused === true;
    if (saved?.source === source && Number.isFinite(saved?.time)) resumeTime = Math.max(0, saved.time);
  } catch {}

  const saveState = () => {
    try {
      sessionStorage.setItem('wedding_abdan_audio_state', JSON.stringify({ source, paused: userPaused, time: audio.currentTime }));
    } catch {}
  };
  const restoreTime = () => {
    if (Number.isFinite(audio.duration) && resumeTime < audio.duration) audio.currentTime = resumeTime;
  };
  const onPageHide = () => {
    saveState();
    audio.pause();
  };

  const updateButton = () => {
    const playing = !audio.paused;
    button.classList.toggle('is-playing', playing);
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', playing ? 'Jeda musik pernikahan' : 'Putar musik pernikahan');
    button.title = playing ? 'Jeda Musik' : 'Putar Musik';
    if (status) status.textContent = playing ? 'Musik diputar' : 'Musik dijeda';
  };

  const attemptPlay = async () => {
    if (hasError || userPaused) return;
    try {
      await audio.play();
      removeGestureListeners();
    } catch {
      // Penolakan autoplay ditangani tanpa popup; kontrol manual tetap tersedia.
    }
    updateButton();
  };

  const onFirstGesture = (event: Event) => {
    if (event.target instanceof Node && button.contains(event.target)) return;
    void attemptPlay();
  };
  const gestureEvents = ['pointerdown', 'keydown', 'touchstart'] as const;
  const removeGestureListeners = () => {
    gestureEvents.forEach((eventName) => document.removeEventListener(eventName, onFirstGesture));
  };

  const onToggle = () => {
    removeGestureListeners();
    if (audio.paused) {
      userPaused = false;
      void attemptPlay();
    } else {
      userPaused = true;
      audio.pause();
    }
    saveState();
  };
  const onError = () => {
    hasError = true;
    removeGestureListeners();
    button.disabled = true;
    button.classList.add('has-error');
    button.classList.remove('is-playing');
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', 'Musik belum tersedia');
    button.title = 'Musik belum tersedia';
    if (status) status.textContent = 'Musik belum tersedia. Silakan menikmati undangan ini.';
  };

  gestureEvents.forEach((eventName) => document.addEventListener(eventName, onFirstGesture, { passive: true }));
  button.addEventListener('click', onToggle);
  audio.addEventListener('play', updateButton);
  audio.addEventListener('pause', updateButton);
  audio.addEventListener('error', onError);
  audio.addEventListener('loadedmetadata', restoreTime);
  window.addEventListener('pagehide', onPageHide);
  updateButton();

  return () => {
    removeGestureListeners();
    button.removeEventListener('click', onToggle);
    audio.removeEventListener('play', updateButton);
    audio.removeEventListener('pause', updateButton);
    audio.removeEventListener('error', onError);
    audio.removeEventListener('loadedmetadata', restoreTime);
    window.removeEventListener('pagehide', onPageHide);
    audio.pause();
  };
}
