(() => {
  const revealItems = document.querySelectorAll('.journal-new .reveal');
  if (!('IntersectionObserver' in window)) { revealItems.forEach(el => el.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  revealItems.forEach(el => observer.observe(el));
  const form = document.querySelector('.signal-form');
  if (form) form.addEventListener('submit', e => { e.preventDefault(); const btn = form.querySelector('button'); if (btn) { btn.textContent = 'You’re on the list'; btn.disabled = true; } });
})();
