
import $ from 'jquery';
const basket = () => {
  $('input').on('blur', function () {
    if ($(this).val().length > 0) {
      $(this).nextAll('.input__placeholder').addClass('active');
    } else {
      $(this).nextAll('.input__placeholder').removeClass('active');
    }
  })
}


export { basket };