document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
    });

    // 2. Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Close icon
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Menu icon
        }
    });

    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            isMenuOpen = false;
        });
    });

    // 3. Sticky Navbar Styling on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-soft');
            navbar.classList.remove('py-2');
        } else {
            navbar.classList.remove('shadow-soft');
        }
    });

    // 4. Scroll to Top Button Logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. GSAP Hero Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate hero text elements
    gsap.from('.hero-element', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1
    });

    // Animate hero image
    gsap.from('#hero-image-container', {
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });

    // Animate decorative elements around image
    gsap.from('.decor-element', {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        delay: 0.8
    });

    // Animate badge
    gsap.from('.decor-badge', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
        delay: 1.2
    });
    
    // Add subtle hover floating effect to the badge
    const badge = document.querySelector('.decor-badge');
    if (badge) {
        gsap.to(badge, {
            y: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});
