const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const posterDialog = document.querySelector('.poster-dialog');

const heroTitle = document.querySelector('.hero h1');
const heroLastLine = heroTitle?.querySelector('.hero-last-line');
const mobileHero = window.matchMedia('(max-width: 900px)');
function fitHeroTitle() {
  if (!heroTitle || !heroLastLine) return;
  heroTitle.style.removeProperty('--fit-title');
  if (!mobileHero.matches || !heroTitle.clientWidth) return;
  heroTitle.style.setProperty('--fit-title', 'clamp(4.1rem, 17vw, 7.8rem)');
  const preferredSize = parseFloat(getComputedStyle(heroTitle).fontSize);
  const wordWidth = heroLastLine.getBoundingClientRect().width;
  if (wordWidth > heroTitle.clientWidth - 4) {
    heroTitle.style.setProperty('--fit-title', `${preferredSize * (heroTitle.clientWidth - 4) / wordWidth}px`);
  }
}
fitHeroTitle();
window.addEventListener('resize', fitHeroTitle);
document.fonts?.ready.then(fitHeroTitle);

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
