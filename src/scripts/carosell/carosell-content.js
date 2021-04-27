const cardContentDiv = document.createElement('div');

cardContentDiv.innerHTML = `  <article id="card-0" class="portfolio-section__box card__box">
                        <span></span>
                            <div class="card__content">
                                <h2 class="card__title">Soundflow Music Academy</h2>
                                <p class="card__body body">An online learning platform similar to Udemy/Brilliant which implements teacher friendly content upload, content lock, multiple subscription levels and course progression tracking
                                </p>
                                <div class="card__links">
                                    <a class="card__link" href="#">Commercial Website</a>
                                </div>
                            </div>
                    </article>
                    <article id="card-1" class="portfolio-section__box card__box">
                        <span></span>
                            <div class="card__content">
                            <h2 class="card__title">Nikos Argalias 2</h2>
                            <p class="card__body body">
                                Clean code evangelist and study addict
                            </p>
                            <div class="card__links">
                                <a class="card__link" href="#">Github</a>
                                <a class="card__link" href="#">Codepen</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-2" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Nikos Argalias 3</h2>
                            <p class="card__body body">
                                Clean code evangelist and study addict
                            </p>
                            <div class="card__links">
                                <a class="card__link" href="#">Github</a>
                                <a class="card__link" href="#">Codepen</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-3" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Nikos Argalias 4</h2>
                            <p class="card__body body">
                                Clean code evangelist and study addict
                            </p>
                            <div class="card__links">
                                <a class="card__link" href="#">Github</a>
                                <a class="card__link" href="#">Codepen</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-4" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Nikos Argalias 5</h2>
                            <p class="card__body body">
                                Clean code evangelist and study addict
                            </p>
                            <div class="card__links">
                                <a class="card__link" href="#">Github</a>
                                <a class="card__link" href="#">Codepen</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-5" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Nikos Argalias 6</h2>
                            <p class="card__body body">
                                Clean code evangelist and study addict
                            </p>
                            <div class="card__links">
                                <a class="card__link" href="#">Github</a>
                                <a class="card__link" href="#">Codepen</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-6" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Nikos Argalias 7</h2>
                            <p class="card__body body">
                                Clean code evangelist and study addict
                            </p>
                            <div class="card__links">
                                <a class="card__link" href="#">Github</a>
                                <a class="card__link" href="#">Codepen</a>
                            </div>
                        </div>
                    </article>
                    `;

const cards = (() => {
  const newArr = [];
  cardContentDiv.children.forEach((e, i) => {
    newArr.push(e);
  });
  return newArr;
})();

export { cards };
