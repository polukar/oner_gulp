const footer = () => {
  const footerTitle = document.querySelectorAll('.footer__title');
  const footerLinks = document.querySelectorAll('.footer__links');
  footerTitle.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      if (!elem.classList.contains('active')) {
        elem.classList.add('active')
        footerLinks.forEach((link, linkIndex) => {
          if (index == linkIndex) {
            link.classList.add('active');
          }
        })
      } else {
        elem.classList.remove('active');
        footerLinks.forEach((link, linkIndex) => {
          if (index == linkIndex) {
            link.classList.remove('active');
          }
        })
      }
    })
  })
}

export { footer };