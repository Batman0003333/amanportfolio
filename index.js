 // Mobile Navigation Toggle
 const navLinks = document.querySelector('.nav-links');
 const navButton = document.createElement('button');
 navButton.innerHTML = '<i class="ri-menu-line"></i>';
 navButton.classList.add('nav-toggle');
 document.querySelector('nav').appendChild(navButton);

 navButton.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Smooth Scrolling for Anchor Links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Button Interactions
 document.querySelectorAll('button').forEach(button => {
     button.addEventListener('mouseover', () => {
         button.style.transform = 'scale(1.05)';
     });
     button.addEventListener('mouseout', () => {
         button.style.transform = 'scale(1)';
     });
 });

 // Schedule Call and View My Work Button Interactions
 document.querySelectorAll('.contact button').forEach(button => {
     button.addEventListener('click', () => {
         alert('Button clicked! Implement functionality as needed.');
     });
 });

 // Add Event Listener to Github and Hire Me Now Buttons
 document.querySelector('.git').addEventListener('click', () => {
     window.open('https://github.com/your-github-profile', '_blank');
 });

 document.querySelector('.doc').addEventListener('click', () => {
     alert('Hire me functionality to be implemented!');
 });



 document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });



 gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-heading", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".animate-text", {
  duration: 1,
  y: 20,
  opacity: 0,
  stagger: 0.2,
  delay: 0.5,
});

gsap.from(".animate-button", {
    duration: 1,
  y: 20,
  opacity: 100,
  stagger: 0.2,
  delay: 0.5,
  });

gsap.from(".animate-icon", {
  duration: 1,
  y: 20,
  opacity: 0,
  stagger: 0.2,
  delay: 1.5,
});

gsap.from(".animate-image", {
  duration: 1,
  x: 100,
  opacity: 0,
  delay: 1,
});

gsap.from(".animate-item", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".animate-item",
    start: "top 80%",
  },
});
