// quiz.js

// !!! MODIFICĂ ÎNTREBĂRILE ȘI RĂSPUNSURILE AICI !!!
const allQuizQuestions = [
  {
    question: "Când ne-am pus oficial împreună(zi/lună/an)?",
    options: ["20.11.2023", "25.11.2023", "01.12.2023", "30.10.2023"],
    answer: "25.11.2023" 
  },
  {
    question: "Ce culoare îți amintește de mine?",
    options: ["Albastru", "Roșu", "Negru", "Mov"],
    answer: "Roșu" // Schimbă cu răspunsul corect
  },
  {
    question: "Unde îmi place cel mai mult să mâncăm în oraș?",
    options: ["McDonalds", "Rosa", "KFC", "Fryday"],
    answer: "KFC" // Schimbă cu răspunsul corect
  },
  {
    question: "Ce m-a făcut să mă îndrăgostesc de tine?",
    options: ["Zâmbetul tău 😍", "Glumele tale 🤣", "Fundul tău", "Tot ❤️"],
    answer: "Tot ❤️" // Schimbă cu răspunsul corect
  },
  {
    question: "Ce urăsc cel mai mult să fac?",
    options: ["Curățenie 😅", "Să aștept ⏳", "Să mă trezesc devreme ⏰", "Să fiu fără tine ❤️"],
    answer: "Să fiu fără tine ❤️" // Schimbă cu răspunsul corect
  },
  {
    question: "Unde mi-ai atras prima oară atenția?",
    options: ["În liceu(clădire)", "La locul de pus bicicleta/trotineta de la liceu", "La o petrecere", "Pe insta"],
    answer: "La locul de pus bicicleta/trotineta de la liceu" // Schimbă cu răspunsul corect
  },
  {
    question: "Cine a spus primul „Te iubesc”?",
    options: ["Eu(R)", "Tu(K)"],
    answer: "Eu(R)" // Schimbă cu răspunsul corect
  },
  {
    question: "Care a fost excursia mea preferată împreună cu tine de până acum?",
    options: ["Budapesta(iarna)", "Cipru", "Paris", "Ljubljana"],
    answer: "Paris" // Schimbă cu răspunsul corect
  },
  {
    question: "Unde ne-am sărutat prima dată?",
    options: ["Parcul Mare", "Piața Unirii", "Piața Muzeului", "Piața Mihai Viteazu"],
    answer: "Piața Muzeului" // Schimbă cu răspunsul corect
  },
  {
    question: "Ce split am eu la antrenamentele de la sală?",
    options: ["Upper/Lower", "Push/Pull/Legs"],
    answer: "Push/Pull/Legs" // Schimbă cu răspunsul corect
  },
  {
    question: "Care este artistul muzical preferat al meu?",
    options: ["Puya", "Tzanca Uraganu", "Smiley", "Taylor Swift"],
    answer: "Smiley" // Schimbă cu răspunsul corect
  },
  {
    question: "De ce domeniu sunt eu cel mai pasionat?",
    options: ["Informatica", "Antreprenoriat", "Fitness"],
    answer: "Antreprenoriat" // Schimbă cu răspunsul corect
  },
  {
    question: "Ce fel de sport îmi place cel mai mult?",
    options: ["Ciclism", "Fitness", "Fotbal", "Înot"],
    answer: "Ciclism" // Schimbă cu răspunsul corect
  },
  {
    question: "Care este marca mea preferată de mașini?",
    options: ["Porsche", "Ferrari", "Volkswagen", "Audi"],
    answer: "Ferrari" // Schimbă cu răspunsul corect
  },
  {
    question: "Cum îl cheamă pe cel mai bătrân câine al meu?",
    options: ["Lizuca", "Plușica", "Pitiu"],
    answer: "Lizuca" // Schimbă cu răspunsul corect
  },
  {
    question: "La ce capitol stau cel mai rău?",
    options: ["Iubire", "Inteligență", "Memorie", "Umor"],
    answer: "Memorie" // Schimbă cu răspunsul Lcorect
  },
  {
    question: "Ce îți place cel mai mult la mine?",
    options: ["Zâmbetul", "Glumele", "Că sunt nebun după tine", "Tot 😍"],
    answer: "Tot 😍" // Schimbă cu răspunsul corect
  },
  {
    question: "Cine doarme cel mai mult?",
    options: ["Kati", "Răzvi"],
    answer: "Răzvi" // Schimbă cu răspunsul corect
  },
  {
    question: "Ce aș face cu cineva dacă te-ar agresa fizic?",
    options: ["L-aș da la poliție", "L-aș bate", "L-aș omorî", "L-aș înjura"],
    answer: "L-aș omorî" // Schimbă cu răspunsul corect
  },
  {
    question: "Ce fel de locuință mi-ar plăcea să avem pe viitor?",
    options: ["Apartament", "Căsuță mică", "Vilă cu 2-3 etaje si subsol", "Rulotă 😂"],
    answer: "Vilă cu 2-3 etaje si subsol" // Schimbă cu răspunsul corect
  },
  {
    question: "Cum îți spun cel mai des când râd ce micuță ești?",
    options: ["Pufulete", "Iubire", "Minion", "Pișcot"],
    answer: "Minion" // Schimbă cu răspunsul corect
  },
    {
    question: "Ce îți place cel mai mult să primești de la mine?",
    options: ["Flori", "Mâncare", "Scrisori"],
    answer: "Scrisori" // Schimbă cu răspunsul corect
  },
  {
    question: "Ce simt cel mai des lângă tine?",
    options: ["Dragoste", "Iubire", "Boner"],
    answer: "Boner" // Schimbă cu răspunsul corect
  },

  // Poți adăuga mai multe întrebări aici, urmând același format
];
// --- LOGICA NOUĂ PENTRU A ALEGE 10 ÎNTREBĂRI ---

