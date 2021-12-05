function goToLocation() {
    window.location.href = 'location.html';
}

function goToHome() {
    window.location.href = 'index.html';
}


    gsap.registerPlugin(ScrollTrigger);

gsap.from('.index-header-img', {opacity: 0, y: '-100%', duration: 1});
gsap.from('button, .home-p', {opacity: 0, x: '100%' ,duration: 1 , stagger: 0.5} );
gsap.from('h1', {opacity: 0, x: '-100%' ,duration: 1 , stagger: 0.5} );

gsap.from('.image-one', {
    scrollTrigger: '.experience',
    y: '100vw',
    duration: 1,
    ease: 'back',
    stagger: 0.5,
})

gsap.from('.exp-details', {
    x: '-100vw',
    duration: 2,
    ease: 'back',
    scrollTrigger: {
        trigger: '.experience',
        start: '-50%',
        end: 'bottom',
    }
})

gsap.from('.image-two, .image-three', {
    scrollTrigger: {
        trigger: '.image-two',
        start: '-100%',
        end: 'bottom',
    },
    opacity: 0,
    duration: 1,
    ease: 'back',
    stagger: 0.5
})



gsap.from('.welcome', {
    scrollTrigger: {
        trigger: '.welcome',
        start:'-230%',
        end: 'bottom',
    },
    opacity: 0,
    duration: 1,
    ease: 'back',
    stagger: 0.5
})

gsap.from('.home-footer', {
    scrollTrigger: {
        trigger: '.home-footer',
        start: '-380%',
        end: 'bottom',
    },
    delay: 0.4,
    opacity: 0,
    duration: 1,
    ease: 'back',
})