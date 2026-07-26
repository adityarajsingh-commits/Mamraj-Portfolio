/*=========================================
 MamRaj Web Studio
 script.js (Part 1)
=========================================*/


/*==============================
 LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.classList.add("loader-hide");

    }

});


/*==============================
 NAVBAR
==============================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }

    else{

        navbar.classList.remove("sticky");

    }

});


/*==============================
 MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector("nav ul");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

}


/*==============================
 CLOSE MENU AFTER CLICK
==============================*/

document.querySelectorAll("nav ul li a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("show");

});

});


/*==============================
 SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==============================
 ACTIVE MENU
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

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


/*==============================
 SCROLL TO TOP
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==============================
 DARK MODE
==============================*/

const themeBtn=document.getElementById("theme-toggle");

if(themeBtn){

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML="☀️";

}

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

/* Sticky Navbar */

nav.sticky{

background:#ffffff;

box-shadow:0 10px 30px rgba(0,0,0,.08);

transition:.3s;

}

/* Mobile Menu */

nav ul.show{

display:flex;

}

/* Active Menu */

nav ul li a.active{

color:#C58B73;

font-weight:600;

}

/* Top Button */

#topBtn{

position:fixed;

right:25px;

bottom:25px;

width:50px;

height:50px;

border:none;

border-radius:50%;

background:#1E2A5A;

color:#fff;

font-size:22px;

cursor:pointer;

display:none;

z-index:9999;

transition:.3s;

}

#topBtn:hover{

background:#C58B73;

transform:translateY(-5px);

}
