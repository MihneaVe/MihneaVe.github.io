document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  // Mobile touch handling
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
  }

  // Menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  
  console.log('menuToggle:', menuToggle);
  console.log('navMenu:', navMenu);

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      console.log('Menu toggle clicked');
      navMenu.classList.toggle('show');
      
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Auto-highlight current page in nav
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
      link.classList.add('active');
    } else if (currentLocation.endsWith('/') && linkPath === 'index.html') {
      link.classList.add('active');
    }
  });

  // Typing animation
  const typedTextSpan = document.getElementById('typed-text');
  if (typedTextSpan) {
    const textToType = "Mihnea-Andrei Velcea";
    let i = 0;
    function typeWriter() {
      if (i < textToType.length) {
        typedTextSpan.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  }

  // Add subtle nav animation on scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    
    if (header) { // Ensure header exists
      if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scrolling down & past threshold
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  }, false);
});