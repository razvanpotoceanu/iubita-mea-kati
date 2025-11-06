// canddor.js

// --- Referințe DOM ---
const dorButton = document.getElementById('dorButton');
const dorMessage = document.getElementById('dorMessage');
const dorSound = document.getElementById('dorSound');

let isPlaying = false; // Pentru a preveni apăsarea de mai multe ori

// --- Funcții ---

function playMessage() {
    // Dacă sunetul deja rulează, nu face nimic
    if (isPlaying) return; 

    isPlaying = true;
    
    // 1. Redă sunetul
    dorSound.currentTime = 0;
    dorSound.play();

    // 2. Afișează mesajul
    dorMessage.classList.add('visible');

    // 3. Dezactivează temporar butonul (pentru a preveni spam-ul)
    dorButton.disabled = true;
    dorButton.classList.add('disabled');

    // 4. Când sunetul s-a terminat, reactivează butonul
    dorSound.onended = () => {
        isPlaying = false;
        dorButton.disabled = false;
        dorButton.classList.remove('disabled');
        // Lăsăm mesajul vizibil
    };
}

// --- Evenimente ---
dorButton.addEventListener('click', playMessage);


// --- Animație Inimioare (pe fundal) ---
const heartsContainer = document.querySelector(".hearts");
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🌻"; // Folosim floarea soarelui
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*5) + "s";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000); 
}
setInterval(createFloatingHeart, 600);