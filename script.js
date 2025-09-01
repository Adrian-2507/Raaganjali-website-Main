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
