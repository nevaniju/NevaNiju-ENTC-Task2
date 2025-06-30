document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.intro').style.display = 'none';
    document.getElementById('home').classList.add('visible');
  }, 4500);
});
