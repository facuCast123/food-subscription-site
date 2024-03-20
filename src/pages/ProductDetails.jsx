import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MealData from "../Data/MealData";

const ProductDetails = () => {
  const params = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    function getMealById(mealType, id) {
      let chosenArray = [];

      switch (mealType) {
        case "meals":
          chosenArray = MealData.meals;
          break;
        case "soups":
          chosenArray = MealData.soups;
          break;
        case "salads":
          chosenArray = MealData.salads;
          break;
        case "smoothies":
          chosenArray = MealData.smoothies;
          break;
        default:
          return null;
      }

      const selectedMeal = chosenArray.find((meal) => meal.id == id);

      return selectedMeal;
    }

    const meal = getMealById(params.type, params.id);
    setMeal(meal);
  }, []);

  return (
    <div className="product-details">
      <h1>{meal.title}</h1>

      <div className="product-details__content">
        <img
          className="product-details__image"
          src={meal.url}
          alt={meal.title}
        />

        <p className="product-details__text">
          Sweet and spicy bulgogi beef filled with tender lean beef and hearty
          vegetables. Lean beef, which is low in fat and healthy, is combined
          with vegetables such as broccoli and green peppers, and is seasoned
          with gochujang, a traditional Korean seasoning, to create a sweet and
          spicy flavor with a rich richness and flavor. You can also enjoy it
          wrapped in lettuce leaves.
        </p>

        <p className="product-details__text">
          <span>INGREDIENTS:</span> <br /> Beef tenderloin (American), broccoli
          (Ecuador), green pepper mix (China), onion slices, oyster sauce,
          sesame oil, grated garlic, chives, mirin, gochujang, cooking wine,
          starch, soy sauce, white sesame seeds , gelatin, chicken stock soup
          base, grated ginger/seasoning (amino acids), thickener (modified
          starch), coloring (caramel pigment), flavoring, (some ingredients
          include beef, wheat, soybeans, sesame, chicken, gelatin) including.
        </p>

        <p className="product-details__text">
          <span>NUTRITIONAL INFORMATION (per 211g serving):</span> <br /> Energy
          230kcal, protein 14.9g, fat 11.8g, carbohydrate 14.7g (sugar 11.4g,
          dietary fiber 3.3g), salt equivalent 1.7g, vitamin E 2.6mg, vitamin K
          117μg, vitamin C 70mg
        </p>
      </div>

      <div className="recommended">
        <h2 className="recommended__title">Recommended</h2>
        <div className="recommended__grid">
          {MealData.smoothies.map((smoothie) => (
            <Link
              className="products-grid__link"
              to={`/details/smoothies/${smoothie.id}`}
              // Known bug: when linking to smoothie, image doesn't change unless page is refreshed.
              // Don't know how to fix yet ¯\_(ツ)_/¯
            >
              <div className="recommended__card" key={smoothie.id}>
                <img
                  className="recommended__card__image"
                  src={smoothie.url}
                  alt={smoothie.title}
                />
                <h3 className="recommended__card__title">{smoothie.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
