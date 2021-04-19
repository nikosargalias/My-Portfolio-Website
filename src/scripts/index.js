import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '../main.scss';

document.querySelector('#burger').addEventListener('click', burgerMenu);

function burgerMenu(e) {
  console.log(e.target);
  const navMenu = document.getElementById('menu__list');
  navMenu.classList.toggle('menu__list--fade-in');
  const burgerLines = document.getElementById('burger');
  burgerLines.classList.toggle('burger__line--clicked');
  console.log(navMenu);
}
