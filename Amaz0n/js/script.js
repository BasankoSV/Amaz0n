(function (factory) {
  typeof define === 'function' && define.amd ? define('script', factory) :
  factory();
}((function () { 'use strict';

  const arrowLeft = document.querySelector('[data-arrow="left"]');
  const arrowRight = document.querySelector('[data-arrow="right"]');
  const carousel = {
    carouselWrapper: document.querySelectorAll('.carousel-wrapper'),

    currentChange(direction) {
      let current;

      for (let i = 0; i < this.carouselWrapper.length; i++) {
        if (this.carouselWrapper[i].dataset.current === '1') current = i;
      }

      this.carouselWrapper[current].removeAttribute('data-current');
      let prev = current;

      switch (direction) {
        case 'right':
          this.carouselWrapper[current].style = 'transform: translate(120%, 0); transition: transform 1.5s ease 1.5s;';
          current++;
          current === this.carouselWrapper.length ? current = 0 : current;
          this.carouselWrapper[current].style = 'transform: translate(-120%, 0);';
          break;

        case 'left':
          this.carouselWrapper[current].style = 'transform: translate(-120%, 0); transition: all 1.5s ease 1.5s';
          current--;
          current < 0 ? current = this.carouselWrapper.length - 1 : current;
          this.carouselWrapper[current].style = 'transform: translate(120%, 0);';
          break;
      }

      setTimeout(() => {
        this.carouselWrapper[current].style = 'transform: translate(0, 0); transition: all 1.5s ease 1.5s;';
      }, 1);
      setTimeout(() => {
        this.carouselWrapper[prev].style = 'transform: translate(0, 0); opacity: 0;';
      }, 2500);
      this.carouselWrapper[current].setAttribute('data-current', '1');
    }

  };
  arrowLeft.addEventListener('click', carousel.currentChange.bind(carousel, 'left'));
  arrowRight.addEventListener('click', carousel.currentChange.bind(carousel, 'right'));

})));
