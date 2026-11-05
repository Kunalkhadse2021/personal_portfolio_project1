// PERSONAL PORTFOLIO JAVASCRIPT

// Select navigation elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

        menuToggle.textContent = "☰";

    });

});

// Automatically display current year
document.getElementById("year").textContent =
    new Date().getFullYear();
