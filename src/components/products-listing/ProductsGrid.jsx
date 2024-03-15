import { useLocation } from "react-router-dom";
import "./ProductsGrid.css";

import MealData from "../../Data/MealData";

const ProductGrid = () => {
  const location = useLocation();

  return (
    <div className="products-grid">
      {location.pathname === "/products"
        ? MealData.meals.map((meal) => {
            return (
              <div className="products-grid__product" key={meal.id}>
                <img src={meal.url} alt={meal.title} loading="lazy" />
                <p>{meal.title}</p>
              </div>
            );
          })
        : location.pathname === "/products/soups"
        ? MealData.soups.map((soup) => {
            return (
              <div className="products-grid__product" key={soup.id}>
                <img src={soup.url} alt={soup.title} loading="lazy" />
                <p>{soup.title}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ProductGrid;
