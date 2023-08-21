// var ready = (callback) => {
//     if (document.readyState != "loading") callback();
//     else document.addEventListener("DOMContentLoaded", callback);
// }
// ready(() => {
//     document.querySelector(".header").style.height = window.innerHeight + "px";
// })

const navEl = document.querySelector('.navbar');
let clicked = false;
const scrollYvalue = 90;

window.addEventListener('scroll', () => {
    if (!clicked) {
        if (window.scrollY >= scrollYvalue) {
            navEl.classList.add('navbar-scrolled')
        } else if (window.scrollY < scrollYvalue) {
            navEl.classList.remove('navbar-scrolled')
        }
    }

});

document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if (clicked) {
        clicked= false
        if (window.scrollY < scrollYvalue) {
            navEl.classList.remove('navbar-scrolled')
        }
    } else {
        navEl.classList.add('navbar-scrolled')
        clicked = true
    }


});