/* 포트폴리오 슬라이드 이미지 부분 */
var work_img = new Swiper('.work-img', {
    // thumbs: {swiper : work_txt},
    loop : true
});
/* 포트폴리오 슬라이드 설명 부분 */
var work_txt = new Swiper('.work-txt', {
    // thumbs: {swiper : work_img},
    loop : true
});

work_img.controller.control = work_txt;
work_txt.controller.control = work_img;


