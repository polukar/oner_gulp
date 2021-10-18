import $ from "jquery";


const accardeon = () => {
  $('.accardeon__main').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).nextAll('.accardeon__content').slideDown();
    } else {
      $(this).removeClass('active');
      $(this).nextAll('.accardeon__content').slideUp();
      $(this).nextAll('.accardeon__content').find('.accardeon__content').slideUp();
      $(this).nextAll('.accardeon__content').find('.accardeon__main').removeClass('active');
    }
  });

  // $('.fade__accardeon').on('click', function () {
  //   if (!$(this).hasClass('active')) {
  //     $(this).addClass('active');
  //     $('.accardeon__main').addClass('active');
  //     $('.accardeon__content').slideDown();
  //     $(this).find('span').empty().text('Свернуть все');
  //   } else {
  //     $(this).removeClass('active');
  //     $('.accardeon__content').slideUp()
  //     $(this).find('span').empty().text('Развернуть все');
  //   }
  // })
}

export { accardeon };