// pupicmagic.js

// --- Referințe DOM ---
const kissButton = document.getElementById('kissButton');
const kissMessage = document.getElementById('kissMessage');
const kissSound = document.getElementById('kissSound');
const particleContainer = document.getElementById('particle-container');

// --- Funcții ---

function playKissEffect() {
    // 1. Redă sunetul
    // Resetăm sunetul la început dacă a mai fost redat
    kissSound.currentTime = 0;
    kissSound.play();

    // 2. Afișează mesajul cu un efect de fade-in
    kissMessage.style.display = 'block';
    setTimeout(() => {
        kissMessage.classList.add('visible');
    }, 10); // Mică întârziere pentru a permite afișarea

    // 3. Generează "explozia" de particule
    createParticles();
    
    // 4. Ascunde mesajul după câteva secunde
    setTimeout(() => {
        kissMessage.classList.remove('visible');
        setTimeout(() => {
            kissMessage.style.display = 'none';
        }, 500); // Așteaptă finalizarea tranziției de fade-out
    }, 4000); // Mesajul stă vizibil 4 secunde
}

function createParticles() {
    const particleCount = 30; // Numărul de inimioare/pupici
    const emojis = ['❤️', '💋', '😘', '💖'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Alege un emoji aleatoriu
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Poziția inițială (în jurul butonului)
        particle.style.left = `${Math.random() * 40 + 30}%`; // Orizontal (30% - 70%)
        particle.style.top = `${Math.random() * 20 + 40}%`; // Vertical (40% - 60%)

        // Proprietăți aleatorii pentru animație (direcție și viteză)
        const xDir = (Math.random() - 0.5) * 300; // Mișcare X
        const yDir = (Math.random() - 0.5) * 300; // Mișcare Y
        const rotation = (Math.random() - 0.5) * 720; // Rotație

        // Aplică animația folosind variabile CSS
        particle.style.setProperty('--x-dir', `${xDir}px`);
        particle.style.setProperty('--y-dir', `${yDir}px`);
        particle.style.setProperty('--rotation', `${rotation}deg`);

        particleContainer.appendChild(particle);

        // Înlătură particula din DOM după ce animația s-a terminat (2 secunde)
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

// --- Evenimente ---
kissButton.addEventListener('click', playKissEffect);