$(document).ready(function() {
    $(".burger").on( "click",function(){
        $("nav ul").toggleClass("open");
    });
});

// date
let date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// back to top button
const topBtn = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
    scrollHeight = window.pageYOffset;
    scrollHeight > 200 
    ? topBtn.classList.add('show-link')
    : topBtn.classList.remove('show-link');
});

