// Dark mode is default; this just saves preference if you add a light theme later.
(function(){
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', document.documentElement.classList.contains('light')?'light':'dark');
  });
  const saved = localStorage.getItem('theme');
  if(saved === 'light') document.documentElement.classList.add('light');
})();
// existing theme code above…

// Flip on click (works on mobile)
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', e => {
    // ignore clicks on links/buttons inside; they should navigate
    if (e.target.closest('a,button')) return;
    card.classList.toggle('flipped');
  });
});

// ------- Simple Lightbox -------
(function () {
  // Create a single overlay element once
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML = `
    <button class="lb-close" aria-label="Close">×</button>
    <img alt="">
  `;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.lb-close');

  function openLightbox(src) {
    imgEl.src = src;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    overlay.classList.remove('open');
    imgEl.src = '';
    document.body.style.overflow = '';
  }

  // Click any .zoomable image to open
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.zoomable');
    if (!target) return;
    const full = target.getAttribute('data-full') || target.src;
    openLightbox(full);
  });

  // Close on overlay click (but not when clicking the image)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn) closeLightbox();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeLightbox();
  });
})();

