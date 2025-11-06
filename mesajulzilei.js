// mesajulzilei.js

// Lista de motive (30 de mesaje - poți adăuga până la 365!)
const motiveDeIubire = [
  "Azi te iubesc pentru că mă faci să zâmbesc chiar și când sunt supărat(ă).",
  "Azi te iubesc pentru că ești cel mai bun ascultător din lume.",
  "Azi te iubesc pentru că mă inspiri să fiu o persoană mai bună.",
  "Azi te iubesc pentru felul în care îmi ții mâna.",
  "Azi te iubesc pentru că gătești (sau încerci să gătești!) cel mai bine.",
  "Azi te iubesc pentru că mă susții în tot ce fac, oricât de nebunesc pare.",
  "Azi te iubesc pentru că îți amintești detalii mici despre mine.",
  "Azi te iubesc pentru că ești atât de ambițios/ambițioasă.",
  "Azi te iubesc pentru că simțul tău al umorului este perfect.",
  "Azi te iubesc pentru că mă faci să mă simt acasă oriunde suntem.",
  "Azi te iubesc pentru răbdarea pe care o ai cu mine.",
  "Azi te iubesc pentru că ești cel mai bun/cea mai bună partener(ă) de călătorie.",
  "Azi te iubesc pentru că ai mereu o soluție când am o problemă.",
  "Azi te iubesc pentru felul tău unic de a dansa.",
  "Azi te iubesc pentru că ești atât de bun(ă) cu prietenii și familia mea.",
  "Azi te iubesc pentru că îmi aduci mereu cafea (sau ceai) dimineața.",
  "Azi te iubesc pentru că mă înțelegi fără cuvinte.",
  "Azi te iubesc pentru că îți pasă atât de mult de ceilalți.",
  "Azi te iubesc pentru că ești alături de mine în fiecare moment greu.",
  "Azi te iubesc pentru energia ta pozitivă care mă încarcă.",
  "Azi te iubesc pentru că ești cel mai bun prieten al meu.",
  "Azi te iubesc pentru că nu ne plictisim niciodată împreună.",
  "Azi te iubesc pentru că mă lași să mă odihnesc când am nevoie.",
  "Azi te iubesc pentru că ești atât de sexy, chiar și în pijamale vechi.",
  "Azi te iubesc pentru felul în care îți organizezi lucrurile.",
  "Azi te iubesc pentru că mă provoci să gândesc diferit.",
  "Azi te iubesc pentru că ești visul meu devenit realitate.",
  "Azi te iubesc pentru că ai cel mai frumos zâmbet din lume.",
  "Azi te iubesc pentru că am găsit în tine tot ce căutam.",
  "Azi te iubesc pentru că... pur și simplu ești tu! 💖"
];

function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function displayMessage() {
    const today = new Date();
    const dayIndex = (getDayOfYear() - 1) % motiveDeIubire.length;
    
    // Formatarea datei
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('ro-RO', options);
    
    const messageText = motiveDeIubire[dayIndex];
    
    document.getElementById('data-text').textContent = `Data de azi: ${formattedDate}`;
    document.getElementById('message-text').textContent = messageText;
    
    // Efectul de fade-in
    const messageBox = document.getElementById('message-display');
    messageBox.style.opacity = 0;
    setTimeout(() => {
        messageBox.style.transition = 'opacity 1s ease-in';
        messageBox.style.opacity = 1;
    }, 100);
}

displayMessage();


// Logica pentru animația cu inimioare (aceeași ca la timpulcutine)
const heartsContainer = document.querySelector(".hearts");

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random()*5) + "s";
  heart.style.fontSize = (15 + Math.random()*25) + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000); 
}
setInterval(createFloatingHeart, 600);