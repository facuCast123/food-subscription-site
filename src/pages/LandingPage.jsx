import { useEffect, useRef } from "react";

import Feature from "../components/landing-page/Feature";
import Meal from "../components/landing-page/Meal";

import data from "../FeatureData";

const LandingPage = () => {
  const foodImages1 = [
    "./images/foods/food-1.jpg",
    "./images/foods/food-2.jpg",
    "./images/foods/food-3.jpg",
    "./images/foods/food-4.jpg",
    "./images/foods/food-5.jpg",
    "./images/foods/food-6.jpg",
  ];

  const foodImages2 = [
    "./images/foods/food-7.jpg",
    "./images/foods/food-8.jpg",
    "./images/foods/food-9.jpg",
    "./images/foods/food-10.jpg",
    "./images/foods/food-11.jpg",
    "./images/foods/food-12.jpg",
  ];

  const featureScroll = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (featureScroll.current) {
        if (Math.abs(e.deltaY) > 0) {
          e.preventDefault();
          featureScroll.current.scrollLeft += e.deltaY;
          console.log("scrolling");
        }
      }
    };

    featureScroll.current.addEventListener("wheel", handleScroll, {
      passive: false,
    });
  }, []);

  const featureMap = data.map((item) => {
    return <Feature key={item.id} item={item} />;
  });

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
        <h2>Healthy & Tasty</h2>
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

      <section className="showcase__container">
        <div className="showcase adjust" data-animated="true">
          <div className="showcase__inner">
            {foodImages1.map((i) => {
              return <img src={i} key={i} />;
            })}
            {foodImages1.map((i) => {
              return <img src={i} key={i} aria-hidden="true" />;
            })}
          </div>
        </div>

        <div className="showcase" data-animated="true" data-direction="right">
          <div className="showcase__inner">
            {foodImages2.map((i) => {
              return <img src={i} key={i} />;
            })}
            {foodImages2.map((i) => {
              return <img src={i} key={i} aria-hidden="true" />;
            })}
          </div>
        </div>

        <div className="showcase" data-animated="true">
          <div className="showcase__inner">
            {foodImages1.map((i) => {
              return <img src={i} key={i} />;
            })}
            {foodImages1.map((i) => {
              return <img src={i} key={i} aria-hidden="true" />;
            })}
          </div>
        </div>
      </section>

      <section className="features">
        <h3>Features</h3>

        <div className="feature__wrapper snaps-inline" ref={featureScroll}>
          {featureMap}
        </div>
      </section>

      <section className="instructions">
        <div className="instructions__content">
          <h4>How to use</h4>

          <div className="instructions__step">
            <span>01.</span>
            <p className="instructions__heading">Create your box</p>
            <p className="instructions__text">
              Choose your products and order your own box!
            </p>
          </div>

          <div className="instructions__step">
            <span>02.</span>
            <p className="instructions__heading">Deliver to Home</p>
            <p className="instructions__text">
              Deliver individual flash-frozen ingredients to your home
            </p>
          </div>

          <div className="instructions__step">
            <span>01.</span>
            <p className="instructions__heading">Make in One-Step</p>
            <p className="instructions__text">
              Put it on your favorite plate and microwave it!
              <br /> When heating in the microwave, be sure to use a
              heat-resistant container.
            </p>
          </div>
        </div>

        <img
          className="instructions__image"
          src="./images/instruction-image.jpg"
          alt="A plate of waffles"
        />
      </section>
    </main>
  );
};

export default LandingPage;
