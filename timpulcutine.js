// timpulcutine.js
// !!! MODIFICĂ ACEASTĂ DATĂ cu data voastră !!!
const startDate = new Date("2023-11-25T00:00:00"); 

function pluralize(value, singular, plural) {
  return value === 1 ? singular : plural;
}

function updateTime() {
  const now = new Date();
  const diff = now - startDate; // Diferența totală în milisecunde

  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;

  // Calcul exact pentru secunde, minute, ore
  let totalSeconds = Math.floor(diff / msInSecond);
  let seconds = totalSeconds % 60;
  let totalMinutes = Math.floor(totalSeconds / 60);
  let minutes = totalMinutes % 60;
  let totalHours = Math.floor(totalMinutes / 60);
  let hours = totalHours % 24;
  let totalDays = Math.floor(totalHours / 24);
  
  // Calcul estimativ pentru ani, luni și zile (bazat pe medii)
  let years = Math.floor(totalDays / 365.25); 
  let daysRemainder = totalDays % 365.25;
  let months = Math.floor(daysRemainder / 30.4375); // Zile medii într-o lună
  let days = Math.floor(daysRemainder % 30.4375);
  
  // Afișare
  if (totalDays > 0) {
    document.getElementById("years").textContent = `${years} ${pluralize(years,"an","ani")}`;
    document.getElementById("months").textContent = `${months} ${pluralize(months,"lună","luni")}`;
    document.getElementById("days").textContent = `${days} ${pluralize(days,"zi","zile")}`;
  } else {
    document.getElementById("years").textContent = '';
    document.getElementById("months").textContent = '';
    document.getElementById("days").textContent = '';
  }

  document.getElementById("hours").textContent = `${hours} ${pluralize(hours,"oră","ore")}`;
  document.getElementById("minutes").textContent = `${minutes} ${pluralize(minutes,"minut","minute")}`;
  document.getElementById("seconds").textContent = `${seconds} ${pluralize(seconds,"secundă","secunde")}`;
}

setInterval(updateTime, 1000);
updateTime(); // Rulează o dată imediat la încărcare

// Animația cu inimioare pentru pagina Timpul cu Tine
const heartsContainerTimpCuTine = document.querySelector("body.timpulcutine .hearts");
if (heartsContainerTimpCuTine) { // Asigură-te că containerul există
  function createHeartTimpCuTine() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random()*4) + "s";
    heart.style.fontSize = (15 + Math.random()*25) + "px";
    heartsContainerTimpCuTine.appendChild(heart);
    setTimeout(() => heart.remove(), 6000); // Șterge inima după 6 secunde
  }
  setInterval(createHeartTimpCuTine, 400); // Creează o inimă la fiecare 400ms
}