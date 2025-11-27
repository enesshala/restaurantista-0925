function subscribeUser(event) {
    event.preventDefault();

    const email = document.getElementById("subscriberEmail").value;
    const isSubscribed = document.getElementById("checkbox").checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email || !emailRegex.test(email)) {
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

    const subscribedUser = {
        email: email,
        subscribed: isSubscribed,
    };

    localStorage.setItem("subscriber", JSON.stringify(subscribedUser));
    Toastify({
        text: "Subscription successfull! You are now subscribed.",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
            background: "#28a745",
        },
    }).showToast();
}

document
    .getElementById("subscribeForm")
    .addEventListener("submit", subscribeUser);

function checkSubscriptionStatus() {
    const subscriber = JSON.parse(localStorage.getItem("subscriber"));

    if (subscriber && subscriber.subscribed) {
        document.getElementById("subscriberEmail").value = subscriber.email;
        document.getElementById("checkbox").checked = subscriber.subscribed;

        Toastify({
            text:
                "Welcome back! You are already subscribed with email: " +
                subscriber.email,
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                background: "#17a2b8",
            },
        }).showToast();
    }
}

document.addEventListener("DOMContentLoaded", checkSubscriptionStatus);
