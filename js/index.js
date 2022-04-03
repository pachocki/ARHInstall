
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
    });
//Navigation bar effects on scroll wheel

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 50) {
	    $(".black").css("background" , "black");
	  }

	  else{
		  $(".black").css("background" , "rgb(51 51 51 / 0%)");  	
	  }
  });
});

//Navigation Mobile Full Screen
const menuBtn=document.querySelector(".menuBtn")
const exitBtn=document.querySelector(".exit")
let t1 = gsap.timeline({paused:true});
t1.to(".mobile-menu" , { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(
  ".animate-li",{
  opacity:1,
  duration:1,
  stagger:0.3,
  marginTop:0,
  ease:Power2.easeInOut,
},
">-0.5"
);

menuBtn.addEventListener("click",()=>{
  t1.play()
})
exitBtn.addEventListener("click",()=>{
  t1.reverse();
});
//Swiper Js
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 22500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 5,
  pagination: {
    clickable: true,
  },breakpoints: {
    340: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});





