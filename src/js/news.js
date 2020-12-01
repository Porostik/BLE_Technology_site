const newsItemsList = document.querySelectorAll('.news__list__item');
const viewsButton = document.querySelector('.view-all');
let isOpen = false;

window.onload = () => {
  if (document.documentElement.clientWidth <= 680) {
    newsItemsList[0].classList.add('visible');
    viewsButton.addEventListener('click', viewAllItems);
  }
};

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth <= 680) {
    newsItemsList[0].classList.add('visible');
    viewsButton.addEventListener('click', viewAllItems);
  }
});

function viewAllItems() {
  newsItemsList.forEach((item, index) => {
    if (index !== 0) item.classList.toggle('visible');
    isOpen ? (viewsButton.textContent = 'View all news') : (viewsButton.innerHTML = 'Hide news ');

    isOpen = !isOpen;
  });
}
