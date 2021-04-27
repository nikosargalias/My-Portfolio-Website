import { mobile } from '../media-queries/media-queries';

window.addEventListener('DOMContentLoaded', (event) => {
  const headerHeight = document.querySelector('#header');

  // event listeners
  window.onscroll = togglehHeaderBackground;
  window.onresize = largeWindowHeaderBackground;

  let lastSCrollPosition = 0;

  function togglehHeaderBackground() {
    if (mobile.matches) {
      if (window.scrollY > lastSCrollPosition) {
        headerHeight.style.background = 'transparent';
      } else {
        headerHeight.style.background = 'rgba(0, 0, 0, 0.712)';
      }
    }
    lastSCrollPosition = window.scrollY;
  }

  function largeWindowHeaderBackground() {
    if (!mobile.matches) {
      headerHeight.style.background = 'rgba(0, 0, 0, 0.712)';
    }
  }
});
