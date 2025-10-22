const panels = document.querySelectorAll('.comic-panel');
const audios = [];

// Gera automaticamente a lista de 21 áudios
for (let i = 1; i <= 21; i++) {
  audios.push(`audio/audio${i}.mp3`);
}

let currentIndex = 0;
let currentAudio = null;

function showNextPanel() {
  if (currentIndex >= panels.length) return;

  const panel = panels[currentIndex];
  panel.style.opacity = '1';
  panel.style.transform = 'translateX(0)';
  panel.style.pointerEvents = 'auto';

  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(audios[currentIndex]);
  currentAudio.play();

  currentIndex++;
}

// Primeiro clique libera o áudio e começa a sequência
document.body.addEventListener('click', function handleFirstClick() {
  showNextPanel();
  document.body.removeEventListener('click', handleFirstClick);
  document.body.addEventListener('click', showNextPanel);
});
