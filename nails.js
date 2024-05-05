//menubar

const menuBtn = document.querySelector(".menu-bar");
const dropdown = document.getElementById("dropdown-menu");
const navLinks = document.querySelectorAll(".nav-link");
menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("change");
    dropdown.classList.toggle('change-height');
    navLinks.forEach(link=>{
        link.classList.toggle('change-display');
    })
} )


//navbar shadow on scrollY

window.addEventListener("scroll", ()=>{
    const navWrapper = document.querySelector(".nav-wrapper");
    if(window.scrollY > 100) {
        navWrapper.classList.add('navbar-shadow');
    } else {
        navWrapper.classList.remove('navbar-shadow');
    }

});


//slider-carousel
//select slides
const slides = document.querySelectorAll(".slider");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");

//selecct radio btns
const radio1 = document.querySelector('.radio1');
const radio2 = document.querySelector('.radio2');
const radio3 = document.querySelector('.radio3');



function resetSlides() {
    slide1.classList.remove('active-slide');
    slide2.classList.remove('active-slide');
    slide3.classList.remove('active-slide');
}

function resetColor() {
    radio1.classList.remove('active-btn');
    radio2.classList.remove('active-btn');
    radio3.classList.remove('active-btn');
}

radio1.addEventListener("click", () => {
    resetColor();
    resetSlides();
    radio1.classList.add('active-btn');
    slide1.classList.add('active-slide');
});

radio2.addEventListener("click", () => {
    resetColor();
    resetSlides();
    radio2.classList.add('active-btn');
    slide2.classList.add('active-slide');
});

radio3.addEventListener("click", () => {
    resetColor();
    resetSlides();
    radio3.classList.add('active-btn');
    slide3.classList.add('active-slide');
});


