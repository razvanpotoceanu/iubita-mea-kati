// capsulatimpului.js

function checkUnlockStatus() {
    // Obține data curentă la miezul nopții (pentru a compara doar ziua)
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    const nowTimestamp = today.getTime(); // Data curentă în milisecunde

    const scrisori = document.querySelectorAll('.scrisoare');

    scrisori.forEach(scrisoare => {
        const unlockDateStr = scrisoare.getAttribute('data-unlock-date');
        const unlockDate = new Date(unlockDateStr);
        unlockDate.setHours(0, 0, 0, 0); // Setează și data de deblocare la miezul nopții
        
        const unlockTimestamp = unlockDate.getTime();
        
        const continut = scrisoare.querySelector('.continut');
        const statusText = scrisoare.querySelector('.status-text');

        if (nowTimestamp >= unlockTimestamp) {
            // DEBLOCAT: Data a trecut
            continut.classList.remove('blocat');
            continut.classList.add('deblocat');
            statusText.textContent = `Scrisoare deblocată pe: ${unlockDateStr} 🎉`;
            statusText.style.color = '#2ecc71'; // Verde
        } else {
            // BLOCAT: Data nu a sosit încă
            continut.classList.add('blocat');
            continut.classList.remove('deblocat');
            
            // Calculăm cât timp a mai rămas
            const diffMs = unlockTimestamp - nowTimestamp;
            const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)); // Zile rămase
            
            statusText.textContent = `Blocat - Se deblochează peste ${diffDays} zile (pe ${unlockDateStr})`;
            statusText.style.color = '#e74c3c'; // Roșu
        }
    });
}

// Rulează la încărcare
checkUnlockStatus();
// O poți rula și periodic dacă dorești, dar o dată la încărcare este suficient.


// Logica pentru animația cu inimioare (copiată din mesajulzilei.js/timpulcutine.js)
const heartsContainer = document.querySelector(".hearts");

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🕯️"; // Folosim o lumânare sau inimă ca simbol
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*5) + "s";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000); 
}
setInterval(createFloatingHeart, 600);