// ===============================
// MISSÃO FANYZINHA ❤️
// script.js
// Parte 1 - Estrutura Base
// ===============================

const spotifyLink =
    "https://open.spotify.com/track/0s8OMEGJQJIUr9VFwNEH1v?si=8cRGCxhdT9u809TBDWtVHQ";

let currentChapter = 0;
let lives = 3;
let isTransitioning = false;

// ===============================
// Elementos do HTML
// ===============================

const introScreen = document.getElementById("intro-screen");

const gameContainer = document.getElementById("game-container");

const storyText = document.getElementById("story-text");

const questionContainer = document.getElementById("question-container");

const photoContainer = document.getElementById("photo-container");

const chapterPhoto = document.getElementById("chapter-photo");

const achievementBox = document.getElementById("achievement");

const gameOverScreen = document.getElementById("game-over");

const endingScreen = document.getElementById("ending-screen");

const effectsContainer = document.getElementById("effects-container");

const livesElement = document.getElementById("lives");

const progressElement = document.getElementById("progress");

const startButton = document.getElementById("start-btn");

const hud = document.getElementById("hud");

// ===============================
// Dados dos capítulos
// ===============================

const chapters = [

    {
        title: "Os Patinadores Desencontrados",

        photo: null,

        gallery: null,

        narrative: [
            "Dois patinadores.",
            "Uma mesma cidade.",
            "Os mesmos amigos.",
            "Um patinando há 3 anos.",
            "Outra há 2 anos.",
            "E mesmo assim...",
            "Quando um ia aos rolês, o outro não ia.",
            "Quando o outro aparecia, o primeiro sumia.",
            "Até que finalmente...",
            "\"Pô, tu tá no patins há mó tempão e a gente nunca se encontra nos rolês.\"",
            "\"Quando eu vou, você não vai.\"",
            "\"Quando você vai, eu não vou.\"",
            "\"Finalmente tô te vendo.\""
        ],

        question: {
            text: "Isso tudo foi:",
            options: [
                "Coincidência",
                "Falta de sincronização",
                "O universo fazendo suspense"
            ],
            correct: 2
        },

        achievement: "🏆 Finalmente nos encontramos"
    },

    {
        title: "A Testemunha Esquecida",

        photo: null,

        gallery: null,

        narrative: [
            "Mas talvez...",
            "aquela não tenha sido a primeira vez.",
            "Houve um encontro anterior.",
            "Um shopping.",
            "Alguns amigos do patins.",
            "Você.",
            "Eu.",
            "E uma vida completamente diferente daquela que temos hoje.",
            "Você diz que não lembra.",
            "Eu lembro.",
            "Porque achei uma certa menina muito bonita naquele dia.",
            "Só que, aparentemente...",
            "a vida ainda não tinha decidido que era a nossa hora."
        ],

        question: {
            text: "A vida ainda não tinha decidido:",
            options: [
                "Nossa hora",
                "Quem seria o personal do outro",
                "Quem cairia primeiro no patins"
            ],
            correct: 0
        },

        achievement: "🏆 A hora certa"
    },

    {
        title: "A Sessão de Terapia de Maricá",

        photo: "images/roda.jpg",

        gallery: null,

        narrative: [
            "Primeiro encontro oficial.",
            "12 de dezembro.",
            "Alguns dias depois do aniversário de uma certa fortalezense...",
            "E uma promessa foi feita.",
            "\"Hoje você vai ganhar o que quiser.\"",
            "A desculpa era patinar no gelo.",
            "Mas não conseguimos ingresso.",
            "E acabamos passando horas conversando sobre a vida.",
            "O que começou como um encontro...",
            "virou praticamente uma sessão de terapia.",
            "Com alguns detalhes românticos.",
            "Inclusive um beijo só na hora de ir embora."
        ],

        question: {
            text: "Afinal, esse encontro foi:",
            options: [
                "Um date",
                "Uma sessão de terapia",
                "Os dois"
            ],
            correct: 2
        },

        achievement: "🏆 Terapia Premium"
    },

    {
        title: "Processo nº 0001/2026",

        photo: null,

        gallery: null,

        narrative: [
            "Fanyzinha vs. O Defensor Oficial do Cabelão Lindo e Sexy. ",
            "Meritíssima...",
            "a defesa gostaria de registrar que:",
            "existe um patrimônio nacional ameaçado.",
            "Um cabelão lindo.",
            "Sexy.",
            "E que insiste em querer cortar apenas 'as pontinhas'.",
            "O tribunal está reunido para decidir o futuro desse caso."
        ],

        question: {
            text: "O cabelão deve ser:",
            options: [
                "Cortado curtinho",
                "\"Só as pontinhas\"",
                "Protegido por interesse nacional"
            ],
            correct: 2
        },

        achievement: "🏆 Patrimônio Nacional"
    },

    {
        title: "Prova Material",

        photo: "images/figurinha.jpg",

        gallery: null,

        narrative: [
            "\"Esse é o meu sorriso.\"",
            "Em algum momento...",
            "alguém olhou o seu sorriso...",
            "e resolveu registrá-lo oficialmente.",
            "Talvez porque tenha se apaixonado pelo sorriso mais lindo que já viu.",
            "Afinal...",
            "seria irresponsável correr o risco de esquecer uma coisa dessas.",
            "Você respondeu que ninguém nunca tinha dito isso antes.",
            "Nem mesmo a sua mãe.",
            "E sinceramente...",
            "eu ainda não entendo como ninguém percebeu isso antes.",
            "Porque é o tipo de sorriso que quebra qualquer mau humor.",
            "Faz o mundo parecer um lugar mais leve.",
            "E quase sempre me faz sorrir junto."
        ],

        question: {
            text: "O sorriso da Fanyzinha é:",
            options: [
                "Muito bonito",
                "O mais bonito do mundo",
                "Perigoso para o mau humor"
            ],
            correct: 1
        },

        achievement: "🏆 Patente do Sorriso"
    },

    {
        title: "Investigação Concluída",

        photo: null,

        gallery: [
            "images/lago.jpg",
            "images/aniversario.jpg",
            "images/academia.jpg",
            "images/show.jpg",
        ],

        narrative: [
            "Vieram os rolês.",
            "Vieram as sessões de terapia.",
            " os boa noiteeee. ",
            "Vieram os bom diaaaa.  ",
            "Vieram os episódios de The Seven Deadly Sins.  ",
            "Vieram as críticas ao anime.  ",
            "Vieram os comentários durante os episódios.  ",
            "E, curiosamente…  ",
            "vieram os episódios seguintes também.  ",
            "Vieram aventuras embaixo de tempestades.  ",
            "Só para ouvir uma música que valia a pena.  ",
            "Vieram os treinos.",
            "Vieram as comemorações.",
            "Vieram os olhos lindos.",
            "Veio o sorriso mais bonito do mundo.",
            "E o fato de você ainda não ter cortado esse cabelo lindo.",
            "Obrigado por isso.",
            "Obrigado por esses 6 meses, Fanyzinha.",
            "Feliz Dia dos Namorados.",
            "Mesmo que a gente tenha que fingir que não é."
        ],

        question: null,

        achievement: "🏆 Coincidência? Acho que não."
    }

];

