// mesajcuploaie.js
// (Acest cod este corect și nu trebuie schimbat)

const rainCanvas = document.getElementById('rain-canvas');
const rainDropCount = 100; 

function createRaindrop() {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');

    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.width = `${Math.random() * 2 + 1}px`; 
    drop.style.height = `${Math.random() * 20 + 10}px`; 
    drop.style.animationDuration = `${Math.random() * 1.5 + 1.5}s`; 
    drop.style.animationDelay = `${Math.random() * 5}s`; 

    rainCanvas.appendChild(drop);

    drop.addEventListener('animationend', () => {
        drop.remove();
        createRaindrop(); 
    });
}

for (let i = 0; i < rainDropCount; i++) {
    createRaindrop();
}