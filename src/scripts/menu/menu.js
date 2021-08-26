window.addEventListener('DOMContentLoaded', (event) => {
  const publicEls = {
    listItems: document.querySelectorAll('.menu__item'),
    navMenu: document.getElementById('menu__nav'),
    // menu: document.getElementById('menu'),
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

  const slideInMenu = (function () {
    let state = false;

    return function () {
      const { navMenu, listItems, menu } = publicEls;

      if (!state) {
        navMenu.classList.remove('hidden');
      }

      setTimeout(() => {
        navMenu.classList.toggle('menu__open');
        // menu.classList.toggle('menu__height');
        listItems.forEach((item, i) => {
          item.classList.toggle('menu__open');
        });

        setTimeout(() => {
          if (state) {
            navMenu.classList.add('hidden');
          }
          state = !state;
        }, 500);
      }, 0);
    };
  })();

  function rotateBurgerLines() {
    publicEls.burgerBtn.classList.toggle('menu__burger-btn--clicked');
  }
});
