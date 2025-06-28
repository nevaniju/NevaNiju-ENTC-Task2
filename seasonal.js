// Sidebar toggle
document.querySelector('.toggle-btn')?.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('collapsed');
  });
  
  // Resize Tableau embeds on load
  window.addEventListener('load', () => {
    const ids = ['viz1', 'viz2', 'viz3'];
    ids.forEach(id => {
      const container = document.getElementById(id);
      const viz = container.querySelector('object');
      viz.style.width = '100%';
      // Fixed height so the full graph is visible without needing to expand
      viz.style.height = '700px';
    });
  });

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
  
  