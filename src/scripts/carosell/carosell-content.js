const cardContentDiv = document.createElement('div');

cardContentDiv.innerHTML = `  
                    <article id="card-0" class="portfolio-section__box card__box">
                        <span></span>
                            <div class="card__content">
                                <h2 class="card__title">Soundflow Music Academy</h2>
                                <p class="card__body body">An online learning platform similar to Udemy/Brilliant with tutor friendly content upload, content lock, multiple membership levels and course progression tracking
                                </p>
                                <div class="card__links">
                                    <a class="card__link" target="_blank" href="https://online.soundflowmusicacademy.com/">Commercial Website</a>
                                </div>
                            </div>
                    </article>
                    <article id="card-1" class="portfolio-section__box card__box">
                        <span></span>
                            <div class="card__content">
                                <h2 class="card__title">This Website!</h2>
                                <p class="card__body body">This website uses component based architecture for many Javascript features such as throttle and debounce functions for site performance, hiding nav-background on mobile when scrolling down, parallax images and typewriter effect. Additionally, I'm using BEM, component based SCSS, and Webpack + Babel preprocessing for distribution bundle.
                                </p>
                                <div class="card__links">
                                    <a class="card__link" target="_blank" href="https://github.com/nikosargalias/My-Portfolio-Website">Github</a>
                                </div>
                            </div>
                    </article>
                    
                    <article id="card-2" class="portfolio-section__box card__box">
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
                    <article id="card-3" class="portfolio-section__box card__box">
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
                    <article id="card-4" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Guessing Game</h2>
                            <p class="card__body body">
                            Not just any light guessing game. This features multiple validation function to check if your guess is too high / too low / whether the game has started and more. It also features dynamically changing themes, and usage of local storage to store your high score. Built using MVC architecture and component based BEM SCSS. 
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/guess-number">Github</a>
                                <a class="card__link" target="_blank" href="https://heuristic-hamilton-6c881a.netlify.app/">Website</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-5" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Pig Game</h2>
                            <p class="card__body body">
                                The famous Pig Game, however with a beautiful design responsive to any device (landscape or portrait). Using BEM, and component based SCSS. Using Webpack and babel for compatibility with old browsers and MVC JS architecture. 
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/Pig-Game">Github</a>
                                <a class="card__link" target="_blank"  href="https://vigilant-edison-6cb8c6.netlify.app/">Website</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-6" class="portfolio-section__box card__box">
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
                    <article id="card-7" class="portfolio-section__box card__box">
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
                    <article id="card-8" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Tidy Todo</h2>
                            <p class="card__body body">
                                A todo & note taking aplication the ability to: sort, add, delete, filter and edit lists. This was a Javascript heavy project with very little focus on design. Utilising functional prgramming techniques, MVC architecture and webpack for bundle optimisation. 
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/Tidy-Todo">Website</a>
                                <a class="card__link" target="_blank"  href="https://competent-visvesvaraya-98b0aa.netlify.app/">Github</a>
                            </div>
                        </div>
                    </article>
                    <article id="card-9" class="portfolio-section__box card__box">
                        <span></span>
                        <div class="card__content">
                            <h2 class="card__title">Hangman++</h2>
                            <p class="card__body body">
                            A word guessing game with a custom integration of user accounts allowing you to create multiple user accounts (using secure hashed password encryption), which save your game progress to local storage.
                            </p>
                            <div class="card__links">
                                <a class="card__link" target="_blank"  href="https://github.com/nikosargalias/Hangman">Github</a>
                                <a class="card__link" target="_blank" href="https://inspiring-cray-30a441.netlify.app/">Website</a>
                            </div>
                        </div>
                    </article>
                    `;

const cards = (() => {
  const newArr = [];
  Array.from(cardContentDiv.children).forEach((e, i) => {
    newArr.push(e);
  });
  return newArr;
})();

export { cards };
