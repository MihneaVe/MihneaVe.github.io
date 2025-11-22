// // Check if stylesheets loaded correctly
// document.addEventListener('DOMContentLoaded', function() {
//     const styles = document.styleSheets;
//     let stylesLoaded = false;
    
//     for (let i = 0; i < styles.length; i++) {
//         try {
//             // If we can access rules, the stylesheet loaded from the same origin
//             const rules = styles[i].cssRules;
//             if (rules && rules.length > 0) {
//                 stylesLoaded = true;
//                 console.log("Stylesheet loaded successfully:", styles[i].href);
//             }
//         } catch (e) {
//             console.log("Could not access stylesheet:", styles[i].href);
//         }
//     }
    
//     if (!stylesLoaded) {
//         console.error("No stylesheets loaded successfully!");
//         document.body.innerHTML = '<div style="padding: 20px; color: red; text-align: center;">⚠️ Stylesheet loading error. Please check the console.</div>' + document.body.innerHTML;
//     }
// });

// Mobile touch handling
document.addEventListener('DOMContentLoaded', function() {
  // Detect if device is touch-enabled
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // Make skill cards more touch-friendly
    const skillItems = document.querySelectorAll('.skill-list li');
    skillItems.forEach(item => {
      item.addEventListener('touchstart', function() {
        this.classList.add('active');
      });
      
      item.addEventListener('touchend', function() {
        setTimeout(() => {
          this.classList.remove('active');
        }, 300);
      });
    });
  }
});

// Menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
      
      // Change icon based on menu state
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
    
    // Check if current path includes the link path or if we're on index
    if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
      link.classList.add('active');
    } else if (currentLocation.endsWith('/') && linkPath === 'index.html') {
      link.classList.add('active');
    }
  });
  
  // Add subtle nav animation on scroll
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scrolling down & past threshold
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }
    
    // Add background opacity based on scroll position
    const scrollPercent = Math.min(currentScroll / 300, 1);
    header.style.backgroundColor = `rgba(30, 30, 30, ${0.9 + scrollPercent * 0.1})`;
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }, false);
});

// Typing animation
document.addEventListener('DOMContentLoaded', function() {
  const typedTextSpan = document.getElementById('typed-text');
  const textToType = "Mihnea-Andrei Velcea";
  let i = 0;

  function typeWriter() {
    if (i < textToType.length) {
      typedTextSpan.textContent += textToType.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  if(typedTextSpan) {
    typeWriter();
  }
});