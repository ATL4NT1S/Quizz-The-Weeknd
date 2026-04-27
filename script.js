const questions = [
    {
        question: "Quel célèbre morceau de France Gall est samplé sur son titre 'Montréal' ?",
        options: ["Poupée de cire, poupée de son", "Laisse tomber les filles", "Résiste", "Ella, elle l'a"],
        answer: 1,
        explanation: "The Weeknd a samplé le tube 'Laisse tomber les filles' (1964) écrit par Serge Gainsbourg pour le refrain de 'Montréal'.",
        media: "<audio controls><source src='chemin/vers/montreal-extrait.mp3' type='audio/mpeg'></audio>"
    },
    {
        question: "Quelle actrice de la série Squid Game joue à ses côtés dans le clip 'Out of Time' ?",
        options: ["HoYeon Jung", "Bae Doona", "Kim Joo-ryoung", "Lee Yoo-mi"],
        answer: 0,
        explanation: "HoYeon Jung, propulsée star mondiale avec Squid Game, partage l'écran avec lui et Jim Carrey dans le clip façon karaoké 'Out of Time'.",
        media: "<img src='https://picsum.photos/seed/squidgame/400/200' alt='Clip Out of Time'>"
    },
    {
        question: "Quel est le nom de son fidèle chien (un Doberman souvent vu avec lui) ?",
        options: ["Brutus", "Caesar", "King", "Zeus"],
        answer: 1,
        explanation: "Caesar est le Doberman d'Abel, qu'on peut souvent apercevoir sur ses réseaux sociaux ou dans ses clips créatifs.",
        media: "<img src='https://picsum.photos/seed/doberman/400/200' alt='Chien Caesar'>"
    },
    {
        question: "Quel producteur (connu sous le nom de Zodiac) a co-créé le son originel de The Weeknd avant d'être écarté ?",
        options: ["Metro Boomin", "Illangelo", "Jeremy Rose", "Doc McKinney"],
        answer: 2,
        explanation: "Jeremy Rose (Zodiac) a produit plusieurs des tout premiers morceaux d'Abel avant qu'ils ne se séparent pour des différends créatifs au début de la mixtape House of Balloons.",
        media: "<img src='https://picsum.photos/seed/zodiac/400/200' alt='Studio de musique'>"
    },
    {
        question: "Quel titre mythique d'Elton John est interpolé dans la ballade 'Scared to Live' ?",
        options: ["Tiny Dancer", "Rocket Man", "Bennie and the Jets", "Your Song"],
        answer: 3,
        explanation: "La magnifique ballade 'Scared to Live' (After Hours) emprunte la fameuse ligne mélodique 'I hope you don't mind' du titre Your Song d'Elton John.",
        media: "<audio controls><source src='chemin/vers/scaredtolive-extrait.mp3' type='audio/mpeg'></audio>"
    },
    {
        question: "Avec quelle popstar féminine détient-il son plus grand nombre de collaborations (4 morceaux en duo) ?",
        options: ["Lana Del Rey", "Rosalía", "Ariana Grande", "Doja Cat"],
        answer: 2,
        explanation: "Il s'agit d'Ariana Grande ! Ils ont collaboré sur Love Me Harder, Off The Table, et les célèbres remixes de Save Your Tears et Die For You.",
        media: "<img src='https://picsum.photos/seed/ariana/400/200' alt='Ariana et The Weeknd'>"
    },
    {
        question: "Pourquoi The Weeknd boycotte-t-il officiellement les Grammy Awards depuis 2021 ?",
        options: ["Un désaccord financier", "L'absence de nominations pour 'After Hours'", "Une dispute avec le présentateur", "Le refus de le laisser chanter en live"],
        answer: 1,
        explanation: "Malgré l'immense succès commercial et critique de l'album After Hours et du tube Blinding Lights, il n'a reçu aucune nomination, poussant l'artiste à boycotter l'institution.",
        media: "<img src='https://picsum.photos/seed/grammys/400/200' alt='Grammy Boycott'>"
    },
    {
        question: "Quelle esthétique et culture asiatique ont fortement influencé l'univers de l'album 'Kiss Land' ?",
        options: ["Sud-Coréenne", "Chinoise", "Japonaise", "Thaïlandaise"],
        answer: 2,
        explanation: "L'esthétique de l'album Kiss Land (2013) est très inspirée par la culture de la nuit japonaise, les néons de Tokyo et les animes.",
        media: "<img src='https://picsum.photos/seed/tokyo/400/200' alt='Néons japonais'>"
    },
    {
        question: "Quel DJ et producteur français d'électro sombre a co-réalisé les titres 'Lost in the Fire' et 'I Was Never There' ?",
        options: ["DJ Snake", "Kavinsky", "Justice", "Gesaffelstein"],
        answer: 3,
        explanation: "Le fameux producteur français Gesaffelstein, surnommé le 'Prince Noir de l'électro', a apporté sa touche très dark et métallique à ces morceaux.",
        media: "<audio controls><source src='chemin/vers/gesaffelstein-extrait.mp3' type='audio/mpeg'></audio>"
    },
    {
        question: "Dans le clip de 'Save Your Tears', quel détail physique de The Weeknd a provoqué la stupéfaction du public ?",
        options: ["Il n'a plus de cheveux", "Il porte de fausses prothèses de chirurgie esthétique", "Il est couvert de tatouages", "Il a des yeux entièrement noirs"],
        answer: 1,
        explanation: "Il est apparu avec un visage faussement refait (prothèses), poussant à l'extrême sa critique de la superficialité d'Hollywood et de l'industrie musicale.",
        media: "<img src='https://picsum.photos/seed/saveyourtears/400/200' alt='Prothèses chirurgicales'>"
    },
    {
        question: "Comment s'appelle le concept métaphorique de l'album 'Dawn FM', selon The Weeknd lui-même ?",
        options: ["L'enfer sur Terre", "Un club à la fin de l'univers", "Le purgatoire sous forme de bouchon routier", "Un asile psychiatrique"],
        answer: 2,
        explanation: "Il a décrit Dawn FM comme étant le purgatoire : l'auditeur est coincé dans un embouteillage dans un tunnel vers la lumière (la mort), avec la radio allumée.",
        media: "<img src='https://picsum.photos/seed/dawnfm/400/200' alt='Tunnel radio'>"
    },
    {
        question: "De quelle couleur était le costume signature qu'il a porté tout au long de l'ère 'After Hours' ?",
        options: ["Noir avec une cravate blanche", "Bleu velours", "Rouge avec une chemise noire", "Blanc immaculé"],
        answer: 2,
        explanation: "Le fameux blazer rouge vif, accompagné d'une chemise noire, d'une cravate et de lunettes, est devenu le symbole de la folie du personnage d'After Hours.",
        media: "<img src='https://picsum.photos/seed/redsuit/400/200' alt='Costume Rouge'>"
    },
    {
        question: "Dans le court-métrage 'Mania', quel animal majestueux et dangereux apparaît à l'écran ?",
        options: ["Un loup", "Une panthère noire", "Un serpent", "Un aigle"],
        answer: 1,
        explanation: "Une imposante panthère noire apparaît à plusieurs reprises dans le court-métrage 'Mania' et dans le clip de 'Starboy'.",
        media: "<img src='https://picsum.photos/seed/panther/400/200' alt='Panthère Noire'>"
    },
    {
        question: "Quelle gigantesque structure gonflable trônait au-dessus de la scène lors de la tournée 'After Hours til Dawn' ?",
        options: ["Une lune", "Un soleil rouge", "Une étoile géante", "Un crâne"],
        answer: 0,
        explanation: "Une énorme lune réaliste gonflable (qui changeait de couleur au fil du show) surplombait le bout de la longue scène de la tournée des stades.",
        media: "<img src='https://picsum.photos/seed/moon/400/200' alt='Lune gonflable'>"
    },
    {
        question: "Quel réalisateur connu a tourné le clip en vue subjective (POV) très sanglant de 'False Alarm' ?",
        options: ["Quentin Tarantino", "Ilya Naishuller", "Edgar Wright", "Michael Bay"],
        answer: 1,
        explanation: "Le réalisateur russe Ilya Naishuller (connu pour le film Hardcore Henry, tourné avec la même technique POV) a réalisé ce clip de braquage explosif.",
        media: "<img src='https://picsum.photos/seed/falsealarm/400/200' alt='Braquage False Alarm'>"
    },
    {
        question: "Le titre d'ouverture de son EP de 2018 'My Dear Melancholy,' s'appelle...",
        options: ["Call Out My Name", "Try Me", "Wasted Times", "Hurt You"],
        answer: 0,
        explanation: "'Call Out My Name' est le premier titre dramatique de l'EP, supposément inspiré par sa relation et sa séparation douloureuse avec Selena Gomez.",
        media: "<audio controls><source src='chemin/vers/calloutmyname-extrait.mp3' type='audio/mpeg'></audio>"
    },
    {
        question: "Quel est le nom de scène de son ami d'enfance, devenu son directeur créatif de toujours ?",
        options: ["Belly", "La Mar Taylor", "Nav", "Cash"],
        answer: 1,
        explanation: "La Mar Taylor est son ami d'enfance, son bras droit créatif et le co-fondateur du label XO depuis leurs débuts à Toronto.",
        media: "<img src='https://picsum.photos/seed/lamar/400/200' alt='La Mar Taylor'>"
    },
    {
        question: "Quel classique du groupe The Romantics est repris dans la mélodie de 'Secrets' (sur Starboy) ?",
        options: ["Talking in Your Sleep", "What I Like About You", "Test of Time", "One in a Million"],
        answer: 0,
        explanation: "Le refrain entraînant de 'Secrets' sample à la fois le tube 80s 'Talking in Your Sleep' (The Romantics) et 'Pale Shelter' de Tears for Fears.",
        media: "<audio controls><source src='chemin/vers/secrets-extrait.mp3' type='audio/mpeg'></audio>"
    },
    {
        question: "Quelle marque de streetwear japonaise célèbre s'est associée à The Weeknd pour une collaboration XO ?",
        options: ["Supreme", "BAPE (A Bathing Ape)", "Comme des Garçons", "Undercover"],
        answer: 1,
        explanation: "Il a sorti plusieurs collections de vêtements exclusives (vestes, t-shirts...) en collaboration avec la marque japonaise BAPE (A Bathing Ape).",
        media: "<img src='https://picsum.photos/seed/bape/400/200' alt='Veste BAPE XO'>"
    },
    {
        question: "Quel titre a valu à The Weeknd de remporter son premier Grammy Award en 2016 pour la meilleure performance R&B ?",
        options: ["Can't Feel My Face", "The Hills", "Earned It", "Starboy"],
        answer: 2,
        explanation: "'Earned It', la ballade langoureuse du film Cinquante Nuances de Grey, lui a valu son premier Grammy et une nomination aux Oscars.",
        media: "<audio controls><source src='chemin/vers/earnedit-extrait.mp3' type='audio/mpeg'></audio>"
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
const explanationContainer = document.getElementById('explanation-container');
const explanationText = document.getElementById('explanation-text');
const explanationMedia = document.getElementById('explanation-media');
const nextBtn = document.getElementById('next-btn');

// Événements
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
nextBtn.addEventListener('click', nextQuestion);

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
    explanationContainer.classList.add('hidden');
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

    // Afficher l'explication et le média
    explanationText.innerHTML = currentQuestion.explanation;
    explanationMedia.innerHTML = currentQuestion.media;
    explanationContainer.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
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
