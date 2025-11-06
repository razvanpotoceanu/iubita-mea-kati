// baloane.js

// --- BAZA DE DATE PENTRU MESAJE (Motive de iubire) ---
// Asigură-te că ai cel puţin la fel de multe mesaje câți 'totalBalloons'
const balloonMessages = [
    "Pentru că ai cel mai luminos zâmbet.",
    "Pentru că mă faci să râd în hohote.",
    "Pentru că ești atât de inteligentă.",
    "Pentru că mă susții necondiționat.",
    "Pentru că ești cea mai bună prietenă a mea.",
    "Pentru că ai grijă de mine.",
    "Pentru că aventurile cu tine sunt cele mai frumoase.",
    "Pentru că mă faci să mă simt iubit.",
    "Pentru că ești pur și simplu TU.",
    "Pentru că viitorul cu tine sună perfect."
];

// --- Referințe DOM ---
const skyContainer = document.querySelector('.sky-container');
const modal = document.getElementById('messageModal');
const modalText = document.getElementById('modalText');
const closeModalBtn = document.getElementById('closeModal');
const finalMessage = document.getElementById('finalMessage');

// --- LOGICA NOUĂ: JOC FINIT ---
const totalBalloons = balloonMessages.length; // Numărul total de baloane = numărul de mesaje
let poppedBalloons = 0; // Contor pentru baloanele sparte

// --- Funcții ---

function createBalloon(index) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Asociază mesajul specific (nu mai e aleatoriu, ci pe rând)
    const message = balloonMessages[index];
    balloon.dataset.message = message;

    const colors = ['#ff6b81', '#f368e0', '#ff9ff3', '#00d2d3', '#feca57'];
    balloon.style.backgroundColor = colors[index % colors.length];
    
    balloon.style.left = `${Math.random() * 85 + 5}%`; 
    balloon.style.animationDuration = `${Math.random() * 10 + 10}s`; 

    skyContainer.appendChild(balloon);
    balloon.addEventListener('click', () => popBalloon(balloon));
}

function popBalloon(balloon) {
    // 1. Arată mesajul
    const message = balloon.dataset.message;
    showModal(message);

    // 2. Efect de "spargere" (CSS)
    balloon.classList.add('popped');
    
    // 3. Prevenim dublu-click pe un balon care se sparge
    balloon.style.pointerEvents = 'none'; 

    // 4. Înlătură balonul din DOM
    setTimeout(() => {
        balloon.remove();
        
        // 5. Actualizează contorul
        poppedBalloons++;
        
        // 6. Verifică dacă s-a terminat jocul
        checkWinCondition();
        
    }, 500); 
}

function checkWinCondition() {
    if (poppedBalloons === totalBalloons) {
        // Au fost sparte toate baloanele
        
        // Ascunde textul introductiv
        document.querySelector('.sky-container .title').style.display = 'none';
        document.querySelector('.sky-container .intro-text').style.display = 'none';
        
        // Arată mesajul final
        finalMessage.style.display = 'block';
    }
}

function showModal(message) {
    modalText.textContent = message;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('visible'), 10);
}

function hideModal() {
    modal.classList.remove('visible');
    setTimeout(() => modal.style.display = 'none', 300);
}

// --- Evenimente Modal ---
closeModalBtn.addEventListener('click', hideModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModal();
    }
});

// --- Inițializare ---
// Creează setul inițial de 10 baloane (sau câte sunt în array)
for (let i = 0; i < totalBalloons; i++) {
    createBalloon(i);
}