// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Hide the intro after 4.5 seconds
  setTimeout(() => {
    document.querySelector('.intro').style.display = 'none';
    document.getElementById('home').classList.add('visible');
  }, 4500);

  const toggleBtn = document.querySelector('.toggle-btn');
  const sidebar = document.querySelector('.sidebar');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
});
