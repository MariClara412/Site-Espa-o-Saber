/*Quiz*/

function checkAnswer(element, isCorrect) {
    const feedback = document.getElementById("feedback");

    if (isCorrect) {
        feedback.textContent = "Parabéns! Você acertou!";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Ops! Essa não é a resposta certa.";
        feedback.className = "feedback incorrect";
    }

    feedback.style.display = "block";

    // Adiciona borda verde/vermelha à alternativa escolhida
    document.querySelectorAll(".option").forEach(option => {
        option.style.pointerEvents = "none"; // Impede novas escolhas
    });
    element.style.borderColor = isCorrect ? "green" : "red";
}

/*Cadastro*/
function validarFormulario() {
    const nomeResponsavel = document.getElementById("nomeResponsavel").value;
    const nomeCrianca = document.getElementById("nomeCrianca").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const mensagem = document.getElementById("mensagem");

    // Limpa a mensagem de erro
    mensagem.textContent = "";

    // Verifica se todos os campos estão preenchidos
    if (nomeResponsavel === "" || nomeCrianca === "" || email === "" || senha === "" || confirmarSenha === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        mensagem.textContent = "As senhas não coincidem.";
        return;
    }

    // Verifica se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    // Simulação de envio com mensagem de sucesso
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
}
  


/*Menu Responsivo*/

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFecharMenu = document.querySelector('.btn-fechar-menu'); // Seleciona o botão de fechar

// Abre o menu quando o botão de menu é clicado
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.style.display = 'block'; // Mostra o overlay
});

// Fecha o menu quando o botão de fechar (X) é clicado
btnFecharMenu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Esconde o overlay
});

// Fecha o menu ao clicar no overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.style.display = 'none'; // Esconde o overlay
});
