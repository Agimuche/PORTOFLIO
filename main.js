// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
    });

    const hoverElements = document.querySelectorAll('a, button, .project-card-modern, .skill-tag');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // 2. Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.className = `${savedTheme}-theme`;
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.contains('light-theme');
        const newTheme = isLight ? 'dark' : 'light';

        body.className = `${newTheme}-theme`;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // 3. Loader
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => loader.style.display = 'none'
        });
    });

    // 4. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.width = '95%';
            navbar.style.top = '1rem';
        } else {
            navbar.style.width = '90%';
            navbar.style.top = '2rem';
        }
    });

    // 5. GSAP Animations
    // Hero Text
    gsap.from('.hero h1', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5
    });

    gsap.from('.hero-description', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
    });

    // Scroll Animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const title = section.querySelector('.section-title');
        const content = section.querySelectorAll('.about-content-wrapper, .project-grid, .contact-wrapper');

        if (title) {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        }

        content.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });
    });

    // Project Cards Hover Animation (CSS handled mostly, but can add GSAP)
    document.querySelectorAll('.project-card-modern').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('img'), { scale: 1.1, duration: 0.8 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('img'), { scale: 1, duration: 0.8 });
        });
    });

    // 6. Smooth Scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // 7. Contact Form submission
    const contactForm = document.getElementById('contact-form-modern');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn-submit');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                alert('Message sent successfully!');
                btn.innerHTML = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 2000);
        });
    }

    // 8. Mobile Menu
    const menuBtn = document.querySelector('.menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinksContainer.classList.toggle('mobile-active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinksContainer.classList.remove('mobile-active');
            });
        });
    }
});