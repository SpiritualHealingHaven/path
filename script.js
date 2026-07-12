// Main site JS: AOS init, mobile nav, back-to-top, counters, contact form handling
document.addEventListener('DOMContentLoaded', function () {
    if (window.AOS) AOS.init({ duration: 700, once: true });

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (navToggle) navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        if (mobileNav) mobileNav.style.display = expanded ? 'none' : 'block';
    });

    // Smooth scroll for same-page links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (mobileNav) mobileNav.style.display = 'none';
            }
        });
    });

    // Back to top
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (backToTop) {
            if (window.scrollY > 400) backToTop.style.display = 'block'; else backToTop.style.display = 'none';
        }
    });
    if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

    // Counters
    const counters = document.querySelectorAll('.stat .number');
    const runCounters = () => {
        counters.forEach(el => {
            const target = +el.getAttribute('data-target') || 0;
            const duration = 1600;
            let start = 0;
            const step = Math.max(1, Math.floor(target / (duration / 16)));
            const iv = setInterval(() => {
                start += step;
                if (start >= target) { el.textContent = target; clearInterval(iv); }
                else el.textContent = start;
            }, 16);
        });
    };
    const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(e => { if (e.isIntersecting) { runCounters(); observer.disconnect(); } });
    }, { threshold: 0.5 });
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) obs.observe(statsGrid);

    // Contact form validation + simulated submit
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    if (form) form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
        const btn = form.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
        // Simulate send
        setTimeout(() => {
            if (btn) { btn.disabled = false; btn.textContent = 'Send request'; }
            form.reset(); form.classList.remove('was-validated');
            if (formMessage) formMessage.textContent = 'Thanks — your request was received. I will contact you soon.';
        }, 900);
    });
});