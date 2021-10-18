const tags = () => {
  const tags = document.querySelectorAll('.tags');
  if (tags) {
    tags.forEach(elem => {
      const tag = elem.querySelectorAll('.tag');

      tag.forEach(e => {
        e.addEventListener('click', () => {
          e.classList.toggle('active');
        })
      })
    })

  }
}

export { tags };