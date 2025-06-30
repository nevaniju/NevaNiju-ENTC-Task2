document.addEventListener('DOMContentLoaded', () => {
  const vizIDs = ['viz1', 'viz2'];

  vizIDs.forEach(id => {
    const divElement = document.getElementById(id);
    const vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = '500px';
  });

  const script = document.createElement('script');
  script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  document.body.appendChild(script);
});
