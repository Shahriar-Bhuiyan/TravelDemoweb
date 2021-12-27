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

videoFile.addEventListener("ended", finalVideo)