document.addEventListener('DOMContentLoaded', () => {
  // Load Tableau visualizations
  const tableauScript = document.createElement('script');
  tableauScript.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  document.body.appendChild(tableauScript);
});
