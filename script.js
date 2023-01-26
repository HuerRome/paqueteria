/*var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var button1 = document.querySelector(".left");
var button2 = document.querySelector(".right");
var carrusel = document.querySelector(".start .carousel > div");

button1.addEventListener("click", function(){
    img1.style.display="none";
})

button2.addEventListener("click", function(){
    img2.style.display="none";
})*/




//menus desplegables
let menu = document.querySelector(".container .nav-cel");
let button = document.querySelector("nav > .menu button");

button.addEventListener("click", function(){
    menu.classList.toggle("active");
})


//go down button
let down = document.querySelector(".slider-frame > div div");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 5000; // For Safari
    document.documentElement.scrollTop = 5000; // For Chrome, Firefox, IE and Opera
  }
  
  down.addEventListener("click",topFunction)

//---------------------------------------Formularios-------------------------------------------------
casillero = document.querySelector(".btn-casillero");
formulario = document.querySelector(".casillero");

casillero.addEventListener("click", function(){
    formulario.classList.add("active");
})


casillero_cerrar = document.querySelector(".casillero > div > div > div:first-child button");
formulario = document.querySelector(".casillero");

casillero_cerrar.addEventListener("click", function(){
    formulario.classList.remove("active");
})









