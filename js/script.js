document.addEventListener('click', function (e) {
    let elem = e.target;
    if (elem.closest('a')||elem.closest('button')) {
        e.preventDefault();
    }
    
})
//=================================================================================

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
//================================================================================================
//slider
let page__AOD=document.querySelector('.page__AOD');
let AOD__wrapp = document.querySelector('.AOD__wrapp');
let AOD__threeBlockPresentation = document.querySelector('.AOD__threeBlockPresentation');
let leftStart = 0;
let indLeftStart=0;
AOD__threeBlockPresentation.style.left = leftStart + 'px';
let presentationBlocks = AOD__threeBlockPresentation.querySelectorAll('.block-presentation');
let spans = document.querySelectorAll('.AOD__threeCyrcle>span');
let indSpan = 0;
for (let block of presentationBlocks) {
    let spanColLeft = 0 - indSpan * block.offsetWidth;
    let span = spans[indSpan];
    span.classList.add(`left_${spanColLeft}`);
    span.setAttribute('data-left', `${spanColLeft}`)
    indSpan++;
}

let presentationBlocksLength = presentationBlocks.length-1;

    let presentationBlock = AOD__threeBlockPresentation.querySelector('.block-presentation');
    let widthOneBlockPresentation = presentationBlock.offsetWidth;
let widthTreeBlockPresentation = -(presentationBlocksLength * widthOneBlockPresentation);
    
window.addEventListener('resize', function (e) {
    AOD__threeBlockPresentation = document.querySelector('.AOD__threeBlockPresentation');
    presentationBlocks = AOD__threeBlockPresentation.querySelectorAll('.block-presentation');
    spans = document.querySelectorAll('.AOD__threeCyrcle>span');
    indSpan = 0;
for (let block of presentationBlocks) {
    let spanColLeft = 0 - indSpan * block.offsetWidth;
    let span = spans[indSpan];
    span.classList.add(`left_${spanColLeft}`);
    span.setAttribute('data-left', `${spanColLeft}`)
    indSpan++;
    }
    presentationBlock = AOD__threeBlockPresentation.querySelector('.block-presentation');
    widthOneBlockPresentation = presentationBlock.offsetWidth;
    widthTreeBlockPresentation = -(presentationBlocksLength * widthOneBlockPresentation);
    leftStart = 0-(widthOneBlockPresentation * indLeftStart);
    AOD__threeBlockPresentation.style.left = leftStart + 'px';

})
window.addEventListener('resize', poww)
function poww(e) {
    let windowWidth = window.innerWidth;
    let columnDob = document.querySelector('.gallery__column_dob');
    if (windowWidth < 541) {
        if (columnDob) return;
        let galleryColumn__imageHeight = document.querySelectorAll('.gallery-column__imageHeight');
        let gallery__row = document.querySelector('.gallery__row');
         columnDob = document.createElement('div');
        gallery__row.firstElementChild.after(columnDob);
        columnDob.classList.add('gallery__column');
        columnDob.classList.add('gallery__column_dob');
        for (let imageHeight of galleryColumn__imageHeight) {
            columnDob.append(imageHeight);
        }       
    } else {
        if (!columnDob) return;
        let galleryColumn__imageHeight = columnDob.querySelectorAll('.gallery-column__imageHeight');
        let galleryColumn__row = document.querySelectorAll('.gallery-column__row');
        let i = 0;
        for (let imageHeight of galleryColumn__imageHeight) {
            galleryColumn__row[i].append(imageHeight);
            i++;
        }
        columnDob.remove();
    }
}
poww();
AOD__wrapp.addEventListener('click', function (e) {
 
    let elem = e.target;
    if (elem.matches('.AOD__arrow')) {
        let atr = elem.dataset.str;
        if (atr === 'l') {
            if (leftStart > widthTreeBlockPresentation) {
                leftStart = leftStart - widthOneBlockPresentation;
                indLeftStart = indLeftStart + 1;
            AOD__threeBlockPresentation.style.left = leftStart + 'px';
            } else {
                AOD__threeBlockPresentation.style.left = widthTreeBlockPresentation + 'px';
            }
            
        } else {
            if (leftStart < 0) {
                leftStart = leftStart + widthOneBlockPresentation;
                indLeftStart = indLeftStart - 1;
                AOD__threeBlockPresentation.style.left = leftStart + 'px';
            } else {
                AOD__threeBlockPresentation.style.left = 0 + 'px';
            }
        }

 }
    
    if (elem.matches('.AOD__threeCyrcle>span')) {
        let left = elem.getAttribute('data-left');
        leftStart = Number(left);
        indLeftStart = Math.abs(leftStart / widthOneBlockPresentation);
        AOD__threeBlockPresentation.style.left = left + 'px';
    }
    let spanAckwOut = document.querySelector('.AOD__threeCyrcle>span.ackw');
    let spanAckwUp = document.querySelector(`.AOD__threeCyrcle>span.left_${leftStart}`);
    if (spanAckwOut === spanAckwUp) {
        return;
    } else {
        spanAckwOut.classList.remove('ackw');
        spanAckwUp.classList.add('ackw');
    }

})



let coordX = 0;

page__AOD.addEventListener('mousedown', function (e) {
    let elem = e.target;
    if (elem.matches('.AOD__arrow')) return;
    if (elem.matches('.AOD__threeCyrcle>span')) return;
    coordX = e.clientX;
    e.preventDefault();
})

page__AOD.addEventListener('mouseup', function (e) {
    let elem = e.target;
    if (elem.matches('.AOD__arrow')) return;
    if (elem.matches('.AOD__threeCyrcle>span')) return;
    let coordXup = e.clientX;
    if (coordXup === coordX) return;
    if (coordXup < coordX) {
         if (leftStart > widthTreeBlockPresentation) {
                leftStart = leftStart - widthOneBlockPresentation;
                indLeftStart = indLeftStart + 1;
            AOD__threeBlockPresentation.style.left = leftStart + 'px';
            } else {
                AOD__threeBlockPresentation.style.left = widthTreeBlockPresentation + 'px';
            }
    } else {
        if (leftStart < 0) {
                leftStart = leftStart + widthOneBlockPresentation;
                indLeftStart = indLeftStart - 1;
                AOD__threeBlockPresentation.style.left = leftStart + 'px';
            } else {
                AOD__threeBlockPresentation.style.left = 0 + 'px';
            }
    }
 
})
//======================================================================================
let inputEmail = document.querySelector('.saddle__input');
inputEmail.addEventListener('focus', function (e) {
    this.value = '';
    this.classList.add('inpActive');
})
inputEmail.addEventListener('blur', function (e) {
    this.value = '';
    this.classList.remove('inpActive');
})