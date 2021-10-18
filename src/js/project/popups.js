import { fadeIn, fadeOut } from '../events/fadein'

const popups = () => {
  const openPopupProvider = document.querySelector('.--provider-open')
  if (openPopupProvider) {
    const popupProvider = document.querySelector('.popup-provider');
    const closePopupProvider = document.querySelector('.--provider-close');

    openPopupProvider.addEventListener('click', (e) => {
      e.preventDefault();
      fadeIn(popupProvider);
    })
    closePopupProvider.addEventListener('click', () => {
      fadeOut(popupProvider);
      console.log('llll')
    })
  }
}

export { popups };