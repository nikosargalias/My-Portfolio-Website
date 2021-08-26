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

  //  throttled fn
  //   const parallaxThrottle = throttle(parallaxSequence, 150);

  // Event Listener
  //   window.addEventListener('scroll', parallaxThrottle);

  //   function parallaxSequence() {

  //     if (isInViewport(portfolioSection)) {
  //       window.requestAnimationFrame(portfolioParallax);
  //     }

  //     if (isInViewport(aboutSection)) {
  //       window.requestAnimationFrame(aboutParallax);
  //     }
  //   }

  //   function isInViewport(element) {
  //     const elementPos = element.getBoundingClientRect();
  //     if (elementPos.bottom >= elementPos.bottom - elementPos.bottom * 2) {
  //       if (elementPos.top <= elementPos.height) {
  //         return true;
  //       }
  //     }
  //     return false;
  //   }

  //   let lastScrollTop = window.scrollY;

  //   function isScrollDown() {
  //     if (lastScrollTop < window.scrollY) {
  //       lastScrollTop = window.scrollY;
  //       return true;
  //     } else {
  //       lastScrollTop = window.scrollY;
  //       return false;
  //     }
  //   }

  const options = {
    root: null,
    threshold: [0.3, 0.4, 0.5, 0.9],
  };
  const observer = new IntersectionObserver(callbk, options);

  function callbk(entries) {
    entries.forEach((e) => {
      if (e.target === portfolioSection) {
        e.isIntersecting
          ? portfolioParallax('remove')
          : portfolioParallax('add');
      } else if (e.target === aboutSection) {
        e.isIntersecting ? aboutParallax('remove') : aboutParallax('add');
      }
    });
  }
  observer.observe(portfolioSection);
  observer.observe(aboutSection);
  //   function callbk(entries) {
  //     entries.forEach((e) => {
  //       if (e.isIntersecting) {
  //         const curElement = e.target;
  //         if (curElement === portfolioSection) {
  //           portfolioParallax();
  //         } else if (curElement === aboutSection) {
  //           rebel1.classList.remove(
  //             'parallax-movement--right',
  //             'parallax-movement--left'
  //           );
  //           rebel2.classList.remove(
  //             'parallax-movement--right',
  //             'parallax-movement--left'
  //           );
  //         }
  //       } else {
  //         stormTrooper.classList.add('parallax-movement--left');
  //         stormTrooper2.classList.add('parallax-movement--right');
  //       }
  //     });
  //   }

  function heroParallax(e) {
    if (window.scrollY <= hero.clientHeight / 6) {
      heroContent.classList.toggle(
        'parallax-movement--right',
        'parallax-movement--left'
      );
      hero__btn.classList.toggle(
        'parallax-movement--right',
        'parallax-movement--left'
      );
    } else if (isScrollDown()) {
      heroContent.classList.add('parallax-movement--right');
      hero__btn.classList.add('parallax-movement--left');
    }
  }

  //   function portfolioParallax(state) {
  //     const halwayInViewportFromTop =
  //       aboutSection.getBoundingClientRect().y < window.innerHeight / 2;

  //     const halwayInViewportFromBottom =
  //       aboutSection.getBoundingClientRect().y < -window.innerHeight / 2 &&
  //       aboutSection.getBoundingClientRect().y > -window.innerHeight;

  //     if (halwayInViewportFromTop) {
  //       stormTrooper.classList[state]('parallax-movement--left');
  //       stormTrooper2.classList[state]('parallax-movement--right');
  //     } else {
  //       stormTrooper.classList[state]('parallax-movement--right');
  //       stormTrooper2.classList[state]('parallax-movement--left');
  //     }
  //   }
  function portfolioParallax(state) {
    const halwayInViewportFromTop =
      aboutSection.getBoundingClientRect().y < window.innerHeight / 2;

    const halwayInViewportFromBottom =
      aboutSection.getBoundingClientRect().y < -window.innerHeight / 2 &&
      aboutSection.getBoundingClientRect().y > -window.innerHeight;

    if (halwayInViewportFromTop) {
      stormTrooper.classList.remove('parallax-movement--left');
      stormTrooper2.classList.remove('parallax-movement--right');
      stormTrooper.classList.remove('parallax-movement--right');
      stormTrooper2.classList.remove('parallax-movement--left');
    } else if (halwayInViewportFromBottom) {
      stormTrooper.classList.remove('parallax-movement--left');
      stormTrooper2.classList.remove('parallax-movement--right');
      stormTrooper.classList.remove('parallax-movement--right');
      stormTrooper2.classList.remove('parallax-movement--left');
    } else {
      stormTrooper.classList.add('parallax-movement--left');
      stormTrooper2.classList.add('parallax-movement--right');
    }
  }

  //   window.onscroll = aboutParallax;

  function aboutParallax(state) {
    const halwayInViewportFromTop =
      aboutSection.getBoundingClientRect().y < window.innerHeight / 2;

    const halwayInViewportFromBottom =
      aboutSection.getBoundingClientRect().y < -window.innerHeight / 2;

    if (halwayInViewportFromTop) {
      rebel1.classList[state]('parallax-movement--left');
      rebel2.classList[state]('parallax-movement--right');
    } else {
      rebel2.classList[state]('parallax-movement--left');
      rebel1.classList[state]('parallax-movement--right');
    }
  }
});
