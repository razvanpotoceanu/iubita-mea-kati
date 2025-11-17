// amintiriaprind.js

// --- BAZA DE DATE PENTRU AMINTIRI ---
// Trebuie să avem 10 intrări aici, corespondente cu HTML-ul
const memories = {
    "1": {
        image: "img/amintire1.jpg", 
        text: "Primul KFC nu se uita niciodata❤️"
    },
    "2": {
        image: "img/amintire2.jpg", 
        text: "Cand ne-am facut tatuaje la Untold.😂"
    },
    "3": {
        image: "img/amintire3.jpg", 
        text: "Cand am luat pranzul in parcul de langa Turnul Eiffel. Tu ai mancat minunatul Acai Bowl 🥰"
    },
    "4": {
        image: "img/amintire4.jpg", 
        text: "Achizitie Barcelona, pacat ca nu ne-au lasat in aeroport cu ea."
    },
    "5": {
        image: "img/amintire5.jpg", 
        text: "Cea mai scumpa poza, la restaurantul de lux."
    },
    "6": {
        image: "img/amintire6.jpg", 
        text: "The chosen one."
    },
    "7": {
        image: "img/amintire7.jpg", 
        text: "Cipru's baddies."
    },
    "8": {
        image: "img/amintire8.jpg", 
        text: "Turul UMFST❤️"
    },
    "9": {
        image: "img/amintire9.jpg", 
        text: "Sefa mea de promotie xoxo.❤️❤️❤️"
    },
    "10": {
        image: "img/amintire10.jpg", 
        text: "Prima oara la patinoar impreuna.❤️"
    }
};

// --- Referințe DOM ---
const sparks = document.querySelectorAll('.spark');
const lightbox = document.getElementById('memoryLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxText = document.getElementById('lightboxText');
const closeBtn = document.getElementById('closeMemory');

// --- Funcții ---

function showMemory(memoryId) {
    const memoryData = memories[memoryId];
    
    if (memoryData) {
        lightboxImg.src = memoryData.image;
        lightboxText.textContent = memoryData.text;
        
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.classList.add('visible');
        }, 10);
    } else {
        // Asta se întâmplă dacă lipsește o definiție (ex: ai spark 11, dar nu e în JS)
        console.error("Nu am găsit date pentru amintirea cu ID-ul:", memoryId);
    }
}

function hideMemory() {
    lightbox.classList.remove('visible');
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightboxImg.src = ""; 
    }, 300); 
}

// --- Evenimente ---

sparks.forEach(spark => {
    spark.addEventListener('click', () => {
        const memoryId = spark.dataset.memoryId;
        showMemory(memoryId);
    });
});

closeBtn.addEventListener('click', hideMemory);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        hideMemory();
    }
});