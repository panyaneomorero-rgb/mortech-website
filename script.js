// Animated Counters

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target=+counter.dataset.target;
        const current=+counter.innerText;

        const increment=Math.ceil(target/100);

        if(current<target){

            counter.innerText=current+increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText=target;

        }

    };

    updateCounter();

});


// Mobile Menu

const menuToggle=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);