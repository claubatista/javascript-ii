
const botao = document.querySelector(".transacao__button");

    botao.addEventListener("click", function(evento){
    evento.preventDefault();

// 1. Pega a tabela
    const tabela = document.querySelector(".extrato__table");
    
    const inputNome = document.getElementById("transacaoInputName");
    const inputValor = document.getElementById("transacaoInputMoney");
    const inputData = document.getElementById("transacaoInputDate");

// 2. Cria uma nova linha
    const linha = document.createElement("tr")

// 3. cria uma nova coluna 
// 4. cria um texto
// 5. insira o texto na coluna
    const colunaNome = document.createElement("td");
    const colunaNomeTexto = document.createTextNode(inputNome.value)
    colunaNome.appendChild(colunaNomeTexto);

    const colunaValor = document.createElement("td");
    const colunaValorTexto = document.createTextNode(inputValor.value)
    colunaValor.appendChild(colunaValorTexto);

    const colunaData = document.createElement("td");
    const colunaDataTexto = document.createTextNode(inputData.value)
    colunaData.appendChild(colunaDataTexto);

// 6. inserir colunas na linha
    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);

// 7. adicionar linha a tabela
    tabela.appendChild(linha);  
})
