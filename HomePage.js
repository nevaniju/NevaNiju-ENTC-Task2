setTimeout(() => {
  document.querySelector('.intro').style.display = 'none';
  document.getElementById('home').classList.add('visible');
}, 4500);

const navItems = document.querySelectorAll('.sidebar li');
const sections = document.querySelectorAll('.page-section');
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    sections.forEach(section => {
      section.classList.remove('visible');
    });

    const pageId = item.getAttribute('data-page');
    document.getElementById(pageId).classList.add('visible');
  });
});

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});