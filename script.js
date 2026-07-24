/* ===============================
   DARK MODE
================================ */

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    // Load Saved Theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

    // Toggle Theme
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "🌙";

        }

    });

}


/* ===============================
   LOADER
================================ */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.classList.add("loader-hide");

    }

});


/* ===============================
   SCROLL REVEAL
================================ */

const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();


/* ===============================
   STATISTICS COUNTER
================================ */

const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".stats");

let started = false;

if (statsSection) {

    window.addEventListener("scroll", () => {

        const sectionTop = statsSection.offsetTop - 400;

        if (window.scrollY >= sectionTop && !started) {

            counters.forEach(counter => {

                const target = Number(counter.dataset.target);

                let count = 0;

                const increment = target / 80;

                function updateCounter() {

                    count += increment;

                    if (count < target) {

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        if (target === 99) {

                            counter.innerText = "99%";

                        } else if (target === 24) {

                            counter.innerText = "24/7";

                        } else {

                            counter.innerText = target + "+";

                        }

                    }

                }

                updateCounter();

            });

            started = true;

        }

    });

}
