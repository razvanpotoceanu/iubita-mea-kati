const slider = document.getElementById("loveSlider");
const message = document.getElementById("loveMessage");
const heartsContainer = document.querySelector(".hearts");

// inițializare gradient
updateSliderBackground(slider.value);

slider.addEventListener("input", () => {
  const value = slider.value;

  // Mesaje la fiecare 20%
  if (value == 100) {
    message.textContent = "100%!! ❤️ Așa te iubesc și eu 🥰";
    spawnHearts(15);
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

  updateSliderBackground(value);
});

function updateSliderBackground(value){
  slider.style.background = `linear-gradient(to top, #ff6b81 ${value}%, #f368e0 ${value}%)`;
}

// spawn inimioare
function spawnHearts(num) {
  for (let i=0; i<num; i++){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random()*90 + "%";
    heart.style.fontSize = (12 + Math.random()*18) + "px";
    heart.textContent = "❤️";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}
