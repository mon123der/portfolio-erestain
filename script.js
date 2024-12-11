let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
/*======================================== active link mode ================================================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


/*======================================== Window scroll ================================================*/
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}

/*======================================== remove navlinks ================================================*/

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*============================================= typed mode ================================================*/
let typed = new Typed('#multiple-text', {
    strings: ["Multimedia Artist", "3D Artist", "2D Animator", "Motion graphics Artist."],
    typeSpeed: 100,
    backspeed:100,
    delayspeed:100,
    loop:100

});



/*==================== dark mode ===========================*/
let body = document.querySelector("body"),
    toggleswitch = document.getElementById("toggle-switch");

toggleswitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


/*==================== contact data =========================== */

let scriptURL = 'https://script.google.com/macros/s/AKfycbxiqpXejELSBQGQzalxYGG2oDXjP7eolqyAKu-1_9EgeZBWefBsaaJckoPUInpmNvN0ew/exec'
let form = document.forms['submit-to-google-sheet']
let msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message)) 
}) 

/*================================ swiper ================================= */
document.addEventListener('DOMContentLoaded', () => {
  
  //------ Slider Begin
	const CaroS = document.querySelector('.Carousel-slider');
	const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(CaroS);
	const CaroSTimer = 2000;
	let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    
  //------- Mouseenter Event
	CaroS.onmouseenter = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseleave Event
	CaroS.onmouseleave = function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' mouse detected');
	}
  
  //----- Mouseclick Event
	CaroS.onclick = function(e) {
		clearInterval(CaroAutoplay); 
		console.log(e.type + ' mouse detected');
	}
  
  //------ Gesture Tap Event
	hammer.on('tap', function(e) {
		clearInterval(CaroAutoplay);
		console.log(e.type + ' gesture detected');
	});
  
  //----- Gesture Swipe Event
	hammer.on('swipe', function(e) {
		clearInterval(CaroAutoplay); 
		CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
		console.log(e.type + ' gesture detected');
	});

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach( el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }
  
  //---- Slider End
  
});

/*================================ scroll Reveal ================================= */

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 250
});

ScrollReveal().reveal('.home-content, heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });
ScrollReveal().reveal('.contact h2, .about-content h2', { origin: 'right' });
ScrollReveal().reveal('.Skill h2, .contact p', { origin: 'left' });
ScrollReveal().reveal('.header, navbar', { origin: 'b0ttom' });
ScrollReveal().reveal('.skill-container', { origin: 'bottom' });
 

