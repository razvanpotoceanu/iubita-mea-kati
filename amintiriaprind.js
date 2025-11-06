// amintiriaprind.js

// --- BAZA DE DATE PENTRU AMINTIRI ---
// Trebuie să avem 10 intrări aici, corespondente cu HTML-ul
const memories = {
    "1": {
        image: "img/amintire1.jpg", 
        text: "Aici ne-am ținut prima oară de mână. Am simțit că totul e în regulă în lume. ❤️"
    },
    "2": {
        image: "img/amintire2.jpg", 
        text: "Aici ai râs până ai plâns la o glumă proastă de-a mea. Zâmbetul tău a luminat totul. 😂"
    },
    "3": {
        image: "img/amintire3.jpg", 
        text: "Momentul ăsta. Aici am știut că ești pentru totdeauna. Și nu aș schimba o secundă. 🥰"
    },
    "4": {
        image: "img/amintire4.jpg", 
        text: "Prima noastră cafea băută dimineața, în tăcere. A fost perfect."
    },
    "5": {
        image: "img/amintire5.jpg", 
        text: "Când am dansat în bucătărie la ora 2 noaptea. Doar noi și muzica."
    },
    "6": {
        image: "img/amintire6.jpg", 
        text: "Prima zăpadă pe care am văzut-o împreună."
    },
    "7": {
        image: "img/amintire7.jpg", 
        text: "Când m-ai susținut la acel examen greu. Ești cea mai bună."
    },
    "8": {
        image: "img/amintire8.jpg", 
        text: "Seara aceea de film când am adormit amândoi pe canapea."
    },
    "9": {
        image: "img/amintire9.jpg", 
        text: "Când mi-ai spus primul 'Te iubesc' și am simțit că plutesc."
    },
    "10": {
        image: "img/amintire10.jpg", 
        text: "Fiecare zi cu tine este o amintire pe care vreau să o aprind."
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