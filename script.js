"use strict";

const mainsection = document.querySelector('.main-page');
const section1 = document.querySelector('.first-page');
const section2 = document.querySelector('.second-page');
const section3 = document.querySelector('.third-page');
const section4 = document.querySelector('.forth-page');
const photo1 = document.querySelector('.photo1');
const photo2 = document.querySelector('.photo2');
const photo3 = document.querySelector('.photo3');
const row1 = document.querySelector('.row1');
const row2 = document.querySelector('.row2');
const row3 = document.querySelector('.row3');
const row4 = document.querySelector('.row4');
const row5 = document.querySelector('.row5');

section1.style.display = 'none';
section2.style.display = 'none';
section3.style.display = 'none';
section4.style.display = 'none';

// first row


row1.addEventListener('click', function() {
    section2.style.display = 'none';
    section3.style.display = 'none';
    section1.style.display = 'none';
    section4.style.display = 'none';
    mainsection.style.display = '';
    row1.classList.add('active');
    row2.classList.remove('active');
    row3.classList.remove('active');
    row4.classList.remove('active');
    row5.classList.remove('active');
})
///////////////////


row2.addEventListener('click', function() {
    mainsection.style.display = 'none';
    section1.style.display = '';
    section3.style.display = 'none';
    section2.style.display = 'none';
    section4.style.display = 'none';
    row2.classList.add('active');
    row1.classList.remove('active');
    row3.classList.remove('active');
    row4.classList.remove('active');
    row5.classList.remove('active');
})

////////////////////
//third row

row3.addEventListener('click', function() {
    mainsection.style.display = 'none';
    section1.style.display = 'none';
    section2.style.display = '';
    section3.style.display = 'none';
    section4.style.display = 'none';
    row3.classList.add('active');
    row2.classList.remove('active');
    row1.classList.remove('active');
    row4.classList.remove('active');
    row5.classList.remove('active');
})
////////////////////
// forth row

row4.addEventListener('click', function() {
    mainsection.style.display = 'none';
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = '';
    section4.style.display = 'none';
    row4.classList.add('active');
    row2.classList.remove('active');
    row3.classList.remove('active');
    row1.classList.remove('active');
    row5.classList.remove('active');
})
///////////////
//fifth row


row5.addEventListener('click', function() {
    mainsection.style.display = 'none';
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'none';
    section4.style.display = '';
    row5.classList.add('active');
    row2.classList.remove('active');
    row3.classList.remove('active');
    row4.classList.remove('active');
    row1.classList.remove('active');
})
// show photo bigger
photo1.addEventListener('mouseenter', function() {
    photo1.classList = 'photo-on';
})

photo2.addEventListener('mouseenter', function() {
    photo2.classList = 'photo-on';
})

photo3.addEventListener('mouseenter', function() {
    photo3.classList = 'photo-on';
})

// show photo smaller

photo1.addEventListener('mouseleave', function() {
    photo1.classList = 'photo-out';
})

photo2.addEventListener('mouseleave', function() {
    photo2.classList = 'photo-out';
})

photo3.addEventListener('mouseleave', function() {
    photo3.classList = 'photo-out';
})
