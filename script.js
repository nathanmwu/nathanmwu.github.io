// Scroll-reveal for sections
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.section-title, .section-subtitle, .about-grid, .project-card, .skill-group, .dsa-section, .stat-card, .contact-text, .contact-links').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 10 ? 'rgba(99,102,241,0.2)' : '';
}, { passive: true });
