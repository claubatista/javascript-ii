// tabela
const tabela = document.querySelector(".respostas__table");
const inputNome = document.getElementById("feedbackInputName");
const inputCidade = document.getElementById("feedbackInputCidade");
const inputComentario = document.getElementById("feedbackInputComentario");

// botao
const botao = document.querySelector(".feedback__button");
 botao.addEventListener("click", function(evento){
     evento.preventDefault();
     console.log("funciona!!!")

// cria uma linha nova
 const linhaNova = document.createElement("tr");
 console.log(linhaNova)

//cria uma coluna nova e um texto; e inse o texto na coluna
 const colunaNome = document.createElement("td");
 const colunaNomeTexto = document.createTextNode(inputNome.value);
 colunaNome.appendChild(colunaNomeTexto);

 const colunaCidade = document.createElement("td");
 const colunaCidadeTexto = document.createTextNode(inputCidade.value);
 colunaCidade.appendChild(colunaCidadeTexto);

 const colunaComentario = document.createElement("td");
 const colunaComentarioTexto = document.createTextNode(inputComentario.value);
 colunaComentario.appendChild(colunaComentarioTexto);

// insere as colunas na linha
linhaNova.appendChild(colunaNome);
linhaNova.appendChild(colunaCidade);
linhaNova.appendChild(colunaComentario);

// adiciona a linha na tabela
tabela.appendChild(linhaNova);  
})