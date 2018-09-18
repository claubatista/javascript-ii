// 1 - Pegar todos os inputs
const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirmacao = document.getElementById("cadastroInputEmailConfirm");
const inputSenha = document.getElementById("cadastroInputPassword");
const inputSenhaConfirmacao = document.getElementById("cadastroInputPasswordConfirm");
const inputFone = document.getElementById("cadastroInputPhone");
const inputNews = document.getElementById("cadastroInputNews");
const inputNivel = document.getElementsByName("level"); 
const inputArea = document.getElementById("cadastroInputArea");

const botao = document.querySelector(".cadastro__button");
botao.addEventListener("click", function(evento){
    evento.preventDefault();  

// 2 - Verificar se os inputs estão vazios, ou undefineds
// 3 - Verificar se os emails são os mesmos
// 4 - Verificar se a senha é a mesma
// 5 - Senha tem que ter mais que 7 digitos  
// 8 - Se news não estiver checkado exibir um alerta escrito  
    if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
        inputNome.focus();
        return false;
    } else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
        inputEmail.focus();
        return false;
    } else if(inputEmail.value !== inputEmailConfirmacao.value){
        alert("Os emails precisam ser iguais!");
    } else if(inputSenha.value.length < 6){
        alert("A senha precisa ter 7 caracteres")
    } else if (inputSenha.value !== inputSenhaConfirmacao.value){
        alert("As senhas precisam ser iguais!");
    } else if(inputFone.value === undefined || inputFone.value === null || inputFone.value === "" || inputFone.value === " "){
        inputFone.focus();
        return false;
    } else if(inputNews.checked === false){
        alert("É uma pena que você não deseja receber nosso conteúdo exclusivo")
    }

// 6 - O fundo muda de cor de acordo com a área
    const optionSelect = inputArea.options
    [inputArea.selectedIndex] 

    if(optionSelect.value === "Front-End"){
        document.querySelector("body").style.backgroundColor = "blue";
    } else if(optionSelect.value === "Back-End"){
        document.querySelector("body").style.backgroundColor = "green";
    } else if(optionSelect.value === "UX Designer"){
        document.querySelector("body").style.backgroundColor = "pink";
    } else if(optionSelect.value === "UI Designer"){
        document.querySelector("body").style.backgroundColor = "orange";  
    }
    
// 7 - dependando do nível escreve no console 
    let radioItem;
    for(let i = 0; i < inputNivel.length; i++){
        if(inputNivel[i].checked){
            console.log(inputNivel[i])
            radioItem = inputNivel[i]
        } 
    }
    if(radioItem.value === "Junior"){
        console.log("0 - 2 anos de experiência")
    } else if(radioItem.value === "Pleno"){
        console.log("2 - 5 anos de experiência")
    } else if(radioItem.value === "Senior"){
        console.log("5+ anos de experiência")
    }   
})
