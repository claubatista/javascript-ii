const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirmacao = document.getElementById("cadastroInputEmailConfirm");
const inputSenha = document.getElementById("cadastroInputPassword");
const inputSenhaConfirmacao = document.getElementById("cadastroInputPasswordConfirm");
const inputFone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");

const botao = document.querySelector(".cadastro__button");
botao.addEventListener("click", function(evento){
    evento.preventDefault();

    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
        inputNome.focus();
        return false;
    } else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
        inputEmail.focus();
        return false;
    } else if(inputSenha.value === undefined || inputSenha.value === null || inputSenha.value === "" || inputSenha.value > 7 || inputSenha.value === " "){
        inputSenha.focus();
        return false;
    } else if(inputFone.value === undefined || inputFone.value === null || inputFone.value === "" || inputFone.value === " "){
        inputFone.focus();
        return false;
    } 

})
