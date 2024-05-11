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
// set slides to display none.
const carouselSliders = document.querySelectorAll('.carouselSlider');
carouselSliders.forEach(slide =>{
    slide.style.display = 'none';
});


//select slides,
const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');


//get radio btns
const radio1 = document.querySelector(".radio1");
const radio2 = document.querySelector(".radio2");
const radio3 = document.querySelector(".radio3");

function resetSlider(){
    slider1.classList.remove("active-slider");
    slider2.classList.remove("active-slider");
    slider3.classList.remove("active-slider");

};

function resetRadio(){
    radio1.classList.remove('active-radio');
    radio2.classList.remove('active-radio');
    radio3.classList.remove('active-radio');
};



radio1.addEventListener("click", ()=>{
    resetRadio();
    resetSlider();
    radio1.classList.add('active-radio');
    slider1.classList.add("active-slider");
} );

radio2.addEventListener("click", ()=>{
    resetRadio();
    resetSlider();
    radio2.classList.add('active-radio');
    slider2.classList.add("active-slider");
} );


radio3.addEventListener("click", ()=>{
    resetRadio();
    resetSlider();
    radio3.classList.add('active-radio');
    slider3.classList.add("active-slider");
} );


//set slides to transition
