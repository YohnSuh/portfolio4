gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('.h-title').forEach((titleScroll) => {
    gsap.from(titleScroll, {
        scrollTrigger: {
            trigger: titleScroll,
            toggleClass: 'h-title-on',
            scrub:true,
            repeat:-1
        }
    })
});

document.querySelectorAll('.subContent').forEach((infoBox) => {
    gsap.from(infoBox, {
        scrollTrigger: {
            trigger: infoBox,
            toggleClass: 'subContent-on',
            scrub: true,
            repeat: -1
        }
    })
});

gsap.from('.workSlides', {
    scrollTrigger: {
        trigger: '.workSlides',
        toggleClass: 'workSlides-on',
        scrub: true,
        repeat: -1,
    }
});

document.querySelectorAll('.cont-item').forEach((contItem) => {
    gsap.from(contItem, {
        scrollTrigger: {
            trigger: contItem,
            toggleClass: 'cont-item-on',
            scrub: true,
            repeat: -1
        }
    })
});