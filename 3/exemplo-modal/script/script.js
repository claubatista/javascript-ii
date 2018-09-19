const modal = document.querySelector(".login-modal")
const botaoFechar = document.querySelector(".login-modal__button-close");
const botao = document.querySelector(".login__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    modal.style.display = "flex";
})

botaoFechar.addEventListener("click", function(evento){
    evento.preventDefault();
    modal.style.display = "none";
})    
