import { tablet } from '../media-queries/media-queries';
import throttle from '../performance/throttle';

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header');

  const togglehHeaderBackgroundThrottle = throttle(
    togglehHeaderBackground,
    200
  );

  // event listeners
  window.addEventListener('scroll', togglehHeaderBackgroundThrottle);
  window.onresize = largeWindowHeaderBackground;

  let lastSCrollPosition = 0;

  function togglehHeaderBackground() {
    const scrolledDown = window.scrollY > lastSCrollPosition;

    if (!tablet.matches) {
      if (scrolledDown) {
        header.style.background = 'transparent';
      } else {
        header.style.background = 'rgba(0, 0, 0, 0.712)';
      }
    }

    lastSCrollPosition = window.scrollY;
  }

  function largeWindowHeaderBackground() {
    if (tablet.matches) {
      header.style.background = 'rgba(0, 0, 0, 0.712)';
    }
  }
});
