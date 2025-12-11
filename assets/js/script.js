// Solar Consult - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('Solar Consult website loaded');

    // Form validation for contact form
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const fullName = document.getElementById('full-name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Basic validation
            if (fullName && fullName.value.trim().length < 2) {
                alert('Please enter a valid name');
                e.preventDefault();
                return;
            }

            if (email && !isValidEmail(email.value)) {
                alert('Please enter a valid email');
                e.preventDefault();
                return;
            }

            if (message && message.value.trim().length < 10) {
                alert('Message must be at least 10 characters');
                e.preventDefault();
                return;
            }

            console.log('Form validation passed');
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return emailRegex.test(email);
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add active class to current navigation link
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || (href === 'index.html' && currentLocation === '')) {
            link.style.backgroundColor = '#667eea';
        }
    });
});
