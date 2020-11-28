const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const dotsControls = Array.from(document.querySelectorAll('.dot'));
let currentActiveIndex = 0;

dotsControls.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (index !== currentActiveIndex) {
      sliderItems[index].classList.add('active');
      sliderItems[currentActiveIndex].classList.remove('active');
      index % 2 === 0
        ? dotsControls[0].parentElement.classList.add('right')
        : dotsControls[0].parentElement.classList.remove('right');
      dotsControls[currentActiveIndex].classList.remove('active');
      dotsControls[index].classList.add('active');
      currentActiveIndex = index;
    }
  });
});
