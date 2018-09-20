const botao = document.querySelector(".tweet-composer__button");
const inputTweet= document.getElementById("tweetComposerInput");


botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const caixaTweet = document.createElement("div");
    caixaTweet.classList.add("tweets-timeline__box");

    const text = document.createElement("p");
    const novotweet = document.createTextNode(inputTweet.value);
    console.log(text)

    text.appendChild(novotweet);
    caixaTweet.appendChild(text);

    const timeline = document.querySelector(".tweets-timeline");
    timeline.insertBefore(caixaTweet, timeline.childNodes[0]);

})