const publicEls = {
  listItems: document.querySelectorAll('.menu__item'),
  navMenu: document.getElementById('menu__nav'),
  listItems: document.querySelectorAll('.menu__item'),
  burgerBtn: document.getElementById('menu__burger-btn'),
};

// add transition delay to menu items so they slide one at a time
publicEls.listItems.forEach((item, i) => {
  item.style = `transition-delay: 0.${i + i}s`;
});

// burger btn click event listener
publicEls.burgerBtn.addEventListener('click', onClickBurgerBtn);

function onClickBurgerBtn(e) {
  slideInMenu();
  rotateBurgerLines();
}

function slideInMenu() {
  const { navMenu, listItems } = publicEls;
  navMenu.classList.toggle('menu__open');
  listItems.forEach((item, i) => {
    item.classList.toggle('menu__open');
  });
}

function rotateBurgerLines() {
  publicEls.burgerBtn.classList.toggle('menu__burger-btn--clicked');
}
