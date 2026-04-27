const questions = [
    {
        question: "Quel célèbre morceau de France Gall est samplé sur son titre 'Montréal' ?",
        options: ["Poupée de cire, poupée de son", "Laisse tomber les filles", "Résiste", "Ella, elle l'a"],
        answer: 1
    },
    {
        question: "Quelle actrice de la série Squid Game joue à ses côtés dans le clip 'Out of Time' ?",
        options: ["HoYeon Jung", "Bae Doona", "Kim Joo-ryoung", "Lee Yoo-mi"],
        answer: 0
    },
    {
        question: "Quel est le nom de son fidèle chien (un Doberman souvent vu avec lui) ?",
        options: ["Brutus", "Caesar", "King", "Zeus"],
        answer: 1
    },
    {
        question: "Quel producteur (connu sous le nom de Zodiac) a co-créé le son originel de The Weeknd avant d'être écarté ?",
        options: ["Metro Boomin", "Illangelo", "Jeremy Rose", "Doc McKinney"],
        answer: 2
    },
    {
        question: "Quel titre mythique d'Elton John est interpolé dans la ballade 'Scared to Live' ?",
        options: ["Tiny Dancer", "Rocket Man", "Bennie and the Jets", "Your Song"],
        answer: 3
    },
    {
        question: "Avec quelle popstar féminine détient-il son plus grand nombre de collaborations (4 morceaux en duo) ?",
        options: ["Lana Del Rey", "Rosalía", "Ariana Grande", "Doja Cat"],
        answer: 2
    },
    {
        question: "Pourquoi The Weeknd boycotte-t-il officiellement les Grammy Awards depuis 2021 ?",
        options: ["Un désaccord financier", "L'absence de nominations pour 'After Hours'", "Une dispute avec le présentateur", "Le refus de le laisser chanter en live"],
        answer: 1
    },
    {
        question: "Quelle esthétique et culture asiatique ont fortement influencé l'univers de l'album 'Kiss Land' ?",
        options: ["Sud-Coréenne", "Chinoise", "Japonaise", "Thaïlandaise"],
        answer: 2
    },
    {
        question: "Quel DJ et producteur français d'électro sombre a co-réalisé les titres 'Lost in the Fire' et 'I Was Never There' ?",
        options: ["DJ Snake", "Kavinsky", "Justice", "Gesaffelstein"],
        answer: 3
    },
    {
        question: "Dans le clip de 'Save Your Tears', quel détail physique de The Weeknd a provoqué la stupéfaction du public ?",
        options: ["Il n'a plus de cheveux", "Il porte de fausses prothèses de chirurgie esthétique", "Il est couvert de tatouages", "Il a des yeux entièrement noirs"],
        answer: 1
    },
    {
        question: "Comment s'appelle le concept métaphorique de l'album 'Dawn FM', selon The Weeknd lui-même ?",
        options: ["L'enfer sur Terre", "Un club à la fin de l'univers", "Le purgatoire sous forme de bouchon routier", "Un asile psychiatrique"],
        answer: 2
    },
    {
        question: "De quelle couleur était le costume signature qu'il a porté tout au long de l'ère 'After Hours' ?",
        options: ["Noir avec une cravate blanche", "Bleu velours", "Rouge avec une chemise noire", "Blanc immaculé"],
        answer: 2
    },
    {
        question: "Dans le court-métrage 'Mania', quel animal majestueux et dangereux apparaît à l'écran ?",
        options: ["Un loup", "Une panthère noire", "Un serpent", "Un aigle"],
        answer: 1
    },
    {
        question: "Quelle gigantesque structure gonflable trônait au-dessus de la scène lors de la tournée 'After Hours til Dawn' ?",
        options: ["Une lune", "Un soleil rouge", "Une étoile géante", "Un crâne"],
        answer: 0
    },
    {
        question: "Quel réalisateur connu a tourné le clip en vue subjective (POV) très sanglant de 'False Alarm' ?",
        options: ["Quentin Tarantino", "Ilya Naishuller", "Edgar Wright", "Michael Bay"],
        answer: 1
    },
    {
        question: "Le titre d'ouverture de son EP de 2018 'My Dear Melancholy,' s'appelle...",
        options: ["Call Out My Name", "Try Me", "Wasted Times", "Hurt You"],
        answer: 0
    },
    {
        question: "Quel est le nom de scène de son ami d'enfance, devenu son directeur créatif de toujours ?",
        options: ["Belly", "La Mar Taylor", "Nav", "Cash"],
        answer: 1
    },
    {
        question: "Quel classique du groupe The Romantics est repris dans la mélodie de 'Secrets' (sur Starboy) ?",
        options: ["Talking in Your Sleep", "What I Like About You", "Test of Time", "One in a Million"],
        answer: 0
    },
    {
        question: "Quelle marque de streetwear japonaise célèbre s'est associée à The Weeknd pour une collaboration XO ?",
        options: ["Supreme", "BAPE (A Bathing Ape)", "Comme des Garçons", "Undercover"],
        answer: 1
    },
    {
        question: "Quel titre a valu à The Weeknd de remporter son premier Grammy Award en 2016 pour la meilleure performance R&B ?",
        options: ["Can't Feel My Face", "The Hills", "Earned It", "Starboy"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Éléments du DOM
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');

// Événements
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    shuffleArray(questions); // On mélange les questions ici !
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    progressText.innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    optionsContainer.innerHTML = ''; // Méthode plus concise pour vider le conteneur
}

function selectAnswer(selectedIndex, selectedButton) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.answer;
    
    // Désactiver tous les boutons après le clic
    const allButtons = optionsContainer.querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
        // Mettre en surbrillance la bonne réponse
        allButtons[correctIndex].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500); // Passe à la question suivante après 1.5 seconde
}

function showResults() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    scoreText.innerText = `Tu as obtenu ${score} sur ${questions.length} !`;
    
    if (score === questions.length) {
        feedbackText.innerText = "Parfait ! Tu es un véritable Starboy / Stargirl ! 🌟";
    } else if (score >= questions.length * 0.7) { // Basé sur un pourcentage pour s'adapter au nombre de questions
        feedbackText.innerText = "Excellent ! Le crew XO serait fier de toi. 🩸";
    } else if (score >= questions.length * 0.4) {
        feedbackText.innerText = "Pas mal, mais tu as besoin de réécouter Trilogy ! 🎶";
    } else {
        feedbackText.innerText = "Aïe... Tu étais 'Blinded by the lights' ou quoi ? 🕶️";
    }
}

function restartQuiz() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}
