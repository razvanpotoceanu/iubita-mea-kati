// puzzlefoto.js

// --- Configurare Puzzle ---
const IMAGE_SRC = 'img/poza_puzzle.jpg'; 
const ROWS = 3; 
const COLS = 3;
const TOTAL_PIECES = ROWS * COLS;

// --- Referințe DOM ---
const gridContainer = document.getElementById('puzzle-grid');
const piecesContainer = document.getElementById('puzzle-pieces-container');
const winMessage = document.getElementById('win-message');

let draggedPiece = null; // Piesa trasă în prezent

// --- Funcții de Inițializare ---

function createPuzzle() {
    gridContainer.innerHTML = '';
    piecesContainer.innerHTML = '';
    
    let pieceOrder = Array.from({length: TOTAL_PIECES}, (_, i) => i);
    shuffleArray(pieceOrder);
    
    gridContainer.style.gridTemplateColumns = `repeat(${COLS}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;

    for (let i = 0; i < TOTAL_PIECES; i++) {
        // --- Creează Piesa (din lista amestecată) ---
        const pieceId = pieceOrder[i];
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.setAttribute('draggable', true);
        piece.dataset.pieceId = pieceId; 

        setPieceBackground(piece, pieceId);
        piecesContainer.appendChild(piece); // Toate piesele încep în containerul de piese

        // --- Creează Slotul Țintă (în ordine) ---
        const slot = document.createElement('div');
        slot.classList.add('puzzle-slot');
        slot.dataset.slotId = i; // ID-ul slotului (0-8)
        gridContainer.appendChild(slot);
    }

    addDragDropListeners(); // Adaugă evenimentele
}

// Funcție pentru setarea fundalului piesei (rămâne la fel)
function setPieceBackground(piece, id) {
    const pieceWidthPercent = 100 / (COLS - 1); 
    const pieceHeightPercent = 100 / (ROWS - 1);
    
    const bgX = (id % COLS) * pieceWidthPercent;
    const bgY = Math.floor(id / COLS) * pieceHeightPercent;
    
    piece.style.backgroundImage = `url(${IMAGE_SRC})`;
    piece.style.backgroundSize = `${COLS * 100}% ${ROWS * 100}%`;
    piece.style.backgroundPosition = `${bgX}% ${bgY}%`;
}


// --- LOGICĂ DRAG & DROP (MODIFICATĂ PENTRU SWAP) ---

function addDragDropListeners() {
    
    // 1. Evenimentul DRAG START (se aplică oricărei piese, oriunde s-ar afla)
    // Folosim delegare pe document pentru a prinde piesele mutate dinamic
    document.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('puzzle-piece')) {
            draggedPiece = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        }
    });

    // 2. Evenimentul DRAG END (curățare)
    document.addEventListener('dragend', (e) => {
        if (draggedPiece) {
            draggedPiece.classList.remove('dragging');
        }
        draggedPiece = null;
    });

    // 3. Evenimente pentru ȚINTE (Sloturile din Grilă și Containerul de Piese)
    const dropTargets = document.querySelectorAll('.puzzle-slot, .puzzle-pieces-container');

    dropTargets.forEach(target => {
        
        target.addEventListener('dragover', (e) => {
            e.preventDefault(); // Permite drop
            // Adaugă un indiciu vizual doar dacă nu tragi piesa peste ea însăși
            if (target !== draggedPiece) {
                target.classList.add('drag-over');
            }
        });

        target.addEventListener('dragleave', () => {
            target.classList.remove('drag-over');
        });

        target.addEventListener('drop', (e) => {
            e.preventDefault();
            target.classList.remove('drag-over');

            if (!draggedPiece || target === draggedPiece) return;

            const originContainer = draggedPiece.parentNode; // De unde vine piesa (un slot sau cutia)

            // CAZ 1: Ținta este CONTAINERUL DE PIESE (mutăm piesa înapoi jos)
            if (target.id === 'puzzle-pieces-container') {
                target.appendChild(draggedPiece);
                checkWinCondition(); // Verificăm (probabil nu e win, dar e bine să verificăm)
                return;
            }

            // CAZ 2: Ținta este un SLOT DIN GRILĂ (.puzzle-slot)
            if (target.classList.contains('puzzle-slot')) {
                // Verificăm dacă slotul este deja ocupat (LOGICA DE SWAP)
                if (target.hasChildNodes()) {
                    const existingPiece = target.firstChild;
                    
                    // Mută piesa existentă în locația de origine a piesei trase
                    originContainer.appendChild(existingPiece);
                    
                    // Mută piesa trasă în slotul țintă
                    target.appendChild(draggedPiece);
                } else {
                    // Slotul este gol, pur și simplu plasăm piesa
                    target.appendChild(draggedPiece);
                }
                
                checkWinCondition(); // Verificăm dacă am câștigat după fiecare mutare în grilă
            }
        });
    });
}


// --- Logică Joc (Rămâne la fel) ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function checkWinCondition() {
    const slots = gridContainer.children;
    
    // Verificăm dacă TOATE sloturile sunt pline
    if (Array.from(slots).some(slot => !slot.hasChildNodes())) {
        return; // Nu toate sloturile sunt pline, nu putem câștiga
    }

    let isWin = true;
    for (let i = 0; i < TOTAL_PIECES; i++) {
        const slot = slots[i];
        const piece = slot.firstChild;
        
        // Comparam ID-ul original al piesei (dataset.pieceId) 
        // cu ID-ul slotului în care se află (dataset.slotId)
        if (piece.dataset.pieceId !== slot.dataset.slotId) {
            isWin = false; 
            break;
        }
    }

    if (isWin) {
        winMessage.style.display = 'block';
        gridContainer.style.display = 'none'; 
        piecesContainer.style.display = 'none'; 
        document.querySelector('.puzzle-container .intro-text').style.display = 'none';
    }
}


// --- Pornire ---
createPuzzle();

// --- Animație Inimioare (Rămâne la fel) ---
const heartsContainer = document.querySelector(".hearts");
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🧩"; 
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*5) + "s";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000); 
}
setInterval(createFloatingHeart, 700);