// Funcție utilitară pentru amestecare (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 1. Amestecăm întreaga bancă de întrebări
shuffleArray(allQuizQuestions);

// 2. Selectăm primele 10 întrebări din lista amestecată
const quizData = allQuizQuestions.slice(0, 10);

// --- SFÂRȘIT LOGICA NOUĂ ---


// Restul codului rămâne la fel, dar va folosi lista 'quizData' (care are acum 10 întrebări aleatorii)

const totalQuestions = quizData.length; // Va fi 10 (sau mai puțin dacă nu ai destule în bancă)
let currentQuestionIndex = 0;
let score = 0;

// Referințe la elementele HTML
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');

// --- Inițializare ---
if (totalQuestions > 0) {
    totalQuestionsDisplay.textContent = totalQuestions;
    loadQuestion();
} else {
    // Cazul în care banca de întrebări e goală
    questionText.textContent = "Nu s-au găsit întrebări pentru quiz. Contactează administratorul! (Adică pe tine)";
}


// --- Funcții ---

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = ''; // Curăță opțiunile vechi
  feedback.textContent = '';
  nextButton.style.display = 'none'; // Ascunde butonul "Următoarea"
  
  // Creează butoanele pentru fiecare opțiune
  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('quiz-option-button');
    button.addEventListener('click', () => handleAnswer(option, currentQuestion.answer));
    optionsContainer.appendChild(button);
  });
}

function handleAnswer(selectedOption, correctAnswer) {
  // Dezactivează toate butoanele de opțiuni după o selecție
  document.querySelectorAll('.quiz-option-button').forEach(btn => btn.disabled = true);

  // Verifică răspunsul și afișează feedback
  if (selectedOption === correctAnswer) {
    score++;
    feedback.textContent = "Bravo iubirea mea 😍 Ai răspuns corect!";
    feedback.style.color = '#28a745'; // Verde
  } else {
    feedback.textContent = `Greșit! Răspunsul corect era: ${correctAnswer}`;
    feedback.style.color = '#dc3545'; // Roșu
  }
  
  scoreDisplay.textContent = score; // Actualizează scorul
  nextButton.style.display = 'block'; // Arată butonul "Următoarea"
}

// Când se apasă butonul "Următoarea"
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < totalQuestions) {
    loadQuestion(); // Încarcă următoarea întrebare
  } else {
    showFinalResult(); // Arată rezultatul final
  }
});

function showFinalResult() {
  questionText.textContent = "FELICITĂRI BABYGIRL! Quiz-ul s-a terminat!";
  optionsContainer.innerHTML = `
    <img src="img/poza_finala_quiz.jpg" alt="Poza noastră de final" class="final-photo">
    <h2>Ai obținut ${score} din ${totalQuestions} puncte!</h2>
    <p style="font-size: 1.2em; color: #d93025;">Bravo pui, te iubesc muult! 💞</p>
  `;
  feedback.textContent = "";
  nextButton.style.display = 'none';
  scoreDisplay.parentElement.style.display = 'none'; // Ascunde contorul de scor
}