TweenMax.to('.orbit2', 40, {
    x: 0,
    rotation: 1440,
    repeat: -1,
    yoyo: true
});
TweenMax.to('.orbit1', 40, {
    x: 0,
    rotation: -1440,
    repeat: -1,
    yoyo: true
});
gsap.from('.globe', { duration: 6, y: -20, opacity: 0 });
gsap.from('.TED1', { duration: 6, y: -20, opacity: 0, delay: 2 });
gsap.from('.TED1-content', { duration: 3, y: 20, opacity: 0, delay: 2, ease: "elastic.out(1,0.3)" });


gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-head", {
    scrollTrigger: {
        trigger: ".about-head",
        toggleAction: "restart restart restart restart"
    },
    x: -40,
    opacity: 0.1,
    duration: 3
});
gsap.from(".about-content ", {
    scrollTrigger: {
        trigger: ".about-content",
        toggleAction: "restart none none none"
    },
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 2
});
gsap.from(".TEDfront", {
    scrollTrigger: {
        trigger: ".TEDfront",
        toggleAction: "restart none none none"
    },
    x: -150,
    opacity: 0,
    duration: 3,
    ease: "elastic.out(1, 0.3)",
    delay: 1
});
gsap.from(".thinking-head ", {
    scrollTrigger: {
        trigger: ".thinking-head",
        toggleAction: "restart none none none"
    },
    x: 40,
    opacity: 0,
    duration: 3,
    delay: 2
});
gsap.from(".thinking-content", {
    scrollTrigger: {
        trigger: ".thinking-content",
        toggleAction: "restart none none none"
    },
    x: -40,
    opacity: 0,
    duration: 2,
    delay: 2

});