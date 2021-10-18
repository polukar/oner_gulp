import $ from 'jquery';

const popup = () => {
  $('.btn--diller').on('click', function (e) {
    e.preventDefault();
    $('.diller').addClass('active');
  });

  $('.n-header__right .n-header__basket, .mobile-header .n-header__basket').on('click', function () {
    $('.basket-fixed').addClass('active');
  })

  $('button.n-basket__submit').on('click', function (e) {
    e.preventDefault();
    $('.succes').addClass('active')
  });

  $('.succes .close').on('click', function () {
    $('.succes').removeClass('active');
  });


  $('.filter-button-even__catalog').on('click', function () {
    $('.popup-filter-nav').addClass('active')
  })
  $('.filter-button-even__filter').on('click', function () {
    $('.popup-filter-range').addClass('active')
  })
}

export { popup };