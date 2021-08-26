import throttle from '../performance/throttle';

window.addEventListener('DOMContentLoaded', (event) => {
  // Hero Images
  const heroContent = document.getElementById('hero__content');
  const hero__btn = document.getElementById('hero__btn');
  const hero = document.getElementById('hero');

  //   Portfolio Images & section
  const stormTrooper = document.getElementById('storm-trooper-one');
  const stormTrooper2 = document.getElementById('storm-trooper-two');
  const portfolioSection = document.getElementById('portfolio');

  // About images
  const aboutSection = document.getElementById('about-section');
  const rebel1 = document.getElementById('rebel-one');
  const rebel2 = document.getElementById('rebel-two');

  const options = {
    root: null,
    threshold: [0.3, 0.4, 0.5, 0.9],
  };
  const observer = new IntersectionObserver(callback, options);

  function callback(entries) {
    entries.forEach((e) => {
      if (e.target === portfolioSection) {
        e.isIntersecting ? portfolioParallax(true) : portfolioParallax(false);
      } else if (e.target === aboutSection) {
        e.isIntersecting ? aboutParallax(true) : aboutParallax(false);
      } else if (e.target === hero) {
        e.isIntersecting ? heroParallax(true) : heroParallax(false);
      }
    });
  }
  observer.observe(portfolioSection);
  observer.observe(aboutSection);
  observer.observe(hero);

  function heroParallax(state) {
    if (state) {
      heroContent.classList.remove('parallax-movement--left');
      hero__btn.classList.remove('parallax-movement--right');
      heroContent.classList.remove('parallax-movement--right');
      hero__btn.classList.remove('parallax-movement--left');
    } else if (portfolioSection.getBoundingClientRect().y > 0) {
      heroContent.classList.add('parallax-movement--left');
      hero__btn.classList.add('parallax-movement--right');
    } else {
      hero__btn.classList.add('parallax-movement--left');
      heroContent.classList.add('parallax-movement--right');
    }
  }

  function portfolioParallax(state) {
    if (state) {
      stormTrooper.classList.remove('parallax-movement--left');
      stormTrooper2.classList.remove('parallax-movement--right');
      stormTrooper.classList.remove('parallax-movement--right');
      stormTrooper2.classList.remove('parallax-movement--left');
    } else if (portfolioSection.getBoundingClientRect().y > 0) {
      stormTrooper.classList.add('parallax-movement--left');
      stormTrooper2.classList.add('parallax-movement--right');
    } else {
      stormTrooper2.classList.add('parallax-movement--left');
      stormTrooper.classList.add('parallax-movement--right');
    }
  }

  //   window.onscroll = aboutParallax;

  function aboutParallax(state) {
    if (state) {
      rebel1.classList.remove('parallax-movement--left');
      rebel2.classList.remove('parallax-movement--right');
      rebel1.classList.remove('parallax-movement--right');
      rebel2.classList.remove('parallax-movement--left');
    } else if (aboutSection.getBoundingClientRect().y > 0) {
      rebel1.classList.add('parallax-movement--left');
      rebel2.classList.add('parallax-movement--right');
    } else {
      rebel2.classList.add('parallax-movement--left');
      rebel1.classList.add('parallax-movement--right');
    }
  }
});
