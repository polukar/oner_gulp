import { fadeIn, fadeOut } from '../events/fadein'
const menu = () => {
  const openMenu = document.querySelector('.--open-menu');
  const closeMenu = document.querySelectorAll('.--close-menu');

  if (openMenu, closeMenu) {
    const menu = document.querySelector('.menu');

    openMenu.addEventListener('click', function () {
      fadeIn(menu);
    });

    closeMenu.forEach(elem => {
      elem.addEventListener('click', function () {
        fadeOut(menu);
      })
    })
  }
}

export { menu };