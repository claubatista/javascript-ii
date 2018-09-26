const botao = document.querySelector("button");
const atributos = document.getElementById("externo");
const artigo = document.querySelector(".article")

botao.addEventListener("click", function(){
    const texto = document.createElement("p");
    texto.innerHTML = `os atributos são id: ${atributos.id}, tipo: ${atributos.type}, idioma: ${atributos.hreflang}, rel: ${atributos.rel}, target: ${atributos.target}, href:   ${atributos.href}`

    artigo.appendChild(texto);
})
