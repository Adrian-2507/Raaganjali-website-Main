/* js/script.js */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

/* js/script.js */
// Responsive Navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Hero Background Slider
const hero = document.querySelector('.hero');
const heroImages = [
  'assets/images/hero1.jpg',
  'assets/images/hero2.jpg',
  'assets/images/hero3.jpg'
];
let currentHero = 0;
function changeHeroBackground() {
  currentHero++;
  if (currentHero >= heroImages.length) currentHero = 0;
  hero.style.backgroundImage = `url('${heroImages[currentHero]}')`;
}
setInterval(changeHeroBackground, 5000);

// Sticky navbar
const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Infinite slider
  const track = document.querySelector('.member-track');
  let slides = document.querySelectorAll('.member-slide');
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);
  slides = document.querySelectorAll('.member-slide');

  let index = 1;
  let slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(${-slideWidth * index}px)`;

  window.addEventListener("resize", () => {
    slideWidth = slides[0].clientWidth;
    track.style.transition = "none";
    track.style.transform = `translateX(${-slideWidth * index}px)`;
  });

  track.addEventListener("transitionend", () => {
    if (slides[index].isEqualNode(firstClone)) {
      track.style.transition = "none";
      index = 1;
      track.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if (slides[index].isEqualNode(lastClone)) {
      track.style.transition = "none";
      index = slides.length - 2;
      track.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });

  function nextSlide() {
    index++;
    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  let autoplay = setInterval(nextSlide, 5000);
  document.querySelector('.member-slider').addEventListener("mouseenter", () => clearInterval(autoplay));
  document.querySelector('.member-slider').addEventListener("mouseleave", () => autoplay = setInterval(nextSlide, 5000));

