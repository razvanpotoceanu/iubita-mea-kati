// countdown.js (Versiune Dinamică)

// --- SETĂRI DE BAZĂ (NU MAI AVEM NEVOIE DE O DATĂ ȚINTĂ FIXĂ) ---
const ANNIVERSARY_DAY = 25; // Ziua aniversării
const ANNIVERSARY_MONTH = 10; // 10 = Noiembrie (deoarece lunile în JS sunt 0-11)
const START_YEAR = 2023; // Anul în care a început relația

// --- Referințe DOM ---
const daysLeftElement = document.getElementById('daysLeft');
const introElement = document.querySelector('.timer-intro');
const outroElement = document.querySelector('.timer-outro');
const targetDataElement = document.querySelector('.data-tinta');

// --- Funcție de Calcul Dinamic ---
function calculateDynamicCountdown() {
    
    const today = new Date();
    // Setăm ora la 0 pentru o comparație corectă a zilelor
    today.setHours(0, 0, 0, 0); 
    
    const currentYear = today.getFullYear();
    
    // 1. Verificăm care este anul următoarei aniversări
    let targetAnniversaryYear;
    
    // Creăm data aniversării pentru anul curent
    const thisYearsAnniversary = new Date(currentYear, ANNIVERSARY_MONTH, ANNIVERSARY_DAY);
    
    if (today > thisYearsAnniversary) {
        // Dacă aniversarea de anul acesta A TRECUT (ex: e Decembrie 2025)
        // țintim aniversarea de anul viitor (2026).
        targetAnniversaryYear = currentYear + 1;
    } else {
        // Dacă aniversarea de anul acesta NU A TRECUT (ex: e 6 Noiembrie 2025)
        // țintim aniversarea de anul acesta (25 Noiembrie 2025).
        targetAnniversaryYear = currentYear;
    }

    // 2. Setăm data țintă finală
    const targetDate = new Date(targetAnniversaryYear, ANNIVERSARY_MONTH, ANNIVERSARY_DAY);
    
    // 3. Calculăm ce aniversare este (ex: 2025 - 2023 = 2 ani)
    const anniversaryNumber = targetAnniversaryYear - START_YEAR;

    // 4. Calculăm diferența de zile
    const diffTime = targetDate - today;
    // Folosim Math.ceil() pentru a rotunji în sus (dacă e ora 23:00, tot zice "1 zi rămasă")
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // --- Afișare ---
    
    if (diffDays > 0) {
        // Cazul normal: încă așteptăm
        daysLeftElement.textContent = diffDays;
        introElement.textContent = "Au mai rămas:";
        outroElement.textContent = `zile până facem ${anniversaryNumber} ani împreună! 💫`;
        targetDataElement.textContent = `(${ANNIVERSARY_DAY} Noiembrie ${targetAnniversaryYear})`;
    } else if (diffDays === 0) {
        // Cazul special: Este chiar ziua respectivă
        daysLeftElement.textContent = "AZI! 🎉";
        introElement.textContent = "Sărbătorim:";
        outroElement.textContent = `${anniversaryNumber} ani împreună! La mulți ani, iubire! 💫`;
        targetDataElement.textContent = `(${ANNIVERSARY_DAY} Noiembrie ${targetAnniversaryYear})`;
    } 
    // Nu mai avem nevoie de cazul "else" (data a trecut), deoarece
    // logica va sări automat la anul următor.
}

// Rulează funcția la încărcarea paginii
calculateDynamicCountdown();

// --- Animație Inimioare (pe fundal) ---
const heartsContainer = document.querySelector(".hearts");
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "⏳"; // Folosim emoji-ul specific
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*5) + "s";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000); 
}
setInterval(createFloatingHeart, 600);