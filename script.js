const panels = document.querySelectorAll('.comic-panel');
const audios = [];
const transcriptions = []; // <- textos que você preencherá manualmente

// === CONFIGURAÇÃO DOS AUDIOS E TEXTOS ===
for (let i = 1; i <= 21; i++) {
  audios.push(`audio/audio${i}.mp3`);
}

// Adicione aqui o texto que aparece junto de cada painel
transcriptions.push(
  "Beto se sente inseguro de fornecer um feedback à uma colega. Ele não sabe se Ana receberia bem um comentário sobre seu trabalho. Tem receio de parecer crítico demais ou causar desconforto.",
  "Após refletir sobre a importância do feedback para o desenvolvimento e o crescimento profissional, Beto decide fornecer um feedback à Ana. Beto utiliza um 1:1 e o módulo de “Feedback Contínuo” no CSP para reconhecer o trabalho executado por Ana e os comportamentos que mais se destacaram em um projeto que trabalharam juntos, além de destacar algumas oportunidades de melhoria que observou:",
  "Ana, sua dedicação e colaboração neste projeto fizeram toda a diferença. Sua abordagem colaborativa é inspiradora.",
  "Você demonstrou um cuidado genuíno em incluir e ouvir todos nas suas construções. E, mesmo diante de momentos desafiadores, manteve uma atitude leve, positiva e uma escuta ativa.",
  "Sua atuação foi um exemplo dos nossos comportamentos-chave 'Diálogo aberto e transparente' e 'Sentimento de Dono'. Obrigado pela parceria e comprometimento!",
  "Tenho observado o quanto você é cuidadosa ao analisar cenários antes de tomar decisões, o que demonstra responsabilidade e comprometimento com a qualidade do trabalho. Algo que pode fortalecer ainda mais sua atuação é explorar formas de ganhar mais agilidade em situações que exigem respostas rápidas. Isso pode ajudar a manter o ritmo das entregas e facilitar a adaptação em contextos mais dinâmicos.",
  "Texto 7 aqui...",
  "Texto 8 aqui...",
  "Texto 9 aqui...",
  "Texto 10 aqui...",
  "Texto 11 aqui...",
  "Texto 12 aqui...",
  "Texto 13 aqui...",
  "Texto 14 aqui...",
  "Texto 15 aqui...",
  "Texto 16 aqui...",
  "Texto 17 aqui...",
  "Texto 18 aqui...",
  "Texto 19 aqui...",
  "Texto 20 aqui...",
  "Texto 21 aqui..."
);

let currentIndex = 0;
let currentAudio = null;

// === CRIA O BOX DE TEXTO (UMA VEZ) ===
const textBox = document.createElement('div');
textBox.id = 'text-box';
textBox.style.position = 'fixed';
textBox.style.bottom = '5%';
textBox.style.right = '5%';
textBox.style.maxWidth = '40%';
textBox.style.background = 'rgba(255, 255, 255, 0.9)';
textBox.style.border = '2px solid #ccc';
textBox.style.borderRadius = '12px';
textBox.style.padding = '16px';
textBox.style.fontSize = 'clamp(18px, 2vw, 20px)';
textBox.style.lineHeight = '1.4';
textBox.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
textBox.style.opacity = '0';
textBox.style.transition = 'opacity 0.5s ease';
document.body.appendChild(textBox);

// === FUNÇÃO PRINCIPAL ===
function showNextPanel() {
  if (currentIndex >= panels.length) return;

  const panel = panels[currentIndex];
  panel.style.opacity = '1';
  panel.style.transform = 'translateX(0)';
  panel.style.pointerEvents = 'auto';
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });

  playAudioAndShowText(currentIndex);

  currentIndex++;
}

// === FUNÇÃO AUXILIAR PARA ÁUDIO E TEXTO ===
function playAudioAndShowText(index) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(audios[index]);
  currentAudio.play();

  // Exibe o texto
  textBox.textContent = transcriptions[index] || "";
  textBox.style.opacity = '1'
  textBox.style.color = '#000000';;
}

// === PERMITIR CLIQUE EM PAINÉIS ANTIGOS ===
panels.forEach((panel, index) => {
  panel.addEventListener('click', (event) => {
    event.stopPropagation(); // evita conflito com o clique geral
    playAudioAndShowText(index);
  });
});

// === CONTROLE DE CLIQUE GERAL ===
document.body.addEventListener('click', function handleFirstClick() {
  showNextPanel();
  document.body.removeEventListener('click', handleFirstClick);
  document.body.addEventListener('click', showNextPanel);
});
