// revenue.js - Matches HomePage interactivity and handles tabbing + Tableau

document.addEventListener('DOMContentLoaded', () => {
  // Tab switching
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(btn => {
    btn.addEventListener('click', () => {
      tabLinks.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const selected = btn.getAttribute('data-tab');
      document.getElementById(selected).classList.add('active');
    });
  });

  // Filter nav links from sidebar
  const searchInput = document.getElementById('sidebarSearch');
  searchInput?.addEventListener('input', (e) => {
    const filter = e.target.value.toLowerCase();
    document.querySelectorAll('.sidebar ul li').forEach((li) => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(filter) ? '' : 'none';
    });
  });

  // Load Tableau
  const tableauScript = document.createElement('script');
  tableauScript.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  document.body.appendChild(tableauScript);
});
