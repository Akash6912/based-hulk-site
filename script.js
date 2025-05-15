const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("fade-in", entry.isIntersecting);
    });
  });

  document.querySelectorAll(".timeline-item").forEach(item => {
    observer.observe(item);
  });