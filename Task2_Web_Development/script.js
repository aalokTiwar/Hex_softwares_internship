// Smooth scrolling to sections
function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

// Display dynamic welcome message based on time of day
function displayWelcomeMessage() {
    const now = new Date();
    const hours = now.getHours();
    let message = "Welcome to Gymfit!";

    if (hours < 12) {
        message = "Good Morning! Start your day strong at Gymfit!";
    } else if (hours < 18) {
        message = "Good Afternoon! Crush your fitness goals at Gymfit!";
    } else {
        message = "Good Evening! Unwind and train at Gymfit!";
    }

    document.querySelector("#hero p").textContent = message;
}

// Toggle navigation bar background on scroll
function toggleHeaderBackground() {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#222";
            header.style.transition = "background 0.3s";
        } else {
            header.style.background = "transparent";
        }
    });
}

// Membership plan selector
function handleMembershipSelection() {
    const plans = document.querySelectorAll(".plan");
    plans.forEach((plan) => {
        plan.addEventListener("click", () => {
            plans.forEach((p) => p.classList.remove("selected"));
            plan.classList.add("selected");
            alert(`You selected the ${plan.querySelector("h3").textContent}`);
        });
    });
}

// Back to top button
function createBackToTopButton() {
    const button = document.createElement("button");
    button.textContent = "↑ Back to Top";
    button.id = "back-to-top";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 15px";
    button.style.fontSize = "14px";
    button.style.background = "#e63946";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.display = "none";
    button.style.borderRadius = "5px";
    document.body.appendChild(button);

    // Show button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });

    // Scroll to top on click
    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Initialize all functions
function init() {
    displayWelcomeMessage();
    toggleHeaderBackground();
    handleMembershipSelection();
    createBackToTopButton();
}

document.addEventListener("DOMContentLoaded", init);
