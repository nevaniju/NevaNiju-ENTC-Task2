// Dynamically set height for all Tableau iframes
window.addEventListener('DOMContentLoaded', () => {
    const placeholders = document.querySelectorAll('.tableauPlaceholder');
  
    placeholders.forEach((placeholder) => {
      const object = placeholder.querySelector('object');
      if (object) {
        object.style.display = 'block';
        object.style.width = '100%';
        object.style.height = `${placeholder.offsetWidth * 0.6}px`;
      }
    });
  
    const scripts = document.createElement('script');
    scripts.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    document.body.appendChild(scripts);
  });
  