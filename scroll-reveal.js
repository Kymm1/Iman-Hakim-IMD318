document.addEventListener('DOMContentLoaded', () => {
    
    const revealElements = document.querySelectorAll('.reveal-section');
    
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    revealElements.forEach(el => {
        observer.observe(el);
    });
});