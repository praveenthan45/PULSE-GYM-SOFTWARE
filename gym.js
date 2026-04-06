
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple sticky navbar effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 8%';
    } else {
        nav.style.padding = '20px 8%';
    }
});
// Contact Form Submission
const contactForm = document.getElementById('gymContactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic animation/feedback
    const btn = this.querySelector('.btn-submit');
    const originalText = btn.innerText;

    btn.innerText = "Sending...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    // Simulate an API call
    setTimeout(() => {
        alert("Thank you! Our Pulse team will contact you shortly.");
        btn.innerText = originalText;
        btn.style.opacity = "1";
        btn.disabled = false;
        contactForm.reset();
    }, 1500);
});