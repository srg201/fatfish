const parallax = document.querySelector('.parallax-container');
const section = document.querySelector('.date');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.addEventListener('scroll', () => {
                const sectionTop = section.offsetTop;
                const scrollPosition = window.scrollY;
                const offset = scrollPosition - sectionTop;
                parallax.style.backgroundPosition = `center ${offset * 0.5}px`;
            });
        }
    });
}, { threshold: 0.1 }); 

observer.observe(section);
