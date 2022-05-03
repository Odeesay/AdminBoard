function inActiveButtonClear(){
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



$('#nav__button__home').click(function(){
    inActiveButtonClear();
    $('#nav__button__home').addClass('nav__button__active');
    $('#home__icon').css('backgroundImage', 'url(images/homeIco__white.png)')
});

$('#nav__button__wallet').click(function(){
    inActiveButtonClear();
    $('#nav__button__wallet').addClass('nav__button__active');
    $('#wallet__icon').css('backgroundImage', 'url(images/wallIco__white.png)')
});

$('#nav__button__payment').click(function(){
    inActiveButtonClear();
    $('#nav__button__payment').addClass('nav__button__active');
    $('#payment__icon').css('backgroundImage', 'url(images/cardIco__white.png)')
});

$('#nav__button__invoice').click(function(){
    inActiveButtonClear();
    $('#nav__button__invoice').addClass('nav__button__active');
    $('#invoice__icon').css('backgroundImage', 'url(images/invoiceIco__white.png)')
});

$('#nav__button__setting').click(function(){
    inActiveButtonClear();
    $('#nav__button__setting').addClass('nav__button__active');
    $('#setting__icon').css('backgroundImage', 'url(images/settingIco__white.png)')
});

$('#nav__button__transactions').click(function(){
    inActiveButtonClear();
    $('#nav__button__transactions').addClass('nav__button__active');
    $('#transactions__icon').css('backgroundImage', 'url(images/transIco__white.png)')
});

// asd
