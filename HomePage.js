function goToAdminPage() {
  window.location.href = "admin.html";
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.intro, .graph-container, .admin-button, .why-section, .stat-card, .visuals-section')
  .forEach(el => observer.observe(el));
