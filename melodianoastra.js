// melodianoastra.js (Versiune Corectată cu 'timeupdate')

// Intervalul de schimbare a pozei (5000ms = 5 secunde)
const SLIDE_INTERVAL = 5000; 

// --- LISTA DE VERSURI SINCRONIZATE (48 DE MESAJE) ---
// Completează mesajele de mai jos!
const synchronizedLyrics = [
    [0.5, "Aceasta este melodia noastră"],
    [5.0, "Mereu cand o ascult imi aminteste de tine"],
    [10.0, "Te iubesc mai mult decat pe KFC"],
    [15.0, "Si mai mult decat mersul la sala"],
    [20.0, "Esti atat de frumoasa"],
    [25.0, "Uneori nici nu-mi pot ascunde sentimentele"],
    [30.0, "Ma faci sa ma simt atat de fericit"],
    [35.0, "Te-as tine in brate toata viata"],
    [40.0, "Si te-as atinge non stop"],
    [45.0, "Si te-as pupa pe obrajorii tai minunati"],
    [50.0, "Aici eram prea imbracati"],
    [55.0, "Iar aici am primit un pupic inainte sa cad"],
    [60.0, "Happy couple (ti-am dat geaca mea)"],
    [65.0, "Cuplul superb la ski"],
    [70.0, "Un trandafir pentru iubirea mea"],
    [75.0, "Damn that's hot"],
    [80.0, "Ce frumoasa estii"],
    [85.0, "Cum poti fi asa frumoasaa??"],
    [90.0, "Tu pictand inimioara noastra"],
    [95.0, "Eu ajutand cum pot"],
    [100.0, "Ce cute ne-a iesit"],
    [105.0, "Hot girl detected"],
    [110.0, "Too hot 4 me honestly"],
    [115.0, "Aici eram la inaltime"],
    [120.0, "Iar aici eram cuprins de iubire"],
    [125.0, "O plimbare romantica de seara"],
    [130.0, "Esti o printesa"],
    [135.0, "Eu veneam la liceu sa te pup"],
    [140.0, "Sefa mea de promoootieee"],
    [145.0, "Protejandu-mi iubita de ploaie"],
    [150.0, "I love youuu"],
    [155.0, "Frumoasa kati cu gigolo razvan"],
    [160.0, "Old money couple"],
    [165.0, "I hope that's KFC"],
    [170.0, "Aici ne lingeam"],
    [175.0, "Ma topesc cand zambesti"],
    [180.0, "Photograph"],
    [185.0, "Huski time"],
    [190.0, "Restaurant luxos time"],
    [195.0, "2 pisicute"],
    [200.0, "Cuplul in calatorie"],
    [205.0, "Craciun Igen"],
    [210.0, "Ce draguuti"],
    [215.0, "Inimioara"],
    [220.0, "Hot couple"],
    [225.0, "Untolder couple"],
    [230.0, "Tallest couple"],
    [235.0, "Un pupic la inaltime"],
    [240.0, "Sfârșit! Te iubesc enorm!❤️"] 
];
// --- SFÂRȘIT LISTA DE VERSURI ---

const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');
const lyricsText = document.getElementById('lyrics-text');
let lyricIndex = 0;
// let lyricsIntervalId; // NU MAI AVEM NEVOIE DE ACESTA

// --- LOGICA SLIDESHOW ---
let slideIndex = 0;
let slideIntervalId; // Acesta rămâne pe setInterval
let availableSlides = []; 
let originalSlides = []; 

// Funcție care pregătește lista de poze pentru o nouă redare
function resetSlideshow() {
    originalSlides = Array.from(document.getElementsByClassName("mySlides"));
    originalSlides.forEach(slide => slide.style.display = "none");
    availableSlides = [...originalSlides]; 
    slideIndex = 0;
}

// Funcția care afișează următorul slide
function showNextSlide() {
    if (availableSlides.length === 0) {
        clearInterval(slideIntervalId);
        return;
    }
    const currentSlide = availableSlides.shift(); 
    originalSlides.forEach(slide => slide.style.display = "none");
    currentSlide.style.display = "block";  
    
    currentSlide.style.opacity = 0.4;
    setTimeout(() => {
        currentSlide.style.transition = 'opacity 1.5s ease-in-out';
        currentSlide.style.opacity = 1;
    }, 50);
}

// --- Inițializare ---
resetSlideshow(); 

// --- Funcții de Bază (Audio, Versuri și Slideshow Control) ---

// ** FUNCȚIE MODIFICATĂ: updateLyrics **
function updateLyrics() {
    const currentTime = audio.currentTime;

    // Folosim un 'while' loop. Acesta va "prinde din urmă" (catch up)
    // toate mesajele pe care le-a ratat dacă telefonul a fost lent.
    while (lyricIndex < synchronizedLyrics.length && currentTime >= synchronizedLyrics[lyricIndex][0]) {
        
        // Dacă am ajuns aici, înseamnă că *acesta* este mesajul care trebuie afișat.
        
        lyricsText.style.opacity = 0;
        
        // Setăm textul IMEDIAT (fără timeout)
        lyricsText.textContent = synchronizedLyrics[lyricIndex][1];
        
        // Facem fade-in (acesta e singurul timeout permis)
        setTimeout(() => {
            lyricsText.style.opacity = 1;
        }, 50); 
        
        // Incrementăm indexul PENTRU A CĂUTA URMĂTORUL MESAJ
        lyricIndex++; 
    }
}

// ** FUNCȚIE MODIFICATĂ: startPlayback **
function startPlayback() {
    if (audio.paused) {
        if (audio.ended) {
            audio.currentTime = 0;
            lyricIndex = 0;
            lyricsText.textContent = "Ascultă... și lasă cuvintele să apară!";
            resetSlideshow(); 
        }
        
        audio.play();
        playButton.textContent = "⏸️ Pauză";
        playButton.classList.add('playing');
        
        // PORNEȘTE SLIDESHOW-UL (pe setInterval)
        showNextSlide(); 
        slideIntervalId = setInterval(showNextSlide, SLIDE_INTERVAL); 
        
        // NU MAI PORNI 'lyricsIntervalId'
        // lyricsIntervalId = setInterval(updateLyrics, 100); 
        
    } else {
        audio.pause();
        playButton.textContent = "▶️ Continuă";
        playButton.classList.remove('playing');
        
        // OPREȘTE SLIDESHOW-UL
        clearInterval(slideIntervalId); 
        
        // NU MAI OPRIM 'lyricsIntervalId'
        // clearInterval(lyricsIntervalId);
    }
}

// --- Evenimente ---
playButton.addEventListener('click', startPlayback);

// ** EVENIMENT NOU: 'timeupdate' **
// Acesta înlocuiește vechiul setInterval(updateLyrics, 100)
audio.addEventListener('timeupdate', updateLyrics);

// Când melodia se termină (eventiment 'ended')
audio.addEventListener('ended', () => {
    clearInterval(slideIntervalId); 
    playButton.textContent = "▶️ Pornește Magia";
    playButton.classList.remove('playing');
    // Ultimul mesaj din listă va rămâne afișat, ceea ce e bine.
    lyricIndex = 0; // Se resetează pentru data viitoare
});

// --- Animație Inimioare (pe fundal) ---
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