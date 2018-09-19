const sidebar = document.querySelector(".sidebar-menu");
const botaoSidebar = document.querySelector(".sidebar-menu__button");


botaoSidebar.addEventListener("click", function(evento){
    evento.preventDefault();
    
    if(sidebar.style.marginLeft === "0px"){
        sidebar.style.marginLeft = "-431px";
    }else{
        sidebar.style.marginLeft = "0px";
    }
})