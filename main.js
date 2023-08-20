// var ready = (callback) => {
//     if (document.readyState != "loading") callback();
//     else document.addEventListener("DOMContentLoaded", callback);
// }
// ready(() => {
//     document.querySelector(".header").style.height = window.innerHeight + "px";
// })

const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 90) {
        navEl.classList.add('navbar-scrolled')
    } else if (window.scrollY < 90) {
        navEl.classList.remove('navbar-scrolled')
    }
});