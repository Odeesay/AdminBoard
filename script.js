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

// =========================  Donut chart



const data = {
    labels: [
      'Sun',
      'Mon',
      'Tue'
    ],
    datasets: [{
      label: 'Activity',
      data: [287, 312, 176],
      backgroundColor: [
        '#00D171',
        '#FF684D',
        '#01BEFF'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );



//   ============================ Line chart

const labelsLine = [1,2,3,4];
const dataLine = {
  labels: labelsLine,
  datasets: [{
    data: [65, 63, 70, 87],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};


const configLine = {
    type: 'line',
    data: dataLine,
    options: {
        plugins: {
          legend: {
                display: false
          }
        }
      }
  };

  const myChartLine = new Chart(
    document.getElementById('myChartLine'),
    configLine
  ); 

//   ============================== Bar chart

const labels = ['Sun','Mon','Tue','Wed'];
const dataBar = {
  labels: labels,
  datasets: [{
    data: [65, 123, 146, 81, 56, 55, 40],
    label: 'Week Statistics',
    backgroundColor: [
        '#00D171',
        '#FF684D',
        '#0E6EFF',
        '#FFBF26'
    ],
    borderWidth: 1
  }]
};

$('#legend__color1').css('backgroundColor', dataBar.datasets[0].backgroundColor[0]);
$('#legend__color2').css('backgroundColor', dataBar.datasets[0].backgroundColor[1]);
$('#legend__color3').css('backgroundColor', dataBar.datasets[0].backgroundColor[2]);
$('#legend__color4').css('backgroundColor', dataBar.datasets[0].backgroundColor[3]);

$('#legend__text1').text(dataBar.labels[0]+'day');
$('#legend__text2').text(dataBar.labels[1]+'day');
$('#legend__text3').text(dataBar.labels[2]+'sday');
$('#legend__text4').text(dataBar.labels[3]+'nesday');

const configBar = {
    type: 'bar',
    data: dataBar,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
              display: false
        }
      }
    }
  };

  const myChartBar = new Chart(
    document.getElementById('myChartBar'),
    configBar
  ); 

// =====================,

// place.style.top = 0;
//     place.style.fontSize = '10px';

// $('#auth__login').click(function(){
//       $('#auth__login__placeholder').css('bottom', '120px');
//       $('#auth__login__placeholder').css('fontSize', '10px');
// })

