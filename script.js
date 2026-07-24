/* ===============================
   DARK MODE
================================ */

const themeBtn = document.getElementById("theme-toggle");

// Saved Theme Load
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML = "☀️";

}

// Toggle Theme

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML="☀️";

    }

    else{

        localStorage.setItem("theme","light");

        themeBtn.innerHTML="🌙";

    }

});
