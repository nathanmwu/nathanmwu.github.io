// Scroll-reveal for sections
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.section-title, .about-grid, .project-card, .video-card, .skill-group, .contact-text, .contact-links').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Click-to-play YouTube embeds
document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const id = wrapper.dataset.videoid;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
  });
});

// Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 10 ? 'rgba(99,102,241,0.2)' : '';
}, { passive: true });