// ===============================
// FUNÇÕES AUXILIARES
// ===============================

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateHUD() {

    livesElement.textContent =
        `Fanyzinha ${"❤️".repeat(lives)}`;

    progressElement.textContent =
        `Capítulo ${Math.min(currentChapter + 1, 6)}/6`;
}

function showAchievement(text) {
    achievementBox.hidden = false;
    achievementBox.innerHTML = `
        <div style="opacity: 0.8; font-size: 0.9rem;">
            🏆 Conquista desbloqueada!
        </div>
        <div style="margin-top: 8px;">
            ${text}
        </div>
    `;
    setTimeout(() => {
        achievementBox.hidden = true;
    }, 4500);
}

async function typeNarrative(lines) {

    storyText.innerHTML = "";

    for (const line of lines) {

        const p = document.createElement("p");

        storyText.appendChild(p);

        for (const char of line) {

            p.textContent += char;

            await sleep(25);
        }

        await sleep(700);
    }
}

function clearQuestion() {

    questionContainer.innerHTML = "";
}

function showPhoto(src) {

    photoContainer.hidden = false;

    chapterPhoto.src = src;
}

function hidePhoto() {

    photoContainer.hidden = true;

    chapterPhoto.src = "";
}

function renderQuestion(question) {

    clearQuestion();

    const title = document.createElement("h3");

    title.textContent = question.text;

    questionContainer.appendChild(title);

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.className = "answer-btn";

        button.addEventListener("click", () => {

            answerQuestion(index);

        });

        questionContainer.appendChild(button);
    });
}

function answerQuestion(answerIndex) {
    // Impede múltiplos cliques
    if (isTransitioning) {
        return;
    }
    isTransitioning = true;
    // Desabilita todos os botões
    document
        .querySelectorAll(".answer-btn")
        .forEach(button => {
            button.disabled = true;
        });
    const chapter = chapters[currentChapter];
    if (answerIndex !== chapter.question.correct) {
        lives--;
        updateHUD();
        if (lives <= 0) {
            isTransitioning = false;
            showGameOver();
            return;
        }
    }
    if (answerIndex === chapter.question.correct) {
        showAchievement(chapter.achievement);
    }
    currentChapter++;
    setTimeout(() => {
        isTransitioning = false;
        playChapter();
    }, 4200);
}

