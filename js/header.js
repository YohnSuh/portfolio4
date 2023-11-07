$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
});

/* 메뉴 눌렀을 경우, 해당 페이지로 이동 */
$('header li').click(function() {
    let idx = $(this).index();
    let top = $('section').eq(idx).offset().top;
    $('html, body').stop().animate({
        'scrollTop' : top + 'px'
    });
});

/* 메뉴 눌렀을 때 li 색상 변경 */
$(window).scroll(function() {
    let start = $('body').height();
    let end = $(window).height();

    let wnd = $(window).scrollTop();
    let page1 = $('.subPage').offset().top -50;
    let page2 = $('.myWork').offset().top - 50;
    let page3 = start - end - 50;
    
    if(wnd >= 0 && wnd < page1) {
        $('header li').eq(0).addClass('on');
        $('header li').eq(0).siblings().removeClass('on');
    } else if(wnd < page2) {
        $('header li').eq(1).addClass('on');
        $('header li').eq(1).siblings().removeClass('on');
    } else if(wnd < page3) {
        $('header li').removeClass('on');
        $('header li').eq(2).addClass('on');
    } else {
        $('header li').removeClass('on');
        $('header li').eq(3).addClass('on');
    }
});