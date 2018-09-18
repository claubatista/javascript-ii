const inputNome = document.getElementById("contatoInputNome");
const inputEmail = document.getElementById("contatoInputEmail");
const inputFone = document.getElementById("contatoInputPhone");
const inputMsg = document.getElementById("contatoInputMessage");

const botao = document.querySelector(".contato__button");
botao.addEventListener("click", function(evento){
    evento.preventDefault();

    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
        inputNome.focus();
        return false;
    } else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
        inputEmail.focus();
        return false;
    } else if(inputFone.value === undefined || inputFone.value === null || inputFone.value === "" || inputFone.value === " "){ 
        inputFone.focus();
        return false;   
    } else if(inputMsg.value === undefined || inputMsg.value === null || inputMsg.value === "" || inputMsg.value === " "){ 
        inputMsg.focus();
        return false;
    } 
    alert("Deu certo!!!")
    return true;       
})