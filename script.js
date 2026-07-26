/*=====================================================
        MAMRAJ WEB STUDIO
        MAIN SCRIPT - PART 1
=====================================================*/

"use strict";

/*=========================================
        SELECTORS
=========================================*/

const header = document.querySelector(".header");
const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");
const navItems = document.querySelectorAll(".nav-links a");
const loader = document.querySelector(".loader");
const backToTop = document.querySelector(".back-to-top");
const progressBar = document.querySelector(".scroll-progress");

/*=========================================
        LOADER
=========================================*/

window.addEventListener("load", () => {

    if (!loader) return;

    loader.classList.add("loader-hide");

    setTimeout(() => {

        loader.style.display = "none";

    }, 700);

});

/*=========================================
        STICKY NAVBAR
=========================================*/

function stickyNavbar() {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

/*=========================================
        MOBILE MENU
=========================================*/

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navLinks.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

}

/*=========================================
        CLOSE MOBILE MENU
=========================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks?.classList.remove("active");

        menuBtn?.classList.remove("active");

        const icon = menuBtn?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

navItems.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const targetId = this.getAttribute("href");

        if (!targetId.startsWith("#")) return;

        e.preventDefault();

        const target = document.querySelector(targetId);

        if (!target) return;

        const offset = 90;

        const topPosition =
            target.offsetTop - offset;

        window.scrollTo({

            top: topPosition,

            behavior: "smooth"

        });

    });

});

/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section[id]");

function activeMenu() {

    const scroll = window.scrollY + 150;

    sections.forEach(section => {

        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        const link = document.querySelector(
            `.nav-links a[href="#${id}"]`
        );

        if (!link) return;

        if (
            scroll >= top &&
            scroll < top + height
        ) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}

/*=========================================
        BACK TO TOP
=========================================*/

function toggleBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
        SCROLL PROGRESS
=========================================*/

function updateProgressBar() {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / docHeight) * 100;

    progressBar.style.width = `${progress}%`;

}

/*=========================================
        SCROLL EVENTS
=========================================*/

window.addEventListener("scroll", () => {

    stickyNavbar();

    activeMenu();

    toggleBackToTop();

    updateProgressBar();

});

/*=========================================
        INITIALIZE
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    stickyNavbar();

    activeMenu();

    toggleBackToTop();

    updateProgressBar();

    console.log(
        "%cMamRaj Web Studio",
        "color:#4F46E5;font-size:22px;font-weight:bold;"
    );

    console.log(
        "%cWebsite Initialized Successfully 🚀",
        "color:#06B6D4;font-size:14px;"
    );

});
