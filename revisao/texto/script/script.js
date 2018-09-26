const artigo = document.querySelector(".article__p");
const botaoAumentar = document.querySelector(".aumentar__texto");
const botaoDiminuir = document.querySelector(".diminuir__texto")

let fonte = 16;
botaoDiminuir.addEventListener("click", function(){
    fonte--;
    artigo.style.fontSize = `${fonte}px`;
})

botaoAumentar.addEventListener("click", function(){
    fonte++;
    artigo.style.fontSize = `${fonte}px`;
    
})
