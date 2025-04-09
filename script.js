// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile navigation toggle functionality if needed in responsive view
    const sidebar = document.querySelector('.sidebar');
    
    // Staggered animation for elements
    const animatedElements = document.querySelectorAll('.hero, .intro, .game-category, .step, .offer-card, .testimonial');
    
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Track all button clicks to the redirect URL
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        if (button.href && button.href.includes('wacucoun.com')) {
            button.addEventListener('click', function(e) {
                console.log('Button clicked, redirecting to:', button.href);
                // Analytics tracking could be added here
            });
        }
    });
}); 