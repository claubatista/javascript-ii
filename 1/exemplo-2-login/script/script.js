const email = document.getElementById("loginInputEmail");
const botao = document.querySelector(".login__button");
botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const input = email.value;

    const loginForm = document.querySelector(".login__form");
    loginForm.innerHTML = `Login com o email ${input} efetuado com sucesso!`;
    // alert(`Login com o email ${input} efetuado com sucesso!`)
})