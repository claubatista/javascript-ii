const sidebar = document.querySelector(".sidebar-menu");
const botaoSidebar = document.querySelector(".sidebar-menu__button");


botaoSidebar.addEventListener("click", function(evento){
    evento.preventDefault();
    
    if(sidebar.classList.contains("sidebar-menu__visible")){
        sidebar.classList.remove("sidebar-menu__visible");
        sidebar.classList.add("sidebar-menu__hidden")
    }else{
        sidebar.classList.remove
        ("sidebar-menu__hidden");
        sidebar.classList.add
        ("sidebar-menu__visible");
    }     
})