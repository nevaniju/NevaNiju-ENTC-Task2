// Resize Tableau graphs nicely on load
window.addEventListener('load', () => {
  const placeholders = document.querySelectorAll('.tableauPlaceholder');
  placeholders.forEach(placeholder => {
    const viz = placeholder.querySelector('object');
    if (viz) {
      viz.style.width = '100%';
      viz.style.height = placeholder.clientHeight + 'px';
    }
  });
});
