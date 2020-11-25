const burger = document.querySelector('.burger');
const navPopup = document.querySelector('.popup-list');
const navItemPopupList = document.querySelector('.nav-with-drop-list');
const headerNav = document.querySelector('.header-list-wrapp');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerNav.classList.toggle('active');
  document.body.style.overflow = document.body.style.overflow ? '' : 'hidden';
});

navItemPopupList.addEventListener('click', (e) => {
  if (e.target.parentElement !== navPopup) {
    navPopup.classList.toggle('active');
  }
});

document.body.addEventListener('click', (e) => {
  if (!e.path.includes(navItemPopupList)) {
    navPopup.classList.remove('active');
  }
});
