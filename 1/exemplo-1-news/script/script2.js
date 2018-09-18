const input =  document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    // cria novos elementos
    const resposta = document.createElement("span");

    // cria nós de texto
    const respostaMensagem = document.createTextNode ("Email cadastrado com sucesso!");

    // insere item dentro de um elemento
    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");

    // insere item em um elemento antes de um item estabelicido
    newsForm.insertBefore(resposta, newsForm.childNodes[0]);

})