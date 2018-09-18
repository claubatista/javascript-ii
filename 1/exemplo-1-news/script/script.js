// const titulo = document.getElementById("formTitle");
    // console.log(titulo)

    const input = document.getElementById("newsInputEmail");
    const botao = document.querySelector(".news__button");
    botao.addEventListener("click", function(evento){
        evento.preventDefault();
        const email = input.value;

        const newsForm = document.querySelector (".news__form");
        newsForm.innerHTML = `O email ${email} foi cadastrato com sucesso!`;
        // alert(`O email ${email} foi cadastrato com sucesso!`);
    })