document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-content", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from(".gallery-item", {
        scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 85%",
        },
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
    });
});