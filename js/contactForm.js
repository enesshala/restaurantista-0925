const contactUs = document.querySelector(".email-form");

contactUs.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Name Regex
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    if (!nameRegex.test(name.trim()) || !name) {
        Toastify({
            text: "Please enter a valid name without any symbols or numbers.",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                background: "red",
            },
        }).showToast();
        return;
    }

    // Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        Toastify({
            text: "Please enter a valid email address.",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                background: "red",
            },
        }).showToast();
        return;
    }

    const contact = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    localStorage.setItem("contact", JSON.stringify(contact));

    Toastify({
        text: "Thanks for reaching out. We will reply to you as soon as possible.",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
            background: "#28a745",
        },
    }).showToast();
    return;
});
