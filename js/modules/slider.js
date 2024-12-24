var swiper = new Swiper('.swiper', {
    slidesPerView: 2,                                                          //количество слайдов для показа
    //slidesPerGroup: 1,                                                         //количество пролистываемых слайдов (по умолчанию 1)
    //initialSlide: 0,                                                           //стартовый слайд (0 - первый)
    spaceBetween: 24,                                                          //отступ между слайдами по горизонтали
    //loop: true,                                                                //бесконечный слайдер (по умолчанию false)
    
    autoplay: {                                                                //автоматическая прокрутка
        dslay: 1000,                                                           //пауза между прокруткой (по умолчанию 3000 милисек = 3 сек)
        stopOnLastSide: true,                                                  //закончить на последнем слайде (true - отключить)
        disableOnInteraction: false                                            //отключить после ручного переключения
    },

    speed: 1000,                                                                //скорость прокрутки слайдов (300 по умолчанию)

    //direction: getDirection(),

    breakpoints: {                                                             //адаптивность слайдера
        0: {                                                                   //ширина экрана от 0 до 1066 (брейкпойнт)
            slidesPerView: 1,                                                  //количество слайдов
        },
        1066: {                                                                //ширина экрана от 1066 и выше (брейкпойнт)
            slidesPerView: 2,
        },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // on: {
    //     resize: function () {
    //         swiper.changeDirection(getDirection());
    //     },
    // },

});

// function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//     return direction;
// }