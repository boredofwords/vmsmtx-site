const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const posterDialog = document.querySelector('.poster-dialog');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('[data-poster-open]')?.addEventListener('click', () => posterDialog?.showModal());
document.querySelector('[data-poster-close]')?.addEventListener('click', () => posterDialog?.close());
posterDialog?.addEventListener('click', (event) => {
  if (event.target === posterDialog) posterDialog.close();
});
