//book appointment
const forms = document.querySelectorAll('.form-container form');
const progressCircles = document.querySelectorAll('.progress-circle');

document.getElementById('forward-btn1').addEventListener('click', () => {
    forms[0].classList.remove('active-form');
    forms[1].classList.add('active-form');
    progressCircles[0].classList.remove('active-load');
    progressCircles[1].classList.add('active-load');
});

document.getElementById('forward-btn2').addEventListener('click', () => {
    forms[1].classList.remove('active-form');
    forms[2].classList.add('active-form');
    progressCircles[1].classList.remove('active-load');
    progressCircles[2].classList.add('active-load');
});

document.getElementById('backward-btn2').addEventListener('click', () => {
    forms[1].classList.remove('active-form');
    forms[0].classList.add('active-form');
    progressCircles[1].classList.remove('active-load');
    progressCircles[0].classList.add('active-load');
});

document.getElementById('backward-btn3').addEventListener('click', () => {
    forms[2].classList.remove('active-form');
    forms[1].classList.add('active-form');
    progressCircles[2].classList.remove('active-load');
    progressCircles[1].classList.add('active-load');
});