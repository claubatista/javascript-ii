const botao = document.querySelector(".tweet-composer__button");
const inputTweet = document.getElementById("tweetComposerInput");
const timeline = document.querySelector(".tweets-timeline");


botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const caixaTweet = document.createElement("div");
    caixaTweet.classList.add("tweets-timeline__box");

    if(inputTweet.value === undefined || inputTweet.value === null || inputTweet.value === "" || inputTweet.value === " "){
        inputTweet.focus();
        return false;
    }  

    const header = document.createElement("div");
    header.className = "tweets-timeline__header";
    header.innerHTML = `
    <span class="tweets-timeline__name">clau</span>
    <span class="tweets-timeline__username">@bbdesro</span>
    <span class="tweets-timeline__date">${new Date()}</span>`

    const novoTweet = document.createElement("p");
    novoTweet.innerHTML = inputTweet.value;

    const footer = document.createElement("div");
    header.className = "tweets-timeline__footer"
    footer.innerHTML = `
    <div class="tweets-timeline__footer">
    <button class="tweets-timeline__delete-button button">Excluir</button></div>`

    // ${novoTweet.removeChild(novoTweet)}

    caixaTweet.appendChild(novoTweet);
    caixaTweet.appendChild(header);
    caixaTweet.appendChild(novoTweet);
    caixaTweet.appendChild(footer);

    //div na timeline
    timeline.insertBefore(caixaTweet, timeline.childNodes[0]);

    inputTweet.value = null;

    //botao excluir
    const botaoExcluir = document.querySelector(".tweets-timeline__delete-button");

    botaoExcluir.addEventListener("click", function(evento){
    evento.preventDefault();
    caixaTweet.remove();
})

})
