let clickFlip = 0;

function inActiveMenuButtonClear(){
    $('#nav__button__home').removeClass('nav__button__active');
    $('#home__icon').css('backgroundImage', 'url(images/homeIco.png)')
    $('#nav__button__wallet').removeClass('nav__button__active');
    $('#wallet__icon').css('backgroundImage', 'url(images/wallIco.png)')
    $('#nav__button__payment').removeClass('nav__button__active');
    $('#payment__icon').css('backgroundImage', 'url(images/cardIco.png)')
    $('#nav__button__invoice').removeClass('nav__button__active');
    $('#invoice__icon').css('backgroundImage', 'url(images/invoiceIco.png)')
    $('#nav__button__setting').removeClass('nav__button__active');
    $('#setting__icon').css('backgroundImage', 'url(images/settingIco.png)')
    $('#nav__button__transactions').removeClass('nav__button__active');
    $('#transactions__icon').css('backgroundImage', 'url(images/transIco.png)')
}

function inActiveNavButtonClear(){
    $('#history__nav__button__1').removeClass('history__nav__button__active');
    $('#history__nav__button__2').removeClass('history__nav__button__active');
    $('#history__nav__button__3').removeClass('history__nav__button__active');
}


$('#nav__button__home').click(function(){
    inActiveMenuButtonClear();
    $('#nav__button__home').addClass('nav__button__active');
    $('#home__icon').css('backgroundImage', 'url(images/homeIco__white.png)');
});

$('#nav__button__wallet').click(function(){
    inActiveMenuButtonClear();
    $('#nav__button__wallet').addClass('nav__button__active');
    $('#wallet__icon').css('backgroundImage', 'url(images/wallIco__white.png)');
});

$('#nav__button__payment').click(function(){
    inActiveMenuButtonClear();
    $('#nav__button__payment').addClass('nav__button__active');
    $('#payment__icon').css('backgroundImage', 'url(images/cardIco__white.png)');
});

$('#nav__button__invoice').click(function(){
    inActiveMenuButtonClear();
    $('#nav__button__invoice').addClass('nav__button__active');
    $('#invoice__icon').css('backgroundImage', 'url(images/invoiceIco__white.png)');
});

$('#nav__button__setting').click(function(){
    inActiveMenuButtonClear();
    $('#nav__button__setting').addClass('nav__button__active');
    $('#setting__icon').css('backgroundImage', 'url(images/settingIco__white.png)');
});

$('#nav__button__transactions').click(function(){
    inActiveMenuButtonClear();
    $('#nav__button__transactions').addClass('nav__button__active');
    $('#transactions__icon').css('backgroundImage', 'url(images/transIco__white.png)');
});

// ==================================

$('#history__nav__button__1').click(function(){
    inActiveNavButtonClear();
    $('#history__nav__button__1').addClass('history__nav__button__active');
});

$('#history__nav__button__2').click(function(){
    inActiveNavButtonClear();
    $('#history__nav__button__2').addClass('history__nav__button__active');
});

$('#history__nav__button__3').click(function(){
    inActiveNavButtonClear();
    $('#history__nav__button__3').addClass('history__nav__button__active');
});

// =============================


    $('.card__face__front').click(function(){
        $('.card').toggleClass('is-flipped');
    });

    $('.card__face__back').click(function(){
        $('.card').toggleClass('is-flipped');
    });

// ===========================

    let cards = document.querySelectorAll('.card');


for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mousemove', startRotate);
    cards[i].addEventListener('mouseout', stopRotate);
}

function stopRotate(event) {
    let cardItem = this.querySelector('.card__face');
    cardItem.style.transform = 'rotate(0)';
}

function stopRotateBAck(event) {
    let cardItem = this.querySelector('.card__face__back');
    cardItem.style.transform = 'rotate(0)';
}

function startRotate(event) {
    let cardItem = this.querySelector('.card__face');
    
    let halfHeight = cardItem.offsetHeight/2;
    let halfWidth = cardItem.offsetWidth/2;
    
   cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/5+'deg) rotateY('+(event.offsetX - halfWidth)/5+'deg)';
    
} 



