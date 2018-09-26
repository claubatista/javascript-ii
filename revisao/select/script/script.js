const inputArea = document.getElementById("selectInputArea");
const seletor = document.querySelector("select")
const botaoExcluir = document.querySelector(".select__button");

botaoExcluir.addEventListener("click", function(evento){
    evento.preventDefault();

    const itens = (seletor[inputArea.selectedIndex])
    console.log(itens)
        itens.remove()
}) 