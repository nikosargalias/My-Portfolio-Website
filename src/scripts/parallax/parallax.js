import throttle from '../performance/throttle';

window.addEventListener('DOMContentLoaded', (event) => {
  // Hero Images
  const imgOne = document.getElementById('para-img-1');
  const imgTwo = document.getElementById('para-img-2');
  const imgThree = document.getElementById('para-img-3');
  const heroContent = document.getElementById('hero__content');
  const hero__btn = document.getElementById('hero__btn');
  const hero = document.getElementById('hero');

  //   Portfolio Images & section
  const stormTrooper = document.getElementById('storm-trooper-one');
  const stormTrooper2 = document.getElementById('storm-trooper-two');
  const stormTrooper3 = document.getElementById('storm-trooper-three');
  const stormTrooper4 = document.getElementById('storm-trooper-four');
  const portfolioSection = document.getElementById('portfolio');

  // About images
  const aboutSection = document.getElementById('about-section');
  const rebel1 = document.getElementById('rebel-one');
  const rebel2 = document.getElementById('rebel-two');

  //  throttled fn
  const parallaxThrottle = throttle(parallaxSequence, 150);

  // Event Listener
  window.addEventListener('scroll', parallaxThrottle);

  function parallaxSequence() {
    console.log('trying');
    if (isInViewport(hero)) {
      window.requestAnimationFrame(heroParallax);
    }

    if (isInViewport(portfolioSection)) {
      window.requestAnimationFrame(portfolioParallax);
    }

    if (isInViewport(aboutSection)) {
      window.requestAnimationFrame(aboutParallax);
    }
  }

  function isInViewport(element) {
    const elementPos = element.getBoundingClientRect();
    if (elementPos.bottom >= elementPos.bottom - elementPos.bottom * 2) {
      if (elementPos.top <= elementPos.height) {
        return true;
      }
    }
    return false;
  }

  let lastScrollTop = 0;

  function isScrollDown() {
    if (lastScrollTop < window.scrollY) {
      lastScrollTop = window.scrollY;
      return true;
    } else {
      lastScrollTop = window.scrollY;
      return false;
    }
  }

  function heroParallax(e) {
    if (window.scrollY <= hero.clientHeight / 6) {
      heroContent.classList.remove(
        'parallax-movement--right',
        'parallax-movement--left'
      );
      hero__btn.classList.remove(
        'parallax-movement--right',
        'parallax-movement--left'
      );
    } else if (isScrollDown) {
      heroContent.classList.add('parallax-movement--right');
      hero__btn.classList.add('parallax-movement--left');
    }
  }

  function portfolioParallax() {
    const widthPercent =
      ((window.scrollY - hero.clientHeight) / portfolioSection.clientHeight) *
      portfolioSection.offsetWidth;

    const heightPercent =
      ((window.scrollY - hero.clientHeight) / portfolioSection.clientHeight) *
      portfolioSection.offsetHeight;

    if (window.scrollY < hero.clientHeight) {
      stormTrooper.classList.add('parallax-movement--left');
      stormTrooper2.classList.add('parallax-movement--left');
      stormTrooper3.classList.add('parallax-movement--right');
      stormTrooper4.classList.add('parallax-movement--right');
    }

    if (heightPercent >= -200) {
      stormTrooper.classList.remove(
        'parallax-movement--left',
        'parallax-movement--right'
      );
      stormTrooper2.classList.remove(
        'parallax-movement--left',
        'parallax-movement--right'
      );
      stormTrooper3.classList.remove(
        'parallax-movement--left',
        'parallax-movement--right'
      );
      stormTrooper4.classList.remove(
        'parallax-movement--left',
        'parallax-movement--right'
      );
    }

    if (heightPercent >= 200) {
      stormTrooper.classList.add('parallax-movement--right');
      stormTrooper2.classList.add('parallax-movement--right');
      stormTrooper3.classList.add('parallax-movement--left');
      stormTrooper4.classList.add('parallax-movement--left');
    }
  }

  function aboutParallax() {
    const widthPercent =
      ((window.scrollY - hero.clientHeight * 2) / aboutSection.offsetHeight) *
      aboutSection.offsetWidth;

    if (widthPercent < -200) {
      rebel1.classList.add('parallax-movement--left');
      rebel2.classList.add('parallax-movement--right');
    }

    if (widthPercent > -200) {
      rebel1.classList.remove(
        'parallax-movement--right',
        'parallax-movement--left'
      );
      rebel2.classList.remove(
        'parallax-movement--right',
        'parallax-movement--left'
      );
    }

    if (widthPercent > aboutSection.clientHeight / 6) {
      rebel1.classList.add('parallax-movement--right');
      rebel2.classList.add('parallax-movement--left');
    }
  }
});
