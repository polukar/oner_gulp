import Swiper from 'swiper/bundle';


const sliders = () => {
  const mainSlider = document.querySelector('.main-slider ');
  if (mainSlider) {
    var slider = new Swiper('.main-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.main-slider-next',
        prevEl: '.main-slider-prev',
      },
    });
  }

  const recomendationSlider = document.querySelector('.recomendation-slider');
  if (recomendationSlider) {
    var slider = new Swiper('.recomendation-slider', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.recomendation-slider-next',
        prevEl: '.recomendation-slider-prev',
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
      }
    });
  }

  const recomendationSlider1 = document.querySelector('#slider-1');
  if (recomendationSlider1) {
    var slider = new Swiper('#slider-1 .recomendation-slider-loop', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
          navigation: {
            nextEl: '#slider-1 .recomendation-slider-next',
            prevEl: '#slider-1 .recomendation-slider-prev',
          },
        },
      }
    });
  }

  const recomendationSlider2 = document.querySelector('#slider-2');
  if (recomendationSlider2) {
    var slider = new Swiper('#slider-2 .recomendation-slider-loop', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
          navigation: {
            nextEl: '#slider-2 .recomendation-slider-next',
            prevEl: '#slider-2 .recomendation-slider-prev',
          },
        },
      }
    });
  }

  const catalogLinkSlider = document.querySelector('.catalog-link-slider');
  if (catalogLinkSlider) {
    var slider = new Swiper('.catalog-link-slider', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        },
      }
    });
  }
}

export { sliders };