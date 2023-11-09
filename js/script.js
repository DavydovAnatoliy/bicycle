let ibgs = document.querySelectorAll('.ibg');
for (let ibg of ibgs) {
    let img = ibg.querySelector('img');
    console.log(img);
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

let mainBlock__image = document.querySelector('.mainBlock__image');
let li_logo=document.querySelector('.li-logo');
function pow() {
    let i =0- scrollY/2;
    mainBlock__image.style.top = i + 'px';
    
    if (window.innerWidth < 821) {
        if (window.scrollY < 1) {
            li_logo.style.top = '8px';
            return;
        }
       li_logo.style.top= i + 'px';
    }
}
window.addEventListener('scroll', pow);
pow();