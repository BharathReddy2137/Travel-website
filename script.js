// ======================================
// BluVoy Travels - JavaScript
// ======================================

// Welcome Message
window.onload = function () {
    console.log("Welcome to BluVoy Travels");
};

// ======================================
// Card Animation
// ======================================

const cards = document.querySelectorAll(".card");

if (cards.length > 0) {

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "0.8s";
    });

    window.addEventListener("scroll", () => {

        cards.forEach(card => {

            const position = card.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }

        });

    });

}

// ======================================
// Popup Functions
// ======================================

function openPopup() {

    const popup = document.getElementById("popup");

    if (popup) {
        popup.style.display = "flex";
    }

}

function closePopup() {

    const popup = document.getElementById("popup");

    if (popup) {
        popup.style.display = "none";
    }

}

// ======================================
// Registration Success
// ======================================

function bookingSuccess(event) {

    event.preventDefault();

    const message = document.getElementById("successMessage");

    if (message) {

        message.style.display = "block";

        setTimeout(() => {

            closePopup();
            message.style.display = "none";

        }, 3000);

    }

    return false;

}

// ======================================
// Chat Box
// ======================================

function toggleChat() {

    const chat = document.getElementById("chatBox");

    if (!chat) return;

    if (chat.style.display === "block") {
        chat.style.display = "none";
    } else {
        chat.style.display = "block";
    }

}

// ======================================
// ChatBot
// ======================================

function sendMessage() {

    const input = document.getElementById("chatInput");
    const chatBody = document.getElementById("chatBody");

    if (!input || !chatBody) return;

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Customer Message
    chatBody.innerHTML += `
        <p style="text-align:right;color:#0b2545;">
            <b>👤 You:</b> ${message}
        </p>
    `;

    let reply = "";
    const msg = message.toLowerCase();

    if (msg.includes("hi") || msg.includes("hello")) {

        reply = "👋 Hello! Welcome to BluVoy Travels. How can I help you today?";

    }
    else if (msg.includes("booking")) {

        reply = "🚌 You can book your journey by clicking the Register Now button or contacting our support team.";

    }
    else if (msg.includes("package")) {

        reply = "🏖️ We provide Goa, Ooty, Kerala and Tirupati tour packages at affordable prices.";

    }
    else if (
        msg.includes("price") ||
        msg.includes("cost") ||
        msg.includes("fare")
    ) {

        reply = "💰 Our packages start from ₹4,999. Prices vary depending on the destination and season.";

    }
    else if (msg.includes("hotel")) {

        reply = "🏨 Yes! Comfortable hotel accommodation is included in our tour packages.";

    }
    else if (msg.includes("bus")) {

        reply = "🚌 We provide Luxury AC Sleeper and Volvo buses with experienced drivers.";

    }
    else if (msg.includes("contact")) {

        reply = "📞 Contact us at +91 98765 43210 or Email: support@bluvoytravels.com";

    }
    else if (msg.includes("thank")) {

        reply = "😊 You're welcome! Have a wonderful journey with BluVoy Travels.";

    }
    else {

        reply = "🤖 Sorry! I couldn't understand your question. Please ask about booking, packages, buses, hotels, prices or contact details.";

    }

    // Bot Reply
    setTimeout(() => {

        chatBody.innerHTML += `
            <p>
                <b>🤖 BluVoy:</b> ${reply}
            </p>
        `;

        chatBody.scrollTop = chatBody.scrollHeight;

    }, 600);

    input.value = "";

}