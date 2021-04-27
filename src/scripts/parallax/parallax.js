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

  window.addEventListener('scroll', parallaxSequence);

  function parallaxSequence() {
    heroParallax();
    portfolioParallax();
    aboutParallax();
  }

  function heroParallax() {
    const scrollValueProper =
      (hero.offsetWidth * window.scrollY) / hero.clientHeight;
    imgOne.style.transform = `translateX(${scrollValueProper}px)`;
    imgTwo.style.transform = `translateX(-${scrollValueProper}px)`;
    heroContent.style.transform = `translateX(${scrollValueProper}px)`;
    hero__btn.style.transform = `translateX(-${scrollValueProper}px)`;
  }

  function portfolioParallax() {
    const widthPercent =
      ((window.scrollY - hero.clientHeight) / portfolioSection.clientHeight) *
      portfolioSection.offsetWidth;

    const heightPercent =
      ((window.scrollY - hero.clientHeight) / portfolioSection.clientHeight) *
      portfolioSection.offsetHeight;

    stormTrooper.style.transform = `translateX(${widthPercent}px)`;
    stormTrooper2.style.transform = `translateX(${-widthPercent}px)`;
    // stormTrooper3.style.transform = `translateY(${-heightPercent}px)`;
    stormTrooper4.style.transform = `translateX(${-widthPercent}px)`;
  }

  function aboutParallax() {
    const widthPercent =
      ((window.scrollY - hero.clientHeight * 2) / aboutSection.offsetHeight) *
      aboutSection.offsetWidth;

    rebel1.style.transform = `translateX(${-widthPercent}px)`;
    rebel2.style.transform = `translateX(${widthPercent}px)`;
  }
});
