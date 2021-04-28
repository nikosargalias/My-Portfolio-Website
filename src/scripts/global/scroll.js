import { mobile } from '../media-queries/media-queries';

window.addEventListener('DOMContentLoaded', (event) => {
  const header = document.querySelector('#header');

  // event listeners
  window.onscroll = togglehHeaderBackground;
  window.onresize = largeWindowHeaderBackground;

  let lastSCrollPosition = 0;

  function togglehHeaderBackground() {
    const scrolledDown = window.scrollY > lastSCrollPosition;
    if (mobile.matches) {
      if (scrolledDown) {
        header.style.background = 'transparent';
      } else {
        header.style.background = 'rgba(0, 0, 0, 0.712)';
      }
    }

    lastSCrollPosition = window.scrollY;
  }

  function largeWindowHeaderBackground() {
    if (!mobile.matches) {
      header.style.background = 'rgba(0, 0, 0, 0.712)';
    }
  }
});
