function showMessage(){
    alert("May this message bring you comfort and gentle healing.");
}

const learnButton = document.getElementById('learnButton');
const contactForm = document.getElementById('contactForm');

if (learnButton) {
    learnButton.addEventListener('click', showMessage);
}

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please share your name, email, and intention so I can respond with care.');
            return;
        }

        alert(`Thank you, ${name}. Your prayer request has been received, and you will be guided with love.`);
        contactForm.reset();
    });
}