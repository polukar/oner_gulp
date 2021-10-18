import Inputmask from 'inputmask';
import $ from 'jquery';

let form = () => {
  let selector = document.querySelectorAll('.js-mask__tel');
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
  }).mask(selector);

  $('.login__tabs-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('.tab:eq(' + index + ')').addClass('active').siblings().removeClass('active');
  });

  $('.login__radios .radio').on('mouseup', function () {
    var index = $(this).index();
    $('.tab:eq(' + index + ')').addClass('active').siblings().removeClass('active');
  })
};

export { form };