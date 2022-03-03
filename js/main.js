//ハンバーガーメニュー
const burger = document.querySelector('.sp-nav');
const bar = document.querySelectorAll('.bar');

const nav = document.querySelector('nav');
const gloNav = document.querySelector('ul');



burger.addEventListener('click', () => {
    for (let i = 0; i < bar.length; i++) {
       bar[i].classList.toggle('show');
    }

    gloNav.classList.toggle('show');
    nav.classList.toggle('show');
})