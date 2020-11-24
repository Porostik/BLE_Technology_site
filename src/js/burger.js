const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header-list-wrapp');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerNav.classList.toggle('active');
  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
});
