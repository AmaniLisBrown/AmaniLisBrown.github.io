/*==========================================
AMANI BROWN PORTFOLIO
script.js
==========================================*/

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});

// Navbar effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        navbar.style.background="rgba(255,255,255,.98)";
        navbar.style.padding="12px 0";
        navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.08)";

    }else{

        navbar.style.background="rgba(255,255,255,.92)";
        navbar.style.padding="18px 0";
        navbar.style.boxShadow="none";

    }

});

// Reveal animations
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");
    observer.observe(section);

});

// Hover lift
document.querySelectorAll(".project-card,.skill-card,.timeline-content,.contact-card,.education-card,.about-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// Active navigation
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-140;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// Footer year
const footer=document.querySelector("footer p:last-child");

if(footer){

    footer.innerHTML=`© ${new Date().getFullYear()} Amani Brown. All Rights Reserved.`;

}

console.log("Amani Brown Portfolio Loaded");
