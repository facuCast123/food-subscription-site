import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

import Feature from "../components/landing-page/Feature";
import BoxLayout from "../components/landing-page/BoxLayout";

import MealData from "../Data/MealData";
import FeatureData from "../Data/FeatureData";
import FAQData from "../Data/FAQData";
import NewsData from "../Data/NewsData";

const LandingPage = () => {
  const [mealSlider, setMealSlider] = useState(0);
  const [translate, setTranslate] = useState(0);

  // Meal component mapping

  const mealMap = MealData.meals.map((meal) => {
    return (
      <div
        key={meal.id}
        className="meal"
        style={{ transform: `translateX(${mealSlider}px)` }}
      >
        <img className="meal__image" src={meal.url} alt={meal.title} />

        <div className="meal__info">
          <h2 className="meal__title">{meal.title}</h2>
          <p className="meal__description">{meal.description}</p>
        </div>

        <div className="meal__nutrition">
          <div className="meal__nutrition__value">
            <h3>Calories</h3>
            <p>
              <span className="">{meal.calories}</span> Kcal
            </p>
          </div>

          <div className="meal__nutrition__value middle">
            <h3>Protein</h3>
            <p>
              <span>{meal.protein}</span> g
            </p>
          </div>

          <div className="meal__nutrition__value">
            <h3>Vegetables</h3>
            <p>
              <span>{meal.vegetables}</span> kinds
            </p>
          </div>
        </div>
      </div>
    );
  });

  const mealSlideLeft = () => {
    if (mealSlider === 0) {
      setMealSlider(0);
    } else {
      setMealSlider((prev) => prev + 300);
    }
  };

  const mealSlideRight = () => {
    if (mealSlider === mealMap.length * -200) {
      setMealSlider((prev) => prev);
    } else {
      setMealSlider((prev) => prev - 300);
    }
    console.log(mealSlider);
  };

  // Feature slider scroll functions

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

  const featureMap = FeatureData.map((item) => {
    return <Feature key={item.id} item={item} />;
  });

  // News slider translate functions

  const slideLeft = () => {
    if (translate === 0) {
      setTranslate(0);
    } else {
      setTranslate((prev) => prev + 300);
    }
  };

  const slideRight = () => {
    if (translate === -1800) {
      setTranslate((prev) => prev);
    } else {
      setTranslate((prev) => prev - 300);
    }
  };

  // Showcase data

  const foodImages1 = [
    "/src/images/foods/food-1.jpg",
    "/src/images/foods/food-2.jpg",
    "/src/images/foods/food-3.jpg",
    "/src/images/foods/food-4.jpg",
    "/src/images/foods/food-5.jpg",
    "/src/images/foods/food-6.jpg",
  ];

  const foodImages2 = [
    "/src/images/foods/food-7.jpg",
    "/src/images/foods/food-8.jpg",
    "/src/images/foods/food-9.jpg",
    "/src/images/foods/food-10.jpg",
    "/src/images/foods/food-11.jpg",
    "/src/images/foods/food-12.jpg",
  ];

  return (
    <main>
      <div className="main__container">
        <h1>Tasteful</h1>
      </div>

      <div className="vegetable--divider"></div>

      <section className="info-box">
        <div className="info-box__heading">
          <span>Tasteful meal!</span>
          <p>
            A healthy home-cooked meal with plenty of vegetables that comes
            straight from the ingredients.
          </p>
        </div>

        <div className="info-box__image--wrapper">
          <img src="/src/images/food-plate.png" alt="A plate of food" />
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
      </section>

      <section className="meals__slider">
        <h2 className="meals__slider__title">Healthy & Tasty</h2>
        <p className="meals__slider__text">
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

        <button
          className={`meals__slider__button left ${
            mealSlider === 0 ? "inactive" : null
          }`}
          onClick={mealSlideLeft}
        >
          <BsArrowLeftCircle className="button-prev" />
        </button>

        <button
          className={`meals__slider__button right ${
            mealSlider === 0 ? "inactive" : null
          }`}
          onClick={mealSlideRight}
        >
          <BsArrowRightCircle className="button-next" />
        </button>

        <div className="meals__slider__wrapper">{mealMap}</div>

        <p className="meals__slider__link">
          <a href="#">All Products</a> <IoIosArrowRoundForward />
        </p>
      </section>

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

        <div className="feature__wrapper" ref={featureScroll}>
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
          src="/src/images/instruction-image.jpg"
          alt="A plate of waffles"
        />
      </section>

      <section className="plans">
        <div className="plan__heading">
          <h1>Select your plan</h1>
          <p>
            It arrives regularly <br />
            It&apos;s easy to keep up with.
          </p>
        </div>

        <div className="plan__content">
          <div className="box__wrapper">
            <BoxLayout />
          </div>

          <div className="plan__faq">
            <h4 className="plan__faq__title">FAQ</h4>

            <div className="plan__faq__grid-container">
              {FAQData.map((element) => {
                return (
                  <div className="_faq__qna" key={element.id}>
                    <div className="_faq__qna__question">
                      <span>&#81;</span>
                      <p>{element.question}</p>
                    </div>
                    <p className="_faq__qna__answer">{element.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="news__heading">
          <h1>NEWS</h1>

          <div className="news__buttons">
            <button
              className={`btn-prev ${translate === 0 ? "inactive" : null}`}
              onClick={slideLeft}
            >
              <BsArrowLeftCircle />
            </button>
            <button
              className={`btn-prev ${translate === -1800 ? "inactive" : null}`}
              onClick={slideRight}
            >
              <BsArrowRightCircle />
            </button>
          </div>
        </div>

        <div className="news__container">
          <div className="news__slider">
            {NewsData.map((news) => {
              return (
                <div
                  className="news__element"
                  style={{ transform: `translateX(${translate}px)` }}
                >
                  <img
                    className="news__element__image"
                    src={news.url}
                    alt="News image"
                  />
                  <span className="news__element__date">{news.date}</span>
                  <p className="news__element__title">{news.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="news__link">
          <a href="#">Read More</a> <IoIosArrowRoundForward />
        </p>
      </section>

      <div className="get-started">
        <h1>Love yourself, always.</h1>
        <p>A life where you can continue to love yourself.</p>
        <Link className="get-started__button" to="/meal-plan">
          Start today
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
