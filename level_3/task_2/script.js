
/* ==========================================
   COGNIFYZ TECHNOLOGIES
   LEVEL 3 - TASK 2
   JAVASCRIPT INTERACTIONS
========================================== */

// Select required HTML elements.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");

// ==========================================
// MOBILE NAVIGATION
// ==========================================

// Open or close the mobile menu.
menuToggle.addEventListener("click", function () {

    // Toggle the active class.
    const isOpen = navLinks.classList.toggle("active");

    // Animate the hamburger icon.
    menuToggle.classList.toggle("active", isOpen);

    // Update accessibility attributes.
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close the menu after clicking a navigation link.
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        // Hide the mobile menu.
        navLinks.classList.remove("active");

        // Reset the hamburger icon.
        menuToggle.classList.remove("active");

        // Reset accessibility attributes.
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

// Show button after scrolling down.
window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});

// Scroll back to the top when clicked.
backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================================
// CLOSE MOBILE MENU WITH ESCAPE KEY
// ==========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});
