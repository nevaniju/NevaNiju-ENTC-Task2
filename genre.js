// genre.js
document.querySelector('.toggle-btn')?.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('collapsed');
});

const vizIDs = ['viz1', 'viz2'];
vizIDs.forEach(id => {
  const divElement = document.getElementById(id);
  const vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width = '100%';
  vizElement.style.height = '500px';
  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
});
