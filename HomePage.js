document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.intro').style.display = 'none';
    document.getElementById('home').classList.add('visible');
  }, 4500);

  const toggleBtn = document.querySelector('.toggle-btn');
  const sidebar = document.querySelector('.sidebar');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });

  document.getElementById('sidebarSearch').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.sidebar ul li').forEach(li => {
      const text = li.textContent.toLowerCase();
      li.style.display = text.includes(query) ? '' : 'none';
    });
  });
});
