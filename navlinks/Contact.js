
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Replace with your actual email address
    const recipient = "yourname@gmail.com";

    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    const mailtoLink =
        `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    formStatus.textContent = "Opening your email application...";

    window.location.href = mailtoLink;
});
