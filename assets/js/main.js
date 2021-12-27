// Show menu 
 
const navMenu = document.getElementById("nav-menu"); 
const navToggle = document.getElementById("nav-toggle"); 
 
const navClose = document.getElementById("nav-close"); 
 
if(navToggle){ 
   navToggle.addEventListener("click",()=>{ 
       navMenu.classList.add("show-menu")
   })
} 
 
if(navClose){ 
    navClose.addEventListener("click",()=>{ 
        navMenu.classList.remove("show-menu")
    })
} 
// Remove Menu mobile
const navLink = document.querySelectorAll(".nav_link"); 
 
function linkAction(){ 
    const navMenu = document.getElementById("nav-menu") 
    navMenu.classList.remove("show-menu");
} 
 
navLink.forEach((e)=>{  
    e.addEventListener("click", linkAction);   
}) 
 
// Change Background   
function scrollHeader(){ 
    // ========Change background Header 
    const header = document.getElementById("header"); 
    if(this.scrollY >= 100) header.classList.add("scroll-header"); 
    else header.classList.remove("scroll-header");  
    console.log(this.scrollY)
    
}
window.addEventListener("scroll",scrollHeader);

// Swiper Discover

var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
