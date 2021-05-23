const cardContentDiv = document.createElement('div');

cardContentDiv.innerHTML = `  <article id="card-0" class="portfolio-section__box card__box">
                        <span></span>
                            <div class="card__content">
                                <h2 class="card__title">Soundflow Music Academy</h2>
                                <p class="card__body body">An online learning platform similar to Udemy/Brilliant with tutor friendly content upload, content lock, multiple membership levels and course progression tracking
                                </p>
                                <div class="card__links">
                                    <a class="card__link" target="_blank" href="http://online.soundflowmusicacademy.com/">Commercial Website</a>
                                </div>
                            </div>
                    </article>
                    <article id="card-1" class="portfolio-section__box card__box">
                        <span></span>
                            <div class="card__content">
                            <h2 class="card__title">
                                Think Saga
                            </h2>
                            <p class="card__body body">
                                Modern website with custom article upload integration - capability to upload user formatted articles which automatically get displayed on the home page - with edit and delete article capabilities.
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/ThinkSaga">Github</a>
                                <a class="card__link" target="_blank" href="https://cocky-ardinghelli-7011e3.netlify.app/index.html">Website</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-2" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Realtor Agency</h2>
                            <p class="card__body body">
                                A fully responsive, beautiflly designed realtor agency, made with a focus on using the latest CSS Grid features, BEM and component based architecture using the lastest SCSS features
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/grid-realtor">Github</a>
                                <a class="card__link" target="_blank" href="https://loving-varahamihira-8901ac.netlify.app/">Website</a>
                               
                            </div>
                        </div>
                    </article>
                    <article id="card-3" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Hangman++</h2>
                            <p class="card__body body">
                            word guessing game with a custom integration of user accounts allowing you to create multiple user accounts (using secure hashed password encryption), which save your game progress to local storage.
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/Hangman">Github</a>
                                <a class="card__link" target="_blank" href="https://inspiring-cray-30a441.netlify.app/">Website</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-4" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">AirBnB Style</h2>
                            <p class="card__body body">
                                A fully responsive, beautifully designed AirBnB styled booking page. This was made with a focus on BEM, component based architecture and optimised bundles using webpack. 
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/Travel-Agency">Github</a>
                                <a class="card__link" target="_blank" href="https://wizardly-poincare-91ddfa.netlify.app/">Website</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-5" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Natours</h2>
                            <p class="card__body body">
                                A fully responsive, modern website with multiple, smooth (GPU accelerated) animations and hover effects. With a focus on BEM, component based architecutre for SCSS, Javascript. Utilising Webpack for bundle optimisation. 
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/Natours">Github</a>
                                <a class="card__link" target="_blank" href="https://natours2021.netlify.app/">Website</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-6" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Tidy Todo</h2>
                            <p class="card__body body">
                                A todo & note taking aplication the ability to: sort, add, delete, filter and edit lists. This was a Javascript heavy project with very little focus on design. Utilising functional prgramming techniques, MVC architecture and webpack for bundle optimisation. 
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/Tidy-Todo">Github</a>
                                <a class="card__link" target="_blank"  href="https://competent-visvesvaraya-98b0aa.netlify.app/">Codepen</a>
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
