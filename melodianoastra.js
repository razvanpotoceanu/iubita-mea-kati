// melodianoastra.js

// Intervalul de schimbare a pozei (5000ms = 5 secunde)
const SLIDE_INTERVAL = 5000; 

// Lista de versuri sincronizate (Ajustează timpii dacă e necesar!)
const synchronizedLyrics = [
    [0.5, "Acesta este momentul nostru..."],
    [10.0, "Pune-ți mâna pe inima mea..."],
    [20.0, "Simți același ritm? E ritmul iubirii."],
    [35.0, "🎶 (Începe refrenul)"],
    [50.0, "Îți aduci aminte unde eram când am ascultat-o prima dată?"],
    [65.0, "Tu ești melodia vieții mele. ❤️"],
    [240.0, "Sfârșit! Apasă din nou pentru a repeta."] 
];

const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');
const lyricsText = document.getElementById('lyrics-text');
let lyricIndex = 0;
let lyricsIntervalId;


// --- LOGICA SLIDESHOW (ACTUALIZATĂ PENTRU SINCRONIZARE) ---
let slideIndex = 0;
let slideIntervalId;
let availableSlides = []; 
let originalSlides = []; // Păstrăm referința la toate elementele img originale

// Funcție utilitară pentru amestecare (folosită la reset)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Funcție care pregătește lista de poze pentru o nouă redare
function resetSlideshow() {
    // La resetare, găsim toate elementele .mySlides din HTML
    originalSlides = Array.from(document.getElementsByClassName("mySlides"));
    
    // Inițial, le facem pe toate invizibile
    originalSlides.forEach(slide => slide.style.display = "none");
    
    // Copiem lista și o amestecăm pentru a începe ciclul
    availableSlides = [...originalSlides];    
    slideIndex = 0;
}

// Funcția care afișează următorul slide și îl scoate din listă
function showNextSlide() {
    if (availableSlides.length === 0) {
        clearInterval(slideIntervalId);
        return;
    }

    // Scoate prima poză din listă (nu se va repeta)
    const currentSlide = availableSlides.shift(); 
    
    // Ascunde toate slide-urile (pentru curățenie vizuală)
    originalSlides.forEach(slide => slide.style.display = "none");
    
    // Afișează slide-ul curent
    currentSlide.style.display = "block";  
    
    // Aplică efectul de fade
    currentSlide.style.opacity = 0.4;
    setTimeout(() => {
        currentSlide.style.transition = 'opacity 1.5s ease-in-out';
        currentSlide.style.opacity = 1;
    }, 50);
}


// --- Inițializare (Se rulează o dată la încărcarea paginii) ---
resetSlideshow(); // Pregătește lista de poze dar NU pornește intervalul încă


// --- Funcții de Bază (Audio, Versuri și Slideshow Control) ---

function updateLyrics() {
    const currentTime = audio.currentTime;
    
    if (lyricIndex < synchronizedLyrics.length && currentTime >= synchronizedLyrics[lyricIndex][0]) {
        lyricsText.style.opacity = 0;
        
        setTimeout(() => {
            lyricsText.textContent = synchronizedLyrics[lyricIndex][1];
            lyricsText.style.opacity = 1;
            lyricIndex++;
        }, 300); 
    }

    if (audio.ended) {
        clearInterval(lyricsIntervalId);
        clearInterval(slideIntervalId); // Oprim slideshow-ul la finalul melodiei
        playButton.textContent = "▶️ Pornește Magia";
        playButton.classList.remove('playing');
        lyricsText.textContent = "Melodia s-a terminat. Toate pozele au fost afișate! ❤️";
        lyricIndex = 0;
        // Nu resetăm aici. Resetarea se face doar la următoarea pornire.
    }
}

function startPlayback() {
    if (audio.paused) {
        if (audio.ended) {
            // Resetare completă la re-pornire
            audio.currentTime = 0;
            lyricIndex = 0;
            lyricsText.textContent = "Ascultă... și lasă cuvintele să apară!";
            resetSlideshow(); // <-- Resetăm lista de poze aici
        }
        
        audio.play();
        playButton.textContent = "⏸️ Pauză";
        playButton.classList.add('playing');
        
        // PORNEȘTE SLIDESHOW-UL ȘI VERSIFICAREA
        showNextSlide(); // Arată imediat prima poză (sau următoarea dacă era în pauză)
        slideIntervalId = setInterval(showNextSlide, SLIDE_INTERVAL); // Continuă schimbarea la interval
        lyricsIntervalId = setInterval(updateLyrics, 100); 
    } else {
        audio.pause();
        playButton.textContent = "▶️ Continuă";
        playButton.classList.remove('playing');
        
        // OPREȘTE SLIDESHOW-UL ȘI VERSIFICAREA LA PAUZĂ
        clearInterval(lyricsIntervalId);
        clearInterval(slideIntervalId); 
    }
}

// --- Eveniment ---
playButton.addEventListener('click', startPlayback);


// --- Animație Inimioare (pe fundal) ---
// (Rămâne neschimbată și rulează independent de melodie)

const heartsContainer = document.querySelector(".hearts");

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🎵"; 
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*5) + "s";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000); 
}
setInterval(createFloatingHeart, 500);