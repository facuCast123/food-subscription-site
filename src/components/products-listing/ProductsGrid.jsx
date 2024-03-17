import { Link, useLocation } from "react-router-dom";
import "./ProductsGrid.css";

import MealData from "../../Data/MealData";
import ImageComponent from "./ImageComponent";

const ProductGrid = () => {
  const location = useLocation();

  // Main Dishes (.meals.map)
  const mainDishes = MealData.meals.map((meal) => {
    return (
      <Link
        className="products-grid__link"
        to={`/details/meals/${meal.id}`}
        key={meal.id}
      >
        <div className="products-grid__product" key={meal.id}>
          <ImageComponent src={meal.url} />
          <p>{meal.title}</p>
        </div>
      </Link>
    );
  });

  // Soups (.soups.map)
  const soups = MealData.soups.map((soup) => {
    return (
      <Link
        className="products-grid__link"
        to={`/details/soups/${soup.id}`}
        key={soup.id}
      >
        <div className="products-grid__product" key={soup.id}>
          <ImageComponent src={soup.url} />
          <p>{soup.title}</p>
        </div>
      </Link>
    );
  });

  // Salads (.salads.map)
  const salads = MealData.salads.map((salad) => {
    return (
      <Link
        className="products-grid__link"
        to={`/details/salads/${salad.id}`}
        key={salad.id}
      >
        <div className="products-grid__product" key={salad.id}>
          <ImageComponent src={salad.url} />
          <p>{salad.title}</p>
        </div>
      </Link>
    );
  });

  // Smoothies (.smoothies.map)
  const smoothies = MealData.smoothies.map((smoothie) => {
    return (
      <Link
        className="products-grid__link"
        to={`/details/smoothies/${smoothie.id}`}
        key={smoothie.id}
      >
        <div className="products-grid__product" key={smoothie.id}>
          <ImageComponent src={smoothie.url} />
          <p>{smoothie.title}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="products-grid">
      {location.pathname === "/products"
        ? mainDishes
        : location.pathname === "/products/soups"
        ? soups
        : location.pathname === "/products/salads"
        ? salads
        : location.pathname === "/products/smoothies"
        ? smoothies
        : null}
    </div>
  );
};

export default ProductGrid;
