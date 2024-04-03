//animate auto type text
const div = document.querySelector(".home-text");
const text = "There's no better feeling than getting your nails done.";

function typingEffect(element, text, i=0){
    if(i===0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    if(i===text.length -1) {
        return;
    }

    setTimeout(() => typingEffect(element,text, i+1), 50);
}
typingEffect(div, text);


//menu-bar function

const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", () =>{
    const mobileMenu = document.querySelector(".blank");
    menuBar.classList.toggle("change");
    mobileMenu.classList.toggle("blankClasslist");
    const mobileLink = document.querySelectorAll(".mobile-link");
    mobileLink.forEach(link => {
        link.classList.toggle("blankClasslist-link");
    })
    
})


//review slide

let currentReviewIndex = 1;
const totalReviews = 3;

function showNextReview() {
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'none';
    currentReviewIndex = (currentReviewIndex % totalReviews) + 1;
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'block';
}

function showPrevReview() {
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'none';
    currentReviewIndex = (currentReviewIndex - 2 + totalReviews) % totalReviews + 1;
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'block';
}





//auto scroll

const overflowGrid = document.querySelector(".service-page-grid");
const scrollAmount = 300; // Adjust this value as needed
const scrollInterval = 2000; // Adjust this value as needed

let scrollPosition = 0;

setInterval(() => {
    // Check if scrolling to the right will exceed the maximum scroll width
    if (scrollPosition + overflowGrid.clientWidth >= overflowGrid.scrollWidth) {
        // If so, scroll back to the beginning
        scrollPosition = 0;
    } else {
        // Otherwise, increment the scroll position
        scrollPosition += scrollAmount;
    }

    // Smoothly scroll to the new position
    overflowGrid.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}, scrollInterval);



//make shop link visible when you hover over wrapper

const shopLink = document.querySelectorAll(".shop-link");
const shopWrapper = document.querySelectorAll(".shop-item");

shopLink.forEach(link => {
    link.style.display = "none";
})

shopWrapper.forEach(wrapper => {
    wrapper.addEventListener("mouseover", ()=>{
        
    })
})
