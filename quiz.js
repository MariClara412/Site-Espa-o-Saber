/* QUIZ COM SESSÃO DE CONCLUÍDO*/
function checkAnswer(option, isCorrect) {
    const feedback = document.getElementById("feedback");

    if (isCorrect) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";

        // Marcar a missão como concluída no localStorage
        localStorage.setItem("missaoQuiz1", "concluida");

        // Redirecionar para a página de missões
        setTimeout(() => {
            window.location.href = "missoesdesepenhadas.html";
        }, 2000); // Aguarde 2 segundos antes de redirecionar
    } else {
        feedback.textContent = "Ops, tente novamente!";
        feedback.style.color = "red";
    }
}

function checkAnswerMission2(option, isCorrect) {
    const feedback = document.getElementById("feedback");

    if (isCorrect) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";

        // Marcar a Missão 2 como concluída
        localStorage.setItem("missaoQuiz2", "concluida");

        // Redirecionar para a página de missões
        setTimeout(() => {
            window.location.href = "missoesdesepenhadas.html";
        }, 2000);
    } else {
        feedback.textContent = "Ops, tente novamente!";
        feedback.style.color = "red";
    }
}


function checkAnswerMission3(option, isCorrect) {
    const feedback = document.getElementById("feedback");

    if (isCorrect) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.style.color = "green";

        // Marcar a Missão 3 como concluída
        localStorage.setItem("missaoQuiz3", "concluida");

        // Redirecionar para a página de missões
        setTimeout(() => {
            window.location.href = "missoesdesepenhadas.html";
        }, 2000);
    } else {
        feedback.textContent = "Ops, tente novamente!";
        feedback.style.color = "red";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const statusMissao1 = document.getElementById("statusMissao1");
    const statusMissao2 = document.getElementById("statusMissao2");
    const statusMissao3 = document.getElementById("statusMissao3");

    // Verificar se a Missão 1 foi concluída
    if (localStorage.getItem("missaoQuiz1") === "concluida") {
        statusMissao1.textContent = "Missão concluída!";
        statusMissao1.style.color = "green";
        statusMissao1.style.fontWeight = "bold";
    }

    // Verificar se a Missão 2 foi concluída
    if (localStorage.getItem("missaoQuiz2") === "concluida") {
        statusMissao2.textContent = "Missão concluída!";
        statusMissao2.style.color = "green";
        statusMissao2.style.fontWeight = "bold";
    }

    // Verificar se a Missão 3 foi concluída
    if (localStorage.getItem("missaoQuiz3") === "concluida") {
        statusMissao3.textContent = "Missão concluída!";
        statusMissao3.style.color = "green";
        statusMissao3.style.fontWeight = "bold";
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const statusMissao1 = document.getElementById("statusMissao1");
    const statusMissao2 = document.getElementById("statusMissao2");
    const statusMissao3 = document.getElementById("statusMissao3");

    // Verificar se a Missão 1 foi concluída
    if (localStorage.getItem("missaoQuiz1") === "concluida") {
        statusMissao1.textContent = "Missão concluída!";
        statusMissao1.style.color = "green";
        statusMissao1.style.fontWeight = "bold";
    }

    // Verificar se a Missão 2 foi concluída
    if (localStorage.getItem("missaoQuiz2") === "concluida") {
        statusMissao2.textContent = "Missão concluída!";
        statusMissao2.style.color = "green";
        statusMissao2.style.fontWeight = "bold";
    }

    // Verificar se a Missão 3 foi concluída
    if (localStorage.getItem("missaoQuiz3") === "concluida") {
        statusMissao3.textContent = "Missão concluída!";
        statusMissao3.style.color = "green";
        statusMissao3.style.fontWeight = "bold";
    }
});


