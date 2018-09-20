const botao = document.getElementById("arrowTop")

botao.addEventListener("click", function(){
    console.log("clicou");
    window.scrollTo(pageXOffset, 0);
})

window.addEventListener("scroll", function(){
    if(this.pageYOffset > 450){
        botao.hidden = false;
    }else{
        botao.hidden = true;
    } 
})