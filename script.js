const questions = [
    { question: "Qual técnica de negociação foca em ganhar-ganhar?", answer: "Negociação integrativa" },
    { question: "O que representa o semáforo no jogo?", answer: "Momento de decisão" },
    { question: "Qual habilidade é essencial para negociar bem?", answer: "Escuta ativa" }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = questions[currentQuestion].question;
}

document.getElementById("next-btn").addEventListener("click", () => {
    score++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("game").innerHTML = "<h2>Fim do jogo!</h2><p>Pontuação: " + score + "</p>";
    }
});

showQuestion();
