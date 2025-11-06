// bataiinimii.js

// --- Referințe DOM ---
const touchArea = document.getElementById('touchArea');
const heartIcon = document.getElementById('heartIcon');
const heartMessage = document.getElementById('heartMessage');
const touchInstruction = document.getElementById('touchInstruction');

let vibrationInterval = null; // Stocăm intervalul de vibrație

// --- Funcții ---

// Funcția pentru a porni efectele
function startHeartbeat() {
    // 1. Adaugă clasa de pulsare inimii
    heartIcon.classList.add('pulsing');
    
    // 2. Afișează mesajul
    heartMessage.classList.add('visible');
    
    // 3. Ascunde instrucțiunea
    touchInstruction.style.display = 'none';

    // 4. Pornește vibrația (dacă este suportată)
    if (window.navigator && window.navigator.vibrate) {
        // O secvență de puls: vibrează 200ms, pauză 100ms, vibrează 200ms, pauză 500ms
        // Se repetă la infinit cât timp ține degetul
        vibrationInterval = setInterval(() => {
            window.navigator.vibrate([200, 100, 200]); 
        }, 1000); // Se repetă ciclul la fiecare secundă
    }
}

// Funcția pentru a opri efectele
function stopHeartbeat() {
    // 1. Oprește animația de pulsare
    heartIcon.classList.remove('pulsing');
    
    // 2. Ascunde mesajul
    heartMessage.classList.remove('visible');
    
    // 3. Afișează instrucțiunea la loc
    touchInstruction.style.display = 'block';

    // 4. Oprește vibrația
    if (vibrationInterval) {
        clearInterval(vibrationInterval);
        vibrationInterval = null;
    }
    // Oprește orice vibrație rămasă
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(0); 
    }
}

// --- Evenimente ---

// Folosim 'touchstart' pentru mobil (reacționează instant)
touchArea.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Previne comportamentul implicit al browserului (ex: scroll)
    startHeartbeat();
});

// Folosim 'touchend' pentru a detecta când ridică degetul
touchArea.addEventListener('touchend', (e) => {
    e.preventDefault();
    stopHeartbeat();
});

// Adăugăm și evenimente pentru MOUSE (pentru testare pe PC)
touchArea.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startHeartbeat();
});

touchArea.addEventListener('mouseup', (e) => {
    e.preventDefault();
    stopHeartbeat();
});

// Oprește și dacă mouse-ul iese din zonă în timp ce e apăsat
touchArea.addEventListener('mouseleave', (e) => {
    // Verificăm dacă un interval de vibrație este activ (adică dacă era apăsat)
    if (vibrationInterval) {
        e.preventDefault();
        stopHeartbeat();
    }
});