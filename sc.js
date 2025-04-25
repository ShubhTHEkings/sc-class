// Updated JavaScript for interactivity and animations
const navLinks = document.querySelectorAll('header a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Added functionality for all buttons to ensure they work seamlessly
const buttons = document.querySelectorAll('button, .contact-btn, a[href^="#"]');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (button.tagName === 'A') {
            const href = button.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.slice(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
});

// GSAP animations
window.addEventListener('load', () => {
    gsap.from('.hero h1', { duration: 1, y: -50, opacity: 0 });
    gsap.from('.hero p', { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from('.hero a', { duration: 1, scale: 0.8, opacity: 0, delay: 1 });

    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for all anchor links
    gsap.utils.toArray('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: targetElement.offsetTop, autoKill: false },
                    ease: "power2.inOut"
                });
            }
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Fade-in animation
    gsap.utils.toArray('.fade-in').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => section.classList.add('visible')
        });
    });
});
