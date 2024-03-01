import { useEffect, useRef } from "react";

import Meal from "../components/landing-page/Meal";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const showcaseInner = useRef(null);

  useEffect(() => {
    const showcaseContent = Array.from(showcaseInner.current.children);

    showcaseContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      showcaseInner.current.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <main>
      <div className="main__container">
        <h1>Tasteful</h1>
      </div>

      <div className="vegetable--divider"></div>

      <div className="info-box">
        <div className="info-box__heading">
          <span>Tasteful meal!</span>
          <p>
            A healthy home-cooked meal with plenty of vegetables that comes
            straight from the ingredients.
          </p>
        </div>

        <div className="info-box__image--wrapper">
          <img src="./images/food-plate.png" alt="A plate of food" />
        </div>

        <div className="info-box__text">
          <p>
            Even in your busy days, we want to take care of your body and mind.
          </p>
          <p>
            We deliver home-cooked meals packed with vegetables that can be
            prepared in just a few moments, straight to your home.
          </p>
          <p>
            Even easier. More Delicious. More fun. We hope you continue to have
            a healthy diet.
          </p>
        </div>
      </div>

      <div className="meals__slider">
        <h1>Healthy & Tasty</h1>
        <p>
          You can mix and match as you like depending on the occasion and mood.
          Over 40 original recipes.
        </p>

        <div className="meals__slider__select">
          <p>Main dish</p>
          <p>Soup</p>
          <p>Salad</p>
          <p>Smoothie</p>
          <p>Set Menu</p>
        </div>

        <div className="meals__slider__wrapper">
          <Meal />
          <Meal />
          <Meal />
        </div>
      </div>

      <div className="showcase" data-animated="true">
        <div className="showcase__inner" ref={showcaseInner}>
          <img src="./images/foods/food-1.jpg" />
          <img src="./images/foods/food-2.jpg" />
          <img src="./images/foods/food-3.jpg" />
          <img src="./images/foods/food-4.jpg" />
          <img src="./images/foods/food-5.jpg" />
          <img src="./images/foods/food-6.jpg" />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
