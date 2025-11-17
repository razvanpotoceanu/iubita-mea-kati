// mesajeunice.js (Versiune Corectată)

// --- BAZA DE DATE PENTRU MESAJE ---
let secretMessages = [
    { id: 1, text: "Adevarul e ca de cand ai aparut, mi-ai luminat viata. Si daca tot ce am ar disparea, tot ce mi-as dori ar fi sa ramai doar tu, iubito.", read: false },
    { id: 2, text: "Atunci cand zambesti, simt cum ma cuprinde un val de iubire. E cel mai frumos lucru, esti cea mai frumoasa si minunata femeie.", read: false },
    { id: 3, text: "Esti visul meu devenit realitate, cel mai nebun si mai frumos vis.", read: false },
    { id: 4, text: "Ma inspiri sa fiu o persoana mai buna in fiecare zi. Esti cel mai bun model din viata mea. ", read: false },
    { id: 5, text: "Chiar si in tacere, prezenta ta imi umple sufletul de iubire.", read: false },
    { id: 6, text: "Oriunde am fi, tu pentru mine esti acasa. Te iubesc mai mult decat pot spune. ", read: false },
    { id: 7, text: "Mi-e foarte dor de tine mereu cand esti departe de mine, abia astept sa vina urmatoarea data in care ne vedem", read: false },
    { id: 8, text: "Iti multumesc pentru iubirea ta infinita si pentru dedicarea in relatia noastra. ", read: false },
    { id: 9, text: "Oricat de obosit as fi, tu imi dai mereu energie sa merg mai departe, fiindca am pentru ce sa lupt. ", read: false },
    { id: 10, text: "Tu esti totul meu, tu esti tot ce mi-am putut inchipui vreodata ca inseamna iubirea", read: false }
];

// --- Referințe DOM ---
const messageButtonsContainer = document.getElementById('messageButtons');
const messageDisplay = document.getElementById('messageDisplay');
const currentMessageText = document.getElementById('currentMessage');
const confirmReadButton = document.getElementById('confirmReadButton'); 
const finalRevealSection = document.getElementById('finalReveal');
const resetButton = document.getElementById('resetMessagesButton');

let currentMessageId = null; 

// --- Funcții ---

function saveMessagesState() {
    localStorage.setItem('secretMessagesState', JSON.stringify(secretMessages));
}

function loadMessagesState() {
    const savedState = localStorage.getItem('secretMessagesState');
    if (savedState) {
        secretMessages = JSON.parse(savedState);
    }
}

// Afișează butoanele (Mesaj #1, #2...)
function renderMessageButtons() {
    messageButtonsContainer.innerHTML = ''; // Curăță butoanele vechi

    // Verificăm dacă toate sunt citite ÎNAINTE de a randa
    const allRead = secretMessages.every(msg => msg.read);

    if (allRead) {
        // Dacă toate sunt citite, arată secțiunea finală și oprește-te
        finalRevealSection.style.display = 'block'; 
        messageButtonsContainer.style.display = 'none'; 
        document.querySelector('.intro-text').style.display = 'none';
        
        // Ascunde caseta de mesaj dacă era deschisă
        messageDisplay.classList.remove('fade-in');
        messageDisplay.classList.add('fade-out');
        confirmReadButton.style.display = 'none';
        
    } else {
        // Dacă NU sunt toate citite, arată butoanele
        finalRevealSection.style.display = 'none'; 
        messageButtonsContainer.style.display = 'flex'; 
        document.querySelector('.intro-text').style.display = 'block';

        // Randare butoane
        const sortedMessages = [...secretMessages].sort((a, b) => a.read - b.read);

        sortedMessages.forEach(msg => {
            const button = document.createElement('button');
            button.classList.add('message-button');
            button.textContent = `Mesajul #${msg.id}`;
            button.dataset.messageId = msg.id;

            if (msg.read) {
                button.classList.add('read'); // Butonul e gri
            } else {
                // Adăugăm event listener doar dacă nu e citit
                button.addEventListener('click', () => showMessage(msg.id));
            }
            messageButtonsContainer.appendChild(button);
        });
    }
}

// Funcție NOUĂ: Doar afișează mesajul și butonul "Am citit"
function showMessage(id) {
    const message = secretMessages.find(msg => msg.id === id);
    if (!message || message.read) return; 

    currentMessageId = id;

    // Afișează mesajul și butonul
    currentMessageText.textContent = message.text;
    messageDisplay.classList.remove('fade-out');
    messageDisplay.classList.add('fade-in');
    confirmReadButton.style.display = 'block'; // Arată butonul "Am citit"

    // Ascunde lista de butoane cât timp un mesaj e deschis (mai curat vizual)
    messageButtonsContainer.style.display = 'none';
}

// Funcție NOUĂ: Se execută la click pe "Am citit mesajul"
function confirmAndHideMessage() {
    if (currentMessageId === null) return; 

    const message = secretMessages.find(msg => msg.id === currentMessageId);
    if (!message) return;

    // 1. Marchează ca citit în listă
    message.read = true;
    saveMessagesState(); // Salvează starea

    // 2. Estompează caseta de mesaj și ascunde butonul
    messageDisplay.classList.remove('fade-in');
    messageDisplay.classList.add('fade-out');
    confirmReadButton.style.display = 'none'; 

    // 3. După ce dispare, golește textul și RE-RANDEAZĂ LISTA DE BUTOANE
    setTimeout(() => {
        currentMessageText.textContent = '';
        currentMessageId = null; // Resetează ID-ul curent
        
        // **MODIFICAREA CHEIE:**
        // Re-randăm butoanele. Această funcție va verifica automat 
        // dacă s-a terminat jocul (checkCompletion).
        renderMessageButtons();
        
    }, 500); // 500ms (durata animației 'fade-out' din CSS)
}

// Resetează toate mesajele (rămâne la fel)
function resetMessages() {
    secretMessages.forEach(msg => msg.read = false);
    saveMessagesState(); 
    renderMessageButtons(); // Re-randare butoane
}

// --- Evenimente ---
resetButton.addEventListener('click', resetMessages);
confirmReadButton.addEventListener('click', confirmAndHideMessage); 

// --- Inițializare ---
loadMessagesState(); 
renderMessageButtons(); // Acesta este singurul apel necesar la start

// --- Animație Inimioare (pe fundal) --- (Rămâne la fel)
const heartsContainer = document.querySelector(".hearts");
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💌"; 
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*5) + "s";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000); 
}
setInterval(createFloatingHeart, 700);