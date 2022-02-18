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
    
}
window.addEventListener("scroll",scrollHeader);

// Swiper Discover

var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
      effect:"coverflow", 
      grabCursor:true,
      centeredSlides:true,
      slidesPerView:"auto",
      loop:true, 
      spaceBetween:32,
      coverflowEffect:{ 
      rotate:0,
      
    },
  });

//   video 

const videoFile = document.getElementById("video-file"),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

      function playpause(){ 
          if(videoFile.paused){
              videoFile.play();

              videoIcon.classList.add('ri-pause-line'),
              videoIcon.classList.remove('ri-play-line')
          }else{
              videoFile.pause();

              videoIcon.classList.add('ri-play-line'),
              videoIcon.classList.remove('ri-pause-line')
          }
      }
videoButton.addEventListener("click",playpause);

function finalVideo(){
    videoIcon.classList.add('ri-play-line'),
    videoIcon.classList.remove('ri-pause-line')
}

videoFile.addEventListener("ended", finalVideo);

function scrollTop(){
    const scrollTop = document.getElementById("scroll-up");
    if(this.scrollY >= 200) scrollTop.classList.add('show');else scrollTop.classList.remove('show')
}

window.addEventListener("scroll",scrollTop);

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
       let sectionId = current.getAttribute('id');

       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link");
          
       }else{
        document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link");
        
       }   
        
    })
}

window.addEventListener('scroll',scrollActive)

// Dark Mode 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem("selectedTheme");
const selectedIcons = localStorage.getItem("selectedIcons");

const getCurrentTheme =()=> document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if(selectedTheme){
   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
   themeButton.classList[selectedIcons === "ri-moon-line" ? "add" : "remove"];
}

themeButton.addEventListener("click",()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selectedTheme",getCurrentTheme());
    localStorage.setItem("selectedIcons",getCurrentIcons());
})

