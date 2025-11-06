const startDate = new Date("2023-11-25T00:00:00");

// funcție helper pentru singular/plural
function pluralize(value, singular, plural) {
  return value === 1 ? singular : plural;
}

function updateTime() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  // Ajustări dacă sunt negative
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  // afișare cu singular/plural
  document.getElementById("years").textContent = `${years} ${pluralize(years, "an", "ani")}`;
  document.getElementById("months").textContent = `${months} ${pluralize(months, "lună", "luni")}`;
  document.getElementById("days").textContent = `${days} ${pluralize(days, "zi", "zile")}`;
  document.getElementById("hours").textContent = `${hours} ${pluralize(hours, "oră", "ore")}`;
  document.getElementById("minutes").textContent = `${minutes} ${pluralize(minutes, "minut", "minute")}`;
  document.getElementById("seconds").textContent = `${seconds} ${pluralize(seconds, "secundă", "secunde")}`;
}

setInterval(updateTime, 1000);
updateTime();

// ❤️ inimioare animate
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.fontSize = (15 + Math.random() * 25) + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);
