
const botao = document.querySelector(".feedback__button");
const input = document.getElementById("feedbackInputMessage");

    botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const feedback = document.createElement("p");
    const respostaFeedback = document.createTextNode(input.value);

    feedback.appendChild(respostaFeedback);

    const depoimentos = document.querySelector(".testimonials__subtitle");

    depoimentos.insertBefore(feedback, depoimentos.childNodes[1]);

})
