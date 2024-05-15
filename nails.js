//testimony
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');


const rateWrapper1 = document.getElementById('rating1');
const rateWrapper2 = document.getElementById('rating2');
const rateWrapper3 = document.getElementById('rating3');

function resetRating(){
    rateWrapper1.classList.remove('active-rating');
    rateWrapper2.classList.remove('active-rating');
    rateWrapper3.classList.remove('active-rating');
}


card1.addEventListener('click', ()=>{
    resetRating();
    rateWrapper1.classList.add('active-rating'); 
    rateWrapper1.classList.add('slideIn');
});

card2.addEventListener('click', ()=>{
    resetRating();
    rateWrapper2.classList.add('active-rating'); 
    rateWrapper2.classList.add('slideIn2');
});

card3.addEventListener('click', ()=>{
    resetRating();
    rateWrapper3.classList.add('active-rating'); 
    rateWrapper3.classList.add('slideIn2');
});




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
    slider1.classList.add('slideLeft');
} );

radio2.addEventListener("click", ()=>{
    resetRadio();
    resetSlider();
    radio2.classList.add('active-radio');
    slider2.classList.add("active-slider");
    slider2.classList.add('slideLeft');
} );


radio3.addEventListener("click", ()=>{
    resetRadio();
    resetSlider();
    radio3.classList.add('active-radio');
    slider3.classList.add("active-slider");
    slider3.classList.add('slideLeft');
} );



//service carousel

//select service-boxes
const serviceImg1 = document.querySelector(".service-box1");
const serviceImg2 = document.querySelector(".service-box2");
const serviceImg3 = document.querySelector(".service-box3");
const serviceImg4 = document.querySelector(".service-box4");


//select-radio btns

const radioBtn1 = document.querySelector(".radio-1");
const radioBtn2 = document.querySelector(".radio-2");
const radioBtn3 = document.querySelector(".radio-3");
const radioBtn4 = document.querySelector(".radio-4");


//select service prices

const wrapper1 = document.querySelector(".wrapper1");
const wrapper2 = document.querySelector(".wrapper2");
const wrapper3 = document.querySelector(".wrapper3");
const wrapper4 = document.querySelector(".wrapper4");


//reset serviceboxes

function resetBoxes(){
    serviceImg1.classList.remove("active-image");
    serviceImg2.classList.remove("active-image");
    serviceImg3.classList.remove("active-image");
    serviceImg4.classList.remove("active-image");
};


function resetRadioBtns(){
    radioBtn1.classList.remove('active-radio');
    radioBtn2.classList.remove('active-radio');
    radioBtn3.classList.remove('active-radio');
    radioBtn4.classList.remove('active-radio');
};

function resetWrapper(){
    wrapper1.classList.remove("active-container");
    wrapper2.classList.remove("active-container");
    wrapper3.classList.remove("active-container");
    wrapper4.classList.remove("active-container");
}

//add click events
radioBtn1.addEventListener("click", ()=>{
    resetBoxes();
    resetRadioBtns();
    resetWrapper();
    serviceImg1.classList.add("active-image");
    radioBtn1.classList.add('active-radio');
    wrapper1.classList.add("active-container");
});

radioBtn2.addEventListener("click", ()=>{
    resetBoxes();
    resetRadioBtns();
    resetWrapper();
    serviceImg2.classList.add("active-image");
    radioBtn2.classList.add('active-radio');
    wrapper2.classList.add("active-container");
});

radioBtn3.addEventListener("click", ()=>{
    resetBoxes();
    resetRadioBtns();
    resetWrapper();
    serviceImg3.classList.add("active-image");
    radioBtn3.classList.add('active-radio');
    wrapper3.classList.add("active-container");
});



radioBtn4.addEventListener("click", ()=>{
    resetBoxes();
    resetRadioBtns();
    resetWrapper();
    serviceImg4.classList.add("active-image");
    radioBtn4.classList.add('active-radio');
    wrapper4.classList.add("active-container");
});