async function playGallery(images) {

    photoContainer.hidden = false;

    for (const image of images) {

        chapterPhoto.src = image;

        await sleep(5000);
    }
}

async function playChapter() {

    if (currentChapter >= chapters.length) {

        showEnding();

        return;
    }

    updateHUD();

    const chapter = chapters[currentChapter];

    storyText.innerHTML = "";

    clearQuestion();

    hidePhoto();

    if (chapter.photo) {

        showPhoto(chapter.photo);
    }
    await typeNarrative(chapter.narrative);

    // tempo para absorver o último text
    await sleep(5000);

    if (chapter.gallery) {

        await playGallery(chapter.gallery);

        // tempo para apreciar a última foto
        await sleep(5000);
    }

    if (chapter.question) {

        renderQuestion(chapter.question);

    } else {

        // pausa dramática antes do final
        await sleep(3000);

        currentChapter++;

        showEnding();
    }

}

function showGameOver() {

    introScreen.hidden = true;

    gameContainer.hidden = true;

    gameOverScreen.hidden = false;


    gameOverScreen.innerHTML = `
        <h2>Missão Falhou 😭</h2>

        <p>
            A investigadora Fanyzinha ficou sem corações.
        </p>

        <p>
            Felizmente, esta não é uma história sobre perfeição.
        </p>

        <p>
            É uma história sobre segundas chances.
        </p>

        <p>
            Afinal...
            se o universo precisou de anos para colocar
            dois patinadores no mesmo rolê...
            você acha mesmo que eu desistiria tão fácil?
        </p>

        <button id="retry-btn">
            ❤️ Tentar novamente
        </button>
    `;

    document
        .getElementById("retry-btn")
        .addEventListener("click", () => {

            currentChapter = 0;

            lives = 3;

            gameOverScreen.hidden = true;

            gameContainer.hidden = false;

            updateHUD();

            playChapter();
        });
}

function showEnding() {
    gameContainer.hidden = true;

    endingScreen.innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    let endingHTML = `
        <h2>✨ Investigação Concluída ✨</h2>
    `;
    if (lives === 3) {
        endingHTML += `
            <h3>🎖️ Final Verdadeiro desbloqueado</h3>
            <p>
                Como prêmio pela excelente memória...
            </p>
            <p>
                Você ganhou sessões ilimitadas
                de terapia comigo.
            </p>
            <p>
                (Inclui risadas, abraços
                e possibilidade de beijo no final.)
            </p>
        `;
    }
    endingHTML += `
        <h3>🎁 Recompensas desbloqueadas</h3>
        <p>🍫 Chocolate</p>
        <p>💌 Um encontro à sua escolha</p>
        <p>🛼 Novos rolês</p>
        <p>❤️ Continuação da nossa história</p>
    
    `;
    setTimeout(() => {
        endingScreen.hidden = false;
        endingScreen.innerHTML = endingHTML;
        createHearts();
        setTimeout(() => {
            endingScreen.innerHTML += `
        <hr>
        <p>
            Obrigado por aceitar essa missão, investigadora.
        </p>
        <br>
        <img
            src="images/figurinha.jpg"
            alt="Esse é o meu sorriso"
            style="max-width:250px;border-radius:16px;"
        >
        <h3>
            "Esse é o meu sorriso."
        </h3>
        <h2>
            Continua... ❤️
        </h2>
    `;
        }, 6000);
    }, 800);
}

function createHearts() {

    setTimeout(() => {
        effectsContainer.innerHTML = "";
    }, 12000);


    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.textContent = "❤️";

        heart.className = "floating-heart";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDelay =
            Math.random() * 4 + "s";

        heart.style.fontSize =
            (18 + Math.random() * 18) + "px";

        effectsContainer.appendChild(heart);
    }
}

startButton.addEventListener("click", () => {

    window.open(spotifyLink, "_blank");


    gameOverScreen.hidden = true;

    introScreen.hidden = true;

    hud.hidden = false;

    gameContainer.hidden = false;

    currentChapter = 0;

    lives = 3;

    updateHUD();

    playChapter();
});

hud.hidden = true;

updateHUD();

gameContainer.hidden = true;

photoContainer.hidden = true;

achievementBox.hidden = true;

gameOverScreen.hidden = true;

endingScreen.hidden = true;

