// mesajulzilei.js

// Lista de motive (30 de mesaje - poți adăuga până la 365!)
const motiveDeIubire = [
  "Azi te iubesc pentru ca esti cea mai buna iubita din univers.",
  "Azi te iubesc pentru ca esti cea mai frumoasa femeie din lume",
  "Sa nu uiti ca esti cea mai inteligenta si muncitoare persoana pe care o cunosc",
  "Te iubesc enorm in fiecare zi, chiar daca suntem departe unul de celalalt",
  "Esti cea mai importanta persoana din viata mea",
  "Nu stiu ce m-as face fara tine, fara zambetul tau, fara vocea ta",
  "Abia astept sa ne mutam impreuna, sa ne casatorim, sa traim in fiecare zi impreuna",
  "Sa stii ca poti face orice iti doresti, iar eu te voi sustine mereu",
  "Stiu ca ti-e greu la Mures, dar eu ma gandesc mereu la tine si la faptul ca o sa vin in weekend sa ne vedem",
  "O sa fii cea mai buna doctorita din lume si o sa ajuti foarte multi copilasi!",
  "Nu pot exprima in cuvinte cat de mult te iubesc",
  "Imi dai voie sa te iubesc toata viata?",
  "Sunt asa trist cand nu te vad..trimite-mi o poza cu tine",
  "Hai sa plecam impreuna departe si sa te iubesc in fiecare zi",
  "Esti foarte foarte foarte frumoasaa, frumusetea mea!",
  "Pot sa te strang in brate si sa ramanem asa o vesnicie?",
  "Esti destul, faci destul, inca faci prea mult. Nu te mai stresa, totul o sa fie bine si o sa reusesti tot. Te iubesc enorm!",
  "Nu mai conteaza ce anotimp e..Daca te vad e vara..si daca nu te vad e iarna :(",
  "Daca cineva iti vorbeste urat, doar spune-mi si ii omor eu",
  "Te iubesc infinit, frumusico",
  "Ti-as scrie astazi un mesaj foarte horny, dar nu stiu cat de privat pot face acest site. In orice caz, sa stii ca vreau sa-ti fac multe",
  "Sa nu uiti sa dormi, sa bei apa si sa mananci, puiut! Ca de invatat stiu ca ai mereu :)",
  "Imi faci viata foarte frumoasa si plina de iubire",
  "Tu esti raza mea de soare",
  "Fara tine, nu stiu ce m-as face",
  "Hai sa te iau in brate, te rog!",
  "Stii ca esti o fata extrem de frumoasa si desteapta?",
  "O secunda, si mi-a fost de-ajuns..povestea vietii mele cand te-am vazut pe tine :)",
  "Esti mai frumoasa decat un apus de soare, esti mai frumoasa decat toate stelele de pe cer, te iubesc!",
  "Imi place de tine ca si daca ne certam, iti doresti sa ne impacam repede si sa construim relatia noastra cat de frumos putem",
  "Ma intelegi si ma asculti mereu, chiar si atunci cand si tu ai problemele tale",
  "Hai sa mai mergem in Paris si sa ne iubim",
  "Cum poti fi atat de frumoasa, CUUUM ??? cum? :)",
  "Cioc cioc? Cine e? Iubitul tau, sunt la tine la usa in Mures si abia astept sa te sarut!",
  "Nu voi mai iubi niciodata pe cineva la fel de mult cat te iubesc pe tine!",
  "Degetul tau inelar e cam gol, domnisoara!",
  "Hai sa facem clatite, eu aduc ouale si tu gemi",
  "As inota un ocean pentru tine, chiar daca nu stiu sa inot",
  "Zambesti si tu sa iasa putin soarele? :)",
  "Ai cel mai minunat zambet, ce sa mai vorbim de fund :)"
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