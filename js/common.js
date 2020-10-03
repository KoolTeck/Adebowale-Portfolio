
// nav toggler
const linksContainer = document.querySelector('.links-container');
const navTogle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
let activeElement = document.getElementById('active'); 
const aboutImg = links.querySelector('.about-img'); 

window.addEventListener('scroll', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    const nav = document.querySelector('nav');
    const navCenter = document.querySelector('.nav-center');
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        nav.classList.add('fixed-nav');
        navTogle.style.display = "block";
        navCenter.style.display = 'block';
        links.style.display = "grid";
        linksContainer.classList.add('hide-links');
        activeElement.removeAttribute('id');
        aboutImg.style.display = "block";
        aboutImg.setAttribute('src', '../images/kooljoe1.jpg');

    } else{
        nav.classList.remove('fixed-nav');
        navTogle.style.display = "none";
        navCenter.style.display = 'flex';
        linksContainer.classList.remove('hide-links')
        links.style.display = "flex";
        activeElement.setAttribute('id', 'active');
        aboutImg.style.display = "none";
        aboutImg.removeAttribute('src');
    }
    // back to top button
const topBtn = document.querySelector('.top-link');
scrollHeight > 200 
? topBtn.classList.add('show-link')
: topBtn.classList.remove('show-link');
});
// toggling font awesome icon
let burger = document.getElementById('mybtn');

function toggleBetweenClasses(el, c1, c2) {
  el.classList.toggle(c1);
  el.classList.toggle(c2);
}

function myToggleBetweenClasses() {
  toggleBetweenClasses(burger, "fa-bars", "fa-times");
  linksContainer.classList.toggle('hide-links');
}

burger.addEventListener('click', myToggleBetweenClasses);

// date
let date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();