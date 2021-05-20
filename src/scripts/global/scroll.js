import { mobile } from '../media-queries/media-queries';
import throttle from '../performance/throttle';

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header');

  const togglehHeaderBackgroundThrottle = throttle(
    togglehHeaderBackground,
    1000
  );

  // event listeners
  window.addEventListener('scroll', togglehHeaderBackgroundThrottle);
  window.onresize = largeWindowHeaderBackground;

  let lastSCrollPosition = 0;

  function togglehHeaderBackground() {
    console.log('papasdasdasd');
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
