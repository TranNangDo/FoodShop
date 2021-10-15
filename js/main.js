const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.menu-btn');
const panes = $$('.menu-img');
// console.log(panes)

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