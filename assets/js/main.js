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