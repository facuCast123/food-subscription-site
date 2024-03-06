import "./Meal.css";

const Meal = () => {
  return (
    <div className="meal">
      <img src="./images/main-dish-1.jpg" alt="main dish" />

      <div className="meal__info">
        <h2 className="meal__title">Spicy chicken tomato salad</h2>
        <p>
          Delicious minced chicken marinated in spicy sauce and served with
          tomato salad.
        </p>
      </div>

      <div className="meal__nutrition">
        <div className="meal__nutrition__value">
          <h3>Calories</h3>
          <p>
            <span className="">205</span> Kcal
          </p>
        </div>

        <div className="meal__nutrition__value middle">
          <h3>Protein</h3>
          <p>
            <span>26.1</span> g
          </p>
        </div>

        <div className="meal__nutrition__value">
          <h3>Vegetables</h3>
          <p>
            <span>4</span> kinds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meal;
