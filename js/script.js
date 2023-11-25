document.addEventListener('click', function (e) {
    let elem = e.target;
    if (elem.closest('a')||elem.closest('button')) {
        e.preventDefault();
    }  
})
document.addEventListener('mousedown', function (e) {
    let elem = e.target;
    if (elem.closest('.page__AOD')) {
        e.preventDefault();
    }  
})
document.addEventListener('mouseup', function () {
    
    if (flagMouseOver) {
        console.log('сработ mouseup на document');
       
        mouseUpThreeBlock();
         
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
page__AOD.addEventListener('click', function (e) {
 
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
let flagMouseOver = false;
let coordMoveX = 0;
page__AOD.addEventListener('mousedown', function (e) {
    
    console.log(flagMouseOver, 'down', e.target);
    let elem = e.target;
    if (elem.matches('.AOD__arrow')) return;
    if (elem.matches('.AOD__threeCyrcle>span')) return;
    flagMouseOver = true;
    coordX = e.clientX;
    coordMoveX=e.clientX;
    e.preventDefault();
})

let AOD__overHid = document.querySelector('.AOD__overHid');
let AODoverHidCoords = AOD__overHid.getBoundingClientRect();

let flagInner = true;
function powww() {
    flagInner = false;
    setTimeout(function () {
        flagInner = true;
    },200);
}
    
let leftNew=0;
AOD__overHid.addEventListener('mousemove', function (e) {
    if (flagInner) {
        powww();
        if (flagMouseOver) {
            if (coordMoveX > e.clientX) {
                console.log(coordMoveX, e.clientX, 'влево');
                //  AOD__threeBlockPresentation.style.left = (leftStart + (e.clientX - AODoverHidCoords.x)) + 'px';
                // // leftNew = leftNew - (leftNew - (e.clientX - AODoverHidCoords.x));
                // // AOD__threeBlockPresentation.style.left = leftNew + 'px';
                AOD__threeBlockPresentation.style.left = (leftStart - (AODoverHidCoords.width - (e.clientX - AODoverHidCoords.x))) + 'px';
                coordMoveX = e.clientX;
                console.log(AOD__threeBlockPresentation.style.left);
            } else if (coordMoveX < e.clientX) {
                // leftNew =leftStart + (e.clientX - AODoverHidCoords.x);
                // AOD__threeBlockPresentation.style.left = leftNew + 'px';
                AOD__threeBlockPresentation.style.left = (leftStart + (e.clientX - AODoverHidCoords.x)) + 'px';     
                coordMoveX = e.clientX;            
            }       
    }
    }       
})
function mouseUpThreeBlock () {
    if (!flagMouseOver) return;
    flagMouseOver = false;
    coordMoveX = 0;
     console.log(flagMouseOver, 'up', event.target);
    let elem = event.target;
    let coordXup = event.clientX;
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
 
}

page__AOD.addEventListener('mouseup', mouseUpThreeBlock)
//======================================================================================
let label = null;
let inputEmail = document.querySelector('.saddle__input');
inputEmail.addEventListener('focus', function (e) {
    // this.value = '';
    this.classList.add('inpActive');
    if (this.classList.contains('err')) {
      this.classList.remove('err');  
    }
    if (label) {
        label.remove();
        label = null;
    }
    console.log(21212);
})
inputEmail.addEventListener('blur', function (e) {
    
    this.classList.remove('inpActive');

})
//===================================================================================
let saddle__button = document.querySelector('button.saddle__button');
let saddle__inputWrap=document.querySelector('.saddle__inputWrap');
saddle__button.addEventListener('click', function (e) {
    let valueInput = inputEmail.value;
    let index = valueInput.indexOf('@', 0);
    if (!valueInput || index === -1||index === 0 || valueInput.length === index + 1) {
        inputEmail.classList.add('err');
        let inputCoords = inputEmail.getBoundingClientRect();
        if (label) {
            label.remove();
            label = null;
        }
        label = document.createElement('div');
        label.classList.add('labelPosition');
        if (!valueInput) {
            label.textContent = 'Вы не ввели электронный адрес';
        } else if (index === -1) {
            label.textContent = `Адрес электронной почты должен содержать символ "@". В адресе "${inputEmail.value}" отсутствует символ "@".`;
        } else if (index === 0) {
            label.textContent = `Введите часть адреса до символа "@". Адрес "${inputEmail.value}" неполный. `;
        }else if (valueInput.length === index + 1) {
            label.textContent = `Введите часть адреса после символа "@". Адрес "${inputEmail.value}" неполный.`;
        }

        saddle__inputWrap.append(label);

        let x;
        x = (inputEmail.offsetWidth - label.offsetWidth) / 2;
        if (Math.abs(x) > inputCoords.x) {
            x = 2;
        }
        let y;
        y = inputEmail.offsetHeight + 5;
        if (inputCoords.bottom +label.offsetHeight + 5  > document.documentElement.clientHeight) {
            y = -(label.offsetHeight + 5);
            if (inputCoords.y - label.offsetHeight - 5 < 0) {
                let exitBorder = inputCoords.y - label.offsetHeight - 5;
                y = -(label.offsetHeight + 5 + exitBorder);
            }
            
        }
        label.style.left = x + 'px';
        label.style.top = y + 'px';
    } else {
        inputEmail.value = '';
    }
})