// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-Top Button
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '⬆';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.style.display = 'none'; // Hidden by default

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(e) {
    let valid = true;

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        valid = false;
    }

    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
