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