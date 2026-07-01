/*=========================================
Amani Brown Portfolio
script.js
=========================================*/

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,.97)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        navbar.style.padding = "12px 0";

    } else {

        navbar.style.background = "rgba(255,255,255,.92)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 0";

    }

});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Hero animation
window.addEventListener("load", () => {

    document.querySelector(".hero").classList.add("fade-up");

});

// Active navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Portfolio image hover effect
document.querySelectorAll(".project-card img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// Skill card hover effect
document.querySelectorAll(".skill-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// Timeline animation
document.querySelectorAll(".timeline-content").forEach(card => {

    observer.observe(card);

});

// Contact card animation
document.querySelectorAll(".contact-grid div").forEach(card => {

    observer.observe(card);

});

// Education animation
const educationCard = document.querySelector(".education-card");

if (educationCard) {

    observer.observe(educationCard);

}

// Footer year
const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Amani Brown • Marketing Professional • Digital Marketing • Graphic Design`;

}

console.log("Amani Brown Portfolio Loaded Successfully");
