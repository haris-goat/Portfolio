(() => {
  const root = document.documentElement;

  // Theme: remember choice per visitor; default follows the OS setting
  const themeBtn = document.querySelector('.theme-toggle');
  try {
    const saved = localStorage.getItem('theme');
    if (saved) root.dataset.theme = saved;
  } catch (_) {}
  themeBtn.addEventListener('click', () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = isDark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {}
  });

  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Highlight the nav link for the section in view
  const navLinks = [...links.querySelectorAll('a[href^="#"]')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('is-current', a.hash === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach((a) => {
    const section = document.querySelector(a.hash);
    if (section) observer.observe(section);
  });

  // Reflection filters
  const chips = document.querySelectorAll('.chip');
  const reflections = document.querySelectorAll('.reflection');
  chips.forEach((chip) => chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => {
      const active = c === chip;
      c.classList.toggle('is-active', active);
      c.setAttribute('aria-pressed', String(active));
    });
    reflections.forEach((r) => {
      r.hidden = filter !== 'all' && !r.dataset.tags.split(' ').includes(filter);
    });
  }));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
})();
