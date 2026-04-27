const questions = [
    {
        question: "Quel est le vrai nom de The Weeknd ?",
        options: ["Abel Tesfaye", "Aubrey Graham", "Jacques Webster", "Tarik Mengistu"],
        answer: 0
    },
    {
        question: "De quelle ville canadienne est-il originaire ?",
        options: ["Montréal", "Vancouver", "Toronto", "Ottawa"],
        answer: 2
    },
    {
        question: "Quel est le nom de sa toute première mixtape sortie en 2011 ?",
        options: ["Thursday", "Echoes of Silence", "Kiss Land", "House of Balloons"],
        answer: 3
    },
    {
        question: "Avec quel duo électronique casqué a-t-il collaboré sur 'Starboy' et 'I Feel It Coming' ?",
        options: ["Justice", "Daft Punk", "The Chemical Brothers", "Disclosure"],
        answer: 1
    },
    {
        question: "Dans quel album trouve-t-on le tube mondial 'Blinding Lights' ?",
        options: ["Beauty Behind the Madness", "Starboy", "After Hours", "Dawn FM"],
        answer: 2
    },
    {
        question: "En quelle année a-t-il assuré le show de la mi-temps du Super Bowl ?",
        options: ["2019", "2020", "2021", "2022"],
        answer: 2
    },
    {
        question: "Comment s'appelle son label discographique fondé en 2012 ?",
        options: ["OVO Sound", "XO", "Cactus Jack", "TDE"],
        answer: 1
    },
    {
        question: "Pour quel film a-t-il composé et chanté le titre 'Earned It' ?",
        options: ["Black Panther", "Hunger Games", "Cinquante Nuances de Grey", "James Bond : Spectre"],
        answer: 2
    },
    {
        question: "Dans quelle série polémique de HBO a-t-il joué le rôle de Tedros en 2023 ?",
        options: ["Euphoria", "The Idol", "Succession", "True Detective"],
        answer: 1
    },
    {
        question: "Quel acteur célèbre prête sa voix pour faire le narrateur sur l'album 'Dawn FM' ?",
        options: ["Morgan Freeman", "Samuel L. Jackson", "Jim Carrey", "Denzel Washington"],
        answer: 2
    },
    {
        question: "Quelle langue, en plus de l'anglais, parle-t-il couramment grâce à ses origines éthiopiennes ?",
        options: ["Le Swahili", "L'Amharique", "Le Somali", "L'Arabe"],
        answer: 1
    },
    {
        question: "Quel est le nom du comic book que The Weeknd a co-écrit avec Marvel ?",
        options: ["The Idol", "After Hours", "Starboy", "Blinding Lights"],
        answer: 2
    },
    {
        question: "De quel film de Martin Scorsese s'est-il principalement inspiré pour le personnage en costume rouge de l'ère 'After Hours' ?",
        options: ["Les Affranchis", "Taxi Driver", "Casino", "Le Loup de Wall Street"],
        answer: 2
    },
    {
        question: "Sur quel morceau de Drake de 2011 peut-on entendre l'une de ses premières collaborations majeures ?",
        options: ["The Zone", "Crew Love", "Practice", "Shot for Me"],
        answer: 1
    },
    {
        question: "Avant de s'appeler 'The Weeknd', quel était l'un de ses noms de scène ?",
        options: ["Abel", "The Noise", "Kin Kane", "Tesfaye"],
        answer: 2
    },
    {
        question: "Quelle a été la toute première chanson qu'il a mise en ligne sur YouTube sous le nom 'The Weeknd' ?",
        options: ["What You Need", "Loft Music", "The Morning", "Wicked Games"],
        answer: 0
    },
    {
        question: "Quel est le nom de la station de radio fictive qui rythme l'album 'Dawn FM' ?",
        options: ["XO 103.5", "After Life Radio", "103.5 Dawn FM", "Heaven or Las Vegas"],
        answer: 2
    },
    {
        question: "Quelle chanson de Michael Jackson a-t-il reprise pour le 30ème anniversaire de l'album 'Bad' ?",
        options: ["Thriller", "Billie Jean", "Dirty Diana", "Beat It"],
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
