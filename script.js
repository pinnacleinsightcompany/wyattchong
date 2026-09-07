AOS.init({ duration: 720, once: true, offset: 60, easing: 'ease-out-cubic' });
lucide.createIcons();

document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 16);
});

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
