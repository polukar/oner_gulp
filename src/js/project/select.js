import $ from 'jquery';

const select = () => {
  $('.select__main').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).nextAll('.select__drop').slideDown();
    } else {
      $(this).removeClass('active');
      $(this).nextAll('.select__drop').slideUp();
    }
  })
}


export { select };