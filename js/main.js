const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.menu-btn');
const panes = $$('.menu-img');
// console.log(panes)

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav__menu');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fas');
    navbar.classList.toggle('active');
}
let couter = 1;

tabs.forEach((tab, index) => {
    const pane = panes[index];
    // console.log(index)
    tab.onclick = () => {
        $('.menu-btn.img-active').classList.remove('img-active');
        $('.menu-img.img-active').classList.remove('img-active');
        tab.classList.add('img-active');
        pane.classList.add('img-active');
    }
});