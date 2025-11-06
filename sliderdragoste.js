// sliderdragoste.js
const slider = document.getElementById('loveSlider');
const message = document.getElementById('loveMessage');
// Selectăm containerul de inimioare și îi dăm o clasă suplimentară pentru a-l stiliza diferit
const heartsContainer = document.querySelector('.hearts');
heartsContainer.classList.add('slider-hearts'); // Adăugăm o clasă pentru stilizare specifică

slider.addEventListener('input', () => {
  const value = slider.value;

  // Actualizează mesajul în funcție de valoare
  if (value == 100) {
    message.textContent = "100%!! ❤️ Așa te iubesc și eu 🥰";
    spawnHearts(15); // Generează multe inimioare
  } else if (value >= 80) {
    message.textContent = "80% 😍 Uau, ce iubire mare!";
    spawnHearts(5);
  } else if (value >= 60) {
    message.textContent = "60% 😘 Îmi place mult!";
  } else if (value >= 40) {
    message.textContent = "40% 🙂 Ha-ha, încă mai crește...";
  } else if (value >= 20) {
    message.textContent = "20% 😅 Hmm, mai mult te rog!";
  } else {
    message.textContent = "0% 😭 Serios acum?";
  }

  // Actualizează fundalul sliderului (partea colorată)
  slider.style.background = `linear-gradient(to top, #ff6b81 ${value}%, #f368e0 ${value}%)`;
});

// FUNCTIA MODIFICATA PENTRU A PUNE INIMIOARELE ALEATOR IN JURUL MESAJULUI
function spawnHearts(num){
  const messageRect = message.getBoundingClientRect(); // Obține poziția mesajului
  const sliderRect = slider.getBoundingClientRect(); // Obține poziția sliderului
  const containerRect = heartsContainer.getBoundingClientRect();

  for(let i=0;i<num;i++){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = "❤️";
    
    // Poziționează inimioarele în jurul mesajului și sliderului
    // Generează poziții X și Y relative la containerul de inimioare
    const randomX = Math.random() * (window.innerWidth - 60) + 30; // 30px buffer de la margini
    const randomY = Math.random() * (window.innerHeight - 100) + 50; // 50px buffer de la margini
    
    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;
    heart.style.fontSize = (12 + Math.random()*18) + "px"; // Dimensiune aleatorie

    // NU MAI SETAM animationDuration AICI, CI FOLOSIM CEA DIN CSS
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 1500); // Inima dispare după 1.5s
  }
}