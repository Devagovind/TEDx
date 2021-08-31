document.getElementById('cta').addEventListener('click', function() {
    console.log("Hello");
    TweenMax.to('.panel', 1, {
        scaleY: 1.5,
        height: '100vh',
        ease: "Circ.easeOut"
    });
    TweenMax.to('#light', 1, {
        opacity: 1,
        y: 0,
        delay: 1
    });
    TweenMax.to('p', 1, {
        opacity: 1,
        y: 20,
        delay: 1.6
    });
    TweenMax.to('.box', 3, {
        opacity: 1,
        scale: 1
    });
})