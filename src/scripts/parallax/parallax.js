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
  const parallaxThrottle = throttle(parallaxSequence, 50);

  // Event Listener
  window.addEventListener('scroll', parallaxThrottle);

  function parallaxSequence() {
    if (isInViewport(hero)) {
      heroParallax();
    }

    if (isInViewport(portfolioSection)) {
      portfolioParallax();
    }

    if (isInViewport(aboutSection)) {
      aboutParallax();
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

  function heroParallax() {
    const scrollValueProper =
      (hero.offsetWidth * window.scrollY) / hero.clientHeight;

    if (window.scrollY <= hero.clientHeight / 6) {
      imgOne.style.transform = `translateX(0px)`;
      imgTwo.style.transform = `translateX(0px)`;
      heroContent.style.transform = `translateX(0px)`;
      hero__btn.style.transform = `translateX(0px)`;
    } else {
      imgOne.style.transform = `translateX(-100vw)`;
      imgTwo.style.transform = `translateX(100vw)`;
      heroContent.style.transform = `translateX(100vw)`;
      hero__btn.style.transform = `translateX(-100vw)`;
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
      stormTrooper.style.transform = `translateX(-100vw)`;
      stormTrooper2.style.transform = `translateX(-100vw)`;
      stormTrooper3.style.transform = `translateX(100vw)`;
      stormTrooper4.style.transform = `translateX(100vw)`;
    }

    if (heightPercent >= -200) {
      stormTrooper.style.transform = `translateX(0px)`;
      stormTrooper2.style.transform = `translateX(0px)`;
      stormTrooper3.style.transform = `translateX(0px)`;
      stormTrooper4.style.transform = `translateX(0px)`;
    }

    if (heightPercent >= 200) {
      stormTrooper.style.transform = `translateX(100vw)`;
      stormTrooper2.style.transform = `translateX(100vw)`;
      stormTrooper3.style.transform = `translateX(-100vw)`;
      stormTrooper4.style.transform = `translateX(-100vw)`;
    }
  }

  function aboutParallax() {
    const widthPercent =
      ((window.scrollY - hero.clientHeight * 2) / aboutSection.offsetHeight) *
      aboutSection.offsetWidth;

    if (widthPercent < -200) {
      rebel1.style.transform = `translateX(-100vw)`;
      rebel2.style.transform = `translateX(100vw)`;
    }

    if (widthPercent > -200) {
      rebel1.style.transform = `translateX(0)`;
      rebel2.style.transform = `translateX(0)`;
    }

    if (widthPercent > aboutSection.clientHeight / 6) {
      rebel1.style.transform = `translateX(100vw)`;
      rebel2.style.transform = `translateX(-100vw)`;
    }
  }
});
