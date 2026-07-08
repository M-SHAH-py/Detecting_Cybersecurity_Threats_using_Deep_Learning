/*==================================================
 Detecting Cybersecurity Threats using Deep Learning
 GitHub Pages JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      Elements
    =========================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    const revealElements = document.querySelectorAll(".reveal");

    const backToTop = document.getElementById("backToTop");

    const header = document.querySelector("header");

    const sections = document.querySelectorAll("section");

    /*=========================================
      Mobile Navigation
    =========================================*/

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }

    /*=========================================
      Close Mobile Menu
    =========================================*/

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            if (navLinks.classList.contains("active")) {

                navLinks.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

    /*=========================================
      Scroll Reveal Animation
    =========================================*/

    function revealOnScroll() {

        const trigger = window.innerHeight * 0.85;

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < trigger) {

                element.classList.add("active");

            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /*=========================================
      Back To Top Button
    =========================================*/

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=========================================
      Header Scroll Effect
    =========================================*/

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(5,8,22,.90)";
            header.style.backdropFilter = "blur(20px)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        } else {

            header.style.background = "rgba(5,8,22,.65)";
            header.style.backdropFilter = "blur(15px)";
            header.style.boxShadow = "none";

        }

    });

    /*=========================================
      Active Navigation Link
    =========================================*/

    function activateMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (

                pageYOffset >= sectionTop &&
                pageYOffset < sectionTop + sectionHeight

            ) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    activateMenu();

    window.addEventListener("scroll", activateMenu);

    /*=========================================
      Smooth Anchor Scroll
    =========================================*/

    navItems.forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(

                this.getAttribute("href")

            );

            if (!target) return;

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    /*=========================================
      Hover Animation for Cards
    =========================================*/

    const cards = document.querySelectorAll(

        ".glass-card, .tech-card, .dataset-card, .skill-card, .stat-card"

    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*=========================================
      Gallery Hover Zoom
    =========================================*/

    const galleryImages = document.querySelectorAll(".gallery-card img");

    galleryImages.forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.08)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });

    /*=========================================
      Hero Fade Effect
    =========================================*/

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        const offset = window.scrollY;

        hero.style.opacity = Math.max(1 - offset / 900, 0.35);

    });

});
