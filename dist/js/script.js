const init = () => {

    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu-nav-container');
    const logo = document.getElementById('logo');

    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const textInput = document.getElementById('text');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const textError = document.getElementById('text-error');

    const titleText = document.getElementById('title-text');

    const swup = new Swup();

    // Typewrite text
    const texts = ["former mechanical constructor...", "future web developer."];
    let count = 0;
    let index = 0;
    let currentText = "";
    let newText = "";

    if (titleText) {
        type();
    }

    async function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        newText = currentText.slice(0, ++index);

        titleText.textContent = newText;

        if (newText.length === currentText.length) {

            const sleep = (ms) => {
                return new Promise(resolve => setTimeout(resolve, ms))
            };

            await sleep(1500);
            count++;
            index = 0;
        };
        setTimeout(type, 70);
    };

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
    // Show/hide menu
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
        menuBtn.classList.toggle('close');
        logo.classList.toggle('move');
    });

    // Submit contact form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            formVerification(e);
        });
    };

};

init();

// Reload script after content swap
document.addEventListener('swup:contentReplaced', init);