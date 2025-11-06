// amintirivoce.js

// --- BAZA DE DATE PENTRU AMINTIRI CU VOCE ---
// Asigură-te că fișierele corespund (img/galerieX.jpg și audio/voceX.mp3)
const voiceMemories = [
    {
        id: 1,
        img: "img/galerie1.jpg",
        audio: "audio/voce1.mp3",
        text: "„Aici mi-am dat seama că te iubesc. Erai atât de fericită...”"
    },
    {
        id: 2,
        img: "img/galerie2.jpg",
        audio: "audio/voce2.mp3",
        text: "„Zâmbeai și am știut că nu mai vreau pe altcineva în viața mea.”"
    },
    {
        id: 3,
        img: "img/galerie3.jpg",
        audio: "audio/voce3.mp3",
        text: "„Prima noastră poză serioasă... sau cel puțin am încercat! 😂 Te ador.”"
    }
    // Adaugă mai multe obiecte aici pe măsură ce adaugi poze/audio
];

// --- Referințe DOM ---
const photoGrid = document.getElementById('photoGrid');
const lightbox = document.getElementById('galleryLightbox');
const lightboxPhoto = document.getElementById('lightboxPhoto');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxAudio = document.getElementById('lightboxAudio');
const closeBtn = document.getElementById('closeGallery');

// --- Funcții ---

// 1. Funcția de a crea galeria
function renderGallery() {
    voiceMemories.forEach(memory => {
        const thumb = document.createElement('div');
        thumb.classList.add('grid-thumbnail');
        // Setează imaginea de fundal a thumbnail-ului
        thumb.style.backgroundImage = `url(${memory.img})`;
        
        // Adaugă un overlay subtil (opțional, dar arată bine)
        const overlay = document.createElement('div');
        overlay.classList.add('thumb-overlay');
        overlay.innerHTML = '🔊';
        thumb.appendChild(overlay);

        // Adaugă evenimentul de click
        thumb.addEventListener('click', () => openMemory(memory));
        
        photoGrid.appendChild(thumb);
    });
}

// 2. Funcția de a deschide fereastra (lightbox)
function openMemory(memory) {
    // Setează conținutul ferestrei
    lightboxPhoto.src = memory.img;
    lightboxCaption.textContent = memory.text;
    lightboxAudio.src = memory.audio;
    
    // Redă sunetul
    lightboxAudio.currentTime = 0; // Resetează sunetul
    lightboxAudio.play();
    
    // Afișează fereastra
    lightbox.style.display = 'flex';
    setTimeout(() => lightbox.classList.add('visible'), 10);
}

// 3. Funcția de a închide fereastra
function closeMemory() {
    // Oprește sunetul! (Foarte important)
    lightboxAudio.pause();
    lightboxAudio.src = ""; // Golește sursa

    // Ascunde fereastra
    lightbox.classList.remove('visible');
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightboxPhoto.src = ""; // Golește sursa imaginii
    }, 300); // Așteaptă tranziția de fade-out
}

// --- Evenimente ---
closeBtn.addEventListener('click', closeMemory);

// Închide și dacă dă click pe fundalul negru
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeMemory();
    }
});

// --- Inițializare ---
renderGallery();