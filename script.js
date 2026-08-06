document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Drawer Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksContainer = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = navLinksContainer.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }

    // 2. Interactive Form Validation Logic (Runs only on contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');
            const successMsg = document.getElementById('form-success');

            let isValid = true;

            // Name check
            if (nameInput.value.trim().length < 3) {
                nameError.style.display = 'block';
                nameInput.style.borderColor = '#dc3545';
                isValid = false;
            } else {
                nameError.style.display = 'none';
                nameInput.style.borderColor = '#ccc';
            }

            // Email check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailError.style.display = 'block';
                emailInput.style.borderColor = '#dc3545';
                isValid = false;
            } else {
                emailError.style.display = 'none';
                emailInput.style.borderColor = '#ccc';
            }

            // Message check
            if (messageInput.value.trim().length < 10) {
                messageError.style.display = 'block';
                messageInput.style.borderColor = '#dc3545';
                isValid = false;
            } else {
                messageError.style.display = 'none';
                messageInput.style.borderColor = '#ccc';
            }

            if (isValid) {
                successMsg.style.display = 'block';
                contactForm.reset();
                setTimeout(() => { successMsg.style.display = 'none'; }, 4000);
            }
        });
    }
});
