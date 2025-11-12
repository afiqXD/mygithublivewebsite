// Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
};

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('skill-progress')) {
                animateSkillBars();
            }
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .portfolio-item, .contact-form').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    console.log('Form submitted:', data);

    // Show success message
    alert('Pesan berhasil dikirim! Terima kasih telah menghubungi kami.');

    // Reset form
    contactForm.reset();
});

// CTA Button Alert
function showAlert() {
    alert('Terima kasih! Mari kita mulai perjalanan digital Anda!');
}

// Typing Effect (Optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing effect on hero title
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 100);
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
});

// Dark Mode Toggle (Optional)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 1000;
    box-shadow: var(--shadow);
    transition: var(--transition);
`;

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        darkModeToggle.style.background = 'var(--secondary-color)';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeToggle.style.background = 'var(--primary-color)';
    }
});

// Add dark mode styles
const darkModeStyles = `
    body.dark-mode {
        --text-color: #f8f9fa;
        --light-color: #343a40;
        --dark-color: #f8f9fa;
        background: #1a1a1a;
        color: var(--text-color);
    }
    
    body.dark-mode .navbar {
        background: rgba(52, 58, 64, 0.95);
    }
    
    body.dark-mode .service-card,
    body.dark-mode .contact-form input,
    body.dark-mode .contact-form textarea {
        background: #2d2d2d;
        color: var(--text-color);
        border-color: #444;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);

// Initialize animations on load
window.addEventListener('load', () => {
    // Animate skill bars when about section is in view
    const aboutSection = document.querySelector('.about');
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    aboutObserver.observe(aboutSection);
});