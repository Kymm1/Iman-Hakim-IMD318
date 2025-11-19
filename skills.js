document.addEventListener('DOMContentLoaded', () => {
    
    const skillBars = document.querySelectorAll('.skill-level');
    
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                
                bar.style.width = level + '%';
                bar.textContent = level + '%'; 
                
                observer.unobserve(bar);
            }
        });
    }, options);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});