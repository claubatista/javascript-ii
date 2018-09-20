const links = document.querySelector(".gallery__nav");
const image = document.querySelector(".gallery__image");
const texto = document.querySelector(".gallery__caption");

for (let i = 0; i < links.children.length; i++){
    links.children[i].addEventListener("click", function(){
        const img = this.dataset.image;
        console.log(img);
        image.src = img;

        const descritivo = this.dataset.title;
        console.log(descritivo);
        texto.innerHTML = descritivo;
    })
}