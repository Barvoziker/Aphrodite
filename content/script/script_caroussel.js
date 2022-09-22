var slideIndex = 1; //Déclaration de la variable slideIndex et initialisation à 1 pour commencer sur la première image
showSlides(slideIndex);

function showSlides(n) {
    var i; //Déclaraiton de la variable i
    var slides = document.getElementsByClassName("Myslides"); //Récupération de la class mySlides
    var dots = document.getElementsByClassName("dot"); //Récupération de la class dot
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //Modification de règle css
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"; //Modification de règle css
    dots[slideIndex - 1].className += " active";

}

//Fonctions qui permettent la navigation entre chaque slides, suivant/précédent et l'affichage
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
//Fin