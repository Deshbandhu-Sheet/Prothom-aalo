document.addEventListener("DOMContentLoaded", () => {
    var typed = new Typed(".multiple-text", {
        strings: ["Gamer", "Developer","Designer", "Creator"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    gsap.to('.loading-page', {
        opacity: 0,
        duration: 1.5,
        delay: 3.5,
        onComplete: () => document.querySelector('.loading-page').style.display = 'none'
    });
});
