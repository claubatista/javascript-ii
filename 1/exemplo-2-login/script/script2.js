const email = document.getElementById("loginInputEmail");
const botao = document.querySelector(".login__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const resposta = document.createElement("p");
    const respostaMensagem = document.createTextNode("Login efetuado com sucesso");

    resposta.appendChild(respostaMensagem);

    const loginForm = document.querySelector(".login__form");

    loginForm.insertBefore(resposta, loginForm.childNodes[0]);

})