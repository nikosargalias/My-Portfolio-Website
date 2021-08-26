const nav = document.querySelector('#menu__list');

// Event propagation (bubling) is used so that when a link is clicked, the event bubbles up to the overall nav event listener. We then check if it was indeed a link that was clicked with the condition, and if so scroll down to the section of the p[age containing the id of the href
nav.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('menu__link')) {
    console.log(e.target);
    const id = e.target.getAttribute('href');

    // the height from the top of viewport to the element, plus the amount scrolled already
    const scrollAmount =
      document.querySelector(id).getBoundingClientRect().y + window.scrollY;

    window.scrollTo({ left: 0, top: scrollAmount, behavior: 'smooth' });
  }
});
