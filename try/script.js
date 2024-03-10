// script.js
document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('.animated-element');
  
    // Add a click event listener to trigger an animation
    element.addEventListener('click', function() {
      element.classList.add('animate__animated', 'animate__rubberBand');
      
      // Remove the animation classes after animation completes
      setTimeout(function() {
        element.classList.remove('animate__animated', 'animate__rubberBand');
      }, 1000);
    });
  });
  