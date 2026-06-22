
// Botão para trocar tema

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

});


// Formulário

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Verifica campos vazios

    if(nome === "" || email === "" || mensagem === ""){

        alert("Preencha todos os campos!");

        return;
    }

    // Validação simples de e-mail

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email)){

        alert("Digite um e-mail válido!");

        return;
    }

    // Simulação de envio

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

    document.getElementById("resultado").innerHTML =
    "Mensagem enviada com sucesso!";
});