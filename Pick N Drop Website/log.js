const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.section');

// Function to scroll to the target section
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const target = document.getElementById(dot.getAttribute('data-target'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Function to add active class to dot based on scroll position
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-target') === current) {
            dot.classList.add('active');
        }
    });
});
