let ibgs = document.querySelectorAll('.ibg');
for (let ibg of ibgs) {
    let img = ibg.querySelector('img');
    if (img) {
         let src=img.getAttribute('src');
          ibg.style.backgroundImage = `url(${src})`;
    }
}

let burger = document.querySelector('.menu-mainBlock__burger');
let menuMainBlock = document.querySelector('.menu-mainBlock__list');
burger.addEventListener('click', function () {
    this.classList.toggle('activve');
    menuMainBlock.classList.toggle('activve');
    document.body.classList.toggle('lock');
})