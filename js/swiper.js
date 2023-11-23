/* 포트폴리오 슬라이드 이미지 부분 */
let work_img = new Swiper('.work-img', {
    slidesPerView : 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable : true
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    }
});
/* 포트폴리오 슬라이드 설명 부분 */
let work_txt = new Swiper('.work-txt', {
    loop : true,
    effect : 'fade',
    fadeEffect: { 
        crossFade: true 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

work_img.controller.control = work_txt;
work_txt.controller.control = work_img;