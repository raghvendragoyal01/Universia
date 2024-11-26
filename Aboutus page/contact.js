document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    const fullName = document.querySelector('input[placeholder="Full Name*"]').value;
    const email = document.querySelector('input[placeholder="Email*"]').value;
    const subject = document.querySelector('input[placeholder="Subject*"]').value;
    const mobile = document.querySelector('input[placeholder="Mobile*"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    const mailtoLink = `mailto:support@universia.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent successfully!');
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
});

