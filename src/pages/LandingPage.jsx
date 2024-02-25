const LandingPage = () => {
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
          You can mix and as you like depending on the occasion and mood. Over
          40 original recipes.
        </p>
      </div>
    </main>
  );
};

export default LandingPage;
