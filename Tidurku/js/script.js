const navbar = document.querySelector('.navbar-container');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const currentSection = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 50) - 1;
  const activeLink = navbar.querySelector('.active');
  const currentLink = navbar.querySelectorAll('a')[currentSection];

  activeLink.classList.remove('active');
  currentLink.classList.add('active');

  if (window.scrollY >= 50) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});