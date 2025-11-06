// promisiune.js

const starsCanvas = document.getElementById('stars-canvas');
const starCount = 100; // Numărul de stele pe ecran

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Poziție aleatorie pe ecran
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    
    // Mărime aleatorie
    const size = `${Math.random() * 2 + 1}px`; // Între 1px și 3px
    star.style.width = size;
    star.style.height = size;
    
    // Animație și viteză aleatorii
    star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Între 2s și 5s
    star.style.animationDelay = `${Math.random() * 3}s`; // Întârziere

    starsCanvas.appendChild(star);
}

// Generează stelele
for (let i = 0; i < starCount; i++) {
    createStar();
}