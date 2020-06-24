const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-nav-container');

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('text');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const textError = document.getElementById('text-error');

// Contact form verification
const formVerification = (e) => {
    // Name input verification
    if (nameInput.value === "") {
        e.preventDefault();
        nameError.classList.add('show');
    } else {
        nameError.classList.remove('show');
    };

    // E-mail input verification
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailInput.value === "") {
        e.preventDefault();
        emailError.classList.add('show');
    } else if (!re.test(String(emailInput.value).toLowerCase())) {
        e.preventDefault();
        emailError.textContent = 'E-mail address is invalid';
        emailError.classList.add('show');
    } else {
        emailError.classList.remove('show');
    };

    // Text input verification
    if (textInput.value === "") {
        e.preventDefault();
        textError.classList.add('show');
    } else {
        textError.classList.remove('show');
    };
};

// Event listeners
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuBtn.classList.toggle('close');
});

contactForm.addEventListener('submit', (e) => {
    formVerification(e);
